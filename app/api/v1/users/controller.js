const { StatusCodes } = require("http-status-codes");
const { getAllCustomerOrder } = require("../../../service/mongo/orders");
const {
  getOneProduct,
  updateProduct,
} = require("../../../service/mongo/product");
const { checkAddress } = require("../../../service/mongo/users");
const Order = require("../orders/model");
const Product = require("../product/model");

const createOrders = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { sumQty } = req.body;
    let order;

    const user = await checkAddress(_id);

    const resultProduct = await getOneProduct(req.body._id);

    const total = req.body.sumQty * resultProduct.product_price;
    const payload = {
      address: user.address,
      qty: req.body.sumQty + 1,
      total,
      product_name: resultProduct.product_name,
      seller_id: resultProduct.seller_id,
      customer_id: _id,
      price: resultProduct.product_price,
      product_image_url: resultProduct?.product_image_url
        ? resultProduct.product_image_url
        : "",
    };

    await Product.findOneAndUpdate(
      { _id: resultProduct._id },
      { product_qty: resultProduct.product_qty - (sumQty + 1) }
    );

    order = await Order.create(payload);

    res
      .status(StatusCodes.CREATED)
      .json({ data: order, message: "Transaction success!" });
  } catch (err) {
    next(err);
  }
};

const indexOrder = async (req, res, next) => {
  try {
    const result = await getAllCustomerOrder(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOrders,
  indexOrder,
};
