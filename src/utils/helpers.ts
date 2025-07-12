import { DesignTokens } from '../design-system/tokens';
import { SkillCategory, TechnologyCategory, ProjectCategory, ExperienceCategory } from '../types';

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatPeriod = (period: string): string => {
  return period.replace('Atualmente', 'Presente');
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim();
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long'
  });
};

export const calculateYearsDifference = (startDate: string, endDate?: string): number => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  
  return diffYears;
};

export const getCategoryColor = (category: SkillCategory | TechnologyCategory | ProjectCategory | ExperienceCategory): string => {
  const colorMap: Record<string, string> = {
    [SkillCategory.PRIMARY]: DesignTokens.colors.primary[500],
    [SkillCategory.SECONDARY]: DesignTokens.colors.secondary[500],
    [SkillCategory.ACCENT]: DesignTokens.colors.accent[500],
    
    [TechnologyCategory.PLATFORMS]: DesignTokens.colors.primary[600],
    [TechnologyCategory.PROGRAMMING]: DesignTokens.colors.secondary[600],
    [TechnologyCategory.FRAMEWORKS]: DesignTokens.colors.accent[600],
    [TechnologyCategory.TOOLS]: DesignTokens.colors.neutral[600],
    
    [ProjectCategory.PRODUTOS_ZEEV]: DesignTokens.colors.primary[500],
    [ProjectCategory.PRODUTOS_FLUIG]: DesignTokens.colors.secondary[500],
    [ProjectCategory.CONSULTORIA]: DesignTokens.colors.accent[500],
    [ProjectCategory.INTEGRACAO]: DesignTokens.colors.neutral[500],
    
    [ExperienceCategory.DEVELOPMENT]: DesignTokens.colors.primary[500],
    [ExperienceCategory.ANALYSIS]: DesignTokens.colors.secondary[500],
    [ExperienceCategory.BACKEND]: DesignTokens.colors.accent[500]
  };
  
  return colorMap[category] || DesignTokens.colors.neutral[500];
};

export const getGradientClass = (category: SkillCategory | TechnologyCategory): string => {
  const gradientMap: Record<string, string> = {
    [SkillCategory.PRIMARY]: 'bg-gradient-to-r from-emerald-500 to-cyan-500',
    [SkillCategory.SECONDARY]: 'bg-gradient-to-r from-cyan-500 to-violet-500',
    [SkillCategory.ACCENT]: 'bg-gradient-to-r from-violet-500 to-emerald-500',
    
    [TechnologyCategory.PLATFORMS]: 'bg-gradient-to-r from-emerald-600 to-cyan-600',
    [TechnologyCategory.PROGRAMMING]: 'bg-gradient-to-r from-cyan-600 to-violet-600',
    [TechnologyCategory.FRAMEWORKS]: 'bg-gradient-to-r from-violet-600 to-emerald-600',
    [TechnologyCategory.TOOLS]: 'bg-gradient-to-r from-emerald-500 to-cyan-500'
  };
  
  return gradientMap[category] || 'bg-gradient-to-r from-gray-500 to-gray-600';
};

// Array utilities
export const sortByProperty = <T>(array: T[], property: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];
    
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const groupBy = <T, K extends keyof T>(array: T[], key: K): Record<string, T[]> => {
  return array.reduce((groups, item) => {
    const group = String(item[key]);
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
};

export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

export const uniqueBy = <T, K extends keyof T>(array: T[], key: K): T[] => {
  const seen = new Set();
  return array.filter(item => {
    const k = item[key];
    if (seen.has(k)) {
      return false;
    }
    seen.add(k);
    return true;
  });
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
};

// Number utilities
export const formatNumber = (num: number, decimals: number = 0): string => {
  return num.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

export const percentage = (value: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

// Animation utilities
export const easeInOut = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

// Local Storage utilities
export const setLocalStorage = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Falha ao salvar no localStorage:', error);
  }
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn('Falha ao ler do localStorage:', error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Falha ao remover do localStorage:', error);
  }
};

// Performance utilities
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void => {
  let timeoutId: number;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void => {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Constants for common values
export const CONSTANTS = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 100,
  SCROLL_OFFSET: 100,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
  URL_REGEX: /^https?:\/\/.+/
} as const;
