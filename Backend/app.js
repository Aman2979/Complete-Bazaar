require("dotenv").config();

// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Local Modules
const sellerRouter = require("./routers/sellerRouter");
const errorController = require("./controllers/errorController");
const authRouter = require("./routers/authRouter");
const { isLoggedIn, isSeller, isCustomer } = require("./middleware/auth");
const customerRouter = require("./routers/customerRouter");
const publicRouter = require("./routers/publicRouter");
const paymentRouter = require("./routers/paymentRouter");

const app = express();

/* ===================== MIDDLEWARE ===================== */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===================== ROUTES ===================== */
app.get("/", (req, res) => {
  res.status(200).json({ status: "API is running" });
});

app.use("/api/auth", authRouter);
app.use("/api/seller", isLoggedIn, isSeller, sellerRouter);
app.use("/api/customer", isLoggedIn, isCustomer, customerRouter);
app.use("/api", publicRouter);
app.use("/api/payment", isLoggedIn, isCustomer, paymentRouter);

app.use(errorController.get404);

/* ===================== DATABASE ===================== */
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@aman0001.w1coczr.mongodb.net/${process.env.MONGO_DB_DATABASE}`;

const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
