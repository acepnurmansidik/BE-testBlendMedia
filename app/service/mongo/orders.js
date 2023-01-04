const Order = require("../../api/v1/orders/model");

const createOrder = async (payloads) => {
  const result = await Order.create(payloads);

  return result;
};

const getAllCustomerOrder = async (req) => {
  const { _id } = req.user;
  const result = await Order.find({ customer_id: _id });

  return result;
};

module.exports = { createOrder, getAllCustomerOrder };
