// Data Layer - Repository pattern para dados estáticos
import {
  Skill,
  Technology,
  Experience,
  Project,
  Service,
  ContactInfo,
  SkillCategory,
  TechnologyCategory,
  ExperienceCategory,
  ProjectCategory
} from '../types';

export class PortfolioRepository {
  private static instance: PortfolioRepository;
  
  private constructor() {}
  
  public static getInstance(): PortfolioRepository {
    if (!PortfolioRepository.instance) {
      PortfolioRepository.instance = new PortfolioRepository();
    }
    return PortfolioRepository.instance;
  }
  
  public getSkills(): readonly Skill[] {
    return [
      { name: 'HTML & CSS', level: 5, category: SkillCategory.PRIMARY },
      { name: 'JavaScript', level: 5, category: SkillCategory.PRIMARY },
      { name: 'TypeScript', level: 4, category: SkillCategory.PRIMARY },
      { name: 'React', level: 4, category: SkillCategory.SECONDARY },
      { name: 'Node.js', level: 4, category: SkillCategory.SECONDARY },
      { name: 'Python', level: 4, category: SkillCategory.SECONDARY },
      { name: 'SQL', level: 4, category: SkillCategory.PRIMARY },
      { name: 'FLUIG/BPM', level: 5, category: SkillCategory.ACCENT },
      { name: 'APIs REST/SOAP', level: 5, category: SkillCategory.ACCENT },
      { name: 'Zeev Platform', level: 5, category: SkillCategory.ACCENT },
      { name: 'AWS Lambda', level: 4, category: SkillCategory.SECONDARY },
      { name: 'AWS S3', level: 4, category: SkillCategory.SECONDARY },
      { name: 'Power BI', level: 4, category: SkillCategory.SECONDARY },
      { name: 'Git/GitHub', level: 4, category: SkillCategory.PRIMARY },
      { name: 'BPMN 2.0', level: 5, category: SkillCategory.ACCENT },
      { name: 'Metodologias Ágeis', level: 4, category: SkillCategory.SECONDARY },
      { name: 'Análise de Dados', level: 4, category: SkillCategory.SECONDARY }
    ];
  }
  
  public getTechnologies(): Record<TechnologyCategory, readonly Technology[]> {
    return {
      [TechnologyCategory.PLATFORMS]: [
        { name: 'TOTVS FLUIG', category: TechnologyCategory.PLATFORMS },
        { name: 'Zeev', category: TechnologyCategory.PLATFORMS },
        { name: 'Heflo', category: TechnologyCategory.PLATFORMS },
        { name: 'Power BI', category: TechnologyCategory.PLATFORMS },
        { name: 'AWS Lambda', category: TechnologyCategory.PLATFORMS },
        { name: 'AWS S3', category: TechnologyCategory.PLATFORMS }
      ],
      [TechnologyCategory.PROGRAMMING]: [
        { name: 'JavaScript', category: TechnologyCategory.PROGRAMMING },
        { name: 'TypeScript', category: TechnologyCategory.PROGRAMMING },
        { name: 'Python', category: TechnologyCategory.PROGRAMMING },
        { name: 'HTML/CSS', category: TechnologyCategory.PROGRAMMING },
        { name: 'SQL', category: TechnologyCategory.PROGRAMMING }
      ],
      [TechnologyCategory.FRAMEWORKS]: [
        { name: 'React', category: TechnologyCategory.FRAMEWORKS },
        { name: 'Node.js', category: TechnologyCategory.FRAMEWORKS },
        { name: 'Tailwind CSS', category: TechnologyCategory.FRAMEWORKS },
        { name: 'Pandas', category: TechnologyCategory.FRAMEWORKS },
        { name: 'Matplotlib', category: TechnologyCategory.FRAMEWORKS }
      ],
      [TechnologyCategory.TOOLS]: [
        { name: 'Git/GitHub', category: TechnologyCategory.TOOLS },
        { name: 'VS Code', category: TechnologyCategory.TOOLS },
        { name: 'BPMN', category: TechnologyCategory.TOOLS },
        { name: 'REST/SOAP APIs', category: TechnologyCategory.TOOLS },
        { name: 'Scrum', category: TechnologyCategory.TOOLS }
      ]
    };
  }
  
