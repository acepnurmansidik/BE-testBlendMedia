const Favorite = require("../../api/v1/favorites/model");

const createFavoriteProduct = async (req) => {
  const { _id } = req.user;
  const { idProduct } = req.params;
  let result;

  const check = await Favorite.findOne({
    user_id: _id,
    product_id: idProduct,
  }).lean();

  if (!check) {
    result = await Favorite.create({ user_id: _id, product_id: idProduct });
  } else {
    result = await Favorite.findOneAndDelete({
      product_id: idProduct,
      user_id: _id,
    });
  }

  return result;
};

const detailFavoriteProduct = async (req) => {
  const { _id } = req.user;
  const { idProduct } = req.params;

  const result = await Favorite.findOne(
    {
      product_id: idProduct,
      user_id: _id,
    },
    { _id: 1 }
  ).lean();

  return result;
};

module.exports = {
  createFavoriteProduct,
  detailFavoriteProduct,
};
