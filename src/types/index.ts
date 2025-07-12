export interface Skill {
  readonly name: string;
  readonly level: number;
  readonly category: SkillCategory;
}

export interface Technology {
  readonly name: string;
  readonly category: TechnologyCategory;
}

export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly companyUrl: string;
  readonly period: string;
  readonly description: string;
  readonly category: ExperienceCategory;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly category: ProjectCategory;
  readonly icon: string;
  readonly repositoryUrl?: string;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly icon: string;
  readonly color: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly linkedin: string;
  readonly github: string;
}

export enum SkillCategory {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent'
}

export enum TechnologyCategory {
  PLATFORMS = 'platforms',
  PROGRAMMING = 'programming',
  FRAMEWORKS = 'frameworks',
  TOOLS = 'tools'
}

export enum ExperienceCategory {
  DEVELOPMENT = 'development',
  ANALYSIS = 'analysis',
  BACKEND = 'backend'
}

export enum ProjectCategory {
  PRODUTOS_FLUIG = 'produtos-fluig',
  PRODUTOS_ZEEV = 'produtos-zeev',
  CONSULTORIA = 'consultoria',
  INTEGRACAO = 'integracao'
}

export interface BaseComponentProps {
  readonly className?: string;
}

export interface SectionProps extends BaseComponentProps {
  readonly id: string;
  readonly title?: string;
  readonly variant?: 'light' | 'dark' | 'gradient';
  readonly children: React.ReactNode;
}

export interface SkillRatingProps extends BaseComponentProps {
  readonly skill: Skill;
}

export interface SocialIconsProps extends BaseComponentProps {
  readonly variant?: 'default' | 'large' | 'footer';
}
