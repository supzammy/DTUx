import React, { useState } from 'react';
import { NOTICES } from '../constants';
import { FileText, Download, Filter, Search } from 'lucide-react';

const NoticesPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'General' | 'Student' | 'Faculty' | 'Tender'>('All');
  const [search, setSearch] = useState('');

  const filteredNotices = NOTICES.filter(notice => {
    const matchesCategory = filter === 'All' || notice.category === filter;
    const matchesSearch = notice.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-paper pt-20">
      
      {/* Header */}
      <div className="bg-mit-black text-white py-20 border-b-4 border-ivy-red">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-4 block bg-white/10 w-fit px-2 py-1">Official Communications</span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-none mb-6">Circulars & <span className="italic">Notices</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
                Archive of all official university notifications, exam schedules, tenders, and administrative orders.
            </p>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-12">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 border border-gray-200 shadow-sm sticky top-24 z-10">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {['All', 'General', 'Student', 'Faculty', 'Tender'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat as any)}
                        className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border border-black transition-all ${
                            filter === cat 
                            ? 'bg-mit-black text-white' 
                            : 'bg-white text-mit-black hover:bg-gray-100'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="relative w-full md:w-96">
                <input 
                    type="text" 
                    placeholder="Search circulars..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-ivy-red font-mono"
                />
                <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            </div>
        </div>

        {/* Notices Table */}
        <div className="bg-white border border-gray-200 min-h-[500px]">
            {filteredNotices.length > 0 ? (
                <div className="w-full">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-100 border-b border-black font-mono text-xs font-bold uppercase tracking-widest text-gray-600">
                        <div className="col-span-2">Date</div>
                        <div className="col-span-8">Subject</div>
                        <div className="col-span-2 text-right">Action</div>
                    </div>

                    {/* Table Rows */}
                    {filteredNotices.map((notice) => (
                        <div key={notice.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors group items-center">
                            
                            {/* Date */}
                            <div className="col-span-2 flex flex-row md:flex-col gap-2 md:gap-0 items-center md:items-start">
                                <span className="font-serif text-2xl font-bold text-mit-black">{notice.date.split(' ')[0]}</span>
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-500 bg-gray-200 px-1">{notice.date.split(' ')[1]}</span>
                            </div>

                            {/* Content */}
                            <div className="col-span-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 text-white ${
                                        notice.category === 'Student' ? 'bg-blue-600' :
                                        notice.category === 'Faculty' ? 'bg-purple-600' :
                                        notice.category === 'Tender' ? 'bg-orange-600' : 'bg-gray-600'
                                    }`}>
                                        {notice.category}
                                    </span>
                                    {notice.isNew && (
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-ivy-red animate-pulse">
                                            • New
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-serif font-bold text-mit-black group-hover:text-ivy-red transition-colors leading-tight">
                                    {notice.title}
                                </h3>
                            </div>

                            {/* Action */}
                            <div className="col-span-2 flex justify-end">
                                <a href={notice.link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-mit-black transition-colors border border-gray-200 px-4 py-2 hover:border-black">
                                    <Download className="w-4 h-4" /> <span className="hidden md:inline">Download</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                    <FileText className="w-16 h-16 mb-4 opacity-20" />
                    <p className="font-serif text-xl italic">No circulars found matching your criteria.</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default NoticesPage;