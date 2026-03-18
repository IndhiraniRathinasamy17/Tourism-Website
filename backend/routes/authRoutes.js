const express = require("express");
const router = express.Router();

const { signup, login, forgotPassword, resetPassword } = require("../controllers/authController");

// EXISTING
router.post("/signup", signup);
router.post("/login", login);

// ✅ NEW ROUTES (ADDED)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;