import express from "express";

import userRouter from "./routes/user.routes.js";

const app = express();

const PORT = 3000;

app.use("/api/v1", userRouter);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: " helllooo" });
});

app.listen(PORT || 3000, () => {
  console.log(`server is running on ${PORT}`);
});
