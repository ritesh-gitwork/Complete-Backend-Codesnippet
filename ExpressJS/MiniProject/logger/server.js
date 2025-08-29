import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

import logMiddleware from "./middleware/log.middleware.js";
import publicRoutes from "./routes/public.route.js";
import privateRoutes from "./routes/private.route.js";

const app = express();

const PORT = 8080;

// Handles ES Module __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}

app.use(logMiddleware);

// Inbuilt middleware
app.use(express.json());

// middleware to routes

app.use("/public", publicRoutes);
app.use("/private", privateRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
