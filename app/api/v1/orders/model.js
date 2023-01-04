const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const orderSchema = Schema(
  {
    product_name: {
      type: String,
      required: [true, "Name can't be empty!"],
    },
    seller_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "Seller can't be empty!"],
      ref: "User",
    },
    customer_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "Seller can't be empty!"],
      ref: "User",
    },
    qty: {
      type: Number,
      required: [true, "Qty can't be empty!"],
    },
    price: {
      type: Number,
      required: [true, "Price can't be empty!"],
    },
    total: {
      type: Number,
      required: [true, "Price can't be empty!"],
    },
    product_image_url: {
      type: mongoose.Types.ObjectId,
      required: [true, "Image can't be empty!"],
      ref: "Image",
    },
    date: {
      type: Date,
      required: [true, "Date can't be empty!"],
      default: Date.now(),
    },
    address: {
      type: String,
      required: [true, "Address can't be empty!"],
    },
    status: {
      type: String,
      enum: ["success", "pending", "failed"],
      default: "success",
    },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
