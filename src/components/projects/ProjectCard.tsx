"use client"

import React, { useState } from 'react';
import { Project, ProjectTechnology } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Get color classes for different elements
  const getColorClass = (color: ProjectTechnology['color'], type: 'text' | 'border' | 'bg') => {
    const colorMap: Record<string, Record<string, string>> = {
      cyan: { text: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400' },
      purple: { text: 'text-purple-400', border: 'border-purple-400', bg: 'bg-purple-400' },
      pink: { text: 'text-pink-400', border: 'border-pink-400', bg: 'bg-pink-400' },
      green: { text: 'text-green-400', border: 'border-green-400', bg: 'bg-green-400' },
      yellow: { text: 'text-white', border: 'border-yellow-400', bg: 'bg-yellow-400' },
      blue: { text: 'text-blue-400', border: 'border-blue-400', bg: 'bg-blue-400' },
      red: { text: 'text-red-400', border: 'border-red-400', bg: 'bg-red-400' },
      orange: { text: 'text-orange-400', border: 'border-orange-400', bg: 'bg-orange-400' }
    };
    return colorMap[color]?.[type] || colorMap.cyan[type];
  };

  const getStatusColor = () => {
    switch (project.status) {
      case 'active': return 'text-green-400';
      case 'completed': return 'text-cyan-400';
      case 'in-development': return 'text-amber-300';
      case 'archived': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getThreatColor = () => {
    switch (project.threatLevel) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-amber-300';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = () => {
    switch (project.status) {
      case 'active': return '🟢';
      case 'completed': return '✅';
      case 'in-development': return '🔄';
      case 'archived': return '📦';
      default: return '⚪';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setScanProgress(0);
    
    // Simulate scanning animation
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScanProgress(0);
  };

  return (
    <div 
      className="group relative bg-gray-900 border border-gray-700 overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25"
      style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Scanning effect overlay */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div 
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            style={{ 
              top: `${scanProgress}%`,
              transition: 'top 0.1s linear'
            }}
          />
        </div>
      )}

      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan-900 border border-cyan-400 flex items-center justify-center"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 animate-pulse" />
            </div>
            <span className="text-cyan-400 font-mono text-xs font-bold truncate">
              {project.category.toUpperCase()}_PROJECT
            </span>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-xs">{getStatusIcon()}</span>
            <span className={`font-mono text-xs ${getStatusColor()} hidden sm:inline`}>
              {project.status.toUpperCase()}
            </span>
          </div>
        </div>
        
        <h3 className="text-white font-mono font-bold text-base sm:text-lg mb-1 leading-tight">
          {project.title}
        </h3>
        <div className="text-gray-400 font-mono text-xs">
          {project.cyberpunkName}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Description */}
        <p className="text-gray-300 font-mono text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="space-y-2">
          <div className="text-purple-400 font-mono text-xs font-bold">NEURAL_STACK:</div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${getColorClass(tech.color, 'bg')} bg-opacity-20 ${getColorClass(tech.color, 'border')} border ${getColorClass(tech.color, 'text')} font-mono text-xs`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-gray-400 font-mono text-xs px-2 py-1">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gray-800 border border-gray-600 p-2.5 sm:p-3 text-center">
            <div className="text-gray-400 font-mono text-xs">COMPLEXITY</div>
            <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mx-0.5 ${
                    i < project.complexity ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 border border-gray-600 p-2.5 sm:p-3 text-center">
            <div className="text-gray-400 font-mono text-xs">THREAT_LVL</div>
            <div className={`font-mono text-sm font-bold ${getThreatColor()}`}>
              {project.threatLevel}
            </div>
          </div>
        </div>

        {/* Features preview */}
        <div className="space-y-2">
          <div className="text-pink-400 font-mono text-xs font-bold">KEY_FEATURES:</div>
          <div className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start text-gray-300 font-mono text-xs">
                <div className="w-1 h-1 bg-cyan-400 mr-2 mt-1.5 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
            {project.features.length > 3 && (
              <div className="text-gray-400 font-mono text-xs ml-3">
                +{project.features.length - 3} additional features
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Links */}
          <div className="flex items-center justify-center sm:justify-start space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                title="View Source Code"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
                title="View Live Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                title="View Demo"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </a>
            )}
          </div>

          {/* View Details Button */}
          <button
            onClick={() => onViewDetails?.(project)}
            className="w-full sm:w-auto px-3 py-2 sm:px-4 bg-cyan-400 bg-opacity-20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-mono text-xs font-bold"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
          >
            SCAN_PROJECT
          </button>
        </div>

        {/* Neural scan progress */}
        {isHovered && (
          <div className="mt-3 bg-gray-800 border border-gray-600 p-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-cyan-400 font-mono text-xs">NEURAL_SCAN:</span>
              <span className="text-cyan-400 font-mono text-xs">{scanProgress}%</span>
            </div>
            <div className="w-full h-1 bg-gray-700">
              <div 
                className="h-full bg-cyan-400 transition-all duration-100"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400 opacity-30" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400 opacity-30" />
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-cyan-400 opacity-5" />
      </div>
    </div>
  );
}
