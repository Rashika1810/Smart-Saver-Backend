import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Button, Box } from "@mui/material";
import AddTransactionModal from "../components/Layout/AddTransactionModal";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <Box display="flex" justifyContent="flex-end" m={2}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add New Transaction
        </Button>
      </Box>
      <AddTransactionModal open={open} handleClose={handleClose} />
    </Layout>
  );
};

export default Home;
