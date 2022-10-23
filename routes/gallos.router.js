const express = require("express")
const router = express.Router()
const gallosController = require("../controllers/gallos.controller")

router.post("/", gallosController.create)
router.get("/", gallosController.find)
router.get("/:id", gallosController.findOne)
router.put("/:id", gallosController.update)
router.delete("/:id", gallosController.remove)

module.exports = router