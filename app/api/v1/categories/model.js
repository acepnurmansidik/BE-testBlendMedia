const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, "Minimum length category name 3 character"],
      maxLength: [20, "Maximum length category name 20 character"],
      required: [true, "Name can't be empty!"],
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
