const User = require("../../api/v1/users/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const checkAddress = async (_id) => {
  const result = await User.findOne({ _id }).lean();

  if (!result.address)
    throw new BadRequestError(
      "Mohon lengkapi alamat pengiriman di profile anda!"
    );

  return result;
};

module.exports = {
  checkAddress,
};
