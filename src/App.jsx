import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import ProductDetailPage from './pages/testimonials/Testimonials';
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/aboutus/About";
import Services from './pages/services/Services';
import Blog from './pages/blog/Blog';

function App() {

  return (
    <div className="app">
      <div className="main-content">
        <Routes>
        
          <Route path="/" element={<Home />} />

          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<ProductDetailPage />} />
          <Route path="/Blog" element={<Blog />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
