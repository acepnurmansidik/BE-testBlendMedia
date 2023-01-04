const Order = require("../../api/v1/orders/model");

const createOrder = async (payloads) => {
  const result = await Order.create(payloads);

  return result;
};

const getAllCustomerOrder = async (req) => {
  const result = await Order.find(payloads);

  return result;
};

module.exports = { createOrder, getAllCustomerOrder };
