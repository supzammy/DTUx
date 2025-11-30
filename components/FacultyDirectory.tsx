
import React, { useState } from 'react';
import { FACULTY_DATA, DEPARTMENTS } from '../constants';
import { Mail, BookOpen, ChevronRight, User, ExternalLink, GraduationCap } from 'lucide-react';

const FacultyDirectory: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchName, setSearchName] = useState<string>('');

  const filteredFaculty = FACULTY_DATA.filter(faculty => {
    const matchesDept = selectedDept === 'All' || faculty.department === selectedDept;
    const matchesName = faculty.name.toLowerCase().includes(searchName.toLowerCase()) || 
                        faculty.researchInterests.some(i => i.toLowerCase().includes(searchName.toLowerCase()));
    return matchesDept && matchesName;
  });

  return (
    <section id="faculty" className="py-24 bg-white border-b border-black">
      <div className="max-w-[1500px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black pb-8">
          <div className="animate-fade-in-up">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-2 block">/ People_Index</span>
            <h3 className="text-5xl font-serif font-black text-mit-black">Faculty Directory</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-0 w-full md:w-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             <input 
                type="text" 
                placeholder="Search by name or interest..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="font-mono text-xs font-bold bg-gray-50 border border-black px-4 py-2 w-full md:w-64 focus:outline-none focus:bg-white transition-colors"
             />
             <select 
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="font-mono text-xs font-bold uppercase border border-black px-4 py-2 bg-white hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none"
             >
                <option value="All">All Departments</option>
                {DEPARTMENTS.map(d => (
                    <option key={d.code} value={d.name}>{d.name}</option>
                ))}
             </select>
          </div>
        </div>

        {/* Faculty Grid - MIT/Ivy Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
            {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty, idx) => (
                    <div key={faculty.id} className="bg-white p-8 flex flex-col h-full hover:bg-paper transition-colors group animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                        <div className="flex justify-between items-start mb-6">
                            <img 
                                src={faculty.imageUrl} 
                                alt={faculty.name} 
                                className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border border-gray-200" 
                            />
                            <div className="bg-gray-100 text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 text-gray-500 group-hover:bg-ivy-red group-hover:text-white transition-colors">
                                {faculty.title}
                            </div>
                        </div>
                        
                        <h4 className="text-2xl font-serif font-bold text-mit-black mb-1 group-hover:text-ivy-red transition-colors">
                            {faculty.name}
                        </h4>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <GraduationCap className="w-3 h-3" /> {faculty.department}
                        </div>

                        {/* Expanded Bio Section */}
                        {faculty.bio && (
                          <div className="mb-6 relative">
                              <p className="text-sm text-gray-600 leading-relaxed font-serif line-clamp-3">
                                {faculty.bio}
                              </p>
                              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent"></div>
                          </div>
                        )}

                        <div className="mb-8 flex-grow">
                            <h5 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-100 pb-2">
                                <BookOpen className="w-3 h-3" /> Research Focus
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {faculty.researchInterests.map((interest, idx) => (
                                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider border border-gray-200 px-2 py-1 bg-gray-50 text-gray-600 group-hover:border-gray-300">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex justify-between items-center mt-auto gap-4">
                            <a href={`mailto:${faculty.email}`} className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-ivy-red transition-colors">
                                <Mail className="w-3 h-3" /> Email Faculty
                            </a>
                            {faculty.profileLink && (
                              <a 
                                href={faculty.profileLink} 
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-xs font-bold text-white bg-mit-black px-4 py-2 hover:bg-ivy-red transition-colors uppercase tracking-widest"
                              >
                                View Profile <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full bg-white p-20 text-center border border-gray-200">
                    <User className="w-16 h-16 mx-auto text-gray-200 mb-4" />
                    <h4 className="text-2xl font-serif font-bold text-mit-black mb-2">No Matches Found</h4>
                    <p className="font-serif italic text-gray-400">Try adjusting your search criteria or department filter.</p>
                </div>
            )}
        </div>

      </div>
    </section>
  );
};

export default FacultyDirectory;
