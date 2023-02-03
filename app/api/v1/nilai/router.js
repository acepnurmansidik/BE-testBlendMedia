const express = require("express");
const { authenticateUser } = require("../../../middlewares/auth");
const { index, create, update, destroy } = require("./controller");
const router = express.Router();

router.get("/nilai/:idmhs", index);
router.post("/nilai", create);
router.put("/nilai/:id", update);
router.delete("/nilai/:id", destroy);

module.exports = router;
