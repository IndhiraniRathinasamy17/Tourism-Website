// const express = require("express");
// const router = express.Router();

// const { signup, login, forgotPassword, resetPassword } = require("../controllers/authController");

// // EXISTING
// router.post("/signup", signup);
// router.post("/login", login);

// // ✅ NEW ROUTES (ADDED)
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password/:token", resetPassword);

// module.exports = router;

import express from "express";

const router = express.Router();

import {
  signup,
  login,
  forgotPassword,
  resetPassword
} from "../controllers/authController.js";

// EXISTING
router.post("/signup", signup);
router.post("/login", login);

// NEW ROUTES
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;