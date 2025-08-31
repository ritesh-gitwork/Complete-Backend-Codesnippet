import express from "express";
import user from "../models/user.models.js";

const router = express.Router();

//CRUD

//create

router.post("/users", async (req, res) => {
  try {
    const { name, age, weight } = req.body;
    const newUser = new user({ name, age, weight });

    await newUser.save();

    res.status(201).json({
      data: newUser,
      message: "succesfullly user created",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//read

router.get("/users", async (req, res) => {
  try {
    const users = await user.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//update

router.post("/userUpdate", (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//delete

export default router;
