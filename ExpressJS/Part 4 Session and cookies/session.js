import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "your-secret-key-ritesh", // Used to sign the session ID cookie
    resave: false, // Avoid resaving session if no changes were made
    saveUninitialized: true, // Save a new session even if it’s unmodified
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }, // Set secure: true for HTTPS-only cookies
  })
);

app.use(cookieParser("secretRitesh"));

const PORT = 8080;

//Set Session Data

app.get("/login", (req, res) => {
  req.session.user = {
    name: "John",
    email: "jhon@example.com",
    age: 30,
  };
  res.send(` ${req.session.user.name} is logged in`);
});

// Retrive Session Data

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user.name}`);
  } else {
    res.send("Please log in first");
  }
});

// clear  Session Data

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
