const express = require("express");

const app = express();

app.set("view engine", "pug");

app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add Users" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User" });
});

app.post("/add-user", (req, res, next) => {
  res.redirect("/users");
});

app.listen(3000);
