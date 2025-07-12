import React from 'react';

interface SectionContainerProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'gradient';
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  title, 
  children, 
  variant = 'light',
  className = '' 
}) => {
  const backgroundClasses = {
    light: 'bg-white dark:bg-slate-900',
    dark: 'bg-slate-50 dark:bg-slate-800',
    gradient: 'bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'
  };

  return (
    <section id={id} className={`${backgroundClasses[variant]} py-16 md:py-24 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
