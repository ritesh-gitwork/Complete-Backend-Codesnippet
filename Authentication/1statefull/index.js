import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).json({ message: "hellooo" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:PORT`);
});
