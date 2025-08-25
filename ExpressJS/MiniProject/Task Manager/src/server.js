import express from "express";
import session from "express-session";

import authroute from "./routes/auth.routes.js";

const app = express();

app.use("/auth", authroute);

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to task manager api ");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
