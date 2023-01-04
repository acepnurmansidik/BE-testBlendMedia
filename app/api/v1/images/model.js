const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let imageSchema = Schema(
  {
    name: {
      type: String,
    },
    urlLink: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = model("Image", imageSchema);
