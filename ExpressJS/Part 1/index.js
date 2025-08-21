import express, { json } from "express";
import data from "./data/data.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// 1. GET Method
app.get("/", (req, res) => {
  res.status(200).send("hellooooo");
});

// Industry Standard: get all users OR filter by name
app.get("/api/users", (req, res) => {
  const { name } = req.query; // query parameter

  if (name) {
    const users = data.filter(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    return res.status(200).json(users); // send filtered result & stop here
  }

  res.status(200).json(data); // if no query param → send all data
});

// Router params
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params; // params hamesha string hota hai

  const userId = data.find((u) => u.id === parseInt(id));

  if (!userId) {
    return res.status(404).send("usen not found");
  }
  res.status(200).send(userId);
});

// 2.POST a request

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(404).send("name and email required");
  }

  const existingUser = data.find((u) => u.email === email);

  if (existingUser) {
    return res.status(404).send("user exist"); //  return is important to exit the code
  }

  const newUser = {
    id: data.length + 1,
    name,
    email,
  };

  data.push(newUser);

  res.status(201).send({
    message: "user created",
    data: newUser,
  });
});

// PUT Method
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  const userIndex = data.findIndex((u) => u.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  data[userIndex] = {
    id: parseInt(id),
    name,
    age,
    email,
  };

  res.status(200).json({
    message: "user replaced Put",
    data: data[userIndex],
  });
});

// PATCH Method

app.patch("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const findIndex = data.findIndex((u) => u.id === parseInt(id));

  if (findIndex === -1) {
    return res.status(404).json({ message: "user not found PATCH" });
  }

  data[findIndex];
});

// DELETE Method
// Assignment: Implement DELETE Request
// filter , find and spread operator , middleware

//
//
app.listen(PORT, () => {
  console.log(`✅ App is listening on http://localhost:${PORT}`);
});
