
import React from 'react';
import { ADMISSION_PROGRAMS } from '../constants';
import { ArrowRight, Cpu, Zap, Briefcase, PenTool, ExternalLink, Calendar, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'Cpu': <Cpu className="w-8 h-8" />,
    'Zap': <Zap className="w-8 h-8" />,
    'Briefcase': <Briefcase className="w-8 h-8" />,
    'PenTool': <PenTool className="w-8 h-8" />
};

const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="py-24 bg-paper text-mit-black relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px)',
          }}></div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 border-b-4 border-mit-black pb-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-ivy-red mb-3 block">
                        / Become_A_Part_Of_DTU
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-mit-black tracking-tight mb-4">
                        Admissions 2025-26
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl font-medium leading-relaxed">
                        Join a legacy of innovation and excellence. Admission to Delhi Technological University is merit-based and conducted through nationally recognized entrance examinations.
                    </p>
                </div>
                
                <div className="bg-white border-2 border-mit-black p-6 min-w-[280px]">
                    <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-ivy-red" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Important Dates</span>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium">Application Opens:</span>
                            <span className="font-bold">May 2025</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Session Begins:</span>
                            <span className="font-bold">July 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Admission Programs Grid */}
        <div className="mb-20">
            <h3 className="text-3xl font-serif font-bold text-mit-black mb-12 border-l-4 border-ivy-red pl-6">
                Choose Your Path
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ADMISSION_PROGRAMS.map((prog, index) => (
                    <a 
                        key={index} 
                        href={prog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border-2 border-gray-200 hover:border-mit-black transition-all duration-300 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl"
                    >
                        {/* Card Header */}
                        <div className="bg-mit-black text-white p-8 flex items-center justify-between group-hover:bg-ivy-red transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    {prog.icon && iconMap[prog.icon]}
                                </div>
                                <div>
                                    <h4 className="text-3xl font-serif font-bold mb-1">{prog.degree}</h4>
                                    <div className="inline-block px-3 py-1 bg-white/20 text-xs font-bold uppercase tracking-widest">
                                        Via {prog.exam}
                                    </div>
                                </div>
                            </div>
                            <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        
                        {/* Card Body */}
                        <div className="p-8 flex-grow flex flex-col">
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow font-light">
                                {prog.description}
                            </p>
                            
                            {/* CTA Footer */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-mit-black transition-colors">
                                    Click to Apply
                                </span>
                                <ArrowRight className="w-5 h-5 text-ivy-red group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

        {/* Additional Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-300 border border-gray-300">
            
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
                <Award className="w-12 h-12 text-ivy-red mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-serif font-bold text-mit-black mb-3">Scholarships Available</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Merit-based scholarships and fee waivers for economically disadvantaged students. Financial aid programs for all deserving candidates.
                </p>
                <a href="http://dtu.ac.in/Web/Academics/scholarships.php" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-ivy-red hover:underline inline-flex items-center gap-2">
                    Learn More <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            <div className="bg-mit-black text-white p-10 hover:bg-ivy-red transition-colors group">
                <ExternalLink className="w-12 h-12 mb-6 text-white/80 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-serif font-bold mb-3">JAC Delhi Portal</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    All B.Tech admissions are processed through Joint Admission Counselling (JAC) Delhi. Visit the official portal for seat matrix and counseling schedule.
                </p>
                <a href="https://jacdelhi.admissions.nic.in/" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-white hover:underline inline-flex items-center gap-2">
                    Visit Portal <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
                <Calendar className="w-12 h-12 text-ivy-red mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-serif font-bold text-mit-black mb-3">Academic Calendar</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    View the complete academic calendar including exam schedules, semester dates, and university holidays.
                </p>
                <a href="/academics#resources" className="text-xs font-bold uppercase tracking-widest text-ivy-red hover:underline inline-flex items-center gap-2">
                    View Calendar <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gradient-to-r from-mit-black to-gray-900 text-white p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>
            <div className="relative z-10">
                <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4">Have Questions About Admissions?</h4>
                <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Our admissions team is here to help you navigate the process. For queries regarding eligibility, documents, or admission procedures, feel free to reach out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                        href="mailto:admissions@dtu.ac.in" 
                        className="inline-flex items-center gap-2 bg-ivy-red hover:bg-white hover:text-mit-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors border-2 border-transparent hover:border-ivy-red"
                    >
                        Email Admissions Office
                    </a>
                    <a 
                        href="http://dtu.ac.in/Web/Admission/" 
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-mit-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Official Admissions Page
                    </a>
                </div>
                <p className="text-xs text-gray-500 mt-6">
                    Phone: +91-11-27871018 | Registrar Office, Delhi Technological University
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Admissions;
