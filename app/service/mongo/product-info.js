const ProductInfo = require("../../api/v1/product-info/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllProductInfo = async (req) => {
  const result = await ProductInfo.find().lean();

  return result;
};

const detailProductInfo = async (req) => {
  const { id } = req.params;

  const result = await ProductInfo.findOne({ _id: id });

  return result;
};

const createProductInfo = async (req) => {
  const { name } = req.body;

  const check = await ProductInfo.findOne({ name }).lean();

  if (check)
    throw new BadRequestError("ProductInfo name exist, can't be duplicate!");

  const result = await ProductInfo.create({ name });

  return result;
};

const updateProductInfo = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  const check = await ProductInfo.findOne({ _id: { $ne: id }, name });

  if (check)
    throw new BadRequestError("ProductInfo name exist, can't be duplicate!");

  const result = await ProductInfo.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true }
  );

  return result;
};

const deleteProductInfo = async (req) => {
  const { id } = req.params;

  const result = await ProductInfo.findOne({ _id: id });

  if (!result) throw new NotFoundError(`No ProductInfo with id: ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllProductInfo,
  createProductInfo,
  detailProductInfo,
  updateProductInfo,
  deleteProductInfo,
};
