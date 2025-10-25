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
<<<<<<< HEAD
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

=======
} from "@mui/material";

>>>>>>> 64ee0ac5eb3a546dd729aa602bb954e866f9096b
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
<<<<<<< HEAD
    { id: 1, category: "", subcategory: "", item: "", available: "", quantity: "" },
  ]);
  const [date, setDate] = useState("");
  const [rowCount, setRowCount] = useState(1);

=======
    { id: 1, category: "", subcategory: "", item: "", available: "N/A", quantity: "" },
  ]);

  const [date, setDate] = useState("");
  const [rowCount, setRowCount] = useState(1);

  // Add new rows dynamically
>>>>>>> 64ee0ac5eb3a546dd729aa602bb954e866f9096b
  const handleAddRows = () => {
    const newRows = [...rows];
    for (let i = 0; i < rowCount; i++) {
      newRows.push({
        id: newRows.length + 1,
        category: "",
        subcategory: "",
        item: "",
<<<<<<< HEAD
        available: "",
=======
        available: "N/A",
>>>>>>> 64ee0ac5eb3a546dd729aa602bb954e866f9096b
        quantity: "",
      });
    }
    setRows(newRows);
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 64ee0ac5eb3a546dd729aa602bb954e866f9096b
    </Container>
  );
};

<<<<<<< HEAD
export default Dispatch;
=======
export default Dispatch;
>>>>>>> 64ee0ac5eb3a546dd729aa602bb954e866f9096b
