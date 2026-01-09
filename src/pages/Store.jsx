import React, { useState } from 'react';
import { products } from '../data/products';

const Store = ({ searchQuery }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // These are the buttons that will show up
  const filters = ["All", "Apple", "Samsung", "Laptops"];

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // This logic checks if the filter matches either the Brand or the Category
    const matchesFilter = activeFilter === "All" || 
                         p.brand === activeFilter || 
                         p.category === activeFilter;
                         
    return matchesSearch && matchesFilter;
  });

  const sendWhatsApp = (product) => {
    const phone = "2348123456789"; // Replace with your number
    const message = `Hello Eedreess, I'm interested in the ${product.name} (₦${product.price}). Is it available?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-10">Lagos Stock</h2>
      
      {/* Dynamic Filter Bar */}
      <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-10 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${
              activeFilter === f 
              ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200' 
              : 'bg-white text-gray-400 border border-gray-100 hover:border-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map(item => (
          <div key={item.id} className="group">
            <div className="relative aspect-square bg-white rounded-[3.5rem] overflow-hidden border border-gray-50 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain p-10 transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
            
            <div className="mt-8 px-4">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.25em]">{item.brand}</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-900 tracking-tight">{item.name}</h3>
              <p className="text-gray-400 text-sm mt-2 font-medium italic">{item.specs}</p>
              
              <div className="flex items-center justify-between mt-8">
                <span className="text-2xl font-black text-gray-900">₦{item.price}</span>
                <button 
                  onClick={() => sendWhatsApp(item)}
                  className="bg-black text-white px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all active:scale-95 shadow-lg"
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