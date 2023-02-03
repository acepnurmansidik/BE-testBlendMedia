const { StatusCodes } = require("http-status-codes");
const {
  getAllMatkul,
  createMatkul,
  updateMatkul,
  deleteMatkul,
} = require("../../../service/mongo/matkul");

const index = async (req, res, next) => {
  const result = await getAllMatkul();

  res.status(StatusCodes.CREATED).json({ count: result.length, data: result });
};

const create = async (req, res, next) => {
  try {
    const result = await createMatkul(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateMatkul(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteMatkul(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
