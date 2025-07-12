import React from 'react';
import SectionContainer from './SectionContainer';
import SkillRating from './SkillRating';
import { useSkills, useTechnologies } from '../hooks/usePortfolio';
import { SkillCategory, TechnologyCategory as TechCategory } from '../types';
import { getGradientClass } from '../utils/helpers';

const TechnologyCategoryComponent: React.FC<{
  title: string;
  technologies: readonly import('../types').Technology[];
  gradient: string;
}> = ({ title, technologies, gradient }) => (
  <div className="mb-6 lg:mb-8">
    <h4 className={`text-base lg:text-lg font-semibold mb-3 lg:mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {title}
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="bg-white/10 dark:bg-gray-800/50 rounded-lg p-2 lg:p-3 backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105"
        >
          <span className="text-xs lg:text-sm font-medium text-gray-800 dark:text-gray-200">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const { skillsGrouped, averageLevel } = useSkills();
  
  return (
    <div className="lg:col-span-1">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
        Habilidades Técnicas
      </h3>
      
      <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Nível médio de proficiência:
        </p>
        <div className="flex items-center">
          <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-3">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(averageLevel / 5) * 100}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {averageLevel}/5
          </span>
        </div>
      </div>

      {Object.entries(skillsGrouped).map(([category, skills]) => {
        if (skills.length === 0) return null;
        
        const categoryName = category as SkillCategory;
        const gradient = getGradientClass(categoryName);
        
        return (
          <div key={category} className="mb-6">
            <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {categoryName.replace('_', ' ')}
            </h4>
            <div className="space-y-3">
              {skills.map((skill) => (
                <SkillRating
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TechnologiesSection: React.FC = () => {
  const { getTechnologiesByCategory } = useTechnologies();
  
  const technologySections = [
    {
      title: 'Plataformas BPM',
      category: TechCategory.PLATFORMS,
      gradient: 'from-emerald-600 to-cyan-600'
    },
    {
      title: 'Linguagens de Programação',
      category: TechCategory.PROGRAMMING,
      gradient: 'from-cyan-600 to-violet-600'
    },
    {
      title: 'Bibliotecas e Estruturas',
      category: TechCategory.FRAMEWORKS,
      gradient: 'from-violet-600 to-emerald-600'
    },
    {
      title: 'Ferramentas e Metodologias',
      category: TechCategory.TOOLS,
      gradient: 'from-emerald-500 to-cyan-500'
    }
  ];
  
  return (
    <div className="lg:col-span-1">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
        Tecnologias & Ferramentas
      </h3>
      
      {technologySections.map((section) => (
        <TechnologyCategoryComponent
          key={section.category}
          title={section.title}
          technologies={getTechnologiesByCategory(section.category)}
          gradient={section.gradient}
        />
      ))}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <SectionContainer
      id="about"
      title="Sobre Mim"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 lg:mb-12 text-center">
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
            Sou um desenvolvedor apaixonado por criar soluções eficientes e inovadoras. 
            Com experiência sólida em automação de processos empresariais, desenvolvimento web 
            e análise de dados, busco sempre transformar ideias em realidade através de código limpo e funcional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <SkillsSection />
          <TechnologiesSection />
        </div>

        <div className="mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { label: 'Anos de Experiência', value: '2+', icon: '🎯' },
            { label: 'Projetos Concluídos', value: '25+', icon: '🚀' },
            { label: 'Clientes Satisfeitos', value: '15+', icon: '😊' },
            { label: 'Tecnologias', value: '20+', icon: '⚡' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 lg:p-6 bg-white/10 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-2xl lg:text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl lg:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-gray-700 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
