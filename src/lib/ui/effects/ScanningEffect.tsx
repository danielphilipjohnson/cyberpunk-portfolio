"use client"

import React from 'react';
import { ScanningEffectProps } from '../types';

const ScanningEffect: React.FC<ScanningEffectProps> = ({
  className = '',
  color = 'cyan',
  duration = 2000,
  direction = 'vertical',
  opacity = 0.6,
  active = true
}) => {
  
  // Color mappings
  const colorClasses = {
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-400',
    pink: 'bg-pink-500',
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    blue: 'bg-blue-400',
    red: 'bg-red-400',
    orange: 'bg-orange-400',
    lime: 'bg-lime-400',
    teal: 'bg-teal-400'
  };

  const colorClass = colorClasses[color];

  // Direction-based styling
  const directionStyles = {
    vertical: {
      width: '100%',
      height: '2px',
      background: `linear-gradient(to right, transparent, ${color === 'yellow' ? '#facc15' : color === 'pink' ? '#ec4899' : color === 'purple' ? '#a855f7' : '#06b6d4'}, transparent)`,
      animation: active ? `scanVertical ${duration}ms ease-in-out infinite` : 'none'
    },
    horizontal: {
      width: '2px',
      height: '100%',
      background: `linear-gradient(to bottom, transparent, ${color === 'yellow' ? '#facc15' : color === 'pink' ? '#ec4899' : color === 'purple' ? '#a855f7' : '#06b6d4'}, transparent)`,
      animation: active ? `scanHorizontal ${duration}ms ease-in-out infinite` : 'none'
    }
  };

  if (!active) return null;

  return (
    <>
      <div 
        className={`absolute pointer-events-none z-20 ${className}`}
        style={{ 
          opacity,
          ...directionStyles[direction]
        }}
      />
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scanVertical {
          0% { 
            top: 0%; 
            opacity: 0; 
          }
          10% {
            opacity: ${opacity};
          }
          90% {
            opacity: ${opacity};
          }
          100% { 
            top: 100%; 
            opacity: 0;
          }
        }
        
        @keyframes scanHorizontal {
          0% { 
            left: 0%; 
            opacity: 0; 
          }
          10% {
            opacity: ${opacity};
          }
          90% {
            opacity: ${opacity};
          }
          100% { 
            left: 100%; 
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ScanningEffect;
