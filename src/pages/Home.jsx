import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-32 px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 uppercase">
        EEDREESS Gadgets <br /> <span className="text-blue-600">In Lagos.</span>
      </h1>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto font-medium">
        Directly imported Apple and Samsung products. No middleman. Best prices in Nigeria.
      </p>
      <Link to="/store" className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
        Enter Store
      </Link>
    </div>
  );
};

export default Home;