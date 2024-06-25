import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 250, backgroundColor: "#0D47A1", height: "100%" }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Sign In" sx={{ color: "#FFFFFF" }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sign Up" sx={{ color: "#FFFFFF" }} />
        </ListItem>
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
            <Box display="flex">
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0B3C7B",
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0B3C7B",
                  },
                }}
              >
                Sign Up
              </Button>
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