  public getExperiences(): readonly Experience[] {
    return [
      {
        id: '1',
        title: 'Desenvolvedor Junior',
        company: 'Raiz educação',
        companyUrl: 'https://www.linkedin.com/company/raizeducacao',
        period: '07/2024 - Atualmente',
        description: 'Formação e prática em desenvolvimento web, aprimorando habilidades em HTML, CSS, JavaScript e frameworks modernos.',
        category: ExperienceCategory.DEVELOPMENT
      },
      {
        id: '2',
        title: 'Analista FLUIG Junior',
        company: 'Boa Digital',
        companyUrl: 'https://www.linkedin.com/company/boadigital',
        period: '03/2023 - Atualmente',
        description: 'Desenvolvimento e implementação de soluções personalizadas na plataforma FLUIG da TOTVS, com análise de requisitos, configuração de interfaces e workflows.',
        category: ExperienceCategory.ANALYSIS
      },
      {
        id: '3',
        title: 'Analista Back-End Junior',
        company: 'CIEDS',
        companyUrl: 'https://www.linkedin.com/company/ciedsbrasil',
        period: '07/2023 - 01/2024',
        description: 'Criação de scripts para integração entre ERP NETSUITE e POWER BI utilizando Node.js e consumo de API REST, aplicando metodologias ágeis.',
        category: ExperienceCategory.BACKEND
      }
    ];
  }
  
  public getProjects(): readonly Project[] {
    return [
      {
        id: '1',
        title: 'Sistema de Bloqueio Zeev - Plugin SLA',
        description: 'Plugin inteligente para plataforma Zeev que impede usuários de abrir novas solicitações quando possuem atividades de correção em atraso superior a 7 dias com SLA estourado. Demonstração funcional disponível no GitHub.',
        technologies: ['Zeev', 'JavaScript', 'Plugin Development', 'SLA Management', 'Task Control'],
        category: ProjectCategory.PRODUTOS_ZEEV,
        icon: '⚡',
        repositoryUrl: 'https://github.com/Juevan/ZeevSLABlocker'
      }
    ];
  }
  
  public getServices(): readonly Service[] {
    return [
      {
        id: '1',
        title: 'Consultoria TOTVS FLUIG',
        description: 'Implementação completa, customização e otimização de processos na plataforma TOTVS FLUIG.',
        features: [
          'Análise e modelagem de processos BPM',
          'Desenvolvimento de widgets customizados',
          'Integração com sistemas legados',
          'Treinamento de equipes',
          'Suporte técnico especializado'
        ],
        icon: '🏢',
        color: 'bg-emerald-500'
      },
      {
        id: '2',
        title: 'Consultoria Zeev',
        description: 'Serviços especializados para implementação e customização da plataforma Zeev.',
        features: [
          'Configuração de workflows',
          'Desenvolvimento de automações',
          'Criação de dashboards personalizados',
          'Integração com APIs externas',
          'Otimização de performance'
        ],
        icon: '⚡',
        color: 'bg-cyan-500'
      },
      {
        id: '3',
        title: 'Consultoria TOTVS RM',
        description: 'Especialista em módulos do TOTVS RM para otimização de processos empresariais.',
        features: [
          'Módulo Recursos Humanos (RH)',
          'Módulo Folha de Pagamento',
          'Módulo Gestão de Pessoas',
          'Módulo Controle de Ponto',
          'Integração entre módulos',
          'Customizações e relatórios avançados'
        ],
        icon: '👥',
        color: 'bg-purple-500'
      },
      {
        id: '4',
        title: 'Consultoria AWS Cloud',
        description: 'Implementação e otimização de soluções serverless e cloud na Amazon Web Services.',
        features: [
          'Desenvolvimento de funções AWS Lambda',
          'Configuração e otimização de S3 Buckets',
          'Implementação de APIs com API Gateway',
          'Processamento automático de arquivos',
          'Sistemas de backup inteligente',
          'Automação de processos com CloudWatch',
          'Configuração de pipelines CI/CD',
          'Otimização de custos e performance',
          'Integração com DynamoDB e RDS',
          'Implementação de autenticação com Cognito'
        ],
        icon: '☁️',
        color: 'bg-orange-500'
      }
    ];
  }
  
  public getContactInfo(): ContactInfo {
    return {
      email: 'antoniojuevan@gmail.com',
      phone: '(21) 96533-7473',
      linkedin: 'https://www.linkedin.com/in/ajuevan/',
      github: 'https://github.com/Juevan'
    };
  }
}
