const express = require("express");
const { index, create, findDetail, update, destroy } = require("./controller");
const router = express.Router();

router.get("/categories", index);
router.get("/categories/:id", findDetail);
router.put("/categories/:id", update);
router.post("/categories", create);
router.delete("/categories/:id", destroy);

module.exports = router;
