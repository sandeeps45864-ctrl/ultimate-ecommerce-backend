import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    console.log(req.body);

    res.json({
      success: true,
      message: "Order Received",
      order: req.body
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

export default router;