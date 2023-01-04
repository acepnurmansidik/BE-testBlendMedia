const express = require("express");
const { authenticateUser } = require("../../../middlewares/auth");
const { createOrders, indexOrder } = require("./controller");
const router = express.Router();

router.get("/order", authenticateUser, indexOrder);
router.post("/order", authenticateUser, createOrders);

module.exports = router;
