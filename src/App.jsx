import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FormValidation from "./pages/formValidation/form";

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/form" />} />
          <Route
            path="/form"
            element={<FormValidation onSubmit={(data) => console.log(data)} />}
          />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
