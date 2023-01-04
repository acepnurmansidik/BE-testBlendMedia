const express = require("express");
const { authenticateUser } = require("../../../middlewares/auth");
const { create, findDetail } = require("./controller");
const router = express.Router();

router.post("/favorite/:idProduct", authenticateUser, create);
router.get("/favorite/:idProduct", authenticateUser, findDetail);

module.exports = router;
