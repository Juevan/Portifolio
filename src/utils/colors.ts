export const colors = {
  primary: {
    gradient: 'from-emerald-500 to-cyan-500',
    gradientText: 'from-emerald-600 to-cyan-600',
    gradientHover: 'from-emerald-600 to-cyan-600',
    solid: 'emerald-500',
    light: 'emerald-400',
    dark: 'emerald-600'
  },
  secondary: {
    gradient: 'from-violet-500 to-purple-500',
    gradientText: 'from-violet-600 to-purple-600',
    gradientHover: 'from-violet-600 to-purple-600',
    solid: 'violet-500',
    light: 'violet-400',
    dark: 'violet-600'
  },
  accent: {
    gradient: 'from-orange-500 to-amber-500',
    gradientText: 'from-orange-600 to-amber-600',
    gradientHover: 'from-orange-600 to-amber-600',
    solid: 'orange-500',
    light: 'orange-400',
    dark: 'orange-600'
  },
  neutral: {
    light: 'slate-50',
    medium: 'slate-400',
    dark: 'slate-600',
    darker: 'slate-800',
    darkest: 'slate-900'
  }
};

export const getSkillColor = (index: number) => {
  const colorTypes = ['primary', 'secondary', 'accent'] as const;
  return colorTypes[index % colorTypes.length];
};
