import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logout Successful");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const goToHome = () => {
    navigate("/home");
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 250, backgroundColor: "#0D47A1", height: "100%" }}
    >
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/home"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Home" sx={{ color: "#FFFFFF" }} />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Services" sx={{ color: "#FFFFFF" }} />
        </ListItem>
        {loginUser && (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" sx={{ color: "#FFFFFF" }} />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ height: 80 }}>
        <Toolbar sx={{ height: 80 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/home"
            sx={{
              flexGrow: 1,
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            onClick={goToHome} // Navigate to home on clicking the title
            style={{ cursor: "pointer" }}
          >
            Smart Saver
          </Typography>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center">
              <Button
                component={RouterLink}
                to="/home"
                color="inherit"
                sx={{ fontWeight: "bold", marginLeft: 2 }}
                // onClick={handleDrawerToggle}
              >
                Home
              </Button>

              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ fontWeight: "bold", marginLeft: 2 }}
                // onClick={handleDrawerToggle}
              >
                Services
              </Button>
              {loginUser && (
                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#0B3C7B",
                    },
                    marginLeft: "auto", // Move the logout button to the rightmost position
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0D47A1",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
