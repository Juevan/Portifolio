import { useState, useEffect, useMemo, useCallback } from 'react';
import { ServiceContainer } from '../services/portfolio-services';
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

export const useSkills = () => {
  const services = ServiceContainer.getInstance();
  
  const skillsGrouped = useMemo(() => 
    services.skillService.getSkillsGroupedByCategory(), 
    []
  );
  
  const getSkillsByCategory = useCallback((category: SkillCategory) =>
    services.skillService.getSkillsByCategory(category),
    []
  );
  
  const averageLevel = useMemo(() =>
    services.skillService.getSkillAverageLevel(),
    []
  );
  
  return {
    skillsGrouped,
    getSkillsByCategory,
    averageLevel
  };
};

export const useTechnologies = () => {
  const services = ServiceContainer.getInstance();
  const [searchQuery, setSearchQuery] = useState('');
  
  const allTechnologies = useMemo(() =>
    services.technologyService.getAllTechnologies(),
    []
  );
  
  const getTechnologiesByCategory = useCallback((category: TechnologyCategory) =>
    services.technologyService.getTechnologiesByCategory(category),
    []
  );
  
  const filteredTechnologies = useMemo(() => {
    if (!searchQuery.trim()) return allTechnologies;
    return services.technologyService.searchTechnologies(searchQuery);
  }, [allTechnologies, searchQuery]);
  
  return {
    allTechnologies,
    getTechnologiesByCategory,
    filteredTechnologies,
    searchQuery,
    setSearchQuery
  };
};

export const useExperiences = () => {
  const services = ServiceContainer.getInstance();
  
  const experiences = useMemo(() =>
    services.experienceService.getExperiences(),
    []
  );
  
  const experiencesByYear = useMemo(() =>
    services.experienceService.getExperiencesByYear(),
    []
  );
  
  const totalYears = useMemo(() =>
    services.experienceService.getTotalExperienceYears(),
    []
  );
  
  return {
    experiences,
    experiencesByYear,
    totalYears
  };
};

export const useProjects = () => {
  const services = ServiceContainer.getInstance();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  const allProjects = useMemo(() =>
    services.projectService.getProjects(),
    []
  );
  
  const filteredProjects = useMemo(() => {
    let projects = allProjects;
    
    // Filtro por categoria
    if (activeFilter !== 'ALL') {
      projects = services.projectService.getProjectsByCategory(activeFilter);
    }
    
    // Filtro por busca
    if (searchQuery.trim()) {
      projects = services.projectService.searchProjects(searchQuery);
    }
    
    return projects;
  }, [allProjects, activeFilter, searchQuery]);
  
  const projectCategories = useMemo(() => 
    Object.values(ProjectCategory),
    []
  );
  
  return {
    allProjects,
    filteredProjects,
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    projectCategories
  };
};

export const useServices = () => {
  const services = ServiceContainer.getInstance();
  
  const serviceList = useMemo(() =>
    services.serviceCatalogService.getServices(),
    []
  );
  
  const getServiceById = useCallback((id: string) =>
    services.serviceCatalogService.getServiceById(id),
    []
  );
  
  return {
    services: serviceList,
    getServiceById
  };
};

export const useContact = () => {
  const services = ServiceContainer.getInstance();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const contactInfo = useMemo(() =>
    services.contactService.getContactInfo(),
    []
  );
  
  const isValidEmail = useCallback((email: string) =>
    services.contactService.isValidEmail(email),
    []
  );
  
  const updateFormData = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);
  
  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitStatus('idle');
  }, []);
  
  const validateForm = useCallback(() => {
    const { name, email, message } = formData;
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      return { isValid: false, error: 'Todos os campos são obrigatórios' };
    }
    
    if (!isValidEmail(email)) {
      return { isValid: false, error: 'Email inválido' };
    }
    
    return { isValid: true, error: null };
  }, [formData, isValidEmail]);
  
  const submitForm = useCallback(async () => {
    const validation = validateForm();
    
    if (!validation.isValid) {
      setSubmitStatus('error');
      return { success: false, error: validation.error };
    }
    
    setIsSubmitting(true);
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Resetar formulário após 2 segundos
      setTimeout(resetForm, 2000);
      
      return { success: true, error: null };
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return { success: false, error: 'Erro ao enviar mensagem' };
    }
  }, [validateForm, resetForm]);
  
  return {
    contactInfo,
    formData,
    updateFormData,
    isSubmitting,
    submitStatus,
    submitForm,
    resetForm,
    validateForm,
    isValidEmail
  };
};

export const useScrollBehavior = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    
    const handleScroll = () => {
      toggleVisibility();
      
      const sections = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.pageYOffset + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);
  
  return {
    isVisible,
    activeSection,
    scrollToTop,
    scrollToSection
  };
};

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);
  
  return {
    isDark,
    toggleTheme
  };
};
