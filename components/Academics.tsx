
import React, { useState } from 'react';
import { DEPARTMENTS } from '../constants';
import { ArrowUpRight, ChevronRight, BookOpen, Clock, UserSearch, Download, Terminal, Settings, Zap, Dna, FlaskConical, Atom, Building, Leaf, Briefcase, PenTool, Activity, Scale, Monitor, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccordionNav from './AccordionNav';

const Academics: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
        id: 0,
        title: "Engineering & Technology",
        desc: "Pioneering technological advancements through rigorous curriculum and research.",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop",
        link: "/departments",
        stats: "12 Departments • 40+ Labs"
    },
    {
        id: 1,
        title: "Management & Business",
        desc: "Developing global leaders at the Delhi School of Management (DSM) and USME.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
        link: "/department/DSM",
        stats: "MBA • BBA • PhD"
    },
    {
        id: 2,
        title: "Design & Innovation",
        desc: "Fostering creativity and functional aesthetics at the Department of Design.",
        image: "https://images.unsplash.com/photo-1576153192396-4cd2f02438e0?q=80&w=2070&auto=format&fit=crop",
        link: "/department/DOD",
        stats: "B.Des • M.Des"
    },
    {
        id: 3,
        title: "Applied Sciences",
        desc: "Fundamental research in Physics, Chemistry, Mathematics and Biotechnology.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
        link: "/departments",
        stats: "4 Departments • Advanced Research"
    }
  ];

  const getDeptIcon = (code: string) => {
    switch (code) {
      case 'CSE': 
      case 'IT': 
      case 'SE': return <Terminal aria-hidden="true" />;
      case 'ME': return <Settings aria-hidden="true" />;
      case 'EE':
      case 'ECE': return <Zap aria-hidden="true" />;
      case 'BT': return <Dna aria-hidden="true" />;
      case 'AC': return <FlaskConical aria-hidden="true" />;
      case 'AP': return <Atom aria-hidden="true" />;
      case 'CE': return <Building aria-hidden="true" />;
      case 'ENE': return <Leaf aria-hidden="true" />;
      case 'DSM':
      case 'USME': return <Briefcase aria-hidden="true" />;
      case 'DOD': return <PenTool aria-hidden="true" />;
      case 'PTE': return <Activity aria-hidden="true" />;
      case 'AM': return <Scale aria-hidden="true" />;
      default: return <BookOpen aria-hidden="true" />;
    }
  };

  // --- Accordion Content ---
  const TimeTableContent = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                  Access the latest semester schedules for all undergraduate and postgraduate programs. Schedules are subject to change; please check weekly updates.
              </p>
              <div className="bg-gray-50 border border-black p-6">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-black pb-2">Current Semester: Aug-Dec 2025</h4>
                  <ul className="space-y-4">
                      {['B.Tech 1st Year (Group A)', 'B.Tech 1st Year (Group B)', 'Computer Science Dept (All Years)', 'Mechanical Dept (All Years)', 'M.Tech Schedule'].map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center group cursor-pointer hover:bg-white p-2 transition-colors">
                              <span className="font-serif font-bold text-mit-black group-hover:text-ivy-red">{item}</span>
                              <button className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1 group-hover:text-mit-black" aria-label={`Download ${item} PDF`}>
                                  <Download className="w-3 h-3" /> PDF
                              </button>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-mit-black text-white p-8 text-center">
              <Clock className="w-12 h-12 text-ivy-red mb-4" aria-hidden="true" />
              <h4 className="text-2xl font-serif font-bold mb-2">Examination Schedule</h4>
              <p className="text-sm text-gray-400 mb-6">Mid-Term exams commence Oct 15th.</p>
              <a href="http://exam.dtu.ac.in/" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-mit-black transition-colors" aria-label="Visit official exam portal">
                  Visit Exam Portal
              </a>
          </div>
      </div>
  );

  const FacultyContent = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                  Our faculty are world-class researchers and educators. Use the directory to find contact information, research interests, and office hours.
              </p>
              <div className="flex gap-4 mb-8">
                  <Link to="/faculty" className="flex-1 bg-ivy-red text-white py-4 px-6 text-center font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors shadow-lg flex items-center justify-center gap-2">
                      <UserSearch className="w-4 h-4" /> Access Full Directory
                  </Link>
                  <Link to="/departments" className="flex-1 border border-black text-mit-black py-4 px-6 text-center font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors">
                      Browse by Department
                  </Link>
              </div>
          </div>
          <div className="bg-gray-100 p-6 border border-gray-200">
              <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                  {['Dean (Faculty Affairs)', 'Recruitment Portal', 'Faculty Login', 'Research Grants'].map((link, i) => (
                      <li key={i}>
                          <a href="#" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-ivy-red transition-colors">
                              <ChevronRight className="w-3 h-3 text-ivy-red" /> {link}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );

  const CalendarContent = (
      <div className="flex gap-8 items-start">
          <div className="hidden md:block bg-mit-black text-white p-4 text-center min-w-[120px]">
              <div className="text-4xl font-serif font-bold text-ivy-red">25</div>
              <div className="text-sm font-bold uppercase tracking-widest">OCT</div>
              <div className="mt-2 text-[10px] text-gray-400">TODAY</div>
          </div>
          <div className="flex-grow">
              <h4 className="font-serif font-bold text-xl mb-4">Academic Year 2025-26</h4>
              <div className="space-y-4">
                   <div className="flex gap-4 border-b border-gray-200 pb-4">
                       <div className="font-mono font-bold text-gray-500 w-24">AUG 01</div>
                       <div>
                           <div className="font-bold text-mit-black">Commencement of Classes</div>
                       </div>
                   </div>
                   <div className="flex gap-4 border-b border-gray-200 pb-4">
                       <div className="font-mono font-bold text-gray-500 w-24">OCT 15</div>
                       <div>
                           <div className="font-bold text-mit-black">Mid-Term Examinations</div>
                       </div>
                   </div>
              </div>
              <a href="http://dtu.ac.in/Web/Academics/calendar.php" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ivy-red hover:underline">
                  Download Full Calendar PDF <ArrowUpRight className="w-3 h-3" />
              </a>
          </div>
      </div>
  );

  const resourceSections = [
      { title: 'Time Table & Schedules', content: TimeTableContent },
      { title: 'Faculty Directory & Search', content: FacultyContent },
      { title: 'Academic Calendar', content: CalendarContent },
  ];

  return (
    <section id="academics" className="bg-paper min-h-screen">
      
      {/* Header */}
      <div className="border-b border-gray-200 py-20">
         <div className="max-w-[1500px] mx-auto px-6 md:px-12">
             <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-4 block">Academic Excellence</span>
             <h2 className="text-5xl md:text-7xl font-serif text-mit-black leading-none">
                 Schools & <span className="italic">Studies</span>
             </h2>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gray-200">
          
          {/* Main Content Area (9 Cols) */}
          <div className="lg:col-span-9 border-r border-gray-200">
              
              {/* Split Screen Interactive List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] border-b border-gray-200">
                  <div className="relative bg-mit-black hidden lg:block overflow-hidden">
                     <img 
                        src={categories[activeCategory].image} 
                        alt={categories[activeCategory].title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-mit-black via-transparent to-transparent"></div>
                     <div className="absolute bottom-0 left-0 w-full p-12 text-white">
                         <div className="text-xs font-mono uppercase tracking-widest text-ivy-red mb-2">
                             {categories[activeCategory].stats}
                         </div>
                         <h3 className="text-3xl font-serif mb-4 leading-tight">{categories[activeCategory].title}</h3>
                         <p className="text-md text-gray-300 font-light mb-8">{categories[activeCategory].desc}</p>
                         <Link to={categories[activeCategory].link} className="inline-flex items-center gap-2 border border-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-mit-black transition-colors" aria-label={`Explore ${categories[activeCategory].title}`}>
                             Explore School <ArrowUpRight className="w-4 h-4" />
                         </Link>
                     </div>
                  </div>

                  <div className="bg-white flex flex-col justify-center">
                      {categories.map((cat, idx) => (
                          <div 
                            key={idx}
                            onMouseEnter={() => setActiveCategory(idx)}
                            className={`group border-b border-gray-200 p-8 cursor-pointer transition-all duration-300 relative ${activeCategory === idx ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
                            role="button"
                            aria-label={`View details for ${cat.title}`}
                          >
                              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-ivy-red transition-transform duration-300 ${activeCategory === idx ? 'scale-y-100' : 'scale-y-0'}`}></div>
                              <div className="flex justify-between items-center mb-2">
                                  <h4 className={`text-xl md:text-2xl font-serif transition-colors ${activeCategory === idx ? 'text-ivy-red' : 'text-mit-black'}`}>
                                      {cat.title}
                                  </h4>
                                  <ChevronRight className={`w-6 h-6 transition-transform ${activeCategory === idx ? 'translate-x-2 text-ivy-red' : 'text-gray-300'}`} />
                              </div>
                              <p className="text-sm text-gray-500 font-light max-w-md">{cat.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Resources */}
              <div id="resources" className="py-20 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-3xl font-serif text-mit-black mb-8">Academic Resources</h3>
                  <AccordionNav sections={resourceSections} />
              </div>

              {/* Full Catalog */}
              <div id="catalog" className="py-24 px-6 md:px-12">
                  <div className="flex justify-between items-end mb-12">
                       <h3 className="text-3xl font-serif text-mit-black">All Departments</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
                    {DEPARTMENTS.map((dept, index) => (
                        <Link 
                            key={index} 
                            to={`/department/${dept.code}`}
                            className="group border-r border-b border-gray-200 p-8 bg-white hover:bg-mit-black hover:text-white transition-colors duration-200 min-h-[220px] flex flex-col justify-between relative overflow-hidden"
                            aria-label={`Department of ${dept.name}`}
                        >
                            <div className="absolute -bottom-6 -right-6 transform rotate-12 transition-all duration-300 group-hover:scale-150">
                                 {React.cloneElement(getDeptIcon(dept.code) as React.ReactElement<any>, { 
                                     className: "w-32 h-32 text-gray-100 group-hover:text-white group-hover:opacity-10 transition-colors duration-200" 
                                 })}
                            </div>
                            <div className="flex justify-between items-start relative z-10">
                                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-ivy-red">
                                    {dept.code}
                                </span>
                                {React.cloneElement(getDeptIcon(dept.code) as React.ReactElement<any>, { className: "w-6 h-6 text-gray-300 group-hover:text-ivy-red transition-colors duration-200" })}
                            </div>
                            <h4 className="text-xl font-serif leading-tight group-hover:text-white relative z-10">
                                {dept.name}
                            </h4>
                        </Link>
                    ))}
                  </div>
              </div>
          </div>

          {/* Quick Links Sidebar (3 Cols) - Sticky Navigation */}
          <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 p-8">
                  <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
                      <LinkIcon className="w-4 h-4 text-ivy-red" /> On This Page
                  </h4>
                  <ul className="space-y-4 font-mono text-xs font-bold uppercase tracking-widest text-gray-500">
                      <li><a href="#academics" className="hover:text-mit-black transition-colors block border-l-2 border-transparent hover:border-ivy-red pl-2">Top Schools</a></li>
                      <li><a href="#resources" className="hover:text-mit-black transition-colors block border-l-2 border-transparent hover:border-ivy-red pl-2">Resources & Calendar</a></li>
                      <li><a href="#catalog" className="hover:text-mit-black transition-colors block border-l-2 border-transparent hover:border-ivy-red pl-2">Department Catalog</a></li>
                  </ul>

                  <div className="mt-12 pt-12 border-t border-gray-200">
                      <h4 className="font-serif font-bold text-lg mb-4">Related Links</h4>
                      <ul className="space-y-3">
                          <li>
                              <Link to="/admissions" className="text-sm font-medium text-gray-600 hover:text-ivy-red hover:underline block">
                                  Undergraduate Admissions
                              </Link>
                          </li>
                          <li>
                              <Link to="/research" className="text-sm font-medium text-gray-600 hover:text-ivy-red hover:underline block">
                                  Research Centers
                              </Link>
                          </li>
                          <li>
                              <a href="http://library.dtu.ac.in" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-600 hover:text-ivy-red hover:underline block">
                                  Central Library
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
};

export default Academics;
