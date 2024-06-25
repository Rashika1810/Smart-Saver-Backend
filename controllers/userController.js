const userModel = require("../models/userModel");

const loginController = async (req, resp) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return resp.status(404).send("User Not Found");
    }

    resp.status(200).json({ success: true, user });
  } catch (error) {
    resp.status(400).json({ success: false, error });
  }
};
const registerController = async (req, resp) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    resp.status(200).json({
      success: true,
      newUser,
    });
  } catch (error) {
    resp.status(400).json({ success: false, error });
  }
};
module.exports = { loginController, registerController };
