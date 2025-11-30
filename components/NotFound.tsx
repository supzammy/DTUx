
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-paper text-mit-black px-6 text-center">
      <div className="font-serif font-black text-9xl md:text-[12rem] text-gray-100 leading-none select-none">
        404
      </div>
      <div className="relative -mt-12 md:-mt-20 z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Page Not Found</h1>
        <p className="text-lg text-gray-600 font-serif max-w-lg mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 bg-mit-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-ivy-red transition-colors shadow-lg"
            >
                <Home className="w-4 h-4" /> Return Home
            </Link>
            <Link 
                to="/departments" 
                className="inline-flex items-center justify-center gap-2 border border-black text-mit-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
                View Departments <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-200 w-full max-w-md">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Try searching instead</p>
          <div className="relative">
              <input 
                type="text" 
                disabled 
                placeholder="Search functionality available in navbar..." 
                className="w-full bg-white border border-gray-300 py-3 pl-4 pr-10 text-sm font-mono cursor-not-allowed opacity-70"
              />
              <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
          </div>
      </div>
    </div>
  );
};

export default NotFound;
