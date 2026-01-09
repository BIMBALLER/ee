import React from 'react';
import { Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-6">
        Upgrade Your <br /> <span className="text-blue-600">Phone Game.</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-tight">Our Story</h3>
          <p className="text-gray-500 leading-relaxed font-medium">
            EedreessGadget started in Lagos with a simple mission: to provide high-quality cases and 
            chargers. Today, we have expanded into <strong>Direct USA Imports</strong>. 
          </p>
          <p className="text-gray-500 leading-relaxed font-medium">
            We source every device directly from the US to ensure factory-unlocked, premium quality 
            products for the Nigerian market at the best possible prices.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { icon: <Globe />, title: "USA Sourcing", desc: "Handpicked US-spec inventory." },
            { icon: <ShieldCheck />, title: "Authenticity", desc: "100% genuine products only." },
            { icon: <CheckCircle2 />, title: "Lagos Hub", desc: "Fast pickup and delivery." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 flex gap-4 items-center transition-hover hover:shadow-xl">
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest">{item.title}</h4>
                <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;