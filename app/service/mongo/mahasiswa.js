const Mahasiswa = require("../../api/v1/mahasiswa/model");

const getAllMahasiswa = async (req) => {
  const result = await Mahasiswa.find();

  return result;
};

const createMahasiswa = async (req) => {
  const { nama, alamat } = req.body;

  const result = await Mahasiswa.create({ nama, alamat });

  return result;
};

const updateMahasiswa = async (req) => {
  const { id } = req.params;
  const { nama, alamat } = req.body;

  const result = await Mahasiswa.findOneAndUpdate(
    { _id: id },
    { nama, alamat },
    { new: true },
  );

  return result;
};

const deleteMahasiswa = async (req) => {
  const { id } = req.params;

  const result = await Mahasiswa.findOne({ _id: id });

  if (!result) throw new NotFoundError(`No Mahasiswa with id: ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
