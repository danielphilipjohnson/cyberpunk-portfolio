"use client"

import React, { forwardRef } from 'react';
import { CyberpunkBadgeProps } from '../types';

const CyberpunkBadge = forwardRef<HTMLSpanElement, CyberpunkBadgeProps>(
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
    borderWidth = 'thin',
    dot = false,
    count,
    showZero = false,
    status,
    ...props
  }, ref) => {
    
    // Color scheme mappings
    const colorClasses = {
      cyan: { 
        text: 'text-cyan-400', 
        bg: 'bg-cyan-400', 
        border: 'border-cyan-400',
        bgOpacity: 'bg-cyan-400/20',
        glow: 'shadow-cyan-400/25'
      },
      purple: { 
        text: 'text-purple-400', 
        bg: 'bg-purple-400', 
        border: 'border-purple-400',
        bgOpacity: 'bg-purple-400/20',
        glow: 'shadow-purple-400/25'
      },
      pink: { 
        text: 'text-pink-500', 
        bg: 'bg-pink-500', 
        border: 'border-pink-500',
        bgOpacity: 'bg-pink-500/20',
        glow: 'shadow-pink-500/25'
      },
      green: { 
        text: 'text-green-400', 
        bg: 'bg-green-400', 
        border: 'border-green-400',
        bgOpacity: 'bg-green-400/20',
        glow: 'shadow-green-400/25'
      },
      yellow: { 
        text: 'text-gray-900', 
        bg: 'bg-yellow-400', 
        border: 'border-yellow-400',
        bgOpacity: 'bg-yellow-400/20',
        glow: 'shadow-yellow-400/25'
      },
      blue: { 
        text: 'text-blue-400', 
        bg: 'bg-blue-400', 
        border: 'border-blue-400',
        bgOpacity: 'bg-blue-400/20',
        glow: 'shadow-blue-400/25'
      },
      red: { 
        text: 'text-red-400', 
        bg: 'bg-red-400', 
        border: 'border-red-400',
        bgOpacity: 'bg-red-400/20',
        glow: 'shadow-red-400/25'
      },
      orange: { 
        text: 'text-orange-400', 
        bg: 'bg-orange-400', 
        border: 'border-orange-400',
        bgOpacity: 'bg-orange-400/20',
        glow: 'shadow-orange-400/25'
      },
      lime: { 
        text: 'text-lime-400', 
        bg: 'bg-lime-400', 
        border: 'border-lime-400',
        bgOpacity: 'bg-lime-400/20',
        glow: 'shadow-lime-400/25'
      },
      teal: { 
        text: 'text-teal-400', 
        bg: 'bg-teal-400', 
        border: 'border-teal-400',
        bgOpacity: 'bg-teal-400/20',
        glow: 'shadow-teal-400/25'
      },
    };

    // Status-based color override
    const statusColors = {
      active: 'green',
      processing: 'yellow',
      default: colorScheme,
      error: 'red',
      warning: 'orange',
      success: 'green'
    };

    const finalColorScheme = status ? statusColors[status] : colorScheme;
    const colors = colorClasses[finalColorScheme as keyof typeof colorClasses];

    // Size mappings
    const sizeClasses = {
      xs: 'px-1.5 py-0.5 text-xs',
      sm: 'px-2 py-1 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-sm',
      xl: 'px-4 py-2 text-base'
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
      'bottom-right-cut': 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
      'top-left-cut': 'polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)',
      'angled-corner': 'polygon(0 0, 95% 0, 100% 100%, 0 100%)',
      'double-cut': 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)',
      'hex-corner': 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)'
    };

    // Build variant styles
    const getVariantClasses = () => {
      switch (variant) {
        case 'primary':
          return `${colors.bg} ${finalColorScheme === 'yellow' ? 'text-gray-900' : 'text-white'}`;
        case 'secondary':
          return `${colors.bgOpacity} ${colors.text} ${borderWidthClasses[borderWidth]} ${colors.border}`;
        case 'ghost':
          return `bg-transparent ${colors.text}`;
        case 'outline':
          return `bg-transparent ${colors.text} ${borderWidthClasses[borderWidth]} ${colors.border}`;
        case 'danger':
          return `bg-red-500 text-white`;
        case 'warning':
          return `bg-yellow-500 text-gray-900`;
        case 'success':
          return `bg-green-500 text-white`;
        default:
          return `${colors.bg} ${finalColorScheme === 'yellow' ? 'text-gray-900' : 'text-white'}`;
      }
    };

    // Base classes
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'font-mono',
      'font-bold',
      'uppercase',
      'tracking-wider',
      'relative',
      'transition-all',
      'duration-200'
    ].join(' ');

    // Conditional classes
    const conditionalClasses = [
      sizeClasses[size],
      getVariantClasses(),
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      glowEffect ? `hover:shadow-lg ${colors.glow} hover:scale-105` : '',
      className
    ].filter(Boolean).join(' ');

    const finalClasses = `${baseClasses} ${conditionalClasses}`;

    const clipPathStyle = clipPath !== 'straight' ? { clipPath: clipPaths[clipPath] } : {};

    // Show count/badge logic
    const shouldShowCount = count !== undefined && (count > 0 || showZero);

    return (
      <span
        ref={ref}
        className={finalClasses}
        style={clipPathStyle}
        {...props}
      >
        {/* Scanning effect overlay */}
        {scanningEffect && !disabled && (
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div 
              className={`absolute top-0 left-0 w-full h-px ${colors.bg}`}
              style={{
                animation: 'badgeScan 2s linear infinite'
              }}
            />
          </div>
        )}

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <div className={`w-3 h-3 border border-current border-t-transparent rounded-full animate-spin`} />
          </div>
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center gap-1">
          {/* Status dot */}
          {(dot || status) && (
            <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} flex-shrink-0 ${status === 'processing' ? 'animate-pulse' : ''}`} />
          )}
          
          {/* Main content */}
          <span>
            {children}
          </span>

          {/* Count badge */}
          {shouldShowCount && (
            <span className={`ml-1 px-1.5 py-0.5 text-xs bg-gray-800 ${colors.text} rounded-sm`}>
              {count}
            </span>
          )}
        </span>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes badgeScan {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
        `}</style>
      </span>
    );
  }
);

CyberpunkBadge.displayName = 'CyberpunkBadge';

export default CyberpunkBadge;
