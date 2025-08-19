"use client"

import React from 'react';
import { CornerDecorationsProps } from '../types';

const CornerDecorations: React.FC<CornerDecorationsProps> = ({
  className = '',
  color = 'cyan',
  size = 'md',
  opacity = 0.6,
  style = 'square'
}) => {
  
  // Color mappings
  const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-500',
    green: 'border-green-400',
    yellow: 'border-yellow-400',
    blue: 'border-blue-400',
    red: 'border-red-400',
    orange: 'border-orange-400',
    lime: 'border-lime-400',
    teal: 'border-teal-400'
  };

  // Size mappings
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[size];

  // Style variations
  const getStyleClasses = () => {
    switch (style) {
      case 'square':
        return '';
      case 'angled':
        return 'transform rotate-45';
      case 'rounded':
        return 'rounded-sm';
      default:
        return '';
    }
  };

  const styleClass = getStyleClasses();
  const opacityStyle = { opacity };

  return (
    <>
      {/* Top Left */}
      <div 
        className={`absolute top-0 left-0 ${sizeClass} border-t-2 border-l-2 ${colorClass} ${styleClass} ${className}`}
        style={opacityStyle}
      />
      
      {/* Top Right */}
      <div 
        className={`absolute top-0 right-0 ${sizeClass} border-t-2 border-r-2 ${colorClass} ${styleClass} ${className}`}
        style={opacityStyle}
      />
      
      {/* Bottom Left */}
      <div 
        className={`absolute bottom-0 left-0 ${sizeClass} border-b-2 border-l-2 ${colorClass} ${styleClass} ${className}`}
        style={opacityStyle}
      />
      
      {/* Bottom Right */}
      <div 
        className={`absolute bottom-0 right-0 ${sizeClass} border-b-2 border-r-2 ${colorClass} ${styleClass} ${className}`}
        style={opacityStyle}
      />
    </>
  );
};

export default CornerDecorations;
