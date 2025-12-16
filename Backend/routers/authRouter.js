const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.post("/forgot-password", authController.postForgotPassword);
authRouter.post("/reset-password", authController.postResetPassword);

module.exports = authRouter;
