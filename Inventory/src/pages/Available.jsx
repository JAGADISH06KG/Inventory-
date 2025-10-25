import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FilterAltOutlined, Search } from "@mui/icons-material";

// Sample available items data
const sampleItems = [
  {
    id: 1,
    category: "Dairy",
    subcategory: "Milk",
    item: "Amul",
    expiry: "2025-11-10",
    sustainDays: 10,
    quantity: 50,
  },
  {
    id: 2,
    category: "Beverages",
    subcategory: "Juices",
    item: "Real",
    expiry: "2025-11-05",
    sustainDays: 5,
    quantity: 25,
  },
  {
    id: 3,
    category: "Stationary",
    subcategory: "Writing",
    item: "Pen",
    expiry: "-",
    sustainDays: 100,
    quantity: 120,
  },
   {
    id: 4,
    category: "Cakes",
    subcategory: "Piece Cake",
    item: "Britania Cup",
    expiry: "2026-12-01",
    sustainDays: 100,
    quantity: 120,
  },
   {
    id: 5,
    category: "grocery",
    subcategory: "making",
    item: "flour",
    expiry: "2026-03-01",
    sustainDays: 100,
    quantity: 120,
  },
   {
    id: 6,
    category: "Fashion",
    subcategory: "Shoes",
    item: "Puma Shoe",
    expiry: "-",
    sustainDays: 100,
    quantity: 120,
  },
   {
    id: 7,
    category: "Stationary",
    subcategory: "Writing",
    item: "Pencil",
    expiry: "-",
    sustainDays: 100,
    quantity: 120,
  },
   {
    id: 8,
    category: "Stationary",
    subcategory: "Writing",
    item: "Stick Pen",
    expiry: "-",
    sustainDays: 100,
    quantity: 120,
  },
   {
    id: 9,
    category: "Stationary",
    subcategory: "Writing",
    item: "Colour Pencil",
    expiry: "-",
    sustainDays: 100,
    quantity: 120,
  },
];

const Available = () => {
  const [items, ] = useState(sampleItems);
  const [filterCategory, setFilterCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredItems = items.filter((item) => {
    return (
      (filterCategory ? item.category === filterCategory : true) &&
      (searchTerm
        ? item.item.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Available Items
      </Typography>

      {/* Filters */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 2,
          justifyContent: "center",
        }}
      >
        <Select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          displayEmpty
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Dairy">Dairy</MenuItem>
          <MenuItem value="Beverages">Beverages</MenuItem>
          <MenuItem value="Stationary">Stationary</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Groceries">Groceries</MenuItem>
        </Select>

        <TextField
          placeholder="Search Item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="outlined"
          startIcon={<FilterAltOutlined />}
          onClick={() => {
            setFilterCategory("");
            setSearchTerm("");
          }}
        >
          Clear Filters
        </Button>
      </Box>

      {/* Item Count */}
      <Typography variant="subtitle1" mb={1}>
        Total Items: {filteredItems.length}
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>SNo</TableCell>
              <TableCell sx={{ color: "white" }}>Category</TableCell>
              <TableCell sx={{ color: "white" }}>Subcategory</TableCell>
              <TableCell sx={{ color: "white" }}>Item</TableCell>
              <TableCell sx={{ color: "white" }}>Quantity</TableCell>
              <TableCell sx={{ color: "white" }}>Expiry Date</TableCell>
              <TableCell sx={{ color: "white" }}>Sustain Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No items found
                </TableCell>
              </TableRow>
            ) : (
              filteredItems.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.subcategory}</TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.expiry}</TableCell>
                  <TableCell>{row.sustainDays}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Available;
