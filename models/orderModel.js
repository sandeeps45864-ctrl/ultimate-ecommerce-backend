import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        name: String,
        price: Number,
      },
    ],

    totalPrice: Number,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;