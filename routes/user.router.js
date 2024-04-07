const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middlewares/user.middleware")

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/logout", auth, userCtrl.logout)

module.exports = router;