// const Stripe = require("stripe");

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// exports.createCheckoutSession = async (req, res, next) => {
//   try {
//     const { products } = req.body;

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: products.map((item) => ({
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: Math.round(item.price * 100), // dollars → cents
//         },
//         quantity: item.quantity,
//       })),
//       success_url: `${process.env.CLIENT_URL}/success`,
//       cancel_url: `${process.env.CLIENT_URL}/cancel`,
//     });

//     res.status(200).json({ url: session.url });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };


const Stripe = require("stripe");
const Product = require("../models/Product");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  try {
    const { products } = req.body;
    // products = [{ productId, quantity }]

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "Products are required" });
    }

    const lineItems = [];

    for (const item of products) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          message: `Product not found: ${item.productId}`,
        });
      }

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100), // DB price
        },
        quantity: item.quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ message: error.message });
  }
};
