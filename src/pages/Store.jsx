import React, { useState } from 'react';
import { products } from '../data/products';

const Store = ({ searchQuery }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Apple", "Samsung", "Laptops"];

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || p.brand === activeFilter || p.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const sendWhatsApp = (product) => {
    const phone = "2349025254343"; 
    const message = `Hello Eedreess, I'm interested in the ${product.name} (₦${product.price}). Is it available?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Responsive Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase text-gray-900">
          Lagos Stock
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            Live Inventory
          </p>
        </div>
      </div>

      {/* Scrollable Filter Bar - Fixed for Mobile */}
      <div className="flex gap-2 md:gap-3 mb-8 md:mb-12 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`whitespace-nowrap px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
              activeFilter === f 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'bg-white text-gray-400 border border-gray-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid: 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
        {filtered.map(item => (
          <div key={item.id} className="group flex flex-col h-full">
            {/* Card Container */}
            <div className="relative aspect-square bg-white rounded-2xl md:rounded-[3.5rem] overflow-hidden border border-gray-50 shadow-sm transition-all duration-500">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain p-4 md:p-10 transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
            {/* Content Container - Flex Grow keeps buttons aligned */}
            <div className="mt-4 md:mt-8 px-1 md:px-4 flex flex-col flex-grow">
              <span className="text-[8px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest">
                {item.brand}
              </span>
              <h3 className="text-sm md:text-2xl font-bold mt-1 text-gray-900 tracking-tight line-clamp-1">
                {item.name}
              </h3>
              <p className="hidden md:block text-gray-400 text-sm mt-2 font-medium italic">
                {item.specs}
              </p>
              
              <div className="mt-auto pt-4 flex flex-col gap-3">
                <span className="text-lg md:text-2xl font-black text-gray-900">
                  ₦{item.price}
                </span>
                <button 
                  onClick={() => sendWhatsApp(item)}
                  className="w-full bg-black text-white py-3 md:py-4 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all active:scale-95"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;