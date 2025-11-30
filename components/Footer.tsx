
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Youtube, ExternalLink, Github, Code } from 'lucide-react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mit-black text-white pt-20 pb-10 border-t-[8px] border-ivy-red">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand & Address - Wider Column */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center gap-4 mb-8">
                <img 
                    src="/images/dtu logo.png" 
                    alt="DTU Seal" 
                    className="w-16 h-16 object-contain" 
                />
                <div>
                    <h2 className="text-2xl font-serif font-bold leading-none text-white uppercase tracking-wider">Delhi Technological <br/>University</h2>
                    <p className="text-gray-400 font-bold text-[10px] mt-2 uppercase tracking-widest">Formerly Delhi College of Engineering</p>
                </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-ivy-red pl-6 font-serif italic">
               "Dignity of Labour"<br/>
               <span className="text-xs font-sans font-normal text-gray-500 not-italic">Excellence in technology, research, and innovation since 1941.</span>
            </p>
            
            <ul className="space-y-4 text-sm text-gray-300 font-medium mb-8">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-ivy-red" />
                <span>Shahbad Daulatpur, Main Bawana Road,<br/>Delhi-110042, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-ivy-red" />
                <span>+91-11-27871018</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-ivy-red" />
                <a href="mailto:registrar@dtu.ac.in" className="hover:text-white hover:underline">registrar@dtu.ac.in</a>
              </li>
            </ul>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white hover:bg-ivy-red p-2 border border-gray-700 transition-all rounded-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Admission & Academics */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-700 pb-2 inline-block">Academics</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              {FOOTER_LINKS.academics.map((link) => (
                <li key={link.title}>
                  {link.href.startsWith('http') ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-ivy-red hover:translate-x-1 transition-all block">
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.href}`} className="hover:text-ivy-red hover:translate-x-1 transition-all block">
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

           {/* Useful Links */}
           <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.title}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-ivy-red hover:translate-x-1 transition-all block">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Links (Govt) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-700 pb-2 inline-block">Govt Resources</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              {FOOTER_LINKS.related.map((link) => (
                <li key={link.title}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-ivy-red hover:translate-x-1 transition-all flex items-center gap-2">
                    {link.title} <ExternalLink className="w-3 h-3 text-gray-600" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-8">
              <p>&copy; {new Date().getFullYear()} Delhi Technological University.</p>
              
              {/* DEVELOPER CREDIT SECTION */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-sm px-4 py-2 hover:bg-white/10 transition-colors cursor-default group">
                  <div className="flex items-center gap-2 text-gray-300 group-hover:text-white">
                      <Code className="w-3 h-3 text-ivy-red" />
                      <span className="text-[9px] uppercase tracking-widest">Designed & Developed by Zammy</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex gap-3">
                      <a 
                        href="https://www.linkedin.com/in/zammy/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-[#0077b5] transition-colors" 
                        title="LinkedIn Profile"
                      >
                          <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href="https://github.com/supzammy" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors" 
                        title="GitHub Profile"
                      >
                          <Github className="w-4 h-4" />
                      </a>
                  </div>
              </div>
          </div>

          <div className="flex space-x-6 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
