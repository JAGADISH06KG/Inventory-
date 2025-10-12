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
} from "@mui/material";

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
    { id: 1, category: "", subcategory: "", item: "", available: "N/A", quantity: "" },
  ]);

  const [date, setDate] = useState("");
  const [rowCount, setRowCount] = useState(1);

  // Add new rows dynamically
  const handleAddRows = () => {
    const newRows = [...rows];
    for (let i = 0; i < rowCount; i++) {
      newRows.push({
        id: newRows.length + 1,
        category: "",
        subcategory: "",
        item: "",
        available: "N/A",
        quantity: "",
      });
    }
    setRows(newRows);
  };

  // Delete a row
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Handle dropdown & input changes
  const handleChange = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value, ...(field === "category" ? { subcategory: "", item: "" } : {}), ...(field === "subcategory" ? { item: "" } : {}) } : row
    );
    setRows(updatedRows);
  };

  // Handle form submit
  const handleSubmit = () => {
    console.log("Dispatch Data:", { date, rows });
    alert("Dispatch Submitted! Check console for data.");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Title */}
      <Typography variant="h4" align="center" gutterBottom>
        DISPATCH
      </Typography>

      {/* Controls */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
        <TextField
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="number"
          label="No of rows to be added"
          value={rowCount}
          onChange={(e) => setRowCount(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddRows}>
          Add
        </Button>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#0d3b66" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>SNo</TableCell>
              <TableCell sx={{ color: "white" }}>Category</TableCell>
              <TableCell sx={{ color: "white" }}>Subcategory</TableCell>
              <TableCell sx={{ color: "white" }}>Item</TableCell>
              <TableCell sx={{ color: "white" }}>Available</TableCell>
              <TableCell sx={{ color: "white" }}>Quantity</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>

                {/* Category */}
                <TableCell>
                  <Select
                    value={row.category}
                    displayEmpty
                    fullWidth
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

                {/* Subcategory */}
                <TableCell>
                  <Select
                    value={row.subcategory}
                    displayEmpty
                    fullWidth
                    disabled={!row.category}
                    onChange={(e) => handleChange(row.id, "subcategory", e.target.value)}
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

                {/* Item */}
                <TableCell>
                  <Select
                    value={row.item}
                    displayEmpty
                    fullWidth
                    disabled={!row.subcategory}
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

                {/* Available */}
                <TableCell>{row.available}</TableCell>

                {/* Quantity */}
                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    fullWidth
                    value={row.quantity}
                    onChange={(e) => handleChange(row.id, "quantity", e.target.value)}
                  />
                </TableCell>

                {/* Delete */}
                <TableCell>
                  <Button
                    variant="contained"
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

      {/* Submit Button */}
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit Dispatch
        </Button>
      </div>
    </Container>
  );
};

export default Dispatch;
