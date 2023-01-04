const Images = require("../../api/v1/images/model");
const NotFound = require("../../errors/not-found");

const createImages = async (req, id) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/default.png",
    idRef: id,
  });

  return result;
};

const checkImage = async (req) => {
  const { id } = req.params;

  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFound(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};

module.exports = { createImages, checkImage };
