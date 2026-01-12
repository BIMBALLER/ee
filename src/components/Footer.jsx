import React from 'react';
import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = "2349025254343"; 
  const instagramHandle = "eedreessgadgets"; 

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="text-4xl font-black tracking-tighter uppercase italic mb-6 block text-slate-950">
              EEDREESS<span className="text-blue-600">.</span>
            </Link>
            <p className="text-slate-700 max-w-sm text-lg font-bold leading-relaxed">
              Direct USA imports to Lagos. Premium gadgets with zero middlemen. Upgrade today.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-widest text-slate-950 mb-6">Explore</h4>
            <ul className="space-y-4 text-base font-bold uppercase tracking-widest text-slate-700">
              <li><Link to="/store" className="hover:text-blue-600 transition-colors">Store</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-600 transition-colors">Shipping</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-widest text-slate-950 mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="flex items-center justify-between bg-white border border-slate-200 p-5 rounded-2xl hover:border-green-500 transition-all">
                <div className="flex items-center gap-3">
                  <MessageCircle size={24} className="text-green-600" />
                  <span className="text-base font-black text-slate-900">WhatsApp</span>
                </div>
                <ArrowUpRight size={20} className="text-slate-300" />
              </a>
              <a href={`https://instagram.com/${instagramHandle}`} target="_blank" className="flex items-center justify-between bg-white border border-slate-200 p-5 rounded-2xl hover:border-pink-500 transition-all">
                <div className="flex items-center gap-3">
                  <Instagram size={24} className="text-pink-600" />
                  <span className="text-base font-black text-slate-900">Instagram</span>
                </div>
                <ArrowUpRight size={20} className="text-slate-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">© 2026 EEDREESS GADGETS LAGOS</p>
          <div className="flex gap-8 text-xs font-black uppercase text-slate-950">
            <span>Houston, TX</span>
            <span>Lagos, NG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;