"use client"

import React from 'react';

interface CyberpunkBorderCardProps {
  children: React.ReactNode;
  variant?: 'bottom-right-cut' | 'top-left-cut' | 'straight';
  colorScheme?: 'blue' | 'green' | 'cyan' | 'pink' | 'purple' | 'lime';
  borderWidth?: 'thin' | 'medium' | 'thick';
  glowEffect?: boolean;
  withAccent?: boolean;
  className?: string;
}

export default function CyberpunkBorderCard({
  children,
  variant = 'straight',
  colorScheme = 'blue',
  borderWidth = 'medium',
  glowEffect = false,
  withAccent = false,
  className = ''
}: CyberpunkBorderCardProps) {
  
  // Define color mappings
  const colorClasses = {
    blue: 'border-blue-400 text-blue-400',
    green: 'border-green-400 text-green-400',
    cyan: 'border-cyan-400 text-cyan-400',
    pink: 'border-pink-500 text-pink-500',
    purple: 'border-purple-500 text-purple-500',
    lime: 'border-lime-400 text-lime-400'
  };

  // Define glow effects
  const glowClasses = {
    blue: 'shadow-lg shadow-blue-500/20',
    green: 'shadow-lg shadow-green-500/20',
    cyan: 'shadow-lg shadow-cyan-500/20',
    pink: 'shadow-lg shadow-pink-500/20',
    purple: 'shadow-lg shadow-purple-500/20',
    lime: 'shadow-lg shadow-lime-500/20'
  };

  // Define border widths
  const borderWidthClasses = {
    thin: 'border',
    medium: 'border-2',
    thick: 'border-4'
  };

  // Define clip paths for different variants
  const clipPaths = {
    'bottom-right-cut': 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
    'top-left-cut': 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)',
    'straight': 'none'
  };

  // Build the classes
  const baseClasses = 'bg-gray-800 relative overflow-hidden transition-all duration-300';
  const colorClass = colorClasses[colorScheme];
  const glowClass = glowEffect ? glowClasses[colorScheme] : '';
  const borderClass = borderWidthClasses[borderWidth];
  
  const finalClasses = `${baseClasses} ${colorClass} ${glowClass} ${borderClass} ${className}`;

  const style = {
    clipPath: clipPaths[variant]
  };

  return (
    <div 
      className={finalClasses}
      style={style}
    >
      {withAccent && (
        <>
          {/* Corner accents */}
          <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${colorClasses[colorScheme]} opacity-60`}></div>
          <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${colorClasses[colorScheme]} opacity-60`}></div>
          <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${colorClasses[colorScheme]} opacity-60`}></div>
          <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${colorClasses[colorScheme]} opacity-60`}></div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Scanning effect overlay when glowEffect is active */}
      {glowEffect && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div 
            className={`absolute top-0 left-0 w-full h-px bg-${colorScheme === 'pink' ? 'pink-500' : colorScheme === 'purple' ? 'purple-500' : `${colorScheme}-400`}`}
            style={{
              animation: 'scanY 2s linear infinite'
            }}
          ></div>
        </div>
      )}

      <style jsx>{`
        @keyframes scanY {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
