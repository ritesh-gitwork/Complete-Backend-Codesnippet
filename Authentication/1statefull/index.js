import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).json({ message: "hellooo" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
