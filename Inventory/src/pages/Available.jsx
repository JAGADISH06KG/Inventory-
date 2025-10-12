import React, { useState } from "react";

function Available() {
  // Stock data
  const [stockData] = useState([
    { category: "Diary", subCategory: "green packet", item: "Milk", quantity: 2 },
    { category: "Diary", subCategory: "orange", item: "Milk", quantity: 2 },
    { category: "Candies", subCategory: "-", item: "Chocolate", quantity: 2 },
    { category: "Diary", subCategory: "blue packet", item: "Milk", quantity: 2 },
    { category: "Diary", subCategory: "red packet", item: "Milk", quantity: 4 },
     { category: "Vegetables", subCategory: "-", item: "onion", quantity: "20kg"},
     { category: "Vegetables", subCategory: "-", item: "Tomato", quantity: "20kg"},
     { category: "Stationary", subCategory: "-", item: "pencil", quantity: 50},
     { category: "cleaning needs", subCategory: "-", item: "happic", quantity: 50},
     { category: "cleaning needs", subCategory: "-", item: "lizol", quantity: 50},
      { category: "spices", subCategory: "-", item: "cinnamon", quantity: 50},
      { category: "spices", subCategory: "-", item: "cardamom", quantity: 50},
      { category: "spices", subCategory: "-", item: "cloves", quantity: 50},
      { category: "Bakery", subCategory: "-", item: "bread", quantity: "50 packets"},
      
      

      





  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(stockData);

  // Handle search
  const handleSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    if (term === "") {
      setFilteredData(stockData); // reset if input empty
    } else {
      const filtered = stockData.filter(
        (item) =>
          item.category.toLowerCase().includes(term) ||
          item.subCategory.toLowerCase().includes(term) ||
          item.item.toLowerCase().includes(term)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div
          style={{
            background: "#0f4c75",
            color: "white",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>INVENTORY MANAGEMENT SYSTEM</h2>
          <div>
            <select style={{ marginRight: "10px", padding: "5px" }}>
              <option>RMKEC</option>
              <option>RMKCET</option>
            </select>
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>AVAILABLE STOCK</h2>

          {/* Search */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Enter item name / Category name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "8px",
                width: "300px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: "8px 16px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>

          {/* Table */}
          <table
            style={{
              width: "90%",
              margin: "0 auto",
              borderCollapse: "collapse",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <thead style={{ background: "#0f4c75", color: "white" }}>
              <tr>
                <th style={tableHeader}>CATEGORY</th>
                <th style={tableHeader}>SUB CATEGORY</th>
                <th style={tableHeader}>ITEM</th>
                <th style={tableHeader}>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index}>
                    <td style={tableCell}>{row.category}</td>
                    <td style={tableCell}>{row.subCategory}</td>
                    <td style={tableCell}>{row.item}</td>
                    <td style={tableCell}>{row.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ padding: "10px", textAlign: "center" }}>
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Table styles
const tableHeader = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
  fontWeight: "bold",
};

const tableCell = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

export default Available;
