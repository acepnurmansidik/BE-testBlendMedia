const Matkul = require("../../api/v1/matakuliah/model");

const getAllMatkul = async (req) => {
  const result = await Matkul.find();

  return result;
};

const createMatkul = async (req) => {
  const { nama_matkul } = req.body;

  const result = await Matkul.create({ nama_matkul });

  return result;
};

const updateMatkul = async (req) => {
  const { id } = req.params;
  const { nama_matkul } = req.body;

  const result = await Matkul.findOneAndUpdate(
    { _id: id },
    { nama_matkul },
    { new: true },
  );

  return result;
};

const deleteMatkul = async (req) => {
  const { id } = req.params;

  const result = await Matkul.findOne({ _id: id });

  if (!result) throw new NotFoundError(`No Matkul with id: ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllMatkul,
  createMatkul,
  updateMatkul,
  deleteMatkul,
};
