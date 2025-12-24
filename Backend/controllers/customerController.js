const Product = require("../models/Product");
const User = require("../models/User");
const Order = require("../models/Oder");

exports.getData = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId).populate("orders");
  const products = await Product.find();
  res.status(200).json({ products, cart: user.cart, orders: user.orders });
};

exports.addToCart = async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.userId;
  const user = await User.findById(userId);
  user.cart.push(productId);
  await user.save();
  res.status(200).json(user.cart);
};

exports.removeFromCart = async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.userId;
  const user = await User.findById(userId);
  user.cart = user.cart.filter((id) => id.toString() !== productId);
  await user.save();
  res.status(200).json(user.cart);
};

exports.createOrder = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId).populate("cart");
  const products = user.cart;
  let totalAmount = 0;
  for (let product of products) {
    totalAmount += product.price;
  }
  const order = new Order({
    products: user.cart,
    totalAmount,
    customer: userId,
  });
  await order.save();
  user.orders.push(order._id);
  user.cart = [];
  await user.save();
  res.status(200).json(order);
};

exports.getSearchItems = async (req, res, next) => {
  try {
    const search = req.query.q;
    if (!search || search.trim() === "") {
      return res.status(400).json({
        seccess: false,
        message: "Search query is required",
      });
    }

    // Search across multiple fields
    const products = await Product.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log("Search Error", error);
    return res.status(500).json({
      success: false,
      message: "Server error while searching products",
    });
  }
};
