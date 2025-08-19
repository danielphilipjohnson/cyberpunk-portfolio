"use client"

import React, { forwardRef } from 'react';
import { CyberpunkButtonProps } from '../types';

const CyberpunkButton = forwardRef<HTMLButtonElement, CyberpunkButtonProps>(
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
    onClick,
    type = 'button',
    leftIcon,
    rightIcon,
    fullWidth = false,
    neuralText = false,
    ...props
  }, ref) => {
    
    // Color scheme mappings
    const colorClasses = {
      cyan: { 
        text: 'text-cyan-400', 
        bg: 'bg-cyan-400', 
        border: 'border-cyan-400',
        shadow: 'shadow-cyan-400/25',
        hover: 'hover:bg-cyan-300 hover:shadow-cyan-400/25'
      },
      purple: { 
        text: 'text-purple-400', 
        bg: 'bg-purple-400', 
        border: 'border-purple-400',
        shadow: 'shadow-purple-400/25',
        hover: 'hover:bg-purple-300 hover:shadow-purple-400/25'
      },
      pink: { 
        text: 'text-pink-500', 
        bg: 'bg-pink-500', 
        border: 'border-pink-500',
        shadow: 'shadow-pink-500/25',
        hover: 'hover:bg-pink-400 hover:shadow-pink-500/25'
      },
      green: { 
        text: 'text-green-400', 
        bg: 'bg-green-400', 
        border: 'border-green-400',
        shadow: 'shadow-green-400/25',
        hover: 'hover:bg-green-300 hover:shadow-green-400/25'
      },
      yellow: { 
        text: 'text-gray-900', 
        bg: 'bg-yellow-400', 
        border: 'border-yellow-400',
        shadow: 'shadow-yellow-400/25',
        hover: 'hover:bg-yellow-300 hover:shadow-yellow-400/25'
      },
      blue: { 
        text: 'text-blue-400', 
        bg: 'bg-blue-400', 
        border: 'border-blue-400',
        shadow: 'shadow-blue-400/25',
        hover: 'hover:bg-blue-300 hover:shadow-blue-400/25'
      },
      red: { 
        text: 'text-red-400', 
        bg: 'bg-red-400', 
        border: 'border-red-400',
        shadow: 'shadow-red-400/25',
        hover: 'hover:bg-red-300 hover:shadow-red-400/25'
      },
      orange: { 
        text: 'text-orange-400', 
        bg: 'bg-orange-400', 
        border: 'border-orange-400',
        shadow: 'shadow-orange-400/25',
        hover: 'hover:bg-orange-300 hover:shadow-orange-400/25'
      },
      lime: { 
        text: 'text-lime-400', 
        bg: 'bg-lime-400', 
        border: 'border-lime-400',
        shadow: 'shadow-lime-400/25',
        hover: 'hover:bg-lime-300 hover:shadow-lime-400/25'
      },
      teal: { 
        text: 'text-teal-400', 
        bg: 'bg-teal-400', 
        border: 'border-teal-400',
        shadow: 'shadow-teal-400/25',
        hover: 'hover:bg-teal-300 hover:shadow-teal-400/25'
      },
    };

    // Size mappings
    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-sm',
      lg: 'px-6 py-4 text-base',
      xl: 'px-8 py-5 text-lg'
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
      'angled-corner': 'polygon(0 0, 100% 0, 95% 100%, 0 100%)',
      'double-cut': 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
      'hex-corner': 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
    };

    const colors = colorClasses[colorScheme];
    
    // Build variant styles
    const getVariantClasses = () => {
      switch (variant) {
        case 'primary':
          return `${colors.bg} text-gray-900 ${colors.hover}`;
        case 'secondary':
          return `bg-gray-800 ${colors.text} border ${colors.border} hover:bg-gray-700`;
        case 'ghost':
          return `bg-transparent ${colors.text} hover:bg-gray-800/50`;
        case 'outline':
          return `bg-transparent ${colors.text} ${borderWidthClasses[borderWidth]} ${colors.border} ${colors.hover} hover:text-gray-900`;
        case 'danger':
          return `bg-red-500 text-white hover:bg-red-400`;
        case 'warning':
          return `bg-yellow-500 text-gray-900 hover:bg-yellow-400`;
        case 'success':
          return `bg-green-500 text-white hover:bg-green-400`;
        default:
          return `${colors.bg} text-gray-900 ${colors.hover}`;
      }
    };

    // Base classes
    const baseClasses = [
      'relative',
      'font-mono',
      'font-bold',
      'uppercase',
      'tracking-wider',
      'transition-all',
      'duration-300',
      'flex',
      'items-center',
      'justify-center',
      'gap-2',
      'overflow-hidden',
      'group'
    ].join(' ');

    // Conditional classes
    const conditionalClasses = [
      sizeClasses[size],
      getVariantClasses(),
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
      glowEffect ? `hover:shadow-lg ${colors.shadow}` : '',
      className
    ].filter(Boolean).join(' ');

    const finalClasses = `${baseClasses} ${conditionalClasses}`;

    const clipPathStyle = clipPath !== 'straight' ? { clipPath: clipPaths[clipPath] } : {};

    return (
      <button
        ref={ref}
        type={type}
        className={finalClasses}
        style={clipPathStyle}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {/* Scanning effect overlay */}
        {scanningEffect && !disabled && (
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div 
              className={`absolute top-0 left-0 w-full h-px ${colors.bg}`}
              style={{
                animation: 'scanY 2s linear infinite'
              }}
            />
          </div>
        )}

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <div className={`w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin`} />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          
          <span className={neuralText ? 'tracking-widest' : ''}>
            {neuralText && variant === 'primary' ? (
              <>
                {'['}
                <span className="px-1">{children}</span>
                {']'}
              </>
            ) : (
              children
            )}
          </span>
          
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </div>

        {/* Hover glow effect */}
        {glowEffect && (
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100`}>
            <div className={`absolute inset-0 ${colors.bg} opacity-5`} />
          </div>
        )}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes scanY {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}</style>
      </button>
    );
  }
);

CyberpunkButton.displayName = 'CyberpunkButton';

export default CyberpunkButton;
