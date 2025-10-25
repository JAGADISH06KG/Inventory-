import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";

// Mock available stock data (you can replace with actual values)
const stockData = {
  Amul: 50,
  Arokya: 30,
  Hatsun: 40,
  "Dairy Milk": 20,
  KitKat: 25,
  Perk: 10,
  "Butter": 15,
  "Cheese": 18,
  "Paneer": 12,
  "Coca Cola": 40,
  "Pepsi": 35,
  "Sprite": 25,
  "Real": 22,
  "Tropicana": 28,
  "Minute Maid": 18,
  "Laptop": 5,
  "Desktop": 8,
  "Mouse": 20,
  "Samsung": 12,
  "iPhone": 10,
  "OnePlus": 15,
  "Toor Dal": 60,
  "Urad Dal": 55,
  "Chana Dal": 48,
  "Basmati": 35,
  "Sona Masoori": 45,
  "Raw Rice": 38,
  "Potato": 70,
  "Tomato": 55,
  "Onion": 65,
};

// Data mapping for categories, subcategories, and items
const categoryData = {
  Dairy: {
    Milk: ["Amul", "Arokya", "Hatsun"],
    Chocolates: ["Dairy Milk", "KitKat", "Perk"],
    "Other Dairy Products": ["Butter", "Cheese", "Paneer"],
  },
  Beverages: {
    SoftDrinks: ["Coca Cola", "Pepsi", "Sprite"],
    Juices: ["Real", "Tropicana", "Minute Maid"],
  },
  Stationary: {
    Writing: ["Pen", "Pencil", "Marker"],
    Paper: ["Notebook", "A4 Sheets", "Diary"],
  },
  Electronics: {
    Computers: ["Laptop", "Desktop", "Mouse"],
    Mobiles: ["Samsung", "iPhone", "OnePlus"],
  },
  Groceries: {
    Pulses: ["Toor Dal", "Urad Dal", "Chana Dal"],
    Rice: ["Basmati", "Sona Masoori", "Raw Rice"],
    Vegetables: ["Potato", "Tomato", "Onion"],
  },
};

const Dispatch = () => {
  const [rows, setRows] = useState([
    { id: 1, category: "", subcategory: "", item: "", available: "", quantity: "" },
  ]);
  const [date, setDate] = useState("");
  const [rowCount, setRowCount] = useState(1);

  const handleAddRows = () => {
    const newRows = [...rows];
    for (let i = 0; i < rowCount; i++) {
      newRows.push({
        id: newRows.length + 1,
        category: "",
        subcategory: "",
        item: "",
        available: "",
        quantity: "",
      });
    }
    setRows(newRows);
  };

  const handleDelete = (id) => setRows(rows.filter((r) => r.id !== id));

  const handleChange = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        const updated = { ...row, [field]: value };
        if (field === "category") {
          updated.subcategory = "";
          updated.item = "";
          updated.available = "";
        }
        if (field === "subcategory") {
          updated.item = "";
          updated.available = "";
        }
        if (field === "item") {
          updated.available = stockData[value] || "N/A";
        }
        return updated;
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleSubmit = () => {
    if (!date) return alert("Please select a dispatch date!");
    const incomplete = rows.some(
      (r) => !r.category || !r.subcategory || !r.item || !r.quantity
    );
    if (incomplete) return alert("Please fill all required fields before submitting.");

    console.log("Dispatch Data Submitted:", { date, rows });
    alert("✅ Dispatch successfully recorded! Check console for details.");
  };

  const totalItems = rows.reduce(
    (sum, r) => sum + (parseInt(r.quantity) || 0),
    0
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, boxShadow: 5, borderRadius: 3 }}>
        <Typography
          variant="h4"
          fontWeight="600"
          textAlign="center"
          gutterBottom
          sx={{ color: "#0d3b66" }}
        >
          Dispatch Management
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Top Controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <TextField
            type="date"
            label="Dispatch Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="number"
            label="No. of Rows"
            value={rowCount}
            onChange={(e) => setRowCount(e.target.value)}
            sx={{ width: 180 }}
          />
          <Button
            variant="contained"
            onClick={handleAddRows}
            sx={{
              backgroundColor: "#0d3b66",
              "&:hover": { backgroundColor: "#145ca8" },
            }}
          >
            + Add
          </Button>
        </Box>

        {/* Table Section */}
        <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#0d3b66" }}>
              <TableRow>
                {[
                  "S.No",
                  "Category",
                  "Subcategory",
                  "Item",
                  "Available",
                  "Quantity",
                  "Actions",
                ].map((head) => (
                  <TableCell key={head} sx={{ color: "white", fontWeight: "bold" }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Select
                      fullWidth
                      displayEmpty
                      value={row.category}
                      onChange={(e) => handleChange(row.id, "category", e.target.value)}
                    >
                      <MenuItem value="">Select Category</MenuItem>
                      {Object.keys(categoryData).map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>

                  <TableCell>
                    <Select
                      fullWidth
                      displayEmpty
                      disabled={!row.category}
                      value={row.subcategory}
                      onChange={(e) =>
                        handleChange(row.id, "subcategory", e.target.value)
                      }
                    >
                      <MenuItem value="">Select Subcategory</MenuItem>
                      {row.category &&
                        Object.keys(categoryData[row.category]).map((sub) => (
                          <MenuItem key={sub} value={sub}>
                            {sub}
                          </MenuItem>
                        ))}
                    </Select>
                  </TableCell>

                  <TableCell>
                    <Select
                      fullWidth
                      displayEmpty
                      disabled={!row.subcategory}
                      value={row.item}
                      onChange={(e) => handleChange(row.id, "item", e.target.value)}
                    >
                      <MenuItem value="">Select Item</MenuItem>
                      {row.category &&
                        row.subcategory &&
                        categoryData[row.category][row.subcategory].map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                    </Select>
                  </TableCell>

                  <TableCell>{row.available || "N/A"}</TableCell>

                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      fullWidth
                      value={row.quantity}
                      onChange={(e) => handleChange(row.id, "quantity", e.target.value)}
                    />
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Summary & Submit */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#0d3b66" }}>
            Total Dispatch Quantity: {totalItems}
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ px: 4, py: 1 }}
          >
            Submit Dispatch
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default Dispatch;