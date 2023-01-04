const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productInfoSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name can't be empty!"],
    },
  },
  { timestamps: true }
);

module.exports = model("ProductInfo", productInfoSchema);
