const express = require("express");
const shopKeeperController = require("./shopKeeperController");
const itemController = require("./itemController");

const router = express.Router();

router.route("/login").post(shopKeeperController.login);
router.route("/register").post(shopKeeperController.register);
router.route("/addItem").post(itemController.addItem);
router.route("/list").get(itemController.list);

module.exports = router;
