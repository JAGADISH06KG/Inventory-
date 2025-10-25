import React, { useState } from "react";
import { Box, Typography, Switch, Button, Card, CardContent, Divider } from "@mui/material";
import { Mail, MessageSquare, BellRing, Package, AlertTriangle, Send } from "lucide-react";

const Alert = () => {
  const [alertSettings, setAlertSettings] = useState({
    email: true,
    sms: false,
    inApp: true,
  });

  const [alerts, ] = useState([
    {
      id: 1,
      type: "Expiring Product",
      product: "Dairy Milk 500ml",
      message: "Product will expire in 2 days.",
      status: "Pending",
      icon: <AlertTriangle color="#f59e0b" size={20} />,
    },
    {
      id: 2,
      type: "New Launch",
      product: "Energy Drink 250ml",
      message: "Launching next week – notify managers.",
      status: "Scheduled",
      icon: <Package color="#3b82f6" size={20} />,
    },
  ]);

  const handleToggle = (key) => {
    setAlertSettings({ ...alertSettings, [key]: !alertSettings[key] });
  };

  const sendAlerts = () => {
    alert("✅ Alerts have been sent via Email and SMS to the respective managers!");
  };

  return (
    <Box
      sx={{
        padding: "24px",
        background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography variant="h5" fontWeight="600" mb={3} display="flex" alignItems="center" gap={1}>
        <BellRing color="#2563eb" /> Alert Management
      </Typography>

      {/* Notification Preferences */}
      <Card
        sx={{
          borderRadius: "16px",
          padding: "16px",
          background: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="600" mb={2}>
          Notification Preferences
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <Mail color="#3b82f6" /> <Typography>Email Alerts</Typography>
          </Box>
          <Switch checked={alertSettings.email} onChange={() => handleToggle("email")} />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <MessageSquare color="#22c55e" /> <Typography>SMS Alerts</Typography>
          </Box>
          <Switch checked={alertSettings.sms} onChange={() => handleToggle("sms")} />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <BellRing color="#f59e0b" /> <Typography>In-App Alerts</Typography>
          </Box>
          <Switch checked={alertSettings.inApp} onChange={() => handleToggle("inApp")} />
        </Box>
      </Card>

      {/* Divider */}
      <Divider sx={{ mb: 3 }} />

      {/* Upcoming Alerts Section */}
      <Typography variant="h6" fontWeight="600" mb={2}>
        Active Alerts
      </Typography>

      {alerts.map((alert) => (
        <Card
          key={alert.id}
          sx={{
            borderRadius: "14px",
            mb: 2,
            background: "#ffffff",
            boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={1}>
                {alert.icon}
                <Box>
                  <Typography fontWeight="600">{alert.product}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {alert.message}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  background:
                    alert.status === "Pending"
                      ? "#fef3c7"
                      : alert.status === "Scheduled"
                      ? "#dbeafe"
                      : "#dcfce7",
                  color:
                    alert.status === "Pending"
                      ? "#b45309"
                      : alert.status === "Scheduled"
                      ? "#1d4ed8"
                      : "#166534",
                  px: 2,
                  py: 0.5,
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {alert.status}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}

      {/* Send Button */}
      <Box mt={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          startIcon={<Send />}
          onClick={sendAlerts}
          sx={{
            background: "linear-gradient(90deg, #2563eb, #1e40af)",
            color: "#fff",
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": { background: "linear-gradient(90deg, #1d4ed8, #1e3a8a)" },
          }}
        >
          Send Alerts Now
        </Button>
      </Box>
    </Box>
  );
};

export default Alert;
