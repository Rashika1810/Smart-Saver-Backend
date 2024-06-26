const express = require("express");
const {
  getAllTransaction,
  addTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

module.exports = router;

//getting all the transactions
router.get("/get-all-transaction", getAllTransaction);

//adding new transactions
router.post("/add-transaction", addTransaction);
