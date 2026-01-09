import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/store') navigate('/store');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center px-6 justify-between">
      <Link to="/" className="text-2xl font-black tracking-tighter uppercase italic">
        EEDREESS<span className="text-blue-600">.</span>
      </Link>
      
      <div className="flex-1 max-w-md mx-8 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text"
          placeholder="Search gadgets..."
          className="w-full bg-gray-100 rounded-2xl py-3 pl-12 pr-4 outline-none text-sm"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
        <Link to="/store">Store</Link>
        <Link to="/shipping">Shipping</Link>
      </div>
    </nav>
  );
};

export default Navbar;