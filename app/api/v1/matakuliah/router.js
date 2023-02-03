const express = require("express");
const { index, create, update, destroy } = require("./controller");
const router = express.Router();

router.get("/matkul", index);
router.post("/matkul", create);
router.put("/matkul/:id", update);
router.delete("/matkul/:id", destroy);

module.exports = router;
