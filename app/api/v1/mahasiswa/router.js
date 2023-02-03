const express = require("express");
const { index, create, update, destroy } = require("./controller");
const router = express.Router();

router.get("/mahasiswa", index);
router.post("/mahasiswa", create);
router.put("/mahasiswa/:id", update);
router.delete("/mahasiswa/:id", destroy);

module.exports = router;
