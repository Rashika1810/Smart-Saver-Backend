const express = require("express");
const {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

module.exports = router;

//getting all the transactions
router.post("/get-all-transaction", getAllTransaction);

//adding new transactions
router.post("/add-transaction", addTransaction);

//editing transactions
router.put("/edit-transaction/:id", editTransaction);

//delete transactions
router.delete("/delete-transaction/:id", deleteTransaction);
