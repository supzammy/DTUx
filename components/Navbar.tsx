
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Globe, ExternalLink, User, FileText, Building, GraduationCap, Bell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, TOP_BAR_LINKS, FACULTY_DATA, NEWS_ITEMS, NOTICES, DEPARTMENTS, ADMISSION_PROGRAMS } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Advanced Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState<'All' | 'Faculty' | 'Department' | 'News' | 'Admissions'>('All');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.length < 2) {
        setSearchResults([]);
        return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    let results: any[] = [];

    // Indexing Logic
    if (searchCategory === 'All' || searchCategory === 'Faculty') {
        const faculty = FACULTY_DATA.filter(f => f.name.toLowerCase().includes(lowerQuery) || f.department.toLowerCase().includes(lowerQuery))
            .map(f => ({ type: 'Faculty', title: f.name, subtitle: f.department, link: '/faculty' }));
        results = [...results, ...faculty];
    }

    if (searchCategory === 'All' || searchCategory === 'Department') {
        const depts = DEPARTMENTS.filter(d => d.name.toLowerCase().includes(lowerQuery) || d.code.toLowerCase().includes(lowerQuery))
            .map(d => ({ type: 'Department', title: d.name, subtitle: d.code, link: `/department/${d.code}` }));
        results = [...results, ...depts];
    }

    if (searchCategory === 'All' || searchCategory === 'News') {
        const news = NEWS_ITEMS.filter(n => n.title.toLowerCase().includes(lowerQuery))
            .map(n => ({ type: 'News', title: n.title, subtitle: n.date, link: '/news' }));
        const notices = NOTICES.filter(n => n.title.toLowerCase().includes(lowerQuery))
            .map(n => ({ type: 'Notice', title: n.title, subtitle: n.category, link: '/notices' }));
        results = [...results, ...news, ...notices];
    }

    if (searchCategory === 'All' || searchCategory === 'Admissions') {
        const admissions = ADMISSION_PROGRAMS.filter(p => p.degree.toLowerCase().includes(lowerQuery) || p.exam.toLowerCase().includes(lowerQuery))
            .map(p => ({ type: 'Admissions', title: p.degree, subtitle: `Via ${p.exam}`, link: '/admissions' }));
        results = [...results, ...admissions];
    }

    setSearchResults(results.slice(0, 10)); // Limit results
  }, [searchQuery, searchCategory]);


  return (
    <>
    <header className="flex flex-col w-full z-50 bg-paper sticky top-0 border-b border-black shadow-sm transition-all duration-300">
      
      {/* 1. TOP UTILITY BAR (Official Resources) - Always on Top */}
      <div className="bg-mit-black text-white hidden lg:block border-b border-white/10 relative z-30">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center h-10 px-8 text-[11px] font-mono tracking-wider uppercase">
            <div className="flex divide-x divide-white/20 h-full items-center">
                <span className="px-4 text-white/50">University Resources</span>
                {TOP_BAR_LINKS.map((link) => (
                    link.href.startsWith('http') ? (
                        <a 
                          key={link.label} 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 hover:text-ivy-red transition-colors h-full flex items-center"
                        >
                            {link.label}
                        </a>
                    ) : (
                        <Link key={link.label} to={link.href} className="px-4 hover:text-ivy-red transition-colors h-full flex items-center">
                            {link.label}
                        </Link>
                    )
                ))}
            </div>
            <div className="flex h-full items-center gap-6">
                 <Link to="/admissions" className="hover:text-ivy-red">Giving</Link>
                 <a href="http://dtualumni.org/" target="_blank" rel="noopener noreferrer" className="hover:text-ivy-red">Alumni</a>
                 <a href="#" className="flex items-center gap-2 hover:text-ivy-red">
                    <Globe className="w-3 h-3" /> Global
                 </a>
            </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR - Logo & Mega Menus */}
      <div className="w-full bg-paper relative z-20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 cursor-pointer group pr-8 border-r-0 lg:border-r border-black/10 h-12" aria-label="DTU Home">
                <img 
                    src="/images/dtu logo.png" 
                    alt="DTU Seal" 
                    className="w-14 h-14 object-contain group-hover:brightness-110 transition-all"
                />
                <div className="flex flex-col justify-center">
                    <span className="text-mit-black font-serif font-black text-2xl md:text-3xl tracking-tight leading-none uppercase group-hover:text-ivy-red transition-colors">DTU</span>
                    <span className="hidden md:block text-mit-black font-sans font-bold text-[10px] tracking-[0.2em] leading-none mt-1 uppercase">Delhi Technological University</span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full flex-grow justify-end gap-1" aria-label="Main Navigation">
                {NAV_ITEMS.map((item) => (
                <div 
                    key={item.label} 
                    className="h-full flex items-center px-4"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <Link
                    to={item.href}
                    className="relative py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-200 flex items-center gap-1 hover:text-ivy-red group"
                    >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-ivy-red transition-all duration-300 ease-out group-hover:w-full group-hover:-translate-x-1/2"></span>
                    </Link>

                    {/* Mega Menu */}
                    {item.subItems && (
                    <div className={`absolute top-full left-0 w-full bg-paper border-t border-b border-black transform transition-all duration-200 origin-top z-50 ${
                        activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                        <div className="max-w-[1500px] mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                            <div className="col-span-1 border-r border-gray-200 pr-8">
                                <h4 className="font-serif font-bold text-xl text-ivy-red mb-3">{item.label} at DTU</h4>
                                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                    Explore the latest updates, resources, and opportunities within the {item.label.toLowerCase()} division.
                                </p>
                                <Link to={item.href} className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-ivy-red hover:border-ivy-red transition-colors">
                                    Visit Main Page
                                </Link>
                            </div>
                            
                            <div className="col-span-3 grid grid-cols-3 gap-6">
                                {item.subItems.map((subItem) => (
                                    subItem.href.startsWith('http') ? (
                                      <a
                                        key={subItem.label}
                                        href={subItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-start p-2 border-l-2 border-transparent hover:border-ivy-red hover:bg-gray-50 transition-all duration-300"
                                      >
                                        <span className="font-serif font-bold text-lg text-mit-black group-hover:text-ivy-red transition-colors">{subItem.label}</span>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 flex items-center gap-1 group-hover:text-mit-black">
                                            External Link <ExternalLink className="w-2 h-2" />
                                        </span>
                                      </a>
                                    ) : (
                                      <Link
                                      key={subItem.label}
                                      to={subItem.href}
                                      className="group flex flex-col items-start p-2 border-l-2 border-transparent hover:border-ivy-red hover:bg-gray-50 transition-all duration-300"
                                      >
                                      <span className="font-serif font-bold text-lg text-mit-black group-hover:text-ivy-red transition-colors">{subItem.label}</span>
                                      <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 flex items-center gap-1 group-hover:text-mit-black">
                                          Learn More <ExternalLink className="w-2 h-2" />
                                      </span>
                                      </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                ))}
                
                {/* Search Button */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="ml-6 w-12 h-12 flex items-center justify-center bg-mit-black text-white hover:bg-ivy-red transition-colors"
                  aria-label="Open Search"
                >
                   <Search className="w-5 h-5" />
                </button>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
                <button
                onClick={() => setIsSearchOpen(true)}
                className="text-mit-black p-2"
                aria-label="Search"
                >
                    <Search className="w-6 h-6" />
                </button>
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-mit-black p-2"
                aria-label="Toggle Menu"
                aria-expanded={isMobileMenuOpen}
                >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>
            </div>
        </div>
      </div>

      {/* 3. SLIDING NOTIFICATION TICKER - Below Main Header (Sleek & Professional) */}
      <div className="relative z-10 bg-mit-black text-white overflow-hidden border-t border-white/10 shadow-lg h-10 flex items-center">
            <div className="max-w-[1600px] mx-auto flex items-center w-full">
                <div className="bg-ivy-red text-white h-10 px-4 py-2 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-md relative z-20 whitespace-nowrap">
                    <Bell className="w-3 h-3 fill-white" /> 
                    <span className="animate-pulse font-black">LATEST CIRCULARS</span>
                    {/* Small arrow aesthetic */}
                    <div className="absolute right-[-10px] top-0 border-l-[10px] border-l-ivy-red border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent h-full"></div>
                </div>
                <div className="flex-grow overflow-hidden relative">
                     <div className="animate-marquee whitespace-nowrap flex gap-12 text-[11px] font-medium font-mono items-center text-gray-300">
                        {NOTICES.filter(n => n.isNew).map((notice, idx) => (
                            <Link key={idx} to="/notices" className="hover:text-white transition-colors flex items-center gap-3 group">
                                <span className="w-1.5 h-1.5 bg-ivy-red rounded-full animate-pulse"></span>
                                <span className="font-bold text-white opacity-90 group-hover:opacity-100">[{notice.date}]</span> 
                                <span className="font-medium group-hover:underline underline-offset-4 decoration-ivy-red/50">{notice.title}</span>
                            </Link>
                        ))}
                         {/* Duplicate for seamless loop */}
                         {NOTICES.filter(n => n.isNew).map((notice, idx) => (
                            <Link key={`dup-${idx}`} to="/notices" className="hover:text-white transition-colors flex items-center gap-3 group">
                                <span className="w-1.5 h-1.5 bg-ivy-red rounded-full animate-pulse"></span>
                                <span className="font-bold text-white opacity-90 group-hover:opacity-100">[{notice.date}]</span>
                                <span className="font-medium group-hover:underline underline-offset-4 decoration-ivy-red/50">{notice.title}</span>
                            </Link>
                        ))}
                     </div>
                </div>
                <Link to="/notices" className="hidden md:flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors whitespace-nowrap px-4 bg-mit-black z-20 h-10 border-l border-white/10 hover:bg-white/5">
                    View Archive <ChevronRight className="w-3 h-3" />
                </Link>
            </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-paper fixed inset-0 top-24 z-40 overflow-y-auto border-t border-black animate-in slide-in-from-right duration-300">
          <div className="px-6 py-8 space-y-1 divide-y divide-gray-200">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="py-2">
                <button
                  className="w-full text-left flex justify-between items-center text-mit-black py-3 text-2xl font-serif font-bold"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </button>
                {item.subItems && activeDropdown === item.label && (
                  <div className="bg-gray-50 pl-4 py-4 space-y-3 border-l-2 border-ivy-red my-2">
                     {item.subItems.map(sub => (
                       <Link
                          key={sub.label} 
                          to={sub.href} 
                          className="block text-sm font-bold text-gray-600 hover:text-ivy-red uppercase tracking-wide" 
                          onClick={() => setIsMobileMenuOpen(false)}
                       >
                         {sub.label}
                       </Link>
                     ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>

    {/* Advanced Search Command Center */}
    {isSearchOpen && (
      <div className="fixed inset-0 z-[100] bg-paper/95 backdrop-blur-md flex items-start justify-center pt-20 animate-in fade-in duration-200 overflow-y-auto" aria-modal="true" role="dialog" aria-label="Search Site">
         <div className="w-full max-w-5xl px-6 pb-20">
            <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-8 top-8 text-mit-black hover:text-ivy-red transition-colors flex items-center gap-2 font-mono text-xs uppercase"
                aria-label="Close Search"
            >
                Close <X className="w-6 h-6" />
            </button>

            <div className="relative border-b-4 border-mit-black pb-4 mb-8">
              <input 
                type="text" 
                placeholder="Search faculty, departments, or news..." 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-mit-black text-3xl md:text-6xl font-serif font-black focus:outline-none placeholder:text-gray-300"
                aria-label="Search Input"
              />
            </div>
            
            {/* Search Filters */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-2" role="tablist">
                {['All', 'Faculty', 'Department', 'News', 'Admissions'].map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setSearchCategory(cat as any)}
                        className={`font-mono text-xs font-bold uppercase tracking-widest px-4 py-2 border border-black transition-colors ${
                            searchCategory === cat ? 'bg-mit-black text-white' : 'bg-transparent text-mit-black hover:bg-gray-100'
                        }`}
                        role="tab"
                        aria-selected={searchCategory === cat}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Results Area */}
            {searchQuery.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {searchResults.length > 0 ? (
                        searchResults.map((result, idx) => (
                            <Link key={idx} to={result.link} onClick={() => setIsSearchOpen(false)} className="group border-l-2 border-gray-200 pl-6 hover:border-ivy-red transition-all">
                                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                                    {result.type === 'Faculty' && <User className="w-3 h-3" />}
                                    {result.type === 'Department' && <Building className="w-3 h-3" />}
                                    {(result.type === 'News' || result.type === 'Notice') && <FileText className="w-3 h-3" />}
                                    {result.type === 'Admissions' && <GraduationCap className="w-3 h-3" />}
                                    {result.type}
                                </div>
                                <h4 className="text-xl font-serif font-bold text-mit-black group-hover:text-ivy-red transition-colors mb-1">
                                    {result.title}
                                </h4>
                                <p className="text-sm text-gray-600 font-medium">{result.subtitle}</p>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-12 text-gray-400 font-serif italic text-xl">
                            No results found for "{searchQuery}" in {searchCategory}.
                        </div>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Popular Searches</h4>
                        <ul className="space-y-4">
                            {['Admissions 2025', 'Academic Calendar', 'Computer Science Dept', 'Hostel Fees'].map(term => (
                                <li key={term}>
                                    <button onClick={() => setSearchQuery(term)} className="text-xl font-serif font-bold text-mit-black hover:text-ivy-red hover:underline decoration-2 underline-offset-4 transition-all">
                                        {term}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
         </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
