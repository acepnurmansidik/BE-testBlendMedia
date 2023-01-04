const express = require("express");
const { authenticateUser } = require("../../../middlewares/auth");
const { createOrders } = require("./controller");
const router = express.Router();

router.post("/order", authenticateUser, createOrders);

module.exports = router;
