
import React, { useState, useRef } from 'react';
import { CAMPUS_ITEMS, GALLERY_IMAGES, CAMPUS_MAP_LOCATIONS } from '../constants';
import { ArrowRight, MapPin, X, Navigation, ExternalLink, ImageIcon, Zap, Users, Music, Trophy } from 'lucide-react';
import { MapLocation, CampusItem } from '../types';

const CampusLife: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);
  const [selectedItem, setSelectedItem] = useState<CampusItem | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleViewOnMap = (locationId: number) => {
    const location = CAMPUS_MAP_LOCATIONS.find(loc => loc.id === locationId);
    if (location) {
      setActiveLocation(location);
      setSelectedItem(null);
      mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Filter items for specific sections
  const techTeams = CAMPUS_ITEMS.filter(item => item.category === 'Tech Team');
  const culturalItems = CAMPUS_ITEMS.filter(item => item.category === 'Cultural Society' || item.category === 'Annual Fest');
  const facilities = CAMPUS_ITEMS.filter(item => item.category === 'Facilities');

  return (
    <section id="campus" className="bg-paper animate-fade-in-up">
      
      {/* 1. HERO HEADER */}
      <div className="pt-24 pb-20 border-b border-black">
         <div className="max-w-[1500px] mx-auto px-6 md:px-12 text-center">
             <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-4 block">Student Experience</span>
             <h2 className="text-6xl md:text-8xl font-serif font-medium text-mit-black leading-none mb-8">
                 Beyond the <span className="italic">Classroom</span>
             </h2>
             <p className="text-xl text-gray-600 font-serif max-w-2xl mx-auto leading-relaxed">
                 A vibrant ecosystem of innovation, culture, and community. From world-class robotics teams to India's largest cultural festivals, life at DTU is electric.
             </p>
         </div>
      </div>

      {/* 2. TECHNICAL TEAMS - EDITORIAL SPOTLIGHT (Dark Mode) */}
      <div className="bg-mit-black text-white">
          <div className="max-w-[1500px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left: Content */}
                  <div className="p-12 md:p-24 flex flex-col justify-center border-r border-white/10">
                      <div className="flex items-center gap-4 mb-8 text-ivy-red">
                          <Zap className="w-8 h-8" />
                          <span className="font-mono text-xs font-bold uppercase tracking-widest">Innovation Hub</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                          Pioneering the Future of Robotics & Aviation.
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                          Our student-led technical teams are consistently ranked among the best in the world. Competing in challenges by NASA, Lockheed Martin, and AUVSI, they push the boundaries of engineering.
                      </p>
                      <div className="space-y-8">
                          {techTeams.map((team, idx) => (
                              <div 
                                key={team.id} 
                                onClick={() => setSelectedItem(team)}
                                className="group cursor-pointer border-l-2 border-white/20 pl-6 hover:border-ivy-red transition-all duration-300"
                              >
                                  <h4 className="text-2xl font-serif font-bold group-hover:text-ivy-red transition-colors flex items-center gap-3">
                                      {team.title} <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </h4>
                                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{team.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                  {/* Right: Image Collage */}
                  <div className="relative h-[600px] md:h-auto overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                        alt="Robotics Lab" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000 transform-gpu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-mit-black via-transparent to-transparent"></div>
                  </div>
              </div>
          </div>
      </div>

      {/* 3. CULTURAL SOCIETIES - BENTO GRID */}
      <div className="py-24 bg-paper">
          <div className="max-w-[1500px] mx-auto px-6 md:px-12">
              <div className="flex justify-between items-end mb-16 border-b border-black pb-8">
                  <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-2 block">Arts & Culture</span>
                      <h3 className="text-5xl font-serif font-bold text-mit-black">Campus Culture</h3>
                  </div>
                  <div className="hidden md:block text-right">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Established Societies</div>
                      <div className="text-4xl font-serif font-bold text-mit-black">20+</div>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {culturalItems.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => setSelectedItem(item)}
                        className="group bg-white border border-gray-200 hover:border-ivy-red hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative min-h-[400px] flex flex-col"
                      >
                          <div className="h-2/3 overflow-hidden relative">
                              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu" />
                              <div className="absolute top-4 left-4">
                                  <span className="bg-white text-mit-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-black">
                                      {item.category}
                                  </span>
                              </div>
                          </div>
                          <div className="p-8 flex-grow flex flex-col justify-between bg-white relative z-10">
                              <div>
                                  <h4 className="text-2xl font-serif font-bold text-mit-black mb-3 group-hover:text-ivy-red transition-colors">{item.title}</h4>
                                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.description}</p>
                              </div>
                              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-mit-black transition-colors">
                                  Explore <ArrowRight className="w-4 h-4" />
                              </div>
                          </div>
                      </div>
                  ))}
                  
                  {/* Static Card for "View All" */}
                  <div className="bg-gray-100 border border-gray-200 flex flex-col justify-center items-center p-12 text-center group cursor-pointer hover:bg-mit-black hover:text-white transition-colors">
                      <Music className="w-16 h-16 mb-6 text-gray-300 group-hover:text-ivy-red transition-colors" />
                      <h4 className="text-2xl font-serif font-bold mb-2">Join the Community</h4>
                      <p className="text-sm text-gray-500 mb-6 group-hover:text-gray-400">Discover 50+ other societies including Drama, Music, Fine Arts, and Fashion.</p>
                      <span className="text-xs font-bold uppercase tracking-widest border-b border-black group-hover:border-white pb-1">View All Societies</span>
                  </div>
              </div>
          </div>
      </div>

      {/* 4. CAMPUS FACILITIES (Grid) */}
      <div className="bg-white py-24 border-t border-black">
           <div className="max-w-[1500px] mx-auto px-6 md:px-12">
               <h3 className="text-3xl font-serif font-bold text-mit-black mb-12">World-Class Infrastructure</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
                   {facilities.map((item, idx) => (
                       <div key={item.id} onClick={() => setSelectedItem(item)} className={`p-12 border-b md:border-b-0 ${idx % 2 === 0 ? 'md:border-r' : ''} border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer group flex gap-8 items-start`}>
                           <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-gray-200">
                               <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                           </div>
                           <div>
                               <h4 className="text-2xl font-serif font-bold text-mit-black mb-2 group-hover:text-ivy-red transition-colors">{item.title}</h4>
                               <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1 group-hover:text-mit-black">
                                   View Details <ArrowRight className="w-3 h-3" />
                               </span>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
      </div>

      {/* 5. INTERACTIVE MAP SECTION */}
      <div id="map" ref={mapRef} className="relative h-[800px] w-full bg-gray-100 overflow-hidden border-t border-black group">
            {/* Map Background - Real DTU Campus */}
            <img 
                src="/images/dtu campus.png" 
                alt="Interactive Campus Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

            {/* Map Overlay Text */}
            <div className="absolute top-12 left-6 md:left-12 z-20 bg-white p-6 shadow-xl max-w-md border-l-4 border-ivy-red">
                <h3 className="text-2xl font-serif font-bold text-mit-black mb-2">Interactive Campus Map</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                    Navigate our 164-acre sustainable green campus. Click on any pin to view building details and get directions.
                </p>
            </div>
            
            {/* Map Pins */}
            {CAMPUS_MAP_LOCATIONS.map((loc) => (
                <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    style={{ top: loc.top, left: loc.left }}
                    className={`absolute transform -translate-x-1/2 -translate-y-full transition-all duration-300 z-10 group/pin focus:outline-none ${activeLocation?.id === loc.id ? 'scale-125 z-30' : 'hover:scale-110'}`}
                >
                    <div className={`relative flex flex-col items-center`}>
                        <MapPin className={`w-12 h-12 drop-shadow-2xl ${activeLocation?.id === loc.id ? 'text-ivy-red fill-white' : 'text-white fill-mit-black stroke-2'}`} />
                        <div className="mt-2 px-3 py-1 bg-mit-black text-white shadow-lg text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                            {loc.title}
                        </div>
                    </div>
                </button>
            ))}

            {/* Detail Card Overlay */}
            {activeLocation && (
                <div className="absolute bottom-12 right-6 md:right-12 w-80 bg-white shadow-2xl z-40 animate-in slide-in-from-right duration-300 border border-gray-200">
                    <div className="relative h-48">
                        <img src={activeLocation.imageUrl} alt={activeLocation.title} className="w-full h-full object-cover" />
                        <button 
                            onClick={(e) => { e.stopPropagation(); setActiveLocation(null); }}
                            className="absolute top-2 right-2 bg-black/50 hover:bg-black text-white p-1 rounded-sm transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-0 left-0 bg-ivy-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                            {activeLocation.category}
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="font-serif font-bold text-xl text-mit-black mb-3">{activeLocation.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed mb-6 border-b border-gray-100 pb-4">
                            {activeLocation.description}
                        </p>
                        <a 
                            href={activeLocation.googleMapsUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-mit-black hover:bg-gray-800 text-white text-[10px] font-bold py-3 px-4 transition-colors uppercase tracking-widest"
                        >
                            <Navigation className="w-3 h-3" /> Get Directions
                        </a>
                    </div>
                </div>
            )}
      </div>

      {/* 6. MODAL FOR ITEMS (Reused Logic) */}
      {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
             <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 bg-white text-black hover:bg-ivy-red hover:text-white p-2 transition-colors border border-black"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Modal Content */}
                <div className="md:w-1/2 relative min-h-[400px]">
                  <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                      <span className="bg-ivy-red px-2 py-1 text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">{selectedItem.category}</span>
                      <h3 className="font-serif font-bold text-4xl md:text-5xl">{selectedItem.title}</h3>
                  </div>
                </div>

                <div className="md:w-1/2 p-12 bg-white flex flex-col">
                   <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Overview</h4>
                   <p className="text-mit-black text-lg leading-relaxed font-serif mb-8">
                      {selectedItem.fullDescription || selectedItem.description}
                   </p>

                   {selectedItem.galleryImages && (
                      <div className="mt-auto">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Gallery</h4>
                          <div className="grid grid-cols-3 gap-2">
                              {selectedItem.galleryImages.map((img, i) => (
                                  <div key={i} className="aspect-square overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80">
                                      <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                                  </div>
                              ))}
                          </div>
                      </div>
                   )}
                   
                   <div className="mt-8 pt-8 border-t border-gray-100 flex gap-4">
                       <button className="flex-1 bg-mit-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-ivy-red transition-colors">
                           Visit Website
                       </button>
                       {selectedItem.locationId && (
                           <button onClick={() => handleViewOnMap(selectedItem.locationId!)} className="flex-1 border border-black text-mit-black py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors">
                               Locate on Map
                           </button>
                       )}
                   </div>
                </div>
             </div>
          </div>
      )}
    </section>
  )
}
export default CampusLife;
