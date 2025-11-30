
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RESEARCH_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

const ResearchStats: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-ivy-red font-sans font-bold uppercase tracking-widest text-sm mb-2">Research Impact</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-mit-black mb-6">
              Pushing the Boundaries of Knowledge
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              DTU is at the forefront of technological advancement. Our research output has grown exponentially over the last five years, with faculty and students publishing in top-tier journals and securing international patents.
            </p>
            <ul className="space-y-4 mb-8">
              {['State-of-the-art Innovation Center', 'Collaborations with 50+ Global Universities', '₹100 Cr+ Research Funding'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700 font-medium">
                  <span className="w-2 h-2 bg-ivy-red rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-ivy-red font-bold flex items-center text-lg group">
              Explore Research Areas <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-gray-400 mt-6">(Source: Scopus/NIRF Data)</p>
          </div>

          {/* Chart - Fixed Height Container to prevent Recharts Error */}
          <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-inner">
            <h4 className="text-xl font-bold text-gray-800 mb-6 font-serif">Annual Research Publications</h4>
            
            {/* Explicit width and min-height is CRITICAL for Recharts to calculate dimensions correctly on initial render */}
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={RESEARCH_DATA}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCitations" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8C1515" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8C1515" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#8C1515', fontWeight: 'bold' }}
                    labelStyle={{ color: '#1A1A1A' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="papers" 
                    stroke="#8C1515" 
                    fillOpacity={1} 
                    fill="url(#colorCitations)" 
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 italic">Scopus Indexed Publications Trend</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchStats;
