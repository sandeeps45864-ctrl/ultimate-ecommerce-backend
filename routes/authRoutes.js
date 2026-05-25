import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if(userExist){
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user){
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login Success",
      token,
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

export default router;