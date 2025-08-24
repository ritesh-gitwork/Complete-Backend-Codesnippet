import express from "express";
import { generateToken } from "../utils/token-utils.js";

const router = express.Router();

// Generate Token

router.get("/generateToken", (req, res) => {
  const token = generateToken();

  res.status(200).json({
    message: "Token created Successfully save it",
    token: token,
  });
});

// Home Route
router.get("/", (req, res) => {
  res.status(200).send("Welcome to Home page");
});

export default router;
