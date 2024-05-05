const express = require("express");
const { userUpdate, deleteUser } = require("../controllers/userController");
const router = express();

router.route("/:id").put(userUpdate);
router.route("/:id").delete(deleteUser);

module.exports = router;
