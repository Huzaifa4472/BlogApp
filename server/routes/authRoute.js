const express = require("express");
const router = express();

const controller = require("../controllers/authController");

router.route("/").get(controller.home);
router.route("/login").post(controller.login);
router.route("/register").post(controller.register);

module.exports = router;
