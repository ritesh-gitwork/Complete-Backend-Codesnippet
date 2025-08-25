import { Router } from "express";

const router = Router();

// login routes

router.post("/login", (req, res) => {
  res.send("login route");
});

// logout routes

router.get("/logout", (req, res) => {
  res.send("logout routes");
});

export default router;
