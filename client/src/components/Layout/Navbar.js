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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      alert("Logout Successful");
      navigate("/login");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 250, backgroundColor: "#0D47A1", height: "100%" }}
    >
      <List>
        {loginUser && (
          <>
            <ListItem>
              <ListItemText
                primary={`Welcome, ${loginUser.name}`}
                sx={{ color: "#FFFFFF" }}
              />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" sx={{ color: "#FFFFFF" }} />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#0D47A1", height: 80 }}>
        <Toolbar sx={{ height: 80 }}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
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
              {loginUser && (
                <>
                  <Typography
                    sx={{ color: "white", fontWeight: "bold", marginRight: 2 }}
                  >
                    Welcome, {loginUser.name}
                  </Typography>
                  <Button
                    onClick={handleLogout}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#0B3C7B",
                      },
                    }}
                  >
                    Logout
                  </Button>
                </>
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
