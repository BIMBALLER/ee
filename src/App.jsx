import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About'; // 1. CHECK THIS IMPORT
import Shipping from './pages/Shipping';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col font-sans">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} /> {/* 2. CHECK THIS ROUTE */}
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;