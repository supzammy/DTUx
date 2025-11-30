
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import Administration from './components/Administration';
import Admissions from './components/Admissions';
import ResearchStats from './components/ResearchStats';
import Academics from './components/Academics';
import CampusLife from './components/CampusLife';
import FacultyDirectory from './components/FacultyDirectory';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import DepartmentPage from './components/DepartmentPage';
import NoticesPage from './components/NoticesPage';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Breadcrumbs from './components/Breadcrumbs';
import NotFound from './components/NotFound';

// Home Page Aggregate
const Home: React.FC = () => (
  <PageTransition>
      <Hero />
      <AboutSection />
      <ResearchStats />
      <NewsSection />
  </PageTransition>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col antialiased bg-white text-mit-black selection:bg-ivy-red selection:text-white">
        <Navbar />
        {/* Breadcrumbs appear below Navbar but above content on non-home pages */}
        <Breadcrumbs />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageTransition><AboutSection /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Administration /></PageTransition>} />
            <Route path="/academics" element={<PageTransition><Academics /></PageTransition>} />
            <Route path="/departments" element={<PageTransition><Academics /></PageTransition>} />
            <Route path="/admissions" element={<PageTransition><Admissions /></PageTransition>} />
            <Route path="/research" element={<PageTransition><ResearchStats /></PageTransition>} />
            <Route path="/campus" element={<PageTransition><CampusLife /></PageTransition>} />
            <Route path="/news" element={<PageTransition><NewsSection /></PageTransition>} />
            <Route path="/notices" element={<PageTransition><NoticesPage /></PageTransition>} />
            <Route path="/faculty" element={<PageTransition><FacultyDirectory /></PageTransition>} />
            <Route path="/department/:code" element={<PageTransition><DepartmentPage /></PageTransition>} />
            {/* Custom 404 Page */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
