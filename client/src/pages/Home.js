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
} from "@mui/material";
import AddTransactionModal from "../components/Layout/AddTransactionModal";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Fetch all transactions
  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const { data } = await axios.post(
        "/api/v1/transaction/get-all-transaction",
        {
          userid: user._id,
        }
      );
      setAllTransactions(data.transaction);
    } catch (error) {
      console.log(error);
      alert("Failed to load transactions");
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  const tableHeadStyle = {
    backgroundColor: "#1976d2", // Blue background
    color: "white", // White text
    fontWeight: "bold",
  };

  const tableRowStyle = {
    color: "#1976d2", // Blue text
  };

  const handleEdit = (transactionId) => {
    // Implement edit functionality here
    console.log("Edit transaction with ID:", transactionId);
  };

  const handleDelete = (transactionId) => {
    // Implement delete functionality here
    console.log("Delete transaction with ID:", transactionId);
  };

  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={2}
      >
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add New Transaction
        </Button>
      </Box>
      {/* Display transactions in a styled table */}
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
                <TableCell align="center">{transaction.description}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    aria-label="edit transaction"
                    onClick={() => handleEdit(transaction._id)}
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
      <AddTransactionModal open={open} handleClose={handleClose} />
    </Layout>
  );
};

export default Home;
