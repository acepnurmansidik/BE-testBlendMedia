const express = require("express");
const { index, create, findDetail, update, destroy } = require("./controller");
const router = express.Router();

router.get("/product-info", index);
router.get("/product-info/:id", findDetail);
router.put("/product-info/:id", update);
router.post("/product-info", create);
router.delete("/product-info/:id", destroy);

module.exports = router;
