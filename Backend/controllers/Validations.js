const { check } = require("express-validator");
// First Name Validator.
const firstNameValidator = check("firstName")
  .notEmpty()
  .withMessage("First name is mandatory")
  .trim()
  .isLength({ min: 2 })
  .withMessage("First name should be minimum 4 chars")
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage("First name should be only contain english alphabets");

// last Name Validator.
const lastNameValidator = check("lastName")
  .trim()
  .matches(/^[a-zA-Z\s]*$/)
  .withMessage("last name should be only contain english alphabets");

// Email Validator.
const emailValidator = check("email")
  .isEmail()
  .withMessage("Please Enter a vaild email")
  .normalizeEmail();

// Password Validator.
const passwordValidator = check("password")
  .trim()
  .isLength({ min: 8 })
  .withMessage("Password should be minimum 8 chars")
  .matches(/[a-z]*/)
  .withMessage("Password should be have atleast one small alphabet")
  .matches(/[A-Z]*/)
  .withMessage("Password should be have atleast one capital alphabet")
  .matches(/[!@#$%^&*()\-_=+\[\]{};:'",.<>\/?\\|]/)
  .withMessage("Password must contain at least one special character");

const confirmPasswordValidator = check("confirmPassword")
  .trim()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Confirm Password does not match Password");
    }
    return true;
  });

// UserType Validator.
const userTypeValidator = check("userType")
  .trim()
  .notEmpty()
  .withMessage("User type must be required")
  .isIn(["seller", "customer"])
  .withMessage("User type is invaild");

module.exports = {
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator,
};  