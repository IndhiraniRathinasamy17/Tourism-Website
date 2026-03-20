// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

// exports.signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return res.json({ message: "User already exists" });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({
//     name,
//     email,
//     password: hashedPassword
//   });

//   await newUser.save();

//   res.json({ message: "Signup successful" });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.json({ message: "User not found" });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     return res.json({ message: "Invalid password" });
//   }

//   res.json({ message: "Login successful", user });
// };
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");

// // ✅ FORGOT PASSWORD
// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.json({ message: "User not found" });
//     }

//     // Generate token
//     const token = crypto.randomBytes(32).toString("hex");

//     user.resetToken = token;
//     user.resetTokenExpire = Date.now() + 15 * 60 * 1000; // 15 min

//     await user.save();

//     const resetLink = `http://localhost:3000/reset-password/${token}`;

//     // Mail config
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS        // 🔴 replace (NOT normal password)
//       }
//     });

//     await transporter.sendMail({
//       to: email,
//       subject: "Password Reset",
//       html: `
//         <h3>Password Reset</h3>
//         <p>Click below link to reset your password:</p>
//         <a href="${resetLink}">${resetLink}</a>
//       `
//     });

//     res.json({ message: "Reset link sent to email" });

//   } catch (error) {
//     res.status(500).json({ message: "Error sending email" });
//   }
// };

// // ✅ RESET PASSWORD
// exports.resetPassword = async (req, res) => {
//   const { token } = req.params;
//   const { password } = req.body;

//   try {
//     const user = await User.findOne({
//       resetToken: token,
//       resetTokenExpire: { $gt: Date.now() }
//     });

//     if (!user) {
//       return res.json({ message: "Invalid or expired token" });
//     }

//     // Hash new password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     user.password = hashedPassword;
//     user.resetToken = undefined;
//     user.resetTokenExpire = undefined;

//     await user.save();

//     res.json({ message: "Password reset successful" });

//   } catch (error) {
//     res.status(500).json({ message: "Error resetting password" });
//   }
// };

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";

/* ============================= */
/* ✅ SIGNUP */
/* ============================= */
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  await newUser.save();

  res.json({ message: "Signup successful" });
};

/* ============================= */
/* ✅ LOGIN */
/* ============================= */
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({ message: "Invalid password" });
  }

  res.json({ message: "Login successful", user });
};

/* ============================= */
/* ✅ FORGOT PASSWORD */
/* ============================= */
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.resetTokenExpire = Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetLink = `https://vacation-vibes.netlify.app/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      to: email,
      subject: "Password Reset",
      html: `
        <h3>Password Reset</h3>
        <p>Click below link to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
      `
    });

    res.json({ message: "Reset link sent to email" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
};

/* ============================= */
/* ✅ RESET PASSWORD */
/* ============================= */
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;

    await user.save();

    res.json({ message: "Password reset successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error resetting password" });
  }
};