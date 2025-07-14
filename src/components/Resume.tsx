import React from 'react';
import SectionContainer from './SectionContainer';
import { useExperiences } from '../hooks/usePortfolio';
import cvPdf from '../assets/cv-antonio-juevan.pdf';

const ExperienceItem: React.FC<{
  experience: import('../types').Experience;
}> = ({ experience }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900"></div>
    
    <div className="absolute left-2 top-4 w-px h-full bg-gradient-to-b from-emerald-300 to-cyan-300 dark:from-emerald-600 dark:to-cyan-600 last:hidden"></div>
    
    <div className="bg-white/10 dark:bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-400/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
            {experience.title}
          </h3>
          <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            {experience.company}
          </h4>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 md:text-right">
          <div className="font-medium">
            {experience.period}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {experience.description}
      </p>
    </div>
  </div>
);

const ExperienceStats: React.FC<{
  totalYears: number;
  experienceCount: number;
}> = ({ totalYears, experienceCount }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
    <div className="text-center p-6 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-emerald-200/20">
      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {totalYears}+
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Anos de Experiência
      </div>
    </div>
    
    <div className="text-center p-6 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-emerald-200/20">
      <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
        {experienceCount}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Experiências
      </div>
    </div>
    
    <div className="text-center p-6 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-emerald-200/20 col-span-2 md:col-span-1">
      <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
        20+
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Tecnologias
      </div>
    </div>
  </div>
);

const Resume: React.FC = () => {
  const { experiences, totalYears } = useExperiences();

  return (
    <SectionContainer
      id="resume"
      title="Experiência Profissional"
    >
      <div className="max-w-4xl mx-auto">
        <ExperienceStats 
          totalYears={totalYears}
          experienceCount={experiences.length}
        />
        
        <div className="relative">
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Interessado no meu trabalho?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Baixe meu currículo completo ou entre em contato para conversarmos sobre oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={cvPdf}
              download="CV-Antonio-Juevan.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Baixar Currículo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-300 border border-emerald-200/20 hover:border-emerald-400/40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Resume;
