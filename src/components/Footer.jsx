import React from 'react';
import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = "2348123456789"; // REPLACE WITH YOUR NUMBER
  const instagramHandle = "eedreessgadgets"; // REPLACE WITH YOUR IG HANDLE

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-black tracking-tighter uppercase italic mb-6 block">
              EEDREESS<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
              Direct USA imports to Lagos. We provide premium Apple and Samsung gadgets with zero middlemen. 
              Upgrade your phone game today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/store" className="hover:text-blue-600 transition-colors">Store</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-600 transition-colors">Shipping</Link></li>
            </ul>
          </div>

          {/* Contact/Socials */}
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                className="flex items-center justify-between group bg-gray-50 p-4 rounded-2xl hover:bg-green-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-green-600" />
                  <span className="text-sm font-bold">WhatsApp</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-300 group-hover:text-green-600 transition-colors" />
              </a>

              <a 
                href={`https://instagram.com/${instagramHandle}`} 
                target="_blank" 
                className="flex items-center justify-between group bg-gray-50 p-4 rounded-2xl hover:bg-pink-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={20} className="text-pink-600" />
                  <span className="text-sm font-bold">Instagram</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-300 group-hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 text-center">
            © 2026 EEDREESS GADGETS LAGOS
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Houston, TX</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Lagos, NG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;