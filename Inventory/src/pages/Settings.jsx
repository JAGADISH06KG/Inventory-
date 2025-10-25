import React, { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("user@example.com");
  const [name, setName] = useState("John Doe");
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Kolkata");

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    app: true,
    whatsapp: false,
  });

  const [autoBackup, setAutoBackup] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        padding: "24px",
        background: "linear-gradient(135deg,#f1f5f9,#e0f2fe)",
        fontFamily: "Inter, Segoe UI, sans-serif",
        color: "#0f172a",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "18px",
        }}
      >
        ⚙️ Settings & Preferences
      </h1>

      {/* Profile Settings */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Profile</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <div style={{ display: "flex", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "14px", color: "#475569" }}>
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #cbd5e1",
                }}
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>French</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "14px", color: "#475569" }}>
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #cbd5e1",
                }}
              >
                <option>Asia/Kolkata</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
                <option>Asia/Dubai</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Notification Preferences
        </h2>

        {[
          { key: "email", label: "Email Alerts" },
          { key: "sms", label: "SMS Notifications" },
          { key: "app", label: "In-App Notifications" },
          { key: "whatsapp", label: "WhatsApp Alerts" },
        ].map((n) => (
          <label
            key={n.key}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <span style={{ fontSize: "15px" }}>{n.label}</span>
            <input
              type="checkbox"
              checked={notifications[n.key]}
              onChange={() => handleNotificationChange(n.key)}
            />
          </label>
        ))}
      </div>

      {/* Account & Data */}
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Account & Data Control
        </h2>
        <div style={{ marginBottom: "12px" }}>
          <label>
            <input
              type="checkbox"
              checked={autoBackup}
              onChange={() => setAutoBackup(!autoBackup)}
              style={{ marginRight: "8px" }}
            />
            Enable Auto Backup
          </label>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>
            <input
              type="checkbox"
              checked={analytics}
              onChange={() => setAnalytics(!analytics)}
              style={{ marginRight: "8px" }}
            />
            Share anonymous usage analytics
          </label>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            style={{
              background: "linear-gradient(135deg,#3b82f6,#2563eb)",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Change Password
          </button>
          <button
            style={{
              background: "linear-gradient(135deg,#dc2626,#b91c1c)",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div style={{ textAlign: "right", marginTop: "12px" }}>
        <button
          onClick={handleSave}
          style={{
            background: saved
              ? "linear-gradient(135deg,#16a34a,#22c55e)"
              : "linear-gradient(135deg,#3b82f6,#2563eb)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
        >
          {saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
