const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

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
    });

  }
});

module.exports = router;