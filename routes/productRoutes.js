import express from "express";
import Product from "../models/Product.js";

const router = express.Router();


// ADD PRODUCT

router.post("/", async (req, res) => {

  try {

    const { name, price, image, description } = req.body;

    const newProduct = new Product({

      name,
      price,
      image,
      description,

    });

    await newProduct.save();

    res.status(201).json({

      success: true,
      message: "Product Added",
      product: newProduct,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error",

    });

  }

});


// GET PRODUCTS

router.get("/", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// DELETE PRODUCT

router.delete("/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product Deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

export default router;