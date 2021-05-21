const express = require("express");
const app = express();
const userRouter = require("./userRoutes");
const shopKeeperRouter = require("./shopKeeperRoutes");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());

app.use(express.static("./html and css"));

app.get("/", (req, res) => {
  res.status(200).render("home");
});
app.get("/explore", (req, res) => {
  res.status(200).render("getStart");
});
app.get("/Tiffina/user/login", (req, res) => {
  res.status(200).render("login_user");
});
app.get("/Tiffina/vendor/login", (req, res) => {
  res.status(200).render("login_vendor");
});
app.get("/Tiffina/user/register", (req, res) => {
  res.status(200).render("register_user");
});
app.get("/Tiffina/vendor/register", (req, res) => {
  res.status(200).render("register_vendor");
});
app.get("/Tiffina/vendor/addItem", (req, res) => {
  res.status(200).render("addProduct");
});

app.use("/user", userRouter);
app.use("/vendor", shopKeeperRouter);

module.exports = app;
