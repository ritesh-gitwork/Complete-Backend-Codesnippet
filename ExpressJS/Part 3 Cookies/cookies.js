import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser("secret"));

const PORT = 8080;

// create cookies without middleware

app.get("/createCookie", (req, res) => {
  res.cookie("name", "ritesh", {
    // maxAge: 1000 * 60, // 1 min
    // httpOnly: true, // not accessible by JS
    // secure: true, // only over HTTPS
    signed: true,
  });
  res.status(200).json({ message: "hellooo from cookies" });
});

// Reading Cookies (Without Middleware)

app.get("/readCookie", (req, res) => {
  // const readCookie = req.headers.cookie;
  // res.send(`rawa cookies ${readCookie}`);
  // console.log(readCookie);

  // using Middleware
  console.log("Cookies: ", req.cookies);
  console.log("signed cookkies", req.signedCookies);

  if (req.cookies.name && req.cookies.name === "ritesh") {
    return res.status(200).send("read cookies coorect");
  }

  return res.status(403).send("not valid cookie");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
