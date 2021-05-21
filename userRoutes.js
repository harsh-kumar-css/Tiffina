const express = require("express");
const userController = require("./userController");

const router = express.Router();

router.route("/login").post(userController.login);
router.route("/register").post(userController.register);

module.exports = router;
