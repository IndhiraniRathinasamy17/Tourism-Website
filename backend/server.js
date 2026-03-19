// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Razorpay from "razorpay";
// import crypto from "crypto";

// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// /* ✅ DB + Auth */
// connectDB();
// app.use("/api/auth", authRoutes);

// /* ============================= */
// /* 💳 RAZORPAY CONFIG */
// /* ============================= */

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// /* ============================= */
// /* 💳 CREATE ORDER */
// /* ============================= */

// app.post("/create-order", async (req, res) => {
//   try {
//     const { amount } = req.body;

//     const options = {
//       amount: amount * 100, // convert ₹ to paise
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     res.json(order);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error creating order" });
//   }
// });

// /* ============================= */
// /* ✅ VERIFY PAYMENT */
// /* ============================= */

// app.post("/verify-payment", (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     } = req.body;

//     const generated_signature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(razorpay_order_id + "|" + razorpay_payment_id)
//       .digest("hex");

//     if (generated_signature === razorpay_signature) {
//       return res.json({ status: "success" });
//     } else {
//       return res.status(400).json({ status: "failure" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Verification failed" });
//   }
// });

// /* ============================= */
// /* 🚀 SERVER */
// /* ============================= */

// app.listen(5000, () =>
//   console.log("Server running on http://localhost:5000")
// );


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ============================= */
/* ✅ DB + AUTH ROUTES */
/* ============================= */

connectDB();
app.use("/api/auth", authRoutes);

/* ============================= */
/* 💳 RAZORPAY CONFIG (OPTIONAL) */
/* ============================= */

let razorpay;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });
}

/* ============================= */
/* 💳 CREATE ORDER */
/* ============================= */

app.post("/create-order", async (req, res) => {
  if (!razorpay) {
    return res.status(500).json({
      error: "Razorpay not configured. Add keys to enable payments.",
    });
  }

  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // ₹ to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating order" });
  }
});

/* ============================= */
/* ✅ VERIFY PAYMENT */
/* ============================= */

app.post("/verify-payment", (req, res) => {
  if (!process.env.RAZORPAY_SECRET) {
    return res.status(500).json({
      error: "Razorpay not configured. Add keys to verify payment.",
    });
  }

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      return res.json({ status: "success" });
    } else {
      return res.status(400).json({ status: "failure" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Verification failed" });
  }
});

/* ============================= */
/* 🚀 SERVER (FIXED FOR RENDER) */
/* ============================= */

const PORT = process.env.PORT || 5000;

// 🔥 IMPORTANT: "0.0.0.0" for Render
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});