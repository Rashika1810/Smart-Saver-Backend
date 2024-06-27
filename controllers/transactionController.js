const transactionModel = require("../models/transactionModel");
const moment = require("moment");
const getAllTransaction = async (req, resp) => {
  try {
    const { frequency, type, category } = req.body;
    const transaction = await transactionModel.find({
      date: {
        $gt: moment().subtract(Number(frequency), "d").toDate(),
      },
      userid: req.body.userid,
      ...(type !== "all" && { type }),
      ...(category != "all" && { category }),
    });
    const count = await transactionModel.countDocuments({
      userid: req.body.userid,
    });

    return resp.status(200).send({
      success: true,
      message: "Fetched all transaction",
      length: count,
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
    const { amount, type, category, description, date, reference, userid } =
      req.body;

    //user validation
    if (!amount || !type || !category || !description || !date || !userid) {
      return resp.status(400).send({
        success: false,
        message: "All fields are required.",
      });
    }
    const newTransaction = new transactionModel({
      amount: Number(amount),
      type,
      category,
      description,
      date,
      reference,
      userid,
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
