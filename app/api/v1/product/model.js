const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = Schema(
  {
    product_name: {
      type: String,
      required: [true, "Name can't be empty!"],
    },
    product_brand: {
      type: String,
      required: [true, "Name can't be empty!"],
    },
    seller_id: {
      type: mongoose.Types.ObjectId,
      required: [true, "Seller can't be empty!"],
      ref: "User",
    },
    product_price: {
      type: Number,
      required: [true, "Price can't be empty!"],
    },
    product_qty: {
      type: Number,
      required: [true, "Qty can't be empty!"],
    },
    product_image_url: {
      type: mongoose.Types.ObjectId,
      required: [true, "Image can't be empty!"],
      ref: "Image",
    },
    product_info: {
      type: mongoose.Types.ObjectId,
      required: [true, "Status can't be empty!"],
      ref: "ProductInfo",
    },
    product_category: {
      type: mongoose.Types.ObjectId,
      required: [true, "Category can't be empty!"],
      ref: "Category",
    },
    real_pdp_url: {
      type: String,
      required: [true, "Url can't be empty!"],
    },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
