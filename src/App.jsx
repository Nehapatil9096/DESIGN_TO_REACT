import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Customers from './pages/API_integration/Customers';  // Add this import
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="app">
      <div className="main-content">
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<Navigate to="/customers" />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
