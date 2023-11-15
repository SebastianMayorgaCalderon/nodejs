const express = require("express");

const app = express();

const port = 3000;

// app.use("/users", (req, res, next) => {
//   console.log("in the users middle ware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("in the base middle ware");
//   next();
// });

app.use("/users", (req, res) => {
  res.send("<h1>users</h1>");
});

app.use("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

console.log(port);

app.listen(port);
