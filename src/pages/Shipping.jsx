import React from 'react';
import { Plane, ShieldCheck, Clock } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4">USA <span className="text-blue-600 text-6xl">TO</span> LAGOS.</h2>
      <p className="text-gray-500 font-medium mb-12">How we get your gadgets home safely.</p>
      
      <div className="grid gap-6">
        <div className="bg-white p-8 rounded-[3rem] border border-gray-100 flex items-start gap-6">
          <div className="bg-blue-50 p-4 rounded-2xl text-blue-600"><Plane /></div>
          <div>
            <h3 className="font-bold text-xl mb-1 text-gray-900">Weekly Shipments</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We ship every Friday from Houston, Texas. Your items are handled with 100% care.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[3rem] border border-gray-100 flex items-start gap-6">
          <div className="bg-green-50 p-4 rounded-2xl text-green-600"><Clock /></div>
          <div>
            <h3 className="font-bold text-xl mb-1 text-gray-900">7-Day Arrival</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Items typically arrive in Lagos within 7 business days for pickup or doorstep delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;