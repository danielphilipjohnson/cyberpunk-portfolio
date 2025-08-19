"use client"

import React, { forwardRef, useState } from 'react';
import { CyberpunkInputProps, CyberpunkTextAreaProps } from '../types';

// Input Component
const CyberpunkInput = forwardRef<HTMLInputElement, CyberpunkInputProps>(
  ({
    className = '',
    colorScheme = 'cyan',
    size = 'md',
    disabled = false,
    loading = false,
    glowEffect = true,
    scanningEffect = false,
    clipPath = 'angled-corner',
    borderWidth = 'medium',
    type = 'text',
    name,
    value,
    defaultValue,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    required = false,
    readOnly = false,
    autoComplete,
    label,
    neuralLabel,
    error,
    hint,
    ...props
  }, ref) => {
    
    const [isFocused, setIsFocused] = useState(false);

    // Color scheme mappings
    const colorClasses = {
      cyan: { 
        text: 'text-cyan-400', 
        border: 'border-cyan-400',
        shadow: 'shadow-cyan-400/25',
        focus: 'focus:border-cyan-400 focus:shadow-cyan-400/25'
      },
      purple: { 
        text: 'text-purple-400', 
        border: 'border-purple-400',
        shadow: 'shadow-purple-400/25',
        focus: 'focus:border-purple-400 focus:shadow-purple-400/25'
      },
      pink: { 
        text: 'text-pink-500', 
        border: 'border-pink-500',
        shadow: 'shadow-pink-500/25',
        focus: 'focus:border-pink-500 focus:shadow-pink-500/25'
      },
      green: { 
        text: 'text-green-400', 
        border: 'border-green-400',
        shadow: 'shadow-green-400/25',
        focus: 'focus:border-green-400 focus:shadow-green-400/25'
      },
      yellow: { 
        text: 'text-yellow-400', 
        border: 'border-yellow-400',
        shadow: 'shadow-yellow-400/25',
        focus: 'focus:border-yellow-400 focus:shadow-yellow-400/25'
      },
      blue: { 
        text: 'text-blue-400', 
        border: 'border-blue-400',
        shadow: 'shadow-blue-400/25',
        focus: 'focus:border-blue-400 focus:shadow-blue-400/25'
      },
      red: { 
        text: 'text-red-400', 
        border: 'border-red-400',
        shadow: 'shadow-red-400/25',
        focus: 'focus:border-red-400 focus:shadow-red-400/25'
      },
      orange: { 
        text: 'text-orange-400', 
        border: 'border-orange-400',
        shadow: 'shadow-orange-400/25',
        focus: 'focus:border-orange-400 focus:shadow-orange-400/25'
      },
      lime: { 
        text: 'text-lime-400', 
        border: 'border-lime-400',
        shadow: 'shadow-lime-400/25',
        focus: 'focus:border-lime-400 focus:shadow-lime-400/25'
      },
      teal: { 
        text: 'text-teal-400', 
        border: 'border-teal-400',
        shadow: 'shadow-teal-400/25',
        focus: 'focus:border-teal-400 focus:shadow-teal-400/25'
      },
    };

    // Size mappings
    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-sm',
      lg: 'px-5 py-4 text-base',
      xl: 'px-6 py-5 text-lg'
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
      'bottom-right-cut': 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
      'top-left-cut': 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)',
      'angled-corner': 'polygon(0 0, 100% 0, 98% 100%, 0 100%)',
      'double-cut': 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)',
      'hex-corner': 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
    };

    const colors = colorClasses[colorScheme];
    
    // Base input classes
    const baseInputClasses = [
      'w-full',
      'bg-gray-800',
      'text-gray-100',
      'font-mono',
      'focus:outline-none',
      'transition-all',
      'duration-300',
      'placeholder:text-gray-500',
      'relative'
    ].join(' ');

    // Conditional input classes
    const conditionalInputClasses = [
      sizeClasses[size],
      borderWidthClasses[borderWidth],
      error ? 'border-red-400 focus:border-red-400 focus:shadow-red-400/25' : `border-gray-600 ${colors.focus}`,
      disabled ? 'opacity-50 cursor-not-allowed bg-gray-900' : '',
      readOnly ? 'bg-gray-900 cursor-default' : '',
      glowEffect ? `focus:shadow-lg ${colors.shadow}` : '',
      className
    ].filter(Boolean).join(' ');

    const finalInputClasses = `${baseInputClasses} ${conditionalInputClasses}`;

    const clipPathStyle = clipPath !== 'straight' ? { clipPath: clipPaths[clipPath] } : {};

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div className="space-y-2">
        {/* Label */}
        {(label || neuralLabel) && (
          <label className={`block font-mono text-sm uppercase tracking-wider ${colors.text}`}>
            {neuralLabel ? (
              <>
                {neuralLabel} {required && <span className="text-red-400">*</span>}
              </>
            ) : (
              <>
                {label} {required && <span className="text-red-400">*</span>}
              </>
            )}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          <input
            ref={ref}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={finalInputClasses}
            style={clipPathStyle}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete={autoComplete}
            {...props}
          />

          {/* Scanning effect overlay */}
          {scanningEffect && isFocused && !disabled && (
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div 
                className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${colorScheme}-400 to-transparent`}
                style={{
                  animation: 'inputScan 2s ease-in-out infinite'
                }}
              />
            </div>
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className={`w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ${colors.text}`} />
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-400 font-mono text-xs flex items-center">
            <span className="mr-1">⚠</span> {error}
          </div>
        )}

        {/* Hint */}
        {hint && !error && (
          <div className="text-gray-400 font-mono text-xs">
            {hint}
          </div>
        )}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes inputScan {
            0% { top: 0%; opacity: 0.3; }
            50% { top: 50%; opacity: 1; }
            100% { top: 100%; opacity: 0.3; }
          }
        `}</style>
      </div>
    );
  }
);

