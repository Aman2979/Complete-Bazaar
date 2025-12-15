const { validationResult } = require("express-validator");
const User = require("../models/User");
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
