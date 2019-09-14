const express = require("express");

const handlebars = require("express-handlebars");

const app = express();

const users = [];

app.set("hbs", handlebars());
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add Users" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User", users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.userName });
  res.redirect("/users");
});

app.listen(3000);
