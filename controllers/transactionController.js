const transactionModel = require("../models/transactionModel");

const getAllTransaction = async (req, resp) => {
  try {
    const transaction = await transactionModel.find({});

    return resp.status(500).send({
      success: true,
      message: "Fetched all transaction",
      transaction,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({
      success: false,
      message: "Error is fetching transaction",
      error,
    });
  }
};
const addTransaction = async (req, resp) => {
  try {
    const { amount, category, description, date, reference } = req.body;

    //user validation
    if (!amount || !category || !description || !date) {
      return resp.status(400).send({
        success: false,
        message: "All fields are required.",
      });
    }
    const newTransaction = new transactionModel({
      amount: Number(amount),
      category,
      description,
      date,
      reference,
    });
    await newTransaction.save();
    return resp.status(201).send({
      success: true,
      message: "Transaction Added Successfully",
      newTransaction,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({
      success: false,
      message: "Error is adding transaction",
      error,
    });
  }
};

module.exports = { getAllTransaction, addTransaction };
