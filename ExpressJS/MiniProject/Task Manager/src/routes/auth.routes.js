import { Router } from "express";
import { login, logout } from "../controller/auth.controller.js";

const router = Router();

// login routes

router.post("/login", login);

// logout routes

router.get("/logout", logout);

export default router;
