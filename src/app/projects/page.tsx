"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { Project } from '@/data/projects';

export default function ProjectsPage() {
  const [showContent, setShowContent] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Smooth page entrance
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    // Future: Could open modal or navigate to detailed project page
    console.log('Selected project:', project);
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <ProjectsHero />

      {/* Main Content */}
      <main className="relative">
        {/* Cyberpunk background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Moving data streams */}
          <div 
            className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-15"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-15"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          <div 
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-15"
            style={{ transform: `translateY(${scrollY * 0.25}px)` }}
          />

          {/* Floating neural particles */}
          <div 
            className="absolute top-1/4 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{ 
              transform: `translate(${Math.sin(scrollY * 0.008) * 15}px, ${scrollY * 0.08}px)`,
              opacity: 0.6
            }}
          />
          <div 
            className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"
            style={{ 
              transform: `translate(${Math.cos(scrollY * 0.012) * 20}px, ${scrollY * -0.1}px)`,
              opacity: 0.5
            }}
          />
          <div 
            className="absolute top-3/4 left-1/3 w-1 h-1 bg-pink-500 rounded-full animate-pulse"
            style={{ 
              transform: `translate(${Math.sin(scrollY * 0.015) * 12}px, ${scrollY * 0.06}px)`,
              opacity: 0.4
            }}
          />

          {/* Matrix-style digital rain effect (subtle) */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent"
                style={{
                  left: `${(i * 5)}%`,
                  height: '100px',
                  animation: `matrixRain ${8 + Math.random() * 4}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid Section */}
        <ProjectsGrid onProjectSelect={handleProjectSelect} />

        {/* Neural Connection Status Footer */}
        <section className="py-8 sm:py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-gray-800 border border-gray-700 p-6 sm:p-8 text-center"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-green-400 font-mono font-bold text-lg sm:text-xl">PROJECT_DATABASE_SYNCHRONIZED</h3>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse" />
              </div>
              
              <p className="text-gray-300 font-mono text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                Neural interface successfully connected to project archive. All systems operational. 
                Ready to initialize collaboration protocols for your next cybernetic enhancement project.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gray-900 border border-gray-600 p-3 sm:p-4">
                  <div className="text-cyan-400 font-mono text-xs sm:text-sm font-bold">NEURAL_UPTIME</div>
                  <div className="text-white font-mono text-base sm:text-lg">99.8%</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-cyan-400" style={{ width: '99.8%' }} />
                  </div>
                </div>
                <div className="bg-gray-900 border border-gray-600 p-3 sm:p-4">
                  <div className="text-purple-400 font-mono text-xs sm:text-sm font-bold">DATA_INTEGRITY</div>
                  <div className="text-white font-mono text-base sm:text-lg">100%</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-purple-400" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="bg-gray-900 border border-gray-600 p-3 sm:p-4">
                  <div className="text-green-400 font-mono text-xs sm:text-sm font-bold">ACCESS_LEVEL</div>
                  <div className="text-white font-mono text-base sm:text-lg">ADMIN</div>
                  <div className="w-full h-1 bg-gray-700 mt-2">
                    <div className="h-full bg-green-400" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-cyan-400 bg-opacity-20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-mono text-xs sm:text-sm font-bold"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  INITIATE_COLLABORATION
                </Link>
                <a
                  href="https://github.com/danielphilipjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-400 bg-opacity-20 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-mono text-xs sm:text-sm font-bold"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  ACCESS_SOURCE_CODE
                </a>
                <Link
                  href="/blog"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-400 bg-opacity-20 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 font-mono text-xs sm:text-sm font-bold"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  READ_NEURAL_LOGS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Selection Modal (Future Enhancement) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-cyan-400 max-w-2xl w-full max-h-[80vh] overflow-auto"
               style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
            
            <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
              <h3 className="text-cyan-400 font-mono font-bold text-lg">PROJECT_SCAN_COMPLETE</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-red-400 hover:text-red-300 font-mono text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔍</div>
                <h4 className="text-white font-mono font-bold text-xl mb-2">{selectedProject.title}</h4>
                <div className="text-gray-400 font-mono text-sm">{selectedProject.cyberpunkName}</div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 font-mono text-sm">{selectedProject.longDescription}</p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-400 bg-opacity-20 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-mono text-sm"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                    >
                      VIEW_SOURCE
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-mono text-sm"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                    >
                      LIVE_DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background neural activity indicators */}
      <div className="fixed bottom-10 right-10 pointer-events-none z-40">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      </div>
      <div className="fixed top-20 left-10 pointer-events-none z-40">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-40" />
      </div>

      <style jsx>{`
        @keyframes matrixRain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(calc(100vh + 100px)); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
