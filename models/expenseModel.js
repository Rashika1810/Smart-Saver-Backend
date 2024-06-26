const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    amout: {
      type: number,
      required: [true, "Amount is required"],
    },
    catgeory: {
      type: String,
      required: [true, "Category is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
  },
  { timestamps }
);

const expenseModel = mongoose.model("Expense", expenseSchema);
module.exports = expenseModel;
