import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  ThemeProvider,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { toast } from "react-toastify";
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

const EditTransaction = ({ open, onClose, transaction }) => {
  const [inputs, setInputs] = useState({
    amount: "",
    type: "",
    category: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (transaction) {
      setInputs(transaction);
    }
  }, [transaction]);

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
      const user = JSON.parse(localStorage.getItem("user"));
      const { data } = await axios.put(
        `https://smart-saver-gqrd.onrender.com/api/v1/transaction/edit-transaction/${transaction._id}`,
        {
          amount: inputs.amount,
          type: inputs.type,
          category: inputs.category,
          description: inputs.description,
          date: inputs.date,
          userid: user._id,
        }
      );
      if (data?.success) {
        toast.success("Transaction Updated Successfully!");
        navigate("/");
        setInputs(initialState);
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Some Error in Updating");
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
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Edit Transaction
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
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
                  maxLength={50}
                  placeholder="Max 50 characters"
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
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={!inputs.type}
          >
            Update Transaction
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default EditTransaction;
