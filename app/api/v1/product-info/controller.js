const { StatusCodes } = require("http-status-codes");
const {
  getAllProductInfo,
  createProductInfo,
  detailProductInfo,
  updateProductInfo,
  deleteProductInfo,
} = require("../../../service/mongo/product-info");

const index = async (req, res, next) => {
  try {
    const result = await getAllProductInfo();

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createProductInfo(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const findDetail = async (req, res, next) => {
  try {
    const result = await detailProductInfo(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateProductInfo(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteProductInfo(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { index, create, findDetail, update, destroy };
