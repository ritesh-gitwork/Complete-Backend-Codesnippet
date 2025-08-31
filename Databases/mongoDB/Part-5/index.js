import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";

const app = express();

const PORT = 8080;

app.use(express.json());

connectDB();

app.use("/api/", userRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hellooo" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
