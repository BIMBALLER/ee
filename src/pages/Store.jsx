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
    <div className="pt-28 md:pt-40 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-slate-950">Lagos Stock</h2>
        <div className="flex items-center gap-3 mt-2">
          <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">Live Inventory</p>
        </div>
      </div>

      <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`whitespace-nowrap px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
              activeFilter === f ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white text-slate-500 border-slate-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filtered.map(item => (
          <div key={item.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border-2 border-slate-50 p-5 hover:border-blue-500 transition-all duration-300 shadow-sm">
            <div className="relative aspect-square bg-slate-50 rounded-[2rem] overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain p-6 md:p-12 transition-transform duration-700 group-hover:scale-110" />
            </div>
            
            <div className="mt-6 flex flex-col flex-grow">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">{item.brand}</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight leading-tight">{item.name}</h3>
              <p className="text-slate-500 text-base mt-2 font-bold leading-relaxed">{item.specs}</p>
              
              <div className="mt-auto pt-6 flex flex-col gap-4">
                <span className="text-3xl font-black text-slate-950">₦{item.price}</span>
                <button 
                  onClick={() => sendWhatsApp(item)}
                  className="w-full bg-slate-950 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  Order Via WhatsApp
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