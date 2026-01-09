import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/store') navigate('/store');
  };

  return (
    // Height reduced from h-32 to h-16 (mobile) and h-20 (desktop)
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 h-16 md:h-20 flex items-center px-4 md:px-10 justify-between transition-all">
      
      {/* Brand - Made bolder and tighter */}
      <Link to="/" className="text-xl md:text-2xl font-[1000] tracking-tighter uppercase italic leading-none shrink-0">
        EEDREESS<span className="text-blue-600">.</span>
      </Link>
      
      {/* Search Bar - Slimmer height */}
      <div className="flex-1 max-w-sm mx-4 md:mx-10 relative hidden sm:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input 
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100/50 border border-transparent focus:border-blue-600/20 rounded-xl py-2 pl-10 pr-4 outline-none text-xs font-bold transition-all"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Nav Links - Extra Bold (font-black) */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex gap-4 md:gap-6 text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.15em]">
          <Link to="/store" className="hover:text-blue-600 transition-colors">Store</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        </div>
        
        {/* Mobile Search Icon (Since bar is hidden on mobile) */}
        <button 
          onClick={() => navigate('/store')}
          className="sm:hidden p-2 bg-gray-100 rounded-full"
        >
          <Search size={18} strokeWidth={3} />
        </button>

        <Link to="/store" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ShoppingBag size={20} strokeWidth={2.5} className="text-gray-900" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;