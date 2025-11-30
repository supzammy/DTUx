import React from 'react';
import { NEWS_ITEMS, NOTICES } from '../constants';
import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  const mainStory = NEWS_ITEMS[0];
  const sideStories = NEWS_ITEMS.slice(1, 4);

  return (
    <section id="news" className="bg-paper py-24 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-4 border-b-2 border-black">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-2 block">The Daily</span>
            <h2 className="text-5xl font-serif text-mit-black">News & <span className="italic">Notices</span></h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-ivy-red transition-colors mt-4 md:mt-0">
            Archive <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-200 bg-white">
            
            {/* Main Feature Story (Left - 7 Cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 group cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="aspect-[16/9] w-full overflow-hidden mb-8 bg-gray-100">
                    <img src={mainStory.imageUrl} alt={mainStory.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-mit-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Featured</span>
                    <span className="font-mono text-xs text-gray-500 uppercase">{mainStory.date}</span>
                </div>
                <h3 className="text-4xl font-serif font-medium leading-tight mb-4 group-hover:text-ivy-red transition-colors">
                    {mainStory.title}
                </h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                    {mainStory.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-mit-black pb-1 group-hover:text-ivy-red group-hover:border-ivy-red transition-colors">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                </span>
            </div>

            {/* Side Stories & Notices (Right - 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col h-full">
                
                {/* Secondary News List */}
                <div className="flex-grow">
                    {sideStories.map((story) => (
                        <div key={story.id} className="p-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group cursor-pointer h-1/2 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-ivy-red">{story.category}</span>
                                <span className="font-mono text-[10px] text-gray-400">{story.date}</span>
                            </div>
                            <h4 className="text-xl font-serif font-bold leading-tight mb-2 group-hover:text-ivy-red transition-colors">
                                {story.title}
                            </h4>
                            <p className="text-sm text-gray-500 line-clamp-2">{story.summary}</p>
                        </div>
                    ))}
                </div>

                {/* Notices Section (Bottom Right) */}
                <div className="bg-mit-black text-white p-8">
                    <h4 className="font-serif text-2xl mb-6 flex items-center gap-2">
                        Official Circulars <span className="w-2 h-2 bg-ivy-red rounded-full animate-pulse"></span>
                    </h4>
                    <ul className="space-y-4">
                        {NOTICES.slice(0, 3).map((notice, idx) => (
                            <li key={idx} className="group cursor-pointer">
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="font-mono text-xs text-ivy-red">{notice.date}</span>
                                    <h5 className="font-bold text-sm leading-tight group-hover:underline decoration-1 underline-offset-4">{notice.title}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="inline-block mt-6 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        View All Circulars →
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;