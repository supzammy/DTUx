
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HISTORY_TIMELINE, LEADERSHIP_TEAM, MISSION_POINTS, VC_MESSAGE_FULL } from '../constants';
import { ArrowRight, Target, Globe, Award, ChevronRight, BookOpen, Users, MapPin, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  // DEEP CONNECTIVITY: Listen for URL Hash to open correct tab
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'history') setActiveTab(1);
    else if (hash === 'vision') setActiveTab(2);
    else if (hash === 'leadership') setActiveTab(3);
    else if (hash === 'rankings') setActiveTab(4);
    else setActiveTab(0);
  }, [location]);

  // 1. At a Glance Content
  const GlanceContent = (
    <div className="animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-mit-black mb-6">Engineering Excellence since 1941.</h3>
            <p className="text-lg text-gray-600 font-serif leading-relaxed mb-6">
              Delhi Technological University (DTU), formerly Delhi College of Engineering (DCE), stands as a monument to technical education in India. For over eight decades, we have produced the architects of modern India's infrastructure and technology.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
                Located in the National Capital Territory, our 164-acre campus is a self-sustained township featuring state-of-the-art labs, residential complexes, and lush green open spaces, fostering an environment conducive to higher learning.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
               <div className="bg-mit-black text-white p-6 flex flex-col justify-between h-full group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-ivy-red cursor-default border border-transparent">
                   <BookOpen className="w-8 h-8 text-ivy-red mb-4 group-hover:text-white transition-colors" />
                   <div>
                       <div className="text-4xl font-serif font-bold mb-1">17</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white/80 transition-colors">Academic Depts</div>
                   </div>
               </div>
               
               <div className="bg-gray-100 p-6 flex flex-col justify-between h-full border border-gray-200 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-ivy-red cursor-default">
                   <Users className="w-8 h-8 text-mit-black mb-4 group-hover:text-ivy-red transition-colors" />
                   <div>
                       <div className="text-4xl font-serif font-bold mb-1 text-ivy-red">15K+</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-mit-black transition-colors">Bright Minds</div>
                   </div>
               </div>
               
               <div className="bg-gray-100 p-6 flex flex-col justify-between h-full border border-gray-200 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-ivy-red cursor-default">
                   <MapPin className="w-8 h-8 text-mit-black mb-4 group-hover:text-ivy-red transition-colors" />
                   <div>
                       <div className="text-4xl font-serif font-bold mb-1 text-ivy-red">164</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-mit-black transition-colors">Acres Campus</div>
                   </div>
               </div>
               
               <div className="bg-white p-6 flex flex-col justify-between h-full border border-gray-200 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-ivy-red cursor-default">
                   <Award className="w-8 h-8 text-mit-black mb-4 group-hover:text-ivy-red transition-colors" />
                   <div>
                       <div className="text-4xl font-serif font-bold mb-1 group-hover:text-ivy-red transition-colors">Top 10</div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-mit-black transition-colors">Govt. Ranking</div>
                   </div>
               </div>
          </div>
      </div>
    </div>
  );

  // 2. History Content
  const HistoryContent = (
    <div className="animate-fade-in-up">
        <h3 className="text-2xl font-serif font-bold text-mit-black mb-8 border-b border-gray-200 pb-4">
            A Legacy of Nation Building
        </h3>
        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
            {HISTORY_TIMELINE.map((event, idx) => (
                <div key={idx} className="relative pl-12 group">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-300 group-hover:border-ivy-red transition-colors z-10"></span>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                        <span className="text-3xl font-serif font-black text-mit-black">{event.year}</span>
                        <span className="text-sm font-bold uppercase tracking-widest text-ivy-red">{event.title}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {event.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  );

  // 3. Vision & Mission
  const VisionContent = (
    <div className="animate-fade-in-up space-y-12">
        <div className="bg-mit-black text-white p-10 relative overflow-hidden">
            <Target className="absolute top-4 right-4 w-32 h-32 text-white/5" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-ivy-red mb-4">Our Vision</h3>
            <p className="text-2xl md:text-3xl font-serif font-bold leading-tight italic">
                "To be a world-class university through education, innovation and research for the service of humanity."
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <h3 className="text-xl font-serif font-bold text-mit-black">Our Mission</h3>
            {MISSION_POINTS.map((mission, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 border border-gray-200 hover:border-ivy-red transition-colors group">
                    <span className="font-serif text-4xl text-gray-200 group-hover:text-ivy-red font-bold">0{idx + 1}</span>
                    <div>
                        <p className="text-gray-600 text-sm leading-relaxed">{mission}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );

  // 4. Leadership (Expanded with VC Message)
  const LeadershipContent = (
      <div className="animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-mit-black mb-8">From the Vice Chancellor's Desk</h3>
          
          <div className="bg-gray-50 border border-gray-200 p-8 mb-12 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                  <img src={LEADERSHIP_TEAM[0].imageUrl} alt="VC" className="w-40 h-48 object-cover border border-gray-300 shadow-md" />
                  <div className="mt-4 text-center">
                    <div className="font-serif font-bold text-lg">Prof. Prateek Sharma</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">Vice Chancellor</div>
                  </div>
              </div>
              <div className="flex-grow">
                 <Quote className="w-8 h-8 text-ivy-red mb-4 opacity-50" />
                 <p className="font-serif text-lg leading-relaxed text-gray-700 italic mb-6">
                    {VC_MESSAGE_FULL}
                 </p>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-10 opacity-60" />
              </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-mit-black mb-6">Key University Officials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEADERSHIP_TEAM.slice(1).map((leader, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all group">
                      <div className="flex items-center gap-4">
                          <img src={leader.imageUrl} alt={leader.name} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                          <div>
                            <h4 className="font-serif font-bold text-md text-mit-black group-hover:text-ivy-red transition-colors leading-tight">
                                {leader.name}
                            </h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{leader.designation}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <div className="mt-8">
               <Link to="/admin" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-ivy-red hover:border-ivy-red transition-colors">
                   View Full Administration Directory
               </Link>
          </div>
      </div>
  );

  // 5. Rankings
  const RankingsContent = (
      <div className="animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-mit-black mb-8">Rankings & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-paper border border-black p-8 text-center">
                  <div className="text-6xl font-serif font-black text-ivy-red mb-2">#29</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-mit-black">NIRF Engineering 2023</div>
                  <p className="text-xs text-gray-500 mt-4">Top State University in New Delhi</p>
              </div>
              <div className="bg-white border border-gray-200 p-8 text-center flex flex-col justify-center">
                  <div className="text-4xl font-serif font-bold text-mit-black mb-2">601-800</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">THE World Ranking</div>
                  <p className="text-xs text-gray-500 mt-4">Engineering Category</p>
              </div>
               <div className="bg-white border border-gray-200 p-8 text-center flex flex-col justify-center">
                  <div className="text-4xl font-serif font-bold text-mit-black mb-2">#8</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">India Today</div>
                  <p className="text-xs text-gray-500 mt-4">Best Govt Engineering Colleges</p>
              </div>
              <div className="bg-mit-black text-white p-8 text-center flex flex-col justify-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-ivy-red" />
                  <div className="text-xl font-serif font-bold">NAAC Accredited</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">'A' Grade</div>
              </div>
          </div>
      </div>
  );

  // 6. Campus Life
  const CampusContent = (
      <div className="animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-mit-black mb-6">A Vibrant Ecosystem</h3>
          <div className="prose max-w-none text-gray-600 mb-8 font-serif leading-relaxed">
              <p>
                  Life at DTU extends far beyond the classroom. Our 164-acre lush green campus is a hub of energy, creativity, and innovation. Whether it's the roar of the crowd at the Sports Complex or the intellectual debates at the Literary Society, there is something for everyone.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                  { label: 'Engifest', sub: 'North India\'s Largest Fest' },
                  { label: 'Sports Complex', sub: 'Olympic-sized Track' },
                  { label: 'Central Library', sub: '200,000+ Books' },
                  { label: 'Green Campus', sub: 'Sustainable Living' }
              ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 border-l-4 border-gray-200 hover:border-ivy-red hover:bg-white transition-all cursor-default group">
                      <div className="font-bold text-mit-black group-hover:text-ivy-red transition-colors">{item.label}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{item.sub}</div>
                  </div>
              ))}
          </div>
          <div className="mt-8">
              <Link to="/campus" className="inline-flex items-center gap-2 bg-mit-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-ivy-red transition-colors">
                  Explore Campus Life <ChevronRight className="w-4 h-4" />
              </Link>
          </div>
      </div>
  );

  const sections = [
    { title: 'At a Glance', content: GlanceContent },
    { title: 'History & Heritage', content: HistoryContent },
    { title: 'Vision & Mission', content: VisionContent },
    { title: 'Leadership', content: LeadershipContent },
    { title: 'Rankings', content: RankingsContent },
    { title: 'Campus Environment', content: CampusContent },
  ];

  return (
    <section id="about" className="py-24 bg-white min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 border-b border-black pb-8">
             <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-2 block">/ About_DTU</span>
             <h2 className="text-6xl md:text-8xl font-serif font-medium text-mit-black mb-6 tracking-tight">The Institution</h2>
        </div>

        {/* SPLIT SCREEN LAYOUT: LEFT LIST / RIGHT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Sidebar: Navigation List (Sticky Table of Contents) */}
            <div className="lg:col-span-3 lg:border-r lg:border-gray-200 lg:pr-8">
                <div className="sticky top-32 flex flex-col space-y-2">
                    {sections.map((section, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`text-left py-4 px-4 transition-all duration-300 border-l-4 ${
                                activeTab === idx 
                                ? 'border-ivy-red text-mit-black pl-6 bg-gray-50' 
                                : 'border-transparent text-gray-400 hover:text-mit-black hover:border-gray-200 hover:pl-6'
                            }`}
                        >
                            <span className={`font-serif text-xl ${activeTab === idx ? 'font-bold' : 'font-medium'}`}>
                                {section.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-9 min-h-[600px]">
                 <div key={activeTab} className="animate-fade-in-up">
                     {sections[activeTab].content}
                 </div>
            </div>

        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
