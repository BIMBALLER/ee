import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Shipping from './pages/Shipping';

// Fixes the issue where navigating to a new page starts at the bottom
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans antialiased">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;