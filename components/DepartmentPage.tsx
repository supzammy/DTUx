
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DEPARTMENT_DATABASE, FACULTY_DATA } from '../constants';
import { DepartmentDetails } from '../types';
import { Users, BookOpen, ArrowLeft, Mail, Search, Globe, Award, ArrowUpRight } from 'lucide-react';

const DepartmentPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [dept, setDept] = useState<DepartmentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Backend Fetch
    setLoading(true);
    setTimeout(() => {
        if (code && DEPARTMENT_DATABASE[code.toUpperCase()]) {
            setDept(DEPARTMENT_DATABASE[code.toUpperCase()]);
        }
        setLoading(false);
    }, 300);
  }, [code]);

  const getDuration = (degree: string) => {
    if (degree.includes('B.Tech') || degree.includes('B.Des')) return '4 Years';
    if (degree.includes('M.Tech') || degree.includes('MBA') || degree.includes('M.Des')) return '2 Years';
    if (degree.includes('PhD')) return '3-5 Years';
    if (degree.includes('BBA') || degree.includes('BA')) return '3 Years';
    return 'Duration Varies';
  };

  if (loading) return <div className="min-h-screen bg-paper"></div>;
  if (!dept) return <div>404 Not Found</div>;

  // Filter faculty for this specific dept logic (using mock data matching logic)
  const deptFaculty = FACULTY_DATA.filter(f => f.department === dept.name || f.department.includes(code?.toUpperCase() || ''));

  return (
    <div className="min-h-screen bg-paper text-mit-black pt-20">
        
        {/* Department Header - Minimalist & Stark */}
        <div className="bg-white border-b border-gray-200 py-16 md:py-24">
            <div className="max-w-[1500px] mx-auto px-6 md:px-12">
                <Link to="/departments" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-ivy-red mb-8 transition-colors">
                    <ArrowLeft className="w-3 h-3" /> All Departments
                </Link>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <span className="font-mono text-xs text-ivy-red mb-2 block">EST. CODE: {dept.code}</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-none mb-6">
                            {dept.name}
                        </h1>
                        <div className="flex gap-4">
                            <span className="px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-widest">
                                Undergrad
                            </span>
                             <span className="px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-widest">
                                Graduate
                            </span>
                             <span className="px-3 py-1 border border-black text-[10px] font-bold uppercase tracking-widest">
                                Doctoral
                            </span>
                        </div>
                    </div>
                    
                    <div className="md:text-right border-l-2 md:border-l-0 md:border-r-2 border-ivy-red pl-4 md:pl-0 md:pr-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Chairperson</div>
                        <div className="text-xl font-serif font-bold">{dept.head}</div>
                        <a href={`mailto:${dept.email}`} className="text-sm text-ivy-red hover:underline mt-1 block font-mono">
                            {dept.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* 2-Column Layout: Faculty List (Left) | Sidebar Stats (Right) */}
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Faculty & Research (8 Cols) */}
            <div className="lg:col-span-8">
                <h3 className="text-2xl font-serif border-b border-gray-200 pb-4 mb-8">Faculty & Researchers</h3>
                
                <div className="grid grid-cols-1 gap-0 border border-gray-200 bg-white">
                    {deptFaculty.length > 0 ? deptFaculty.map((fac, idx) => (
                        <div key={idx} className="p-6 border-b border-gray-200 flex flex-col sm:flex-row gap-6 hover:bg-gray-50 transition-colors group">
                            <div className="w-20 h-20 bg-gray-200 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                                <img src={fac.imageUrl} alt={fac.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold group-hover:text-ivy-red transition-colors">{fac.name}</h4>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{fac.title}</div>
                                <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">{fac.bio || "Specializes in advanced engineering topics."}</p>
                                <div className="flex flex-wrap gap-2">
                                    {fac.researchInterests.slice(0, 3).map((int, i) => (
                                        <span key={i} className="text-[10px] uppercase border border-gray-200 px-2 py-0.5 bg-white text-gray-600">
                                            {int}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="p-8 text-center text-gray-500 italic font-serif">Faculty list updating for {dept.name}...</div>
                    )}
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-serif border-b border-gray-200 pb-4 mb-8">Research Focus Areas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {dept.researchAreas.map((area, idx) => (
                            <Link 
                                key={idx} 
                                to={`/faculty`} 
                                className="p-6 border border-gray-200 bg-white hover:border-ivy-red transition-all group cursor-pointer flex flex-col justify-between"
                            >
                                <Globe className="w-6 h-6 text-gray-300 group-hover:text-ivy-red mb-3 transition-colors" />
                                <div className="flex justify-between items-end">
                                    <h5 className="font-bold text-sm leading-tight text-mit-black group-hover:text-ivy-red">{area}</h5>
                                    <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover:text-ivy-red opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Sidebar Stats (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Key Stats Box */}
                <div className="bg-mit-black text-white p-8">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-6">Department Data</h4>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-white/20 pb-4">
                            <span className="font-serif text-lg">Students</span>
                            <span className="text-2xl font-light">{dept.stats.students}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-4">
                            <span className="font-serif text-lg">Faculty</span>
                            <span className="text-2xl font-light">{dept.stats.faculty}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-4">
                            <span className="font-serif text-lg">Publications</span>
                            <span className="text-2xl font-light">{dept.stats.publications}</span>
                        </div>
                    </div>
                </div>

                {/* Programs List - Wide View */}
                <div className="bg-white border border-gray-200 p-8">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Academic Programs</h4>
                    <div className="space-y-6">
                        {dept.programs.map((prog, idx) => (
                            <div key={idx} className="group pb-4 border-b border-gray-100 last:border-0">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-serif font-bold text-lg text-mit-black group-hover:text-ivy-red transition-colors">{prog.degree}</span>
                                    <div className="px-2 py-0.5 bg-gray-100 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                                        {prog.level}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-600 leading-relaxed mb-3">
                                    Focuses on {prog.courses.join(", ")}.
                                </div>
                                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    <span>{getDuration(prog.degree)}</span>
                                    <span>•</span>
                                    <span>Full Time</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gray-100 p-8 text-center border border-gray-200">
                    <h4 className="font-serif text-xl font-bold mb-2">Join the Department</h4>
                    <p className="text-sm text-gray-600 mb-6">Applications for Fall 2025 are now open for all undergraduate and graduate programs.</p>
                    <Link to="/admissions" className="inline-block w-full bg-ivy-red text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                        Admission Info
                    </Link>
                </div>

            </div>

        </div>
    </div>
  );
};

export default DepartmentPage;
