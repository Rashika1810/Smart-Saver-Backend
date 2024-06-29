import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navbar from "../components/Layout/Navbar";
import im from "../assests/bg.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#333",
      secondary: "#0d47a1",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const CustomButton = styled(Button)({
  marginTop: theme.spacing(3),
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  borderRadius: theme.spacing(2),
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
});

const H = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${im})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.text.primary,
          textAlign: "center",
          padding: isSmallScreen ? theme.spacing(2) : theme.spacing(10),
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #ffeb3b, #ff4081, #4caf50)",
              WebkitBackgroundClip: "text",
              fontWeight: "900",
              color: "#0d47a1",
              fontSize: isSmallScreen ? "2.5rem" : "4.5rem",
            }}
          >
            Welcome to Smart Saver
          </Typography>

          <Typography
            variant="h6"
            component="p"
            paragraph
            color="#7e7c7c"
            sx={{ fontSize: isSmallScreen ? "1rem" : "1.5rem" }}
          >
            Your ultimate financial management companion! Manage your
            transactions effortlessly with Smart Saver.
          </Typography>
          <Box sx={{ marginTop: theme.spacing(2) }}>
            <CustomButton
              variant="contained"
              color="secondary"
              href="/"
              sx={{
                backgroundColor: "#0d47a1",
                color: "#ffffff",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#0d47a1",
                  color: "#ffffff",
                },
              }}
            >
              Continue to Smart Saver
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default H;
