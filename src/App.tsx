import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useTheme } from './hooks/usePortfolio';

const App: React.FC = () => {
  const { isDark } = useTheme();

  React.useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="relative">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;