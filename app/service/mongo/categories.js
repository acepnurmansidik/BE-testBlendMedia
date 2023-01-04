const Categories = require("../../api/v1/categories/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllCategories = async (req) => {
  const result = await Categories.find().lean();

  return result;
};

const detailCategory = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({ _id: id });

  return result;
};

const createCategory = async (req) => {
  const { name } = req.body;

  const check = await Categories.findOne({ name }).lean();

  if (check)
    throw new BadRequestError("Category name exist, can't be duplicate!");

  const result = await Categories.create({ name });

  return result;
};

const updateCategory = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  const check = await Categories.findOne({ _id: { $ne: id }, name });

  if (check)
    throw new BadRequestError("Category name exist, can't be duplicate!");

  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true }
  );

  return result;
};

const deleteCategory = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({ _id: id });

  if (!result) throw new NotFoundError(`No Category with id: ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllCategories,
  createCategory,
  detailCategory,
  updateCategory,
  deleteCategory,
};
