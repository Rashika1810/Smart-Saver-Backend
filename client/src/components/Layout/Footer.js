import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0D47A1",
        color: "white",
        py: 2,
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        © {new Date().getFullYear()} Smart Saver. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
