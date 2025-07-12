import React from 'react';

interface SkillRatingProps {
  skill: string;
  level: number;
  color?: 'primary' | 'secondary' | 'accent';
}

const SkillRating: React.FC<SkillRatingProps> = ({ skill, level, color = 'primary' }) => {
  const colorClasses = {
    primary: {
      filled: 'bg-gradient-to-r from-emerald-500 to-cyan-500',
      partial: 'bg-gradient-to-r from-emerald-400 to-cyan-400',
      empty: 'bg-slate-200 dark:bg-slate-700'
    },
    secondary: {
      filled: 'bg-gradient-to-r from-violet-500 to-purple-500',
      partial: 'bg-gradient-to-r from-violet-400 to-purple-400',
      empty: 'bg-slate-200 dark:bg-slate-700'
    },
    accent: {
      filled: 'bg-gradient-to-r from-orange-500 to-amber-500',
      partial: 'bg-gradient-to-r from-orange-400 to-amber-400',
      empty: 'bg-slate-200 dark:bg-slate-700'
    }
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      let dotClass = colorClasses[color].empty;
      if (i <= level) {
        dotClass = colorClasses[color].filled;
      } else if (i === Math.ceil(level) && level % 1 !== 0) {
        dotClass = colorClasses[color].partial;
      }
      
      dots.push(
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${dotClass} transition-all duration-300 hover:scale-110 shadow-sm`}
        />
      );
    }
    return dots;
  };

  return (
    <div className="text-center">
      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-xs lg:text-sm">{skill}</p>
      <div className="flex justify-center space-x-1">
        {renderDots()}
      </div>
    </div>
  );
};

export default SkillRating;
