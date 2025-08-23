import express from "express";

const router = express.Router();

// Generate Token

router.get("/generateToken", (req, res) => {
  const token = "Token";

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
