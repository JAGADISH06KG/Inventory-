import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Available from "./pages/Available";
import Dispatch from "./pages/Dispatch";
import Alert from "./pages/Alert";
import Report from "./pages/Reports";
import Settings from "./pages/Settings";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/available" element={<Available />} />
        <Route path="/dispatch" element={<Dispatch/>}/>
        <Route path="/alert" element={<Alert/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
