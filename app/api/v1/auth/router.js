const express = require("express");
const { register, login } = require("./controller");
const router = express.Router();

router.post("/sign-in", login);
router.post("/sign-up", register);

module.exports = router;
