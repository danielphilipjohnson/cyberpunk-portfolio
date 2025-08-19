"use client"

import React, { forwardRef, useState, useEffect } from 'react';
import { CyberpunkCardProps } from '../types';

const CyberpunkCard = forwardRef<HTMLDivElement, CyberpunkCardProps>(
  ({
    children,
    className = '',
    colorScheme = 'cyan',
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    glowEffect = false,
    scanningEffect = false,
    clipPath = 'angled-corner',
    borderWidth = 'medium',
    title,
    subtitle,
    header,
    footer,
    withAccent = false,
    padding = 'md',
    hoverable = false,
    clickable = false,
    onClick,
    ...props
  }, ref) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    // Color scheme mappings
    const colorClasses = {
      cyan: { 
        text: 'text-cyan-400', 
        border: 'border-cyan-400',
        bg: 'bg-cyan-400',
        shadow: 'shadow-cyan-400/25',
        glow: 'shadow-cyan-500/20'
      },
      purple: { 
        text: 'text-purple-400', 
        border: 'border-purple-400',
        bg: 'bg-purple-400',
        shadow: 'shadow-purple-400/25',
        glow: 'shadow-purple-500/20'
      },
      pink: { 
        text: 'text-pink-500', 
        border: 'border-pink-500',
        bg: 'bg-pink-500',
        shadow: 'shadow-pink-500/25',
        glow: 'shadow-pink-500/20'
      },
      green: { 
        text: 'text-green-400', 
        border: 'border-green-400',
        bg: 'bg-green-400',
        shadow: 'shadow-green-400/25',
        glow: 'shadow-green-500/20'
      },
      yellow: { 
        text: 'text-yellow-400', 
        border: 'border-yellow-400',
        bg: 'bg-yellow-400',
        shadow: 'shadow-yellow-400/25',
        glow: 'shadow-yellow-500/20'
      },
      blue: { 
        text: 'text-blue-400', 
        border: 'border-blue-400',
        bg: 'bg-blue-400',
        shadow: 'shadow-blue-400/25',
        glow: 'shadow-blue-500/20'
      },
      red: { 
        text: 'text-red-400', 
        border: 'border-red-400',
        bg: 'bg-red-400',
        shadow: 'shadow-red-400/25',
        glow: 'shadow-red-500/20'
      },
      orange: { 
        text: 'text-orange-400', 
        border: 'border-orange-400',
        bg: 'bg-orange-400',
        shadow: 'shadow-orange-400/25',
        glow: 'shadow-orange-500/20'
      },
      lime: { 
        text: 'text-lime-400', 
        border: 'border-lime-400',
        bg: 'bg-lime-400',
        shadow: 'shadow-lime-400/25',
        glow: 'shadow-lime-500/20'
      },
      teal: { 
        text: 'text-teal-400', 
        border: 'border-teal-400',
        bg: 'bg-teal-400',
        shadow: 'shadow-teal-400/25',
        glow: 'shadow-teal-500/20'
      },
    };

    // Size/Padding mappings
    const paddingClasses = {
      xs: 'p-2',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8'
    };

    // Border width mappings
    const borderWidthClasses = {
      thin: 'border',
      medium: 'border-2',
      thick: 'border-4'
    };

    // Clip path mappings
    const clipPaths = {
      straight: 'none',
      'bottom-right-cut': 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
      'top-left-cut': 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)',
      'angled-corner': 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)',
      'double-cut': 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
      'hex-corner': 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
    };

    const colors = colorClasses[colorScheme];
    
    // Build variant styles
    const getVariantClasses = () => {
      switch (variant) {
        case 'primary':
          return `bg-gray-900 ${colors.border} ${borderWidthClasses[borderWidth]}`;
        case 'secondary':
          return `bg-gray-800 ${colors.border} ${borderWidthClasses[borderWidth]}`;
        case 'ghost':
          return `bg-gray-900/60 backdrop-blur-sm ${colors.border} ${borderWidthClasses[borderWidth]}`;
        case 'outline':
          return `bg-transparent ${colors.border} ${borderWidthClasses[borderWidth]}`;
        case 'danger':
          return `bg-gray-900 border-red-500 ${borderWidthClasses[borderWidth]}`;
        case 'warning':
          return `bg-gray-900 border-yellow-500 ${borderWidthClasses[borderWidth]}`;
        case 'success':
          return `bg-gray-900 border-green-500 ${borderWidthClasses[borderWidth]}`;
        default:
          return `bg-gray-900 ${colors.border} ${borderWidthClasses[borderWidth]}`;
      }
    };

    // Scanning animation effect
    useEffect(() => {
      if (scanningEffect && isHovered) {
        setScanProgress(0);
        const interval = setInterval(() => {
          setScanProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 5;
          });
        }, 50);

        return () => clearInterval(interval);
      }
    }, [scanningEffect, isHovered]);

    // Base classes
    const baseClasses = [
      'relative',
      'overflow-hidden',
      'transition-all',
      'duration-300',
      'group'
    ].join(' ');

    // Conditional classes
    const conditionalClasses = [
      getVariantClasses(),
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      clickable || onClick ? 'cursor-pointer' : '',
      hoverable ? `hover:${colors.shadow} hover:shadow-lg` : '',
      glowEffect && hoverable ? `hover:${colors.glow}` : '',
      className
    ].filter(Boolean).join(' ');

    const finalClasses = `${baseClasses} ${conditionalClasses}`;

    const clipPathStyle = clipPath !== 'straight' ? { clipPath: clipPaths[clipPath] } : {};

    const handleMouseEnter = () => {
      if (hoverable || scanningEffect) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      if (hoverable || scanningEffect) {
        setIsHovered(false);
        setScanProgress(0);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onClick) {
        onClick(e);
      }
    };

    return (
      <div
        ref={ref}
        className={finalClasses}
        style={clipPathStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        {/* Scanning effect overlay */}
        {scanningEffect && isHovered && !disabled && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <div 
              className={`absolute w-full h-0.5 bg-gradient-to-r from-transparent via-${colorScheme}-400 to-transparent opacity-60`}
              style={{ 
                top: `${scanProgress}%`,
                transition: 'top 0.1s linear'
              }}
            />
          </div>
        )}

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-30">
            <div className={`w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin ${colors.text}`} />
          </div>
        )}

        {/* Corner accents */}
        {withAccent && (
          <>
            <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${colors.border} opacity-60`} />
            <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${colors.border} opacity-60`} />
            <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l ${colors.border} opacity-60`} />
            <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${colors.border} opacity-60`} />
          </>
        )}

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          {(header || title || subtitle) && (
            <div className={`border-b border-gray-700 ${paddingClasses[size]} flex-shrink-0`}>
              {header || (
                <div>
                  {title && (
                    <h3 className={`font-mono font-bold text-lg ${colors.text} mb-1`}>
                      {title}
                    </h3>
                  )}
                  {subtitle && (
                    <p className="text-gray-400 font-mono text-sm">
                      {subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          <div className={`${paddingClasses[padding]} flex-grow`}>
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className={`border-t border-gray-700 ${paddingClasses[size]} flex-shrink-0`}>
              {footer}
            </div>
          )}
        </div>

        {/* Hover glow effect */}
        {glowEffect && hoverable && (
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100`}>
            <div className={`absolute inset-0 ${colors.bg} opacity-5`} />
          </div>
        )}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes scanMove {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}</style>
      </div>
    );
  }
);

CyberpunkCard.displayName = 'CyberpunkCard';

export default CyberpunkCard;
