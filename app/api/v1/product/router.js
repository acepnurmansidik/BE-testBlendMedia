const express = require("express");
const { authenticateUser } = require("../../../middlewares/auth");
const { index, create, findDetail, update, destroy } = require("./controller");
const router = express.Router();

router.get("/product", index);
router.get("/product/:id", findDetail);
router.put("/product/:id", update);
router.post("/product", authenticateUser, create);
router.delete("/product/:id", destroy);

module.exports = router;
