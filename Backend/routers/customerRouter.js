const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customerController");
customerRouter.get("/data", customerController.getData);
customerRouter.post("/cart/:id", customerController.addToCart);
customerRouter.delete("/cart/:id", customerController.removeFromCart);
customerRouter.post("/order", customerController.createOrder);
customerRouter.get("/search", customerController.getSearchItems);
// customerRouter.get("/buyNow", customerController.getBuyNow);

module.exports = customerRouter;
