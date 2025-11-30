
import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, FileText, User, Building, GraduationCap, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { NOTICES, DEPARTMENTS, FACULTY_DATA, CAMPUS_ITEMS, ADMISSION_PROGRAMS } from '../constants';

const Hero: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search Logic with Prioritization
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const lowerQ = query.toLowerCase();
    
    // 1. Notices (High Priority)
    const matchedNotices = NOTICES.filter(n => n.title.toLowerCase().includes(lowerQ)).slice(0, 3).map(n => ({
      type: 'Notice', label: n.title, sub: n.date, link: '/notices', icon: <AlertCircle className="w-4 h-4 text-ivy-red" />, color: 'border-ivy-red'
    }));

    // 2. Admissions
    const matchedAdmissions = ADMISSION_PROGRAMS.filter(a => 
      a.degree.toLowerCase().includes(lowerQ) || a.exam.toLowerCase().includes(lowerQ)
    ).slice(0, 2).map(a => ({
        type: 'Admission', label: a.degree, sub: `Via ${a.exam}`, link: '/admissions', icon: <GraduationCap className="w-4 h-4 text-blue-600" />, color: 'border-blue-600'
    }));

    // 3. Departments
    const matchedDepts = DEPARTMENTS.filter(d => 
      d.name.toLowerCase().includes(lowerQ) || d.code.toLowerCase().includes(lowerQ)
    ).slice(0, 2).map(d => ({
      type: 'Dept', label: d.name, sub: `Code: ${d.code}`, link: `/department/${d.code}`, icon: <Building className="w-4 h-4 text-gray-700" />, color: 'border-gray-700'
    }));

    // 4. Faculty
    const matchedFaculty = FACULTY_DATA.filter(f => 
      f.name.toLowerCase().includes(lowerQ)
    ).slice(0, 2).map(f => ({
      type: 'Faculty', label: f.name, sub: f.department, link: '/faculty', icon: <User className="w-4 h-4 text-gray-500" />, color: 'border-gray-500'
    }));

    // 5. Resources
    const matchedResources = CAMPUS_ITEMS.filter(i => 
      i.title.toLowerCase().includes(lowerQ) || i.category.toLowerCase().includes(lowerQ)
    ).slice(0, 2).map(i => ({
        type: 'Resource', label: i.title, sub: i.category, link: '/campus', icon: <FileText className="w-4 h-4 text-green-600" />, color: 'border-green-600'
    }));

    setResults([...matchedNotices, ...matchedAdmissions, ...matchedDepts, ...matchedFaculty, ...matchedResources]);
  }, [query]);

  const handleNavigation = (link: string) => {
      if (link.startsWith('http')) {
          window.location.href = link;
      } else {
          navigate(link);
      }
      setIsFocused(false);
  };

  return (
    <div className="relative w-full min-h-[85vh] text-white flex flex-col justify-start overflow-hidden border-b-[6px] border-ivy-red">
        
        {/* Background: Real DTU Campus Image */}
        <div className="absolute inset-0 z-0">
             <img 
               src="/images/dtu campus .jpg" 
               alt="DTU Campus" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-mit-black/65 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-mit-black via-mit-black/50 to-transparent"></div>
        </div>

        {/* Main Content Area - Split Layout */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex-grow flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 pb-24 pt-16">
            
            {/* LEFT SIDE: Typography & Branding */}
            <div className="lg:w-7/12 animate-fade-in-up self-center lg:self-center">
                <div className="flex items-center gap-3 mb-8 opacity-90">
                    <div className="w-8 h-[2px] bg-ivy-red"></div>
                    <span className="text-xs font-bold font-mono uppercase tracking-[0.3em] text-gray-200">
                        Est. 1941 • Delhi Technological University, New Delhi
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[0.9] tracking-tighter mb-6 text-white drop-shadow-2xl">
                    INNOVATING <br/>
                    <span className="text-white">THE </span>
                    <span className="font-cursive text-ivy-red relative inline-block text-7xl md:text-[8rem] ml-4 font-normal tracking-normal transform translate-y-2">
                        Future
                    </span>
                    <span className="text-ivy-red font-serif">.</span>
                </h1>

                <p className="max-w-xl text-base md:text-lg text-gray-200 font-light leading-relaxed mb-10 pl-1 border-l border-white/30 ml-2 shadow-black drop-shadow-md">
                    For over eight decades, Delhi Technological University has been the cradle of innovation, producing world-class engineers, researchers, and leaders who shape the globe.
                </p>
                
                <div className="flex flex-wrap gap-0">
                    <Link to="/academics" className="px-10 py-5 bg-ivy-red text-white text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                        Explore Academics
                    </Link>
                    <Link to="/admissions" className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/50 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-mit-black transition-all">
                        Admissions 2025
                    </Link>
                </div>
            </div>

            {/* RIGHT SIDE: Quick Finder Widget */}
            <div className="lg:w-4/12 w-full max-w-md animate-fade-in-up self-center" style={{ animationDelay: '0.2s' }}>
                <div className="bg-mit-black/95 backdrop-blur-xl shadow-2xl border border-white/20 relative overflow-visible group rounded-sm">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ivy-red via-red-500 to-ivy-red"></div>
                    
                    {/* Widget Header - Red */}
                    <div className="bg-ivy-red p-6 border-b border-white/10 flex justify-between items-center">
                         <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                            <Search className="w-4 h-4 text-white" /> Quick Finder
                         </h3>
                         <div className="flex gap-1">
                             <div className="w-2 h-2 rounded-full bg-white/30"></div>
                             <div className="w-2 h-2 rounded-full bg-white/30"></div>
                         </div>
                    </div>
                    
                    {/* Widget Body */}
                    <div className="p-8 relative" ref={searchRef}>
                        <div className="relative mb-8">
                            <input 
                                type="text" 
                                placeholder="Search courses, faculty..." 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                className="w-full bg-white text-mit-black border-2 border-transparent py-4 pl-4 pr-12 font-serif font-bold text-lg focus:outline-none focus:border-ivy-red placeholder:text-gray-400 transition-all rounded-sm shadow-inner"
                                aria-label="Quick Finder Input"
                            />
                            <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center pointer-events-none bg-gray-100 border-l border-gray-200">
                                <Search className="w-5 h-5 text-mit-black" />
                            </div>
                        </div>

                         {/* Suggestions Overlay - FIXED: Text Color is Black */}
                        {isFocused && query.length > 0 && (
                            <div className="absolute top-[100px] left-0 right-0 mx-6 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200 z-50 max-h-[300px] overflow-y-auto rounded-sm text-left text-mit-black">
                                {results.length > 0 ? (
                                    results.map((res, idx) => (
                                        <div 
                                            key={idx} 
                                            onClick={() => handleNavigation(res.link)}
                                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer group transition-colors flex justify-between items-center border-l-4 ${res.color || 'border-transparent'}`}
                                            role="button"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 text-gray-800">{res.icon}</div>
                                                <div>
                                                    <div className="font-bold text-sm text-mit-black group-hover:text-ivy-red leading-tight">{res.label}</div>
                                                    <div className="text-[10px] text-gray-500 mt-1 font-mono uppercase tracking-wide">{res.sub}</div>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-ivy-red -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-6 text-xs text-gray-500 font-mono text-center">
                                        No matches found for "{query}".
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="space-y-5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-white/10 pb-2">Popular Resources</p>
                            <ul className="space-y-2">
                                {[
                                    { label: 'Undergraduate Admissions', link: '/admissions' },
                                    { label: 'Research Grants & Projects', link: '/research' },
                                    { label: 'Examination Results Portal', link: 'http://exam.dtu.ac.in/' },
                                    { label: 'Interactive Campus Map', link: '/campus' },
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link to={item.link.startsWith('http') ? '#' : item.link} onClick={() => item.link.startsWith('http') && window.open(item.link)} className="flex items-center justify-between text-gray-300 hover:text-white hover:translate-x-1 p-1 group transition-all">
                                            <span className="font-serif text-sm font-medium border-b border-transparent group-hover:border-ivy-red">{item.label}</span>
                                            <ArrowRight className="w-3 h-3 text-ivy-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Stats Strip */}
        <div className="relative z-10 border-t border-white/10 bg-mit-black/90 backdrop-blur-md">
            <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {[
                    { label: 'NIRF Rank', value: '#29', sub: 'Engineering 2023' },
                    { label: 'Highest Package', value: '₹82 LPA', sub: 'International Offer' },
                    { label: 'Alumni', value: '14K+', sub: 'Global Leaders' },
                    { label: 'Legacy', value: '84 Yrs', sub: 'Est. 1941' }
                ].map((stat, idx) => (
                    <div key={idx} className="py-8 px-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-default group">
                        <div className="text-4xl font-serif font-black text-white mb-2 group-hover:text-ivy-red transition-colors">{stat.value}</div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">{stat.label}</span>
                            <span className="hidden md:inline-block w-1 h-1 bg-ivy-red rounded-full"></span>
                            <span className="hidden md:inline-block text-[9px] font-mono text-gray-500 group-hover:text-gray-400">{stat.sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Hero;
