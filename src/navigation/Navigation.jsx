import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Products,
  Services,
  Home, 
  About, 
  Projects, 
  Contact,
} from "../screens/index";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Route */}
        <Route path="contact" element={<Contact />} />  {/* Contact Route */}
        <Route path="projects" element={<Projects />} /> {/* Projects Route */}
        <Route path="about" element={<About />} />  {/* About Route */}
        <Route path="services" element={<Services />} />  {/* Services Route */}
        <Route path="products" element={<Products />} />  {/* Products Route */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
