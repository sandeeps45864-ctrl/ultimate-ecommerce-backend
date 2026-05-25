import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    console.log(req.body);

    const newOrder = new Order({
      products: req.body.products,
      totalPrice: req.body.totalPrice,
    });

    const savedOrder = await newOrder.save();

    console.log("Saved:", savedOrder);

    res.status(201).json({
      success: true,
      message: "Order Saved",
      order: savedOrder,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });

  }
});

export default router;