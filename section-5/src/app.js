const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("Add Product route");
  res.send("<h1>Add Product route</h1>");
});

app.use("/", (req, res) => {
  console.log("In new middleware");

  res.send("<h1>Hellow from express</h1>");
});

app.listen(3000);
