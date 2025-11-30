
import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    // 'min-h-screen' ensures footer doesn't jump up during the split-second load
    // 'animate-fade-in-up' triggers the GPU-accelerated transition defined in index.html
    <div key={location.pathname} className="animate-fade-in-up w-full min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;