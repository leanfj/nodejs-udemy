const express = require("express");

// const bodyParser = require("body-parser");

const app = express();

const users = [];

app.set("view engine", "pug");

app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add Users" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User" });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.userName });
  res.redirect("/users");
});

app.listen(3000);
