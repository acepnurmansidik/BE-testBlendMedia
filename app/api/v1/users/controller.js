const { StatusCodes } = require("http-status-codes");
const { getAllCustomerOrder } = require("../../../service/mongo/orders");
const { getOneProduct } = require("../../../service/mongo/product");
const { checkAddress } = require("../../../service/mongo/users");
const Order = require("../orders/model");

const createOrders = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { products } = req.body;
    const orders = [];

    const user = await checkAddress(_id);

    products.map(async (product) => {
      const resultProduct = await getOneProduct(product._id);

      const total = product.sumQty * resultProduct.product_price;
      const payload = {
        address: user.address,
        qty: product.sumQty,
        total,
        product_name: resultProduct.product_name,
        seller_id: resultProduct.seller_id,
        customer_id: _id,
        price: resultProduct.product_price,
        product_image_url: resultProduct.product_image_url,
      };

      const order = await Order.create(payload);
      orders.push(order);
    });

    res.status(StatusCodes.CREATED).json({ message: "Transaction success!" });
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
