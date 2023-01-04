const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const favoriteSchema = Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "User can't be empty!"],
      ref: "User",
    },
    product_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "Product can't be empty!"],
      ref: "Product",
    },
  },
  { timestamps: true }
);

module.exports = model("Favorite", favoriteSchema);
