import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
  return (
    /* Increased spacing: pt-32 for mobile, lg:pt-48 for desktop */
    <div className="pt-32 lg:pt-48 transition-all duration-500">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col lg:flex-row items-center bg-white overflow-hidden">
        
        {/* Left Side: Branding & CTA */}
        <div className="flex-1 px-6 md:px-16 lg:px-24 py-12 lg:py-0 text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-[1000] uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Direct USA Imports 🇺🇸
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] italic tracking-tighter uppercase leading-[0.85] text-gray-900 mb-8">
            EEDREESS <br />
            <span className="text-blue-600">GADGETS.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md mb-12 leading-relaxed">
            Premium Apple and Samsung products sourced directly from the US. No middlemen. Best prices in Lagos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/store" 
              className="group bg-black text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all active:scale-95 shadow-2xl shadow-gray-100"
            >
              Enter Store
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/shipping" 
              className="bg-white text-black border-2 border-gray-100 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center hover:border-black transition-all"
            >
              Shipping Info
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image Area */}
        {/* I used a high-res URL here to keep your code clean and fast */}
        <div className="flex-1 w-full h-[45vh] lg:h-[70vh] bg-[#f5f5f7] rounded-[3rem] lg:rounded-l-[5rem] lg:rounded-r-none relative order-1 lg:order-2 flex items-center justify-center mx-4 lg:mx-0">
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Latest iPhone 15 Pro"
            className="w-full h-full object-contain p-8 lg:p-20 transition-transform duration-1000 hover:scale-105"
          />
          
          <div className="absolute top-10 right-6 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/50 animate-bounce hidden md:block">
            <p className="text-[9px] font-black uppercase text-blue-600 tracking-tighter">Verified Stock</p>
            <p className="text-xl font-black text-gray-900">Lagos Office</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-[#f5f5f7] mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-50 flex flex-col items-start shadow-sm hover:shadow-xl transition-all group">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-gray-900">100% US Spec</h3>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">Every device is factory unlocked and sourced directly from Texas and Florida hubs.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-gray-50 flex flex-col items-start shadow-sm hover:shadow-xl transition-all group">
            <div className="p-4 bg-green-50 text-green-600 rounded-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-gray-900">Instant Delivery</h3>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">Order before 12 PM for same-day delivery across Lagos or pickup at our office.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-gray-50 flex flex-col items-start shadow-sm hover:shadow-xl transition-all group">
            <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-gray-900">Authentic Only</h3>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">We don't deal with clones or refurbished parts. 100% original hardware guaranteed.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;