// TextArea Component
const CyberpunkTextArea = forwardRef<HTMLTextAreaElement, CyberpunkTextAreaProps>(
  ({
    className = '',
    colorScheme = 'cyan',
    size = 'md',
    disabled = false,
    loading = false,
    glowEffect = true,
    scanningEffect = false,
    clipPath = 'angled-corner',
    borderWidth = 'medium',
    name,
    value,
    defaultValue,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    required = false,
    readOnly = false,
    autoComplete,
    label,
    neuralLabel,
    error,
    hint,
    rows = 4,
    cols,
    resize = 'vertical',
    ...props
  }, ref) => {
    
    const [isFocused, setIsFocused] = useState(false);

    // Use same color mappings as input
    const colorClasses = {
      cyan: { 
        text: 'text-cyan-400', 
        border: 'border-cyan-400',
        shadow: 'shadow-cyan-400/25',
        focus: 'focus:border-cyan-400 focus:shadow-cyan-400/25'
      },
      purple: { 
        text: 'text-purple-400', 
        border: 'border-purple-400',
        shadow: 'shadow-purple-400/25',
        focus: 'focus:border-purple-400 focus:shadow-purple-400/25'
      },
      pink: { 
        text: 'text-pink-500', 
        border: 'border-pink-500',
        shadow: 'shadow-pink-500/25',
        focus: 'focus:border-pink-500 focus:shadow-pink-500/25'
      },
      green: { 
        text: 'text-green-400', 
        border: 'border-green-400',
        shadow: 'shadow-green-400/25',
        focus: 'focus:border-green-400 focus:shadow-green-400/25'
      },
      yellow: { 
        text: 'text-yellow-400', 
        border: 'border-yellow-400',
        shadow: 'shadow-yellow-400/25',
        focus: 'focus:border-yellow-400 focus:shadow-yellow-400/25'
      },
      blue: { 
        text: 'text-blue-400', 
        border: 'border-blue-400',
        shadow: 'shadow-blue-400/25',
        focus: 'focus:border-blue-400 focus:shadow-blue-400/25'
      },
      red: { 
        text: 'text-red-400', 
        border: 'border-red-400',
        shadow: 'shadow-red-400/25',
        focus: 'focus:border-red-400 focus:shadow-red-400/25'
      },
      orange: { 
        text: 'text-orange-400', 
        border: 'border-orange-400',
        shadow: 'shadow-orange-400/25',
        focus: 'focus:border-orange-400 focus:shadow-orange-400/25'
      },
      lime: { 
        text: 'text-lime-400', 
        border: 'border-lime-400',
        shadow: 'shadow-lime-400/25',
        focus: 'focus:border-lime-400 focus:shadow-lime-400/25'
      },
      teal: { 
        text: 'text-teal-400', 
        border: 'border-teal-400',
        shadow: 'shadow-teal-400/25',
        focus: 'focus:border-teal-400 focus:shadow-teal-400/25'
      },
    };

    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-sm',
      lg: 'px-5 py-4 text-base',
      xl: 'px-6 py-5 text-lg'
    };

    const borderWidthClasses = {
      thin: 'border',
      medium: 'border-2',
      thick: 'border-4'
    };

    const clipPaths = {
      straight: 'none',
      'bottom-right-cut': 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
      'top-left-cut': 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)',
      'angled-corner': 'polygon(0 0, 100% 0, 98% 100%, 0 100%)',
      'double-cut': 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)',
      'hex-corner': 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
    };

    const resizeClasses = {
      none: 'resize-none',
      both: 'resize',
      horizontal: 'resize-x',
      vertical: 'resize-y'
    };

    const colors = colorClasses[colorScheme];
    
    const baseTextAreaClasses = [
      'w-full',
      'bg-gray-800',
      'text-gray-100',
      'font-mono',
      'focus:outline-none',
      'transition-all',
      'duration-300',
      'placeholder:text-gray-500',
      'relative',
      resizeClasses[resize]
    ].join(' ');

    const conditionalTextAreaClasses = [
      sizeClasses[size],
      borderWidthClasses[borderWidth],
      error ? 'border-red-400 focus:border-red-400 focus:shadow-red-400/25' : `border-gray-600 ${colors.focus}`,
      disabled ? 'opacity-50 cursor-not-allowed bg-gray-900' : '',
      readOnly ? 'bg-gray-900 cursor-default' : '',
      glowEffect ? `focus:shadow-lg ${colors.shadow}` : '',
      className
    ].filter(Boolean).join(' ');

    const finalTextAreaClasses = `${baseTextAreaClasses} ${conditionalTextAreaClasses}`;

    const clipPathStyle = clipPath !== 'straight' ? { clipPath: clipPaths[clipPath] } : {};

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div className="space-y-2">
        {/* Label */}
        {(label || neuralLabel) && (
          <label className={`block font-mono text-sm uppercase tracking-wider ${colors.text}`}>
            {neuralLabel ? (
              <>
                {neuralLabel} {required && <span className="text-red-400">*</span>}
              </>
            ) : (
              <>
                {label} {required && <span className="text-red-400">*</span>}
              </>
            )}
          </label>
        )}

        {/* TextArea Container */}
        <div className="relative">
          <textarea
            ref={ref}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            className={finalTextAreaClasses}
            style={clipPathStyle}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete={autoComplete}
            {...props}
          />

          {/* Scanning effect overlay */}
          {scanningEffect && isFocused && !disabled && (
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div 
                className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${colorScheme}-400 to-transparent`}
                style={{
                  animation: 'inputScan 2s ease-in-out infinite'
                }}
              />
            </div>
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="absolute right-3 top-3">
              <div className={`w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ${colors.text}`} />
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-400 font-mono text-xs flex items-center">
            <span className="mr-1">⚠</span> {error}
          </div>
        )}

        {/* Hint */}
        {hint && !error && (
          <div className="text-gray-400 font-mono text-xs">
            {hint}
          </div>
        )}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes inputScan {
            0% { top: 0%; opacity: 0.3; }
            50% { top: 50%; opacity: 1; }
            100% { top: 100%; opacity: 0.3; }
          }
        `}</style>
      </div>
    );
  }
);

CyberpunkInput.displayName = 'CyberpunkInput';
CyberpunkTextArea.displayName = 'CyberpunkTextArea';

// Export both components
export default CyberpunkInput;
export { CyberpunkTextArea };
