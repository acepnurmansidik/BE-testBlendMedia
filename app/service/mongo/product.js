const Product = require("../../api/v1/product/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllProduct = async (req) => {
  const result = await Product.find()
    .populate([
      {
        path: "product_image_url",
        model: "Image",
        select: "name urlLink -_id",
      },
      {
        path: "product_info",
        model: "ProductInfo",
        select: "name -_id",
      },
      {
        path: "product_category",
        model: "Category",
        select: "name -_id",
      },
    ])
    .lean();

  return result;
};

const detailProduct = async (req) => {
  const { id } = req.params;

  const result = await Product.findOne({ _id: id })
    .populate([
      {
        path: "product_image_url",
        model: "Image",
        select: "name urlLink -_id",
      },
      {
        path: "product_info",
        model: "ProductInfo",
        select: "name -_id",
      },
      {
        path: "product_category",
        model: "Category",
        select: "name -_id",
      },
    ])
    .lean();

  return result;
};

const createProduct = async (req) => {
  const payload = req.body;

  payload.seller_id = req.user._id;
  const result = await Product.create(payload);

  return result;
};

const updateProduct = async (req) => {
  const { id } = req.params;
  const payload = req.body;

  const check = await Product.findOne({ _id: id });

  if (!check) throw new BadRequestError(`Product not found with id: ${id}`);

  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteProduct = async (req) => {
  const { id } = req.params;

  const result = await Product.findOne({ _id: id });

  if (!result) throw new NotFoundError(`No Product with id: ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllProduct,
  createProduct,
  detailProduct,
  updateProduct,
  deleteProduct,
};
