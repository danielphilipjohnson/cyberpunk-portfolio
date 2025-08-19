"use client"

import { useState, useEffect, useCallback } from 'react';

export interface CyberpunkEffectConfig {
  scanningEnabled?: boolean;
  glowEnabled?: boolean;
  hoverEffects?: boolean;
  autoPlay?: boolean;
  duration?: number;
  direction?: 'horizontal' | 'vertical';
  intensity?: number;
}

export interface CyberpunkEffectState {
  isActive: boolean;
  isHovered: boolean;
  progress: number;
  glowIntensity: number;
}

export function useCyberpunkEffect(config: CyberpunkEffectConfig = {}) {
  const {
    scanningEnabled = true,
    glowEnabled = true,
    hoverEffects = true,
    autoPlay = false,
    duration = 2000,
    direction = 'vertical',
    intensity = 1
  } = config;

  const [state, setState] = useState<CyberpunkEffectState>({
    isActive: autoPlay,
    isHovered: false,
    progress: 0,
    glowIntensity: 0
  });

  // Animation frame reference
  const [animationFrame, setAnimationFrame] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Start scanning effect
  const startEffect = useCallback(() => {
    if (!scanningEnabled) return;
    
    setState(prev => ({ ...prev, isActive: true, progress: 0 }));
    setStartTime(Date.now());
  }, [scanningEnabled]);

  // Stop scanning effect
  const stopEffect = useCallback(() => {
    setState(prev => ({ ...prev, isActive: false, progress: 0 }));
    setStartTime(null);
    
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      setAnimationFrame(null);
    }
  }, [animationFrame]);

  // Toggle effect
  const toggleEffect = useCallback(() => {
    if (state.isActive) {
      stopEffect();
    } else {
      startEffect();
    }
  }, [state.isActive, startEffect, stopEffect]);

  // Handle hover events
  const handleMouseEnter = useCallback(() => {
    if (!hoverEffects) return;
    
    setState(prev => ({ ...prev, isHovered: true }));
    
    if (glowEnabled) {
      setState(prev => ({ ...prev, glowIntensity: intensity }));
    }
    
    if (scanningEnabled && hoverEffects) {
      startEffect();
    }
  }, [hoverEffects, glowEnabled, intensity, scanningEnabled, startEffect]);

  const handleMouseLeave = useCallback(() => {
    if (!hoverEffects) return;
    
    setState(prev => ({ 
      ...prev, 
      isHovered: false,
      glowIntensity: 0
    }));
    
    if (!autoPlay) {
      stopEffect();
    }
  }, [hoverEffects, autoPlay, stopEffect]);

  // Animation loop
  const animate = useCallback((currentTime: number) => {
    if (!startTime || !state.isActive) return;
    
    const elapsed = currentTime - startTime;
    const progress = Math.min((elapsed / duration) * 100, 100);
    
    setState(prev => ({ ...prev, progress }));
    
    if (progress < 100) {
      const frame = requestAnimationFrame(animate);
      setAnimationFrame(frame);
    } else {
      // Animation complete
      if (autoPlay) {
        // Restart for auto-play
        setStartTime(currentTime);
        const frame = requestAnimationFrame(animate);
        setAnimationFrame(frame);
      } else {
        stopEffect();
      }
    }
  }, [startTime, state.isActive, duration, autoPlay, stopEffect]);

  // Start animation loop when active
  useEffect(() => {
    if (state.isActive && startTime && !animationFrame) {
      const frame = requestAnimationFrame(animate);
      setAnimationFrame(frame);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [state.isActive, startTime, animationFrame, animate]);

  // Auto-play effect
  useEffect(() => {
    if (autoPlay && scanningEnabled) {
      startEffect();
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [autoPlay, scanningEnabled, startEffect, animationFrame]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [animationFrame]);

  // Generate CSS variables for effects
  const getCSSVariables = useCallback(() => {
    return {
      '--scan-progress': `${state.progress}%`,
      '--glow-intensity': state.glowIntensity,
      '--effect-duration': `${duration}ms`,
      '--effect-direction': direction
    };
  }, [state.progress, state.glowIntensity, duration, direction]);

  // Get scanning line styles
  const getScanningStyles = useCallback(() => {
    const baseStyles = {
      position: 'absolute' as const,
      pointerEvents: 'none' as const,
      zIndex: 20,
      opacity: state.isActive ? 0.6 : 0,
      transition: 'opacity 0.3s ease'
    };

    if (direction === 'vertical') {
      return {
        ...baseStyles,
        top: `${state.progress}%`,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, transparent, currentColor, transparent)'
      };
    } else {
      return {
        ...baseStyles,
        left: `${state.progress}%`,
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'linear-gradient(to bottom, transparent, currentColor, transparent)'
      };
    }
  }, [state.progress, state.isActive, direction]);

  // Get glow styles
  const getGlowStyles = useCallback(() => {
    if (!glowEnabled || !state.isHovered) {
      return {};
    }

    return {
      filter: `drop-shadow(0 0 ${state.glowIntensity * 10}px currentColor)`,
      transition: 'filter 0.3s ease'
    };
  }, [glowEnabled, state.isHovered, state.glowIntensity]);

  return {
    // State
    ...state,
    
    // Actions
    startEffect,
    stopEffect,
    toggleEffect,
    handleMouseEnter,
    handleMouseLeave,
    
    // Styles
    getCSSVariables,
    getScanningStyles,
    getGlowStyles,
    
    // Config
    config: {
      scanningEnabled,
      glowEnabled,
      hoverEffects,
      autoPlay,
      duration,
      direction,
      intensity
    }
  };
}
