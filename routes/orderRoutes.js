import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { products, totalPrice } = req.body;

    const newOrder = new Order({
      products,
      totalPrice,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order Saved",
      order: newOrder,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});

export default router;