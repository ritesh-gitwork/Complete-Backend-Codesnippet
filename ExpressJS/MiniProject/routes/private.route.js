import express from "express";

const router = express.Router();

// Dashboard

router.get("/dashboard", (req, res) => {
  res.status(200).send({
    message: `Welcome to the dashboard🏡`,
    // message: `Welcome to the dashboard🏡 ${req.user.name}`,
  });
});

export default router;
