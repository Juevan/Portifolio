import React from 'react';
import SectionContainer from './SectionContainer';
import { useProjects } from '../hooks/usePortfolio';
import { ProjectCategory } from '../types';
import { getCategoryColor } from '../utils/helpers';

const ProjectFilters: React.FC<{
  categories: readonly ProjectCategory[];
  activeFilter: ProjectCategory | 'ALL';
  onFilterChange: (filter: ProjectCategory | 'ALL') => void;
}> = ({ categories, activeFilter, onFilterChange }) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    <button
      onClick={() => onFilterChange('ALL')}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        activeFilter === 'ALL'
          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
          : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-700 hover:scale-105'
      }`}
    >
      Todos os Produtos
    </button>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onFilterChange(category)}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          activeFilter === category
            ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
            : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-700 hover:scale-105'
        }`}
      >
        {category.replace('_', ' ')}
      </button>
    ))}
  </div>
);

const ProjectCard: React.FC<{
  project: import('../types').Project;
}> = ({ project }) => (
  <div className="group bg-white/10 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex flex-col h-full">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{project.icon}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <span 
          className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mt-1"
          style={{ backgroundColor: getCategoryColor(project.category) }}
        >
          {project.category.replace('_', ' ')}
        </span>
      </div>
    </div>
    
    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
    
    {project.repositoryUrl && (
      <div className="mt-auto">
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:transform hover:scale-105 shadow-md"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          Ver Repositório
        </a>
      </div>
    )}
  </div>
);

const ProjectGrid: React.FC<{
  projects: readonly import('../types').Project[];
}> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-gray-500 dark:text-gray-500">
          Tente ajustar os filtros ou pesquisar por outros termos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectSearch: React.FC<{
  searchQuery: string;
  onSearchChange: (query: string) => void;
}> = ({ searchQuery, onSearchChange }) => (
  <div className="max-w-md mx-auto mb-8">
    <div className="relative">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-3 pl-12 bg-white/10 dark:bg-gray-800/50 border border-emerald-200/20 rounded-full focus:outline-none focus:border-emerald-400/40 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const {
    filteredProjects,
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    projectCategories
  } = useProjects();

  return (
    <SectionContainer
      id="portfolio"
      title="Produtos Desenvolvidos"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore os produtos e soluções que desenvolvi e estão prontos para implementação imediata. 
            Cada produto foi criado com foco em resolver problemas específicos de forma eficiente e escalável.
          </p>
        </div>

        <ProjectSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ProjectFilters
          categories={projectCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectGrid projects={filteredProjects} />

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Interessado em algum produto?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Todos os produtos estão prontos para implementação imediata. 
              Entre em contato para discutir licenciamento, customizações ou implantação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                <span>Solicitar Demo</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border-2 border-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <span>Ver Serviços</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
