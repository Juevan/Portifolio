import React from 'react';
import SectionContainer from './SectionContainer';
import SkillRating from './SkillRating';
import { useSkills, useTechnologies } from '../hooks/usePortfolio';
import { TechnologyCategory as TechCategory } from '../types';

const stats = [
  { icon: '🎯', value: '2+ anos', label: 'Experiência' },
  { icon: '🚀', value: '25+', label: 'Projetos' },
  { icon: '🤝', value: '15+', label: 'Clientes' },
  { icon: '⚡', value: '20+', label: 'Tecnologias' },
];

const techCategories = [
  TechCategory.PLATFORMS,
  TechCategory.PROGRAMMING,
  TechCategory.FRAMEWORKS,
  TechCategory.TOOLS,
];

const About: React.FC = () => {
  const { skillsGrouped } = useSkills();
  const { getTechnologiesByCategory } = useTechnologies();

  const uniqueSkills = React.useMemo(() =>
    Array.from(
      new Map(
        Object.values(skillsGrouped)
          .flat()
          .map(skill => [skill.name, skill])
      ).values()
    ),
    [skillsGrouped]
  );

  const uniqueTechs = React.useMemo(() =>
    Array.from(
      new Map(
        techCategories
          .flatMap(getTechnologiesByCategory)
          .map(tech => [tech.name, tech])
      ).values()
    ),
    [getTechnologiesByCategory]
  );

  return (
    <SectionContainer id="about" title="Sobre Mim">
      <div className="max-w-5xl mx-auto space-y-16">

        <div className="text-center">
          <p className="text-lg text-slate-900 dark:text-slate-50 leading-relaxed">
            Sou um desenvolvedor full‑stack com foco em automação de processos,
            interfaces responsivas e extração de insights a partir de dados.
            Tenho 2+ anos de experiência entregando soluções escaláveis e de alto valor.
          </p>
        </div>

        <section>
          <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-50">
            Destaques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(item => (
              <div
                key={item.label}
                className="
                  group bg-slate-50/10 dark:bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm
                  border border-emerald-400/20 hover:border-emerald-600/40
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                  flex flex-col h-full
                "
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <h4 className="
                      text-xl font-bold text-slate-900 dark:text-slate-50
                      group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                      transition-colors
                    ">
                      {item.value}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="
            group bg-slate-50/10 dark:bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm
            border border-emerald-400/20 hover:border-emerald-600/40
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl
          ">
            <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-50">
              Habilidades
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
              {uniqueSkills.map(s => (
                <div key={s.name} className="flex flex-col items-center">
                  <SkillRating skill={s.name} level={s.level} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="
            group bg-slate-50/10 dark:bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm
            border border-emerald-400/20 hover:border-emerald-600/40
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl
          ">
            <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-50">
              Tecnologias
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {uniqueTechs.map(t => (
                <span
                  key={t.name}
                  className="
                    inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500
                    dark:from-emerald-600 dark:to-cyan-600
                    text-white font-medium rounded-full text-sm text-center
                    transition-all duration-300 transform hover:scale-105
                  "
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </SectionContainer>
  );
};

export default About;
