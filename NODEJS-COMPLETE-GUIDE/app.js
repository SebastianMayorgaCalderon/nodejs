const express = require("express");

const app = express();

const port = 3000;

app.use("/", (req, res, next) => {
  console.log("in the middleware2");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in the response");
  res.send("<h1>the add product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in the response");
  res.send("<h1>hello world</h1>");
});

console.log(port);

app.listen(port);
