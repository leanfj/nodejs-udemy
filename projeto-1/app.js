const express = require("express");

const handlebars = require("express-handlebars");

const app = express();

const users = [];

app.engine("hbs", handlebars({ defaultLayout: "main-layout", extname: "hbs" }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add Users" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User", users, hasUsers: users.length > 0 });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.userName });
  res.redirect("/users");
});

app.listen(3000);
