import express from "express";
import publicRoutes from "./routes/public.route.js";
import privateRoutes from "./routes/private.route.js";

const app = express();

const PORT = 8080;

// Inbuilt middleware
app.use(express.json());

// middleware to routes

app.use("/public", publicRoutes);
app.use("/private", privateRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
