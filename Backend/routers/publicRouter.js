const express = require("express");
const publicRouter = express.Router();
const publicController = require("../controllers/publicController");

publicRouter.get("/products", publicController.getAllProducts);

module.exports = publicRouter;
