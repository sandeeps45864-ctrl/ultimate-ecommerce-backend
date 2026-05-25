import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/save-order", async (req, res) => {

  try {

    const { products, total } = req.body;

    const newOrder = new Order({
      products,
      total
    });

    await newOrder.save();

    res.json({
      success: true,
      message: "Order Saved"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});

export default router;