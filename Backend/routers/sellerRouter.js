const multer = require("multer");
const express = require("express");
const sellerRouter = express.Router();
const sellerController = require("../controllers/sellerController");
const { isLoggedIn, isSeller } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Math.random().toString(36).substring(2, 8) + "-" + file.originalname
    );
  },
});

sellerRouter.post(
  "/products",
  isLoggedIn,
  isSeller,
  multer({ storage: storage }).single("image"),
  sellerController.createProduct
);

module.exports = sellerRouter;
