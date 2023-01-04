const Cart = require("../../api/v1/carts/model");

const getAllCart = async (req) => {
  const { _id } = req.user;

  const result = await Cart.find({
    user_id: _id,
  })
    .populate([
      {
        path: "product_id",
        model: "Product",
        select: "product_name product_image_url",
        populate: [
          {
            path: "product_image_url",
            model: "Image",
            select: "name urlLink",
          },
        ],
      },
      {
        path: "user_id",
        model: "User",
        select: "name",
      },
    ])
    .select("-createdAt -updatedAt -__v")
    .lean();

  return result;
};

const createCart = async (req) => {
  const { _id } = req.user;
  const { idProduct } = req.params;
  let result;

  const check = await Cart.findOne({
    user_id: _id,
    product_id: idProduct,
  }).lean();

  if (!check) {
    result = await Cart.create({ user_id: _id, product_id: idProduct });
  } else {
    result = await Cart.findOneAndDelete({
      product_id: idProduct,
      user_id: _id,
    });
  }

  return result;
};

const deleteCart = async (req) => {
  const { _id } = req.user;
  const { idProduct } = req.params;

  const result = await Cart.findOneAndDelete({
    product_id: idProduct,
    user_id: _id,
  }).lean();

  return result;
};

module.exports = {
  createCart,
  getAllCart,
  deleteCart,
};
