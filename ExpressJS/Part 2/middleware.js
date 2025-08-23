import express from "express";

const app = express();

// 1. global middleware
function sayHiMiddleware(req, res, next) {
  console.log("Midlleware section");
  next();
}

// 2. specific route middleware
app.get("/user", sayHiMiddleware, (req, res) => {
  res.status(200).send("user section");
});

app.use(sayHiMiddleware);

//3. inbuilt middleware

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 1. global middleware✅
// 2. specific routes middleware✅
// 3. inbuilt middleware
