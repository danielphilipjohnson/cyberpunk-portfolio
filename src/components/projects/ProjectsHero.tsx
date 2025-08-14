"use client"

import React, { useState, useEffect } from 'react';
import { projects } from '@/data/projects';

export default function ProjectsHero() {
  const [systemStatus, setSystemStatus] = useState('INITIALIZING');
  const [projectCount, setProjectCount] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState<number[]>([]);
  const [uptime, setUptime] = useState(99.7);

  // System initialization sequence
  useEffect(() => {
    const statusSequence = ['INITIALIZING', 'SCANNING_PROJECTS', 'ANALYZING_DATA', 'SYSTEMS_ONLINE'];
    let currentIndex = 0;

    const statusInterval = setInterval(() => {
      setSystemStatus(statusSequence[currentIndex]);
      currentIndex++;
      
      if (currentIndex >= statusSequence.length) {
        clearInterval(statusInterval);
      }
    }, 1500);

    return () => clearInterval(statusInterval);
  }, []);

  // Animate project counters
  useEffect(() => {
    const totalProjects = projects.length;
    const active = projects.filter(p => p.status === 'active').length;
    const completed = projects.filter(p => p.status === 'completed').length;

    // Animate counters
    const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let current = 0;
      const increment = target / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 50);
    };

    setTimeout(() => {
      animateCounter(totalProjects, setProjectCount);
      animateCounter(active, setActiveProjects);
      animateCounter(completed, setCompletedProjects);
    }, 2000);
  }, []);

  // Neural activity simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(prev => [
        ...prev.slice(-20),
        Math.floor(Math.random() * 100)
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Uptime fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(99.7 + Math.random() * 0.3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (systemStatus) {
      case 'INITIALIZING': return 'text-yellow-400';
      case 'SCANNING_PROJECTS': return 'text-orange-400';
      case 'ANALYZING_DATA': return 'text-purple-400';
      case 'SYSTEMS_ONLINE': return 'text-green-400';
      default: return 'text-cyan-400';
    }
  };

  const getStatusIcon = () => {
    switch (systemStatus) {
      case 'INITIALIZING': return '🔄';
      case 'SCANNING_PROJECTS': return '🔍';
      case 'ANALYZING_DATA': return '🧠';
      case 'SYSTEMS_ONLINE': return '✅';
      default: return '📡';
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center">
      {/* Cyberpunk background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Neural connections */}
          <path d="M10,20 Q30,40 50,25 T90,30" stroke="url(#projectGradient)" strokeWidth="0.5" fill="none" opacity="0.7" />
          <path d="M5,60 Q35,35 65,55 T95,25" stroke="url(#projectGradient)" strokeWidth="0.3" fill="none" opacity="0.5" />
          <path d="M15,80 Q45,65 75,75 T95,65" stroke="url(#projectGradient)" strokeWidth="0.4" fill="none" opacity="0.6" />
          
          {/* Project nodes */}
          <circle cx="25" cy="35" r="1.5" fill="#06b6d4" opacity="0.9" />
          <circle cx="55" cy="50" r="2" fill="#8b5cf6" opacity="0.8" />
          <circle cx="75" cy="30" r="1.2" fill="#ec4899" opacity="0.7" />
        </svg>

        {/* Floating data particles */}
        <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" 
             style={{ animation: 'projectFloat 8s ease-in-out infinite' }} />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" 
             style={{ animation: 'projectFloat 10s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-pink-500 rounded-full animate-pulse" 
             style={{ animation: 'projectFloat 9s ease-in-out infinite' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* System status header */}
            <div className="bg-gray-800 border border-gray-700 p-4" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cyan-900 border border-cyan-400 flex items-center justify-center mr-3"
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                    <span className="text-cyan-400 text-sm">{getStatusIcon()}</span>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-mono text-sm font-bold">PROJECT_DATABASE_INTERFACE</div>
                    <div className="text-gray-400 font-mono text-xs">neural_portfolio_system_v4.1.3</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-sm font-bold ${getStatusColor()}`}>
                    {systemStatus}
                  </div>
                  <div className="text-gray-400 font-mono text-xs">
                    UPTIME: {uptime.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-cyan-400 flex-grow opacity-60" />
                <div className="text-cyan-400 font-mono text-xs px-3 py-1 border border-cyan-400 bg-cyan-900/20">
                  NEURAL_PROJECT_ARCHIVE
                </div>
                <div className="h-px bg-cyan-400 flex-grow opacity-60" />
              </div>

              <h1 className="text-4xl md:text-6xl font-mono font-bold text-white leading-tight">
                PROJECT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
                  NEXUS_DB
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-gray-300 font-mono text-lg leading-relaxed">
                  Access the neural project database containing cutting-edge digital architectures, 
                  cybernetic enhancements, and quantum-secured applications developed in Night City&apos;s 
                  underground tech scene.
                </p>
                
                <div className="bg-gray-800 border-l-4 border-cyan-400 p-4">
                  <div className="font-mono text-sm text-gray-300">
                    <div className="text-cyan-400 font-bold mb-2">{/* PROJECT_CATEGORIES_AVAILABLE */}</div>
                    <div className="space-y-1 text-xs grid grid-cols-2 gap-x-8">
                      <div>• WEB_APPLICATIONS &nbsp;&nbsp;&nbsp;&nbsp; [SECURE]</div>
                      <div>• MOBILE_INTERFACES &nbsp;&nbsp;&nbsp; [ENCRYPTED]</div>
                      <div>• AI_NEURAL_NETWORKS &nbsp;&nbsp; [CLASSIFIED]</div>
                      <div>• BLOCKCHAIN_PROTOCOLS &nbsp; [QUANTUM]</div>
                      <div>• API_GATEWAYS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [DEFENDED]</div>
                      <div>• DEVELOPMENT_TOOLS &nbsp;&nbsp; [OPTIMIZED]</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">DATABASE_ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400">PROJECTS_INDEXED</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-purple-400">NEURAL_ENHANCED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Project metrics and neural activity */}
          <div className="space-y-6">
            {/* Project statistics */}
            <div className="bg-gray-800 border border-gray-700 p-6" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-cyan-400 font-mono font-bold text-lg">PROJECT_METRICS</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-xs">LIVE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">
                    {projectCount.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 font-mono text-sm">TOTAL_PROJECTS</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-cyan-400" style={{ width: '100%' }} />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-green-400 mb-2">
                    {activeProjects.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 font-mono text-sm">ACTIVE_STATUS</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-green-400" style={{ width: `${(activeProjects/projectCount)*100}%` }} />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-purple-400 mb-2">
                    {completedProjects.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 font-mono text-sm">COMPLETED</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-purple-400" style={{ width: `${(completedProjects/projectCount)*100}%` }} />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-pink-400 mb-2">
                    A+
                  </div>
                  <div className="text-gray-400 font-mono text-sm">QUALITY_RATING</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-pink-400" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Neural activity monitor */}
            <div className="bg-gray-800 border border-gray-700 p-6">
              <h4 className="text-purple-400 font-mono font-bold mb-4">NEURAL_ACTIVITY</h4>
              
              <div className="h-32 bg-gray-900 border border-gray-600 relative overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-end justify-around p-2">
                  {neuralActivity.slice(-20).map((activity, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-cyan-400 to-purple-400 w-1 transition-all duration-200"
                      style={{ height: `${activity}%` }}
                    />
                  ))}
                </div>
                {/* Scan line */}
                <div 
                  className="absolute w-full h-0.5 bg-cyan-400 opacity-60"
                  style={{ 
                    top: '50%',
                    animation: 'scanActivity 4s ease-in-out infinite'
                  }}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                <div className="text-center">
                  <div className="text-gray-400">CPU_LOAD</div>
                  <div className="text-cyan-400 font-bold">67%</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400">MEMORY</div>
                  <div className="text-green-400 font-bold">4.2GB</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400">NETWORK</div>
                  <div className="text-purple-400 font-bold">124MB/s</div>
                </div>
              </div>
            </div>

            {/* System info */}
            <div className="bg-gray-800 border border-gray-700 p-4">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-400">LAST_SCAN:</span>
                  <span className="text-cyan-400">2024.08.14_19:15:23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SECURITY:</span>
                  <span className="text-green-400">QUANTUM_ENCRYPTED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">PROJECTS_INDEXED:</span>
                  <span className="text-purple-400">{projectCount}_ENTRIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech decorations */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-cyan-400 opacity-30" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-cyan-400 opacity-30" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-cyan-400 opacity-30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-cyan-400 opacity-30" />

      <style jsx>{`
        @keyframes projectFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
        }
        
        @keyframes scanActivity {
          0% { top: 0%; opacity: 0.3; }
          50% { top: 50%; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
