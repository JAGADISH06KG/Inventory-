import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

const Report = () => {
  const [search, setSearch] = useState("");

  // Mock inventory
  const inventory = [
    { id: 1, name: "Laptop", category: "Electronics", stock: 30, sold: 12, price: 45000 },
    { id: 2, name: "Chair", category: "Furniture", stock: 15, sold: 8, price: 2200 },
    { id: 3, name: "Pen", category: "Stationery", stock: 150, sold: 90, price: 20 },
    { id: 4, name: "Monitor", category: "Electronics", stock: 20, sold: 10, price: 12000 },
    { id: 5, name: "Table", category: "Furniture", stock: 10, sold: 6, price: 4500 },
  ];

  const filteredData = inventory.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.category.toLowerCase().includes(search.toLowerCase())
  );

  // Chart Data
  const categoryData = Object.values(
    filteredData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = { category: item.category, stock: 0, sold: 0 };
      acc[item.category].stock += item.stock;
      acc[item.category].sold += item.sold;
      return acc;
    }, {})
  );

  const pieData = Object.values(
    filteredData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = { name: item.category, value: 0 };
      acc[item.category].value += item.stock;
      return acc;
    }, {})
  );

  const COLORS = ["#3b82f6", "#22c55e", "#f97316", "#a855f7", "#eab308"];

  // KPIs
  const totalItems = filteredData.length;
  const totalStock = filteredData.reduce((a, b) => a + b.stock, 0);
  const totalValue = filteredData.reduce((a, b) => a + b.price * b.stock, 0);
  const lowStock = filteredData.filter((i) => i.stock < 20).length;

  const handleExport = () => {
    const csv = [
      ["ID", "Name", "Category", "Stock", "Sold", "Price"],
      ...filteredData.map((i) => [i.id, i.name, i.category, i.stock, i.sold, i.price]),
    ]
      .map((r) => r.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inventory_report.csv";
    a.click();
  };

  const handlePrint = () => window.print();

  const Card = ({ title, value, color }) => (
    <div
      style={{
        flex: 1,
        background: "white",
        padding: "20px",
        borderRadius: "14px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        textAlign: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <h3 style={{ color: "#64748b", marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: "22px", fontWeight: "bold", color }}>{value}</p>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "24px",
        background: "linear-gradient(135deg,#f1f5f9,#e0f2fe)",
        fontFamily: "Inter, Segoe UI, sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto", // ✅ Enables vertical scroll
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
          position: "sticky",
          top: 0,
          background: "linear-gradient(135deg,#f1f5f9,#e0f2fe)",
          zIndex: 5,
          paddingBottom: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#0f172a",
            letterSpacing: "0.5px",
          }}
        >
          📊 Inventory Report
        </h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="🔍 Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              width: "230px",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <button
            onClick={handleExport}
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
            Export CSV
          </button>
          <button
            onClick={handlePrint}
            style={{
              background: "linear-gradient(135deg,#10b981,#059669)",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Print
          </button>
        </div>
      </div>

      {/* KPI Section */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          marginBottom: "18px",
          flexWrap: "wrap",
        }}
      >
        <Card title="Total Items" value={totalItems} color="#1e293b" />
        <Card title="Total Stock" value={totalStock} color="#2563eb" />
        <Card title="Low Stock" value={lowStock} color="#dc2626" />
        <Card title="Total Value" value={`₹${totalValue.toLocaleString()}`} color="#16a34a" />
      </div>

      {/* Charts */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          flex: 1,
          minHeight: "320px",
          flexWrap: "wrap",
        }}
      >
        {/* Bar Chart */}
        <div
          style={{
            flex: 1.2,
            background: "white",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
          }}
        >
          <h3 style={{ color: "#0f172a", marginBottom: "8px" }}>📦 Stock vs Sold</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="category" tick={{ fill: "#334155" }} />
              <YAxis tick={{ fill: "#334155" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              <Bar dataKey="sold" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div
          style={{
            flex: 0.8,
            background: "white",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            minWidth: "280px",
          }}
        >
          <h3 style={{ color: "#0f172a", marginBottom: "8px" }}>🧾 Category Share</h3>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name }) => name}
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          marginTop: "18px",
          background: "white",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ color: "#0f172a", marginBottom: "10px" }}>📋 Inventory Details</h3>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#e2e8f0", textAlign: "left" }}>
                {["ID", "Name", "Category", "Stock", "Sold", "Price"].map((h) => (
                  <th key={h} style={{ padding: "8px", color: "#1e293b" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr
                  key={item.id}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#f9fafb" : "white",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <td style={{ padding: "8px" }}>{item.id}</td>
                  <td style={{ padding: "8px" }}>{item.name}</td>
                  <td style={{ padding: "8px" }}>{item.category}</td>
                  <td style={{ padding: "8px" }}>{item.stock}</td>
                  <td style={{ padding: "8px" }}>{item.sold}</td>
                  <td style={{ padding: "8px" }}>₹{item.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
