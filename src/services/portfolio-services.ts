import { PortfolioRepository } from '../data/portfolio-repository';
import {
  Skill,
  Technology,
  Experience,
  Project,
  Service,
  ContactInfo,
  SkillCategory,
  TechnologyCategory,
  ProjectCategory
} from '../types';
interface ISkillService {
  getSkillsByCategory(category: SkillCategory): readonly Skill[];
  getSkillsGroupedByCategory(): Record<SkillCategory, readonly Skill[]>;
  getSkillAverageLevel(category?: SkillCategory): number;
}

interface ITechnologyService {
  getTechnologiesByCategory(category: TechnologyCategory): readonly Technology[];
  getAllTechnologies(): readonly Technology[];
  searchTechnologies(query: string): readonly Technology[];
}

interface IExperienceService {
  getExperiences(): readonly Experience[];
  getExperiencesByYear(): Record<string, readonly Experience[]>;
  getTotalExperienceYears(): number;
}

interface IProjectService {
  getProjects(): readonly Project[];
  getProjectsByCategory(category: ProjectCategory): readonly Project[];
  searchProjects(query: string): readonly Project[];
}

interface IServiceCatalogService {
  getServices(): readonly Service[];
  getServiceById(id: string): Service | null;
}

interface IContactService {
  getContactInfo(): ContactInfo;
  isValidEmail(email: string): boolean;
}

export class SkillService implements ISkillService {
  constructor(private repository: PortfolioRepository) {}
  
  public getSkillsByCategory(category: SkillCategory): readonly Skill[] {
    return this.repository.getSkills().filter(skill => skill.category === category);
  }
  
  public getSkillsGroupedByCategory(): Record<SkillCategory, readonly Skill[]> {
    const skills = this.repository.getSkills();
    const grouped = {} as Record<SkillCategory, Skill[]>;
    
    Object.values(SkillCategory).forEach(category => {
      grouped[category] = [];
    });
    
    skills.forEach(skill => {
      grouped[skill.category].push(skill);
    });
    
    Object.keys(grouped).forEach(category => {
      grouped[category as SkillCategory].sort((a, b) => b.level - a.level);
    });
    
    return grouped;
  }
  
  public getSkillAverageLevel(category?: SkillCategory): number {
    const skills = category 
      ? this.getSkillsByCategory(category)
      : this.repository.getSkills();
    
    if (skills.length === 0) return 0;
    
    const total = skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round((total / skills.length) * 10) / 10;
  }
}

export class TechnologyService implements ITechnologyService {
  constructor(private repository: PortfolioRepository) {}
  
  public getTechnologiesByCategory(category: TechnologyCategory): readonly Technology[] {
    const technologies = this.repository.getTechnologies();
    return technologies[category] || [];
  }
  
  public getAllTechnologies(): readonly Technology[] {
    const technologies = this.repository.getTechnologies();
    return Object.values(technologies).flat();
  }
  
  public searchTechnologies(query: string): readonly Technology[] {
    const allTechnologies = this.getAllTechnologies();
    const searchTerm = query.toLowerCase();
    
    return allTechnologies.filter(tech =>
      tech.name.toLowerCase().includes(searchTerm)
    );
  }
}

export class ExperienceService implements IExperienceService {
  constructor(private repository: PortfolioRepository) {}
  
  public getExperiences(): readonly Experience[] {
    const experiences = [...this.repository.getExperiences()];
    return experiences.sort((a: Experience, b: Experience) => 
      this.parseDate(b.period) - this.parseDate(a.period)
    );
  }
  
  public getExperiencesByYear(): Record<string, readonly Experience[]> {
    const experiences = this.getExperiences();
    const grouped = {} as Record<string, Experience[]>;
    
    experiences.forEach(exp => {
      const year = this.extractYear(exp.period);
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(exp);
    });
    
    return grouped;
  }
  
  public getTotalExperienceYears(): number {
    const experiences = this.getExperiences();
    if (experiences.length === 0) return 0;
    
    const startDate = this.parseDate(experiences[experiences.length - 1].period);
    const currentDate = Date.now();
    
    return Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  }
  
  private parseDate(period: string): number {
    // Extrai a data de início do período (formato: "MM/YYYY - MM/YYYY" ou "MM/YYYY - Atualmente")
    const startPart = period.split(' - ')[0];
    const [month, year] = startPart.split('/');
    return new Date(parseInt(year), parseInt(month) - 1).getTime();
  }
  
  private extractYear(period: string): string {
    const startPart = period.split(' - ')[0];
    return startPart.split('/')[1];
  }
}

export class ProjectService implements IProjectService {
  constructor(private repository: PortfolioRepository) {}
  
  public getProjects(): readonly Project[] {
    return this.repository.getProjects();
  }
  
  public getProjectsByCategory(category: ProjectCategory): readonly Project[] {
    return this.repository.getProjects()
      .filter(project => project.category === category);
  }
  
  public searchProjects(query: string): readonly Project[] {
    const projects = this.repository.getProjects();
    const searchTerm = query.toLowerCase();
    
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
    );
  }
}

export class ServiceCatalogService implements IServiceCatalogService {
  constructor(private repository: PortfolioRepository) {}
  
  public getServices(): readonly Service[] {
    return this.repository.getServices();
  }
  
  public getServiceById(id: string): Service | null {
    const services = this.repository.getServices();
    return services.find(service => service.id === id) || null;
  }
}

export class ContactService implements IContactService {
  constructor(private repository: PortfolioRepository) {}
  
  public getContactInfo(): ContactInfo {
    return this.repository.getContactInfo();
  }
  
  public isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export class ServiceContainer {
  private static instance: ServiceContainer;
  private repository: PortfolioRepository;
  
  public readonly skillService: SkillService;
  public readonly technologyService: TechnologyService;
  public readonly experienceService: ExperienceService;
  public readonly projectService: ProjectService;
  public readonly serviceCatalogService: ServiceCatalogService;
  public readonly contactService: ContactService;
  
  private constructor() {
    this.repository = PortfolioRepository.getInstance();
    
    this.skillService = new SkillService(this.repository);
    this.technologyService = new TechnologyService(this.repository);
    this.experienceService = new ExperienceService(this.repository);
    this.projectService = new ProjectService(this.repository);
    this.serviceCatalogService = new ServiceCatalogService(this.repository);
    this.contactService = new ContactService(this.repository);
  }
  
  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }
}
