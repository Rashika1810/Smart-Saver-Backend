import React, { useState } from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const AddTransaction = () => {
  const [inputs, setInputs] = useState({
    amount: "",
    type: "",
    category: "",
    description: "",
    date: "",
  });
  const navigate = useNavigate();
  const initialState = {
    amount: "",
    type: "",
    category: "",
    description: "",
    date: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/transaction//add-transaction",
        {
          amount: inputs.amount,
          type: inputs.type,
          category: inputs.category,
          description: inputs.description,
          date: inputs.date,
        }
      );
      if (data?.success) {
        console.log(data);

        alert("Transaction Added Successfully!");
        navigate("/");
        setInputs(initialState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setInputs({ ...inputs, type: value });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setInputs({ ...inputs, category: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "80%",
          margin: "auto",
          backgroundColor: "#FFFFFF",
          maxHeight: "80vh",
          overflow: "auto",
          "@media (max-width:600px)": { width: "95%" },
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ marginBottom: 2, color: theme.palette.primary.main }}
        >
          Add Transaction
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="amount"
                label="Amount"
                type="text"
                variant="outlined"
                required
                value={inputs.amount}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.palette.primary.main },
                }}
                InputProps={{ style: { color: theme.palette.primary.main } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                fullWidth
                id="type"
                value={inputs.type}
                onChange={handleTypeChange}
                required
                displayEmpty
                renderValue={(selected) =>
                  selected ? selected : "Select Type"
                }
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.palette.primary.main },
                }}
                SelectProps={{
                  style: { color: theme.palette.primary.main },
                  MenuProps: {
                    style: {
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <MenuItem disabled value="">
                  Select Type
                </MenuItem>
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                id="category"
                value={inputs.category}
                onChange={handleCategoryChange}
                required
                displayEmpty
                renderValue={(selected) =>
                  selected ? selected : "Select Category"
                }
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.palette.primary.main },
                }}
                SelectProps={{
                  style: { color: theme.palette.primary.main },
                  MenuProps: {
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                        overflow: "auto",
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.primary.main,
                      },
                    },
                  },
                }}
              >
                <MenuItem disabled value="">
                  Select Category
                </MenuItem>
                <MenuItem value="tip">Tip</MenuItem>
                <MenuItem value="salary">Salary</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
                <MenuItem value="shopping">Shopping</MenuItem>
                <MenuItem value="scholarships">Scholarships</MenuItem>
                <MenuItem value="travel">Travel</MenuItem>
                <MenuItem value="groceries">Groceries</MenuItem>
                <MenuItem value="donation">Donation</MenuItem>
                <MenuItem value="personal use">Personal Use</MenuItem>
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="fees">Fees</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                label="Description"
                type="text"
                variant="outlined"
                required
                value={inputs.description}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.palette.primary.main },
                }}
                InputProps={{ style: { color: theme.palette.primary.main } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="date"
                label="Date"
                type="date"
                variant="outlined"
                required
                value={inputs.date}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.palette.primary.main },
                }}
                InputProps={{ style: { color: theme.palette.primary.main } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  color: "#FFFFFF",
                  backgroundColor: theme.palette.primary.main,
                }}
                disabled={!inputs.type}
              >
                Add Transaction
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default AddTransaction;
