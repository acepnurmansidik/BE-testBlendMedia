const { StatusCodes } = require("http-status-codes");
const {
  getAllCategories,
  createCategory,
  detailCategory,
  updateCategory,
  deleteCategory,
} = require("../../../service/mongo/categories");

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories();

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createCategory(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const findDetail = async (req, res, next) => {
  try {
    const result = await detailCategory(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateCategory(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategory(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { index, create, findDetail, update, destroy };
