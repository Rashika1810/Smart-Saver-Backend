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

const validatePassword = (password) => {
  if (password.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/\d/.test(password)) {
    return false;
  }
  if (!/[^\s]{1,}/.test(password)) {
    return false;
  }

  return true;
};
const registerController = async (req, resp) => {
  try {
    const { name, email, password } = req.body;

    // User validation
    if (!name || !email || !password) {
      return resp.status(400).send({
        success: false,
        message: "All fields are required.",
      });
    }

    // Validate password
    if (!validatePassword(password)) {
      return resp.status(400).send({
        success: false,
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (except spaces).",
      });
    }

    // Check for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return resp.status(401).send({
        success: false,
        message: "User already exists.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user to the database
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return resp.status(201).send({
      success: true,
      message: "Registration successful.",
      newUser,
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    return resp.status(500).send({
      success: false,
      message: "Error in user registration.",
      error: error.message,
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
