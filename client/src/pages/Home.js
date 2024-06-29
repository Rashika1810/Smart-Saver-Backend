import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import AddTransactionModal from "../components/Layout/AddTransactionModal";

import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableChartIcon from "@mui/icons-material/TableChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import Analytics from "../components/Analytics";
import EditTransactionModal from "../components/EditTransactionModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [openAddTransaction, setOpenAddTransaction] = useState(false);
  const [openEditTransaction, setOpenEditTransaction] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);
  const [frequency, setFrequency] = useState("all");
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [tableView, setTableView] = useState("table");
  const [editTransactionData, setEditTransactionData] = useState(null);

  const handleOpenAddTransaction = () => setOpenAddTransaction(true);
  const handleCloseAddTransaction = () => {
    setOpenAddTransaction(false);
    getAllTransactions();
  };

  const navigate = useNavigate();
  const handleOpenEditTransaction = (transactionId) => {
    const transactionToEdit = allTransactions.find(
      (transaction) => transaction._id === transactionId
    );
    if (transactionToEdit) {
      setEditTransactionData(transactionToEdit);
      setOpenEditTransaction(true);
    } else {
      console.log("Transaction not found for editing");
    }
  };

  const handleCloseEditTransaction = () => {
    setOpenEditTransaction(false);
    setEditTransactionData(null);
    getAllTransactions();
  };

  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      let params = {
        userid: user._id,
        frequency,
        type,
        category,
      };

      const { data } = await axios.post(
        "/api/v1/transaction/get-all-transaction",
        params
      );

      const formattedTransactions = data.transaction.map((transaction) => ({
        ...transaction,
        date: new Date(transaction.date).toISOString().split("T")[0],
      }));
      setAllTransactions(formattedTransactions);
    } catch (error) {
      console.log(error);
      alert("Failed to load transactions");
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, [frequency, type, category]);

  const tableHeadStyle = {
    backgroundColor: "#1976d2",
    color: "white",
    fontWeight: "bold",
  };

  const handleDelete = async (transactionId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/transaction/delete-transaction/${transactionId}`
      );
      if (data.success) {
        alert("Transaction deleted Successfully");
        getAllTransactions();
      }
    } catch (error) {
      console.log(error);
      alert("Error in deleting transactions");
    }
  };

  const handleTableViewChange = (view) => {
    setTableView(view);
  };

  const isTableView = tableView === "table";

  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={2}
        flexWrap="wrap"
      >
        {/* Add New Transaction Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddTransaction}
          sx={{
            minWidth: 180,
            mb: 2,
            height: 48,
            minHeight: "1.4375em",
            padding: 4,
          }}
        >
          Add New Transaction
        </Button>

        {/* Filters Container */}
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: 2, ml: "auto", minWidth: 180 }}
        >
          {/* Date Frequency Filter */}
          <FormControl
            variant="outlined"
            sx={{ minWidth: 180, flex: 1, mb: 2 }}
          >
            <Select
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Filter by Date Frequency" }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="7">Last 1 Week</MenuItem>
              <MenuItem value="30">Last 1 Month</MenuItem>
              <MenuItem value="365">Last 1 Year</MenuItem>
            </Select>
          </FormControl>

          {/* Type Filter */}
          <FormControl
            variant="outlined"
            sx={{ minWidth: 180, flex: 1, mb: 2 }}
          >
            <Select
              value={type}
              onChange={(event) => setType(event.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Filter by Type" }}
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>

          {/* Category Filter */}
          <FormControl
            variant="outlined"
            sx={{ minWidth: 180, flex: 1, mb: 2 }}
          >
            <Select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Filter by Category" }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="tip">Tip</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
              <MenuItem value="bills">Bills</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="healthcare">Healthcare</MenuItem>
              <MenuItem value="shopping">Shopping</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
              <MenuItem value="scholarships">Scholarships</MenuItem>
              <MenuItem value="travel">Travel</MenuItem>
              <MenuItem value="groceries">Groceries</MenuItem>
              <MenuItem value="donation">Donation</MenuItem>
              <MenuItem value="personal use">Personal Use</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="fees">Fees</MenuItem>
              <MenuItem value="tax">Tax</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Table and Graph view icons */}
      <Box
        display="flex"
        justifyContent="right"
        m={2}
        flexWrap="wrap"
        sx={{ justifyContent: "right" }}
      >
        <Box
          display="flex"
          justifyContent="right"
          alignItems="center"
          width="200"
          flexDirection="column"
          border={2}
          borderColor="#1976d2"
          mb={2}
          sx={{
            backgroundColor: "white",

            p: 1,
            borderRadius: 1,
            maxWidth: 100,
            flexDirection: "row",
          }}
        >
          <IconButton
            onClick={() => handleTableViewChange("table")}
            color={isTableView ? "primary" : "default"}
            aria-label="table view"
            sx={{ color: isTableView ? "#1976d2" : "inherit" }}
          >
            <TableChartIcon />
          </IconButton>
          <IconButton
            onClick={() => handleTableViewChange("graph")}
            color={isTableView ? "default" : "primary"}
            aria-label="graph view"
            sx={{ color: isTableView ? "inherit" : "#1976d2" }}
          >
            <BarChartIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Conditionally render table or graph view */}
      {allTransactions.length === 0 ? (
        <Typography
          variant="h4"
          align="center"
          color="#1976d2"
          fontWeight="bold"
        >
          No Transactions Available
        </Typography>
      ) : isTableView ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={tableHeadStyle}>
                  Date
                </TableCell>
                <TableCell align="center" style={tableHeadStyle}>
                  Amount
                </TableCell>
                <TableCell align="center" style={tableHeadStyle}>
                  Type
                </TableCell>
                <TableCell align="center" style={tableHeadStyle}>
                  Category
                </TableCell>
                <TableCell align="center" style={tableHeadStyle}>
                  Description
                </TableCell>
                <TableCell align="center" style={tableHeadStyle}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allTransactions.map((transaction) => (
                <TableRow key={transaction._id}>
                  <TableCell align="center">{transaction.date}</TableCell>
                  <TableCell align="center">
                    ₹{" "}
                    <span
                      style={{
                        color: transaction.type === "Income" ? "green" : "red",
                      }}
                    >
                      {transaction.amount}
                    </span>
                  </TableCell>
                  <TableCell align="center">{transaction.type}</TableCell>
                  <TableCell align="center">{transaction.category}</TableCell>
                  <TableCell align="center">
                    {transaction.description}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      aria-label="edit transaction"
                      onClick={() => handleOpenEditTransaction(transaction._id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      aria-label="delete transaction"
                      onClick={() => handleDelete(transaction._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <Analytics allTransactions={allTransactions} />
        </div>
      )}
      {/* Render EditTransactionModal */}
      <EditTransactionModal
        open={openEditTransaction}
        onClose={handleCloseEditTransaction}
        transaction={editTransactionData}
      />

      {/* Render AddTransactionModal */}
      <AddTransactionModal
        open={openAddTransaction}
        handleClose={handleCloseAddTransaction}
      />
    </Layout>
  );
};

export default Home;
