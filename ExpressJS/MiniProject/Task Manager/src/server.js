import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

import authroute from "./routes/auth.routes.js";
import taskroute from "./routes/task.routes.js";

const app = express();

const PORT = 8080;

// Global middleware
app.use(express.json());

app.use(
  session({
    secret: "task-manager-secre key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(cookieParser());

// Routes

app.get("/", (req, res) => {
  res.send("Welcome to task manager api ");
});

app.use("/auth", authroute);
app.use("/task", taskroute);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
