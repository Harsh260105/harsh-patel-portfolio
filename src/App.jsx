import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";


import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <Router basename="/harsh-patel-portfolio">
      <main className="bg-slate-100 dark:bg-gray-900 min-h-screen">
        <ThemeToggle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTop />
      </main>
    </Router>
  );
};

export default App;
