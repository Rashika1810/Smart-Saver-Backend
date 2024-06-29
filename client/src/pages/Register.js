import React, { useState, useEffect } from "react";
import axios from "axios";
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
import registerImage from "../assests/bg.jpg";

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

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password validation on submit
    if (!validatePassword(input.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one number, one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const { data } = await axios.post("/api/v1/user/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      });
      if (data?.success) {
        alert("Registered Successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return passwordRegex.test(password);
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
          width: "50%",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <img
          src={registerImage}
          alt="Register Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
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
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Username"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={input.name}
                  onChange={handleChange}
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={input.email}
                  onChange={handleChange}
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={input.password}
                  onChange={handleChange}
                  error={!!passwordError}
                  helperText={passwordError}
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
              Register
            </Button>
            <Typography variant="body2" align="center">
              Already registered?{" "}
              <Link component={RouterLink} to="/login" color="secondary">
                Click here to login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
