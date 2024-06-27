import React, { useEffect, useState } from "react";
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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImage from "../assests/bg.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#0D47A1",
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
        console.log(data);
        const { password, ...userWithoutPassword } = data.user;
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        alert("Login Successful!");
        navigate("/");
      } else {
        alert("User Not Registered");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <img
          src={loginImage}
          alt="Login Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 3, maxWidth: 400 }}>
              <Typography
                component="h1"
                variant="h5"
                textAlign="center"
                gutterBottom
                sx={{ color: "secondary.main" }}
              >
                Login
              </Typography>
              <Box component="form" onSubmit={handleLoginSubmit}>
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
                    mt: 2,
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "primary.main",
                    borderRadius: 1,
                  }}
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
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
