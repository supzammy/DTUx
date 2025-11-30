
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionSection {
  title: string;
  content: React.ReactNode;
}

interface AccordionNavProps {
  sections: AccordionSection[];
}

const AccordionNav: React.FC<AccordionNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="w-full border-t border-black">
      {sections.map((section, index) => (
        <div key={index} className="border-b border-black group">
          <button
            onClick={() => toggleSection(index)}
            className={`w-full text-left py-6 px-4 flex justify-between items-center transition-all duration-300 ${
              activeSection === index 
                ? 'bg-mit-black text-white' 
                : 'bg-transparent text-mit-black hover:bg-gray-50'
            }`}
          >
            <span className={`font-serif text-2xl md:text-3xl font-bold ${
              activeSection === index ? 'text-white' : 'group-hover:text-ivy-red'
            }`}>
              {section.title}
            </span>
            <span className={`transition-transform duration-300 ${activeSection === index ? 'rotate-180' : ''}`}>
               {activeSection === index ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-8 md:p-12 bg-paper border-l-4 border-ivy-red">
               <div className="prose max-w-none text-gray-700 leading-relaxed font-sans">
                 {section.content}
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionNav;
