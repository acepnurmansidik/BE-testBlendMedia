const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const cartSchema = Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "Name can't be empty!"],
      ref: "User",
    },
    product_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "Name can't be empty!"],
      ref: "Product",
    },
  },
  { timestamps: true }
);

module.exports = model("Cart", cartSchema);
