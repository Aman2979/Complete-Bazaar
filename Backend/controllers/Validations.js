import { check } from "express-validator";

// First Name Validator.
export const firstNameValidator = check("firstName")
  .notEmpty()
  .withMessage("First name is mandatory")
  .trim()
  .isLength({ min: 2 })
  .withMessage("First name should be minimum 4 chars")
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage("First name should be only contain english latters");

// last Name Validator.
export const lastNameValidator = check("lastName")
  .trim()
  .matches(/^[a-zA-Z\s]*$/)
  .withMessage("last name should be only contain english latters");

// Email Validator.
export const emailValidator = check("email")
  .isEmail()
  .withMessage("Please Enter a vaild email")
  .normalizeEmail();

// Password Validator.
export const passwordValidator = check("password")
  .trim()
  .isLength({ min: 8 })
  .withMessage("Password should be minimum 8 chars")
  .matches(/[a-z]*/)
  .withMessage("Password should be have atleast one small alphabet")
  .matches(/[A-Z]*/)
  .withMessage("Password should be have atleast one capital alphabet")
  .matches(/[!@#$%^&*()\-_=+\[\]{};:'",.<>\/?\\|]/)
  .withMessage("Password must contain at least one special character");

// conform Password Validator.
export const confirmPasswordValidator = check("confirm_password")
  .trim()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Confirm Password does not match Password");
    }
    return true;
  });

// UserType Validator.
export const userTypeValidator = check("userType")
  .trim()
  .notEmpty()
  .withMessage("User type must be required")
  .isIn(["seller", "customer"])
  .withMessage("User type is invaild");
