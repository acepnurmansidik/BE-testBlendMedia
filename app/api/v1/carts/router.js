const express = require("express");
const { authenticateUser } = require("../../../middlewares/auth");
const { create, destroy, index } = require("./controller");
const router = express.Router();

router.get("/cart", authenticateUser, index);
router.post("/cart/:idProduct", authenticateUser, create);
router.delete("/cart/:idProduct", authenticateUser, destroy);

module.exports = router;
