import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddTransaction from "../../pages/AddTransaction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "80%",
    md: "70%",
    lg: "60%",
    xl: "50%",
  },
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const AddTransactionModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <IconButton onClick={handleClose} sx={{ ml: "auto" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <AddTransaction />
      </Box>
    </Modal>
  );
};

export default AddTransactionModal;
