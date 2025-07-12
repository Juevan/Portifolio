import React from 'react';
import { useScrollBehavior, useTheme } from '../hooks/usePortfolio';
import { DesignTokens } from '../design-system/tokens';

const NavigationLinks: React.FC<{
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isMobile?: boolean;
  onLinkClick?: () => void;
}> = ({ activeSection, onSectionClick, isMobile = false, onLinkClick }) => {
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'resume', label: 'Currículo' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contato' }
  ];

  const handleClick = (sectionId: string) => {
    onSectionClick(sectionId);
    onLinkClick?.();
  };

  return (
    <nav className={isMobile ? 'flex flex-col space-y-4 p-4' : 'hidden md:flex space-x-6 lg:space-x-8'}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`font-medium transition-all duration-300 relative group text-sm lg:text-base ${
            activeSection === item.id
              ? 'text-emerald-600 dark:text-emerald-400'
              : isMobile 
                ? 'text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400'
                : 'text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400'
          }`}
        >
          {item.label}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform transition-transform duration-300 ${
              activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </button>
      ))}
    </nav>
  );
};

const ThemeToggle: React.FC<{
  isDark: boolean;
  onToggle: () => void;
}> = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/70 backdrop-blur-sm border border-emerald-200/30 dark:border-gray-600/50 hover:border-emerald-400/50 dark:hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105"
    aria-label={`Mudar para tema ${isDark ? 'claro' : 'escuro'}`}
  >
    <div className="relative w-6 h-6">
      <svg
        className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-transform duration-300 ${
          isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        className={`absolute inset-0 w-6 h-6 text-blue-400 transition-transform duration-300 ${
          isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </div>
  </button>
);

const MobileMenu: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}> = ({ isOpen, onToggle, activeSection, onSectionClick, isDark, onThemeToggle }) => (
  <>
    {/* Mobile Menu Button */}
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/70 backdrop-blur-sm border border-emerald-200/30 dark:border-gray-600/50 hover:border-emerald-400/50 dark:hover:border-emerald-400/50 transition-all duration-300"
      aria-label="Menu de navegação"
    >
      <div className="w-6 h-6 relative">
        <span
          className={`absolute block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-300 translate-y-2 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-300 translate-y-4 ${
            isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
          }`}
        />
      </div>
    </button>

    {/* Mobile Menu Overlay */}
    {isOpen && (
      <div className="fixed inset-0 z-40 md:hidden">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onToggle} />
        <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 border-l-2 border-emerald-500/60 dark:border-emerald-400/60 p-6 shadow-2xl">
          <div className="flex flex-col h-full bg-white dark:bg-gray-800">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Menu
              </h2>
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>
            
            <NavigationLinks
              activeSection={activeSection}
              onSectionClick={onSectionClick}
              isMobile={true}
              onLinkClick={onToggle}
            />
          </div>
        </div>
      </div>
    )}
  </>
);

const Logo: React.FC<{
  onHomeClick: () => void;
}> = ({ onHomeClick }) => (
  <button
    onClick={onHomeClick}
    className="flex items-center space-x-3 group"
  >
    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
      <span className="text-white font-bold text-lg">AJ</span>
    </div>
    <div className="hidden sm:block">
      <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
        Antonio Juevan
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Desenvolvedor Full Stack
      </p>
    </div>
  </button>
);

const Header: React.FC = () => {
  const { activeSection, scrollToSection } = useScrollBehavior();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleHomeClick = () => {
    scrollToSection('home');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Close mobile menu on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-emerald-200/20 dark:border-gray-700/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo onHomeClick={handleHomeClick} />

          {/* Desktop Navigation */}
          <NavigationLinks
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>

            {/* Mobile Menu */}
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
              isDark={isDark}
              onThemeToggle={toggleTheme}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
