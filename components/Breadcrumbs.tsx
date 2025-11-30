
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  // Map for readable names
  const nameMap: Record<string, string> = {
    'about': 'About DTU',
    'admin': 'Administration',
    'academics': 'Academics',
    'admissions': 'Admissions',
    'research': 'Research & Innovation',
    'campus': 'Campus Life',
    'news': 'News & Events',
    'notices': 'Circulars',
    'faculty': 'Faculty Directory',
    'department': 'Department',
    'dsm': 'Delhi School of Management',
    'dod': 'Department of Design',
    'cse': 'Comp. Science & Engg.',
    'ece': 'Electronics & Comm.',
    'me': 'Mechanical Engg.',
    'bt': 'Biotechnology'
  };

  const getName = (path: string) => {
      // Check exact map
      if (nameMap[path.toLowerCase()]) return nameMap[path.toLowerCase()];
      // Check if it looks like a department code
      if (path.length <= 4) return path.toUpperCase();
      // Fallback: Capitalize
      return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 py-3 sticky top-0 z-30">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <ol className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <li>
            <Link to="/" className="hover:text-ivy-red flex items-center transition-colors" aria-label="Home">
              <Home className="w-3 h-3" />
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-gray-300" />
                {isLast ? (
                  <span className="text-ivy-red" aria-current="page">
                    {getName(value)}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-mit-black transition-colors">
                    {getName(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
