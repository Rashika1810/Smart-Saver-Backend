const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const loginController = async (req, resp) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return resp.status(401).send({
        success: false,
        message: "All fields are required.",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return resp.status(200).send({
        success: false,
        message: "User is not registered",
      });
    }
    //password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return resp.status(401).send({
        success: false,
        message: "Invlid username or password",
      });
    }
    return resp.status(200).send({
      success: true,
      messgae: "Login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({
      success: false,
      message: "Error is user login",
      error,
    });
  }
};
const registerController = async (req, resp) => {
  try {
    const { name, email, password } = req.body;

    //user validation
    if (!name || !email || !password) {
      return resp.status(400).send({
        success: false,
        message: "All fields are required.",
      });
    }
    // check for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return resp.status(401).send({
        success: false,
        message: "User already Exists",
      });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //saving new user to the database
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return resp.status(201).send({
      success: true,
      message: "Registration Successfull",
      newUser,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({
      success: false,
      message: "Error is user registration",
      error,
    });
  }
};
module.exports = { loginController, registerController };
