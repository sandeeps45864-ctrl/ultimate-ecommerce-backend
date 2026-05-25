const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      price: Number,
    },
  ],
  totalPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);