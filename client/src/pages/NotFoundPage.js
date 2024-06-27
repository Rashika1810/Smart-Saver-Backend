import React from "react";
import {
  Box,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

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

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#0D47A1",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ fontSize: "6rem" }}>
            404
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: 4 }}>
            Page Not Found
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            The page you are looking for does not exist.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#0B3C7B",
              },
            }}
          >
            Go Home
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NotFoundPage;
