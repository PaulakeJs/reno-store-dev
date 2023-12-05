const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const auth = require("../middlewares/auth");

router.post("/new", async (req, res) => {
  try {
    // check if user exist
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("this email has already been used");
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    //  create new user
    const newuser = new User(req.body);
    await newuser.save();
    res.send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// user login

router.post("/login", async (req, res) => {
  try {
    // check if user exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("invalid credentials");
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (!validPass) {
      throw new Error("invalid credentials");
    }
    // assign token
    const token = jwt.sign({ userId: user._id }, "paulakejs", {
      expiresIn: "2h",
    });

    res.send({
      success: true,
      message: "login successful",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// current user

router.get("/current-user",auth, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: "fetched success",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
