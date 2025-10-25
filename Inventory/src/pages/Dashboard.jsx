import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingBasketRounded,
  SpaceDashboardOutlined,
  Inventory2Outlined,
  BarChartRounded,
  TuneRounded,
  NotificationsActiveOutlined,
  LocalShippingOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

// Import your pages
import Available from "./Available";
import Dispatch from "./Dispatch";
import Reports from "./Reports";
import Settings from "./Settings";
import Alert from "./Alert";

const drawerWidth = 240;

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard"); // Track active page
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const firstName = "Dhanraj";

  const menuItems = [
    { text: "Dashboard", icon: <SpaceDashboardOutlined />, color: "#00796b" },
    { text: "Alert", icon: <NotificationsActiveOutlined />, color: "#d32f2f" },
    { text: "Available", icon: <Inventory2Outlined />, color: "#1976d2" },
    { text: "Dispatch", icon: <LocalShippingOutlined />, color: "#6a1b9a" },
    { text: "Reports", icon: <BarChartRounded />, color: "#1565c0" },
    { text: "Settings", icon: <TuneRounded />, color: "#f57c00" },
  ];

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* App Logo */}
      <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <ShoppingBasketRounded sx={{ color: "#4caf50" }} />
        <Typography variant="h6" fontWeight="bold" color="#333">
          Carty
        </Typography>
      </Toolbar>

      {/* Menu List */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => setActivePage(item.text)} // Set active page on click
            sx={{
              borderRadius: 2,
              mx: 1,
              mb: 0.5,
              bgcolor: activePage === item.text ? "#e0f7fa" : "transparent",
              "&:hover": {
                bgcolor: "#b2ebf2",
                transform: "scale(1.02)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <ListItemIcon sx={{ color: item.color }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ color: "#333", fontWeight: 500 }}
            />
          </ListItemButton>
        ))}
      </List>

      {/* Profile Section */}
      <Divider />
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          bgcolor: "#f9f9f9",
          flexShrink: 0,
          borderTop: "1px solid #eee",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar sx={{ bgcolor: "#4caf50" }}>
            {firstName.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="body1" fontWeight="600">
              {firstName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              View Profile
            </Typography>
          </Box>
        </Box>

        {/* Logout Button */}
        <Button
          variant="outlined"
          startIcon={<LogoutOutlined />}
          sx={{
            mt: 1.5,
            textTransform: "none",
            borderColor: "#d32f2f",
            color: "#d32f2f",
            "&:hover": {
              backgroundColor: "#fdecea",
              borderColor: "#b71c1c",
            },
            width: "100%",
            borderRadius: 2,
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  // Conditional rendering of pages
  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                bgcolor: "#F1F8E9",
                color: "#33691E",
              }}
            >
              <Typography fontWeight="600">Total Products</Typography>
              <Typography variant="h4" mt={1}>
                245
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                bgcolor: "#E3F2FD",
                color: "#0D47A1",
              }}
            >
              <Typography fontWeight="600">Orders Pending</Typography>
              <Typography variant="h4" mt={1}>
                12
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                bgcolor: "#FFF3E0",
                color: "#E65100",
              }}
            >
              <Typography fontWeight="600">Revenue</Typography>
              <Typography variant="h4" mt={1}>
                ₹1.2L
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                bgcolor: "#FCE4EC",
                color: "#880E4F",
              }}
            >
              <Typography fontWeight="600">Suppliers</Typography>
              <Typography variant="h4" mt={1}>
                18
              </Typography>
            </Box>
          </Box>
        );
      case "Available":
        return <Available />;

      case "Dispatch":
        return <Dispatch/>;

      case "Reports":
        return <Reports/>;

      case "Settings":
        return <Settings/>

        case "Alert":
          return <Alert/>

      default:
        return (
          <Typography variant="h6" mt={2}>
            {activePage} page coming soon!
          </Typography>
        );
    }
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "linear-gradient(90deg, #4caf50, #2196f3)",
          color: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <ShoppingBasketRounded sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Welcome to Stockify
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #eee",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
          display: { xs: "none", sm: "block" },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        <Typography variant="h5" fontWeight="600" mb={2}>
          {activePage === "Dashboard"
            ? "Dashboard Overview"
            : activePage === "Available"
            ? "Available Items"
            :activePage ==="Dispatch"
            ? "Dispatch Management"
            : activePage==="Report"
            ? "Inventory Report"
             :activePage==="Settings"
             ?"Settings Page"
            :activePage==="Alert"
            ?"Alerts Shown"
          :activePage}
        </Typography>

        {renderPage()}
      </Box>
    </Box>
  );
}
