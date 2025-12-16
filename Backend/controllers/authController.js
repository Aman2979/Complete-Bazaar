const { validationResult } = require("express-validator");
const User = require("../models/User");

const { Resend } = require("resend");

const {
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator,
} = require("./Validations");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.signup = [
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator,

  async (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ errorMessages: errors.array().map((err) => err.msg) });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      });
      await user.save();
      res.status(201).json({ message: "User Signup successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
];

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ errorMessages: ["Invalid Email."] });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ errorMessages: ["Invalid Password."] });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        userType: user.userType,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10h" }
    );

    res.status(200).json({ token, userType: user.userType });
  } catch (error) {
    res.status(500).json({ errorMessages: [error.message] });
  }
};

exports.postForgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        errorMessages: ["User not found"],
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);

    user.otp = hashedOtp;
    user.otpExpiry = Date.now() + 60 * 60 * 1000; // 5 minutes
    await user.save();
    console.log("Generated OTP:", otp);
    console.log("Sending email to:", email);

    //RESEND EMAIL
    await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`, // works without domain setup
      to: email,
      subject: "OTP for Password Reset",
      html: `
        <h2>Password Reset OTP from complete Bazzar</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 5 minutes.</p>
      `,
    });

    res.status(200).json({
      message: "OTP sent to registered email",
    });
  } catch (err) {
    res.status(500).json({ errorMessages: [err.message] });
  }
};

exports.postResetPassword = [
  passwordValidator,
  confirmPasswordValidator,

  async (req, res) => {
    const { email, otp, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errorMessages: errors.array().map((err) => err.msg),
      });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          errorMessages: ["User not found"],
        });
      }

      if (!user.otp || Date.now() > user.otpExpiry) {
        return res.status(400).json({
          errorMessages: ["OTP expired"],
        });
      }

      const isOtpValid = await bcrypt.compare(otp, user.otp);
      if (!isOtpValid) {
        return res.status(400).json({
          errorMessages: ["Invalid OTP"],
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      user.password = hashedPassword;
      user.otp = null;
      user.otpExpiry = null;

      await user.save();

      res.status(200).json({
        message: "Password reset successful",
      });
    } catch (err) {
      res.status(500).json({ errorMessages: [err.message] });
    }
  },
];
