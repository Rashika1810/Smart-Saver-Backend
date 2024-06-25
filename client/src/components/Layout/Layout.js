import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
