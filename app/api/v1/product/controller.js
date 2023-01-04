const { StatusCodes } = require("http-status-codes");
const {
  getAllProduct,
  createProduct,
  detailProduct,
  updateProduct,
  deleteProduct,
} = require("../../../service/mongo/product");

const index = async (req, res, next) => {
  try {
    const result = await getAllProduct();

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createProduct(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const findDetail = async (req, res, next) => {
  try {
    const result = await detailProduct(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateProduct(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteProduct(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { index, create, findDetail, update, destroy };
