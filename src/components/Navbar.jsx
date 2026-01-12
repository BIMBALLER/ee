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
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-200 h-20 flex items-center px-4 md:px-10 justify-between transition-all">
      <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-slate-950">
        EEDREESS<span className="text-blue-600">.</span>
      </Link>
      
      <div className="flex-1 max-w-sm mx-4 md:mx-10 relative hidden sm:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
        <input 
          type="text"
          placeholder="Search gadgets..."
          className="w-full bg-slate-100 border border-slate-300 focus:border-blue-600 rounded-xl py-2.5 pl-12 pr-4 outline-none text-sm font-bold text-slate-900 transition-all"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="flex items-center gap-3 md:gap-8">
        <div className="flex gap-4 md:gap-8 text-sm md:text-base font-black uppercase tracking-wider text-slate-950">
          <Link to="/store" className="hover:text-blue-600 p-2">Store</Link>
          <Link to="/about" className="hover:text-blue-600 p-2">About</Link>
        </div>
        
        <button onClick={() => navigate('/store')} className="sm:hidden p-3 bg-slate-100 rounded-full text-slate-950">
          <Search size={22} strokeWidth={3} />
        </button>

        <Link to="/store" className="relative p-3 hover:bg-slate-100 rounded-full text-slate-950">
          <ShoppingBag size={24} strokeWidth={2.5} />
          <span className="absolute top-2 right-2 h-3 w-3 bg-blue-600 rounded-full border-2 border-white"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;