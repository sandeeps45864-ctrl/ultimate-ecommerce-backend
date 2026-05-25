import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  products: [
    {
      name: String,
      price: Number
    }
  ],

  total: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("Order", orderSchema);