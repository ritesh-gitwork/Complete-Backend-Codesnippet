import { Router } from "express";
import { middleware } from "../middleware/auth.middleware.js";
import {
  getallTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/task.controller.js";

const router = Router();

router.get("/", middleware, getallTask);
router.post("/", middleware, createTask);
router.put("/:id", middleware, updateTask);
router.delete("/:id", middleware, deleteTask);

export default router;
