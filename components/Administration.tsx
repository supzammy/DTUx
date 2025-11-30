
import React from 'react';
import { LEADERSHIP_TEAM, DEANS_LIST } from '../constants';
import { ArrowRight, User, Mail, Building2, Users } from 'lucide-react';

const Administration: React.FC = () => {
  return (
    <section id="admin" className="py-24 bg-paper border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8 border-b-4 border-mit-black pb-8">
           <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-3 block">/ Governance_&_Leadership</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-mit-black tracking-tight">University Administration</h1>
              <p className="text-gray-600 mt-4 max-w-2xl font-medium">
                The administrative leadership dedicated to academic excellence, institutional integrity, and student welfare.
              </p>
           </div>
           <a 
              href="http://dtu.ac.in/Web/Administration/orgchart.php" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-ivy-red transition-colors bg-white border-2 border-mit-black px-6 py-3 hover:bg-mit-black hover:text-white group"
           >
              <Building2 className="w-4 h-4" />
              Official Org Chart 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

        {/* SECTION 1: KEY OFFICIALS (Large Profile Cards) */}
        <div className="mb-24">
            <h3 className="text-3xl font-serif font-bold text-mit-black mb-12 border-l-4 border-ivy-red pl-6">
                Key University Officials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300">
              {LEADERSHIP_TEAM.map((leader, index) => (
                <div key={index} className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
                   {/* Background Decoration */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                   
                   <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-shrink-0">
                          <img 
                            src={leader.imageUrl} 
                            alt={leader.name} 
                            className="w-32 h-32 object-cover border-4 border-gray-200 group-hover:border-ivy-red transition-all duration-300 grayscale group-hover:grayscale-0" 
                          />
                       </div>
                       <div className="flex-grow">
                           <h4 className="text-2xl md:text-3xl font-serif font-bold text-mit-black mb-2 group-hover:text-ivy-red transition-colors leading-tight">
                               {leader.name}
                           </h4>
                           <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 border-b border-gray-200 pb-2 inline-block">
                               {leader.designation}
                           </p>
                           <p className="text-sm text-gray-600 leading-relaxed mb-4 font-light">
                             {leader.bio || "Committed to fostering academic excellence and institutional growth at Delhi Technological University."}
                           </p>
                           <a 
                              href={`mailto:${leader.email}`} 
                              className="inline-flex items-center gap-2 text-xs font-mono text-ivy-red hover:underline underline-offset-4 font-bold"
                           >
                              <Mail className="w-3 h-3" />
                              {leader.email}
                           </a>
                       </div>
                   </div>
                </div>
              ))}
            </div>
        </div>

        {/* SECTION 2: DEANS & BOARD (Two Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Deans Table */}
            <div id="deans" className="bg-white border border-gray-200 shadow-sm">
                <div className="bg-mit-black text-white p-6 border-b-4 border-ivy-red">
                    <div className="flex items-center gap-3">
                        <Users className="w-6 h-6" />
                        <h3 className="text-2xl font-serif font-bold">Academic Deans</h3>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-medium">Leaders of Academic & Student Affairs</p>
                </div>
                <div className="divide-y divide-gray-100">
                    {DEANS_LIST.map((dean, idx) => (
                        <div key={idx} className="p-6 hover:bg-gray-50 transition-colors group cursor-default">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h4 className="font-serif font-bold text-lg text-mit-black group-hover:text-ivy-red transition-colors">
                                        {dean.name}
                                    </h4>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                                        {dean.role}
                                    </p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-ivy-red opacity-0 group-hover:opacity-100 transition-opacity mt-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Board of Management */}
            <div id="board" className="bg-white border border-gray-200 shadow-sm">
                <div className="bg-gray-900 text-white p-6 border-b-4 border-gray-700">
                    <div className="flex items-center gap-3">
                        <Building2 className="w-6 h-6" />
                        <h3 className="text-2xl font-serif font-bold">Board of Management</h3>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-medium">Governing Body of the University</p>
                </div>
                <div className="p-8">
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start group">
                            <div className="w-1 h-full bg-ivy-red flex-shrink-0 group-hover:w-2 transition-all"></div>
                            <div>
                                <div className="font-serif font-bold text-xl text-mit-black group-hover:text-ivy-red transition-colors">
                                    Prof. Prateek Sharma
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">
                                    Chairperson
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="w-1 h-full bg-gray-300 flex-shrink-0 group-hover:w-2 transition-all"></div>
                            <div>
                                <div className="font-serif font-bold text-lg text-mit-black">
                                    Principal Secretary (Finance)
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">
                                    Member (Ex-Officio)
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="w-1 h-full bg-gray-300 flex-shrink-0 group-hover:w-2 transition-all"></div>
                            <div>
                                <div className="font-serif font-bold text-lg text-mit-black">
                                    Secretary (Technical & Training Education)
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">
                                    Member (Ex-Officio)
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <div className="w-1 h-full bg-gray-300 flex-shrink-0 group-hover:w-2 transition-all"></div>
                            <div>
                                <div className="font-serif font-bold text-lg text-mit-black">
                                    Prof. Madhusudan Singh
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">
                                    Secretary to Board
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500 italic">
                            The Board of Management is the principal executive body of the University, responsible for policy formulation and strategic direction.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-mit-black text-white p-12 text-center">
            <h4 className="text-3xl font-serif font-bold mb-4">Need to Connect with Administration?</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                For official inquiries, grievances, or administrative matters, please contact the Registrar's office.
            </p>
            <a 
                href="mailto:registrar@dtu.ac.in" 
                className="inline-flex items-center gap-2 bg-ivy-red hover:bg-white hover:text-mit-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors"
            >
                <Mail className="w-4 h-4" />
                Contact Registrar
            </a>
        </div>

      </div>
    </section>
  );
};

export default Administration;
