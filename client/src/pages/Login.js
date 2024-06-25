import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  CssBaseline,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import RouterLink from react-router-dom
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", // White color
    },
    secondary: {
      main: "#0D47A1", // Dark blue color
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email: input.email,
        password: input.password,
      });
      if (data?.success) {
        localStorage.setItem("user", data?.user);
        alert("Login Successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper elevation={3} sx={{ padding: 3, mt: 8, width: "100%" }}>
          <Typography
            component="h1"
            variant="h5"
            textAlign="center"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Login
          </Typography>
          <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="login-email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={input.email}
                  onChange={handleLoginChange}
                  InputLabelProps={{
                    shrink: true,
                    style: { color: theme.palette.secondary.main },
                  }}
                  sx={{
                    bgcolor: "primary.main",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme.palette.secondary.main,
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.secondary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.secondary.main,
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "secondary.main",
                    },
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="login-password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={input.password}
                  onChange={handleLoginChange}
                  InputLabelProps={{
                    shrink: true,
                    style: { color: theme.palette.secondary.main },
                  }}
                  sx={{
                    bgcolor: "primary.main",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme.palette.secondary.main,
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.secondary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.secondary.main,
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "secondary.main",
                    },
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2, color: "primary.main", borderRadius: 1 }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="body2" align="center">
            New user?{" "}
            <Link component={RouterLink} to="/register" color="secondary">
              Create an account
            </Link>
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
