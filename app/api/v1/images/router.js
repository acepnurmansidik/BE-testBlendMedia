const express = require("express");
const { create } = require("./controller");
const router = express.Router();
const upload = require("../../../middlewares/multer");

router.post("/image", upload.single("image"), create);

module.exports = router;
