const express = require("express");
const router = express.Router();
const livreCtrl = require("../controllers/livre.controller");
const auth = require("../middlewares/user.middleware");

router.get("/", livreCtrl.getAllLivres);
router.get("/:id", livreCtrl.getOneLivre);
router.put("/:id", auth, livreCtrl.updateLivre);

module.exports = router;