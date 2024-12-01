import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
