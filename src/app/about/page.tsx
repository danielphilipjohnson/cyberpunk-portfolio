"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CyberpunkCorpoProfile from '@/components/about/corpo-profile';
import CyberpunkDevJourney from '@/components/about/journey';
import CyberpunkMissionStatement from '@/components/about/mission';
import CyberpunkOutsideProgramming from '@/components/about/outside';
import CyberpunkValuesMission from '@/components/about/values';
import CyberpunkContact from '@/components/about/contact';
import Footer from '@/components/home/Footer';
import { useLoading } from '@/providers/LoadingProvider';

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);
  const { triggerReboot } = useLoading();
  const [activeSection, setActiveSection] = useState('about');
  const [showSecurityWarning, setShowSecurityWarning] = useState(true);

  useEffect(() => {
    // Add a slight delay for smooth page transition
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Auto-dismiss security warning after 5 seconds
    const securityTimer = setTimeout(() => {
      setShowSecurityWarning(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(securityTimer);
    };
  }, []);

  // Navigation sections - Cyberpunk Corpo themed
  const navigationSections = [
    { id: 'about', label: 'CORPO_PROFILE', icon: '🏢', color: 'cyan' },
    { id: 'journey', label: 'NEURAL_HISTORY', icon: '🧠', color: 'teal' },
    { id: 'mission', label: 'CORPO_DIRECTIVES', icon: '💼', color: 'blue' },
    { id: 'outside', label: 'OFF_GRID_PROTOCOLS', icon: '🌃', color: 'pink' },
    { id: 'values', label: 'MILITECH_VALUES', icon: '⚡', color: 'purple' },
    { id: 'contact', label: 'SECURE_CHANNELS', icon: '📡', color: 'green' }
  ];

  // Get color classes for navigation
  const getNavColorClass = (color: string, isActive: boolean) => {
    const colorMap = {
      cyan: isActive ? 'text-cyan-400 border-cyan-400 bg-cyan-900' : 'text-gray-400 border-gray-700 hover:text-cyan-400 hover:border-cyan-400',
      teal: isActive ? 'text-teal-400 border-teal-400 bg-teal-900' : 'text-gray-400 border-gray-700 hover:text-teal-400 hover:border-teal-400',
      blue: isActive ? 'text-blue-400 border-blue-400 bg-blue-900' : 'text-gray-400 border-gray-700 hover:text-blue-400 hover:border-blue-400',
      pink: isActive ? 'text-pink-500 border-pink-500 bg-pink-900' : 'text-gray-400 border-gray-700 hover:text-pink-500 hover:border-pink-500',
      purple: isActive ? 'text-purple-500 border-purple-500 bg-purple-900' : 'text-gray-400 border-gray-700 hover:text-purple-500 hover:border-purple-500',
      green: isActive ? 'text-green-400 border-green-400 bg-green-900' : 'text-gray-400 border-gray-700 hover:text-green-400 hover:border-green-400'
    } as const;
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={`min-h-screen bg-gray-900 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Corporate Security Warning Modal */}
      {showSecurityWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] backdrop-blur-sm p-4">
          <div className="bg-red-900 border-2 border-red-400 p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-auto relative"
               style={{ clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)" }}>
            
            {/* Warning Icon */}
            <div className="text-center mb-3 sm:mb-4">
              <div className="text-4xl sm:text-6xl text-red-400 animate-pulse">⚠️</div>
            </div>
            
            {/* Warning Text */}
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-red-400 font-mono font-bold text-base sm:text-lg mb-2 uppercase tracking-wider break-words">
                CORPO SECURITY ALERT
              </h2>
              <p className="text-red-300 font-mono text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 break-words">
                You are accessing classified Militech neural interface data. 
                Unauthorized viewing may result in memory wipe protocols.
              </p>
              <div className="text-red-400 font-mono text-xs mb-3 sm:mb-4 break-all">
                <span className="block sm:inline">[NEURAL_TRACE_ACTIVE]</span>
                <span className="hidden sm:inline"> • </span>
                <span className="block sm:inline">[ICE_MONITORING]</span>
                <span className="hidden sm:inline"> • </span>
                <span className="block sm:inline">[CORPO_OVERSIGHT]</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setShowSecurityWarning(false)}
                className="flex-1 bg-red-400 text-black font-mono font-bold py-2 px-3 sm:px-4 hover:bg-red-300 transition-colors text-xs sm:text-sm"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                [ACCEPT_RISK]
              </button>
              <Link 
                href="/"
                className="flex-1 bg-gray-700 text-red-400 font-mono font-bold py-2 px-3 sm:px-4 hover:bg-gray-600 transition-colors text-center text-xs sm:text-sm"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                [JACK_OUT]
              </Link>
            </div>
            
            {/* Auto-dismiss countdown */}
            <div className="mt-3 sm:mt-4 text-center">
              <span className="text-red-400 font-mono text-xs opacity-60 break-words">
                Auto-dismissing in 5 seconds...
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page-specific Cyberpunk Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-3 sm:py-4 gap-3 lg:gap-0">
            {/* Page title */}
            <div className="flex flex-col sm:flex-row sm:items-center min-w-0">
              <Link href="/" className="flex items-center mb-2 sm:mb-0 sm:mr-4 lg:mr-6 group shrink-0">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-900 bg-opacity-30 border border-cyan-400 flex items-center justify-center mr-2 group-hover:bg-cyan-400 group-hover:text-gray-900 transition-colors"
                     style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
                  </svg>
                </div>
                <span className="text-cyan-400 font-mono text-xs group-hover:text-cyan-300">[HOME]</span>
              </Link>
              <div className="flex flex-col sm:flex-row sm:items-center min-w-0">
                <div 
                  className="bg-cyan-900 bg-opacity-30 px-2 sm:px-3 py-1 border-l-2 border-cyan-400 flex items-center mb-2 sm:mb-0 sm:mr-3 lg:mr-4 shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
                >
                  <div className="w-2 h-2 bg-cyan-400 mr-2"></div>
                  <span className="text-cyan-400 font-mono text-xs">ABOUT.sys</span>
                </div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-mono font-bold text-cyan-400 uppercase tracking-wider break-words">
                  CORPO_OPERATIVE_DOSSIER
                </h1>
              </div>
            </div>

            {/* Corporate controls */}
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <div className="text-red-400 font-mono text-xs px-1 sm:px-2 py-1 border border-red-400 bg-red-900 bg-opacity-20">
                [CLASSIFIED]
              </div>
              <div className="hidden sm:block text-lime-400 font-mono text-xs cursor-pointer hover:text-lime-300 underline"
                   onClick={triggerReboot}>
                [ICE_REBOOT]
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-2">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-t-2 shrink-0 ${getNavColorClass(section.color, activeSection === section.id)} bg-opacity-10 transition-all duration-300`}
                style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }}
              >
                <span className="mr-1 sm:mr-2">{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
                <span className="sm:hidden">{section.label.split('_')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Enhanced Cyberpunk Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Corporate Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}></div>
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            }}></div>
          </div>

          {/* Corporate Data Streams */}
          <div className="absolute top-0 left-1/6 w-px h-full bg-cyan-400 opacity-10"></div>
          <div className="absolute top-0 right-1/6 w-px h-full bg-pink-500 opacity-10"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-purple-500 opacity-10"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-yellow-400 opacity-10"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-red-400 opacity-10"></div>

          {/* Moving Corporate Data */}
          <div 
            className="absolute left-1/6 w-1.5 h-1.5 bg-cyan-400 rounded-full"
            style={{ animation: "dataStream 15s linear infinite", top: "0%" }}
          ></div>
          <div 
            className="absolute right-1/6 w-1.5 h-1.5 bg-pink-500 rounded-full"
            style={{ animation: "dataStream 8s linear infinite", top: "10%" }}
          ></div>
          <div 
            className="absolute left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full"
            style={{ animation: "dataStream 12s linear infinite", top: "20%" }}
          ></div>
          <div 
            className="absolute right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full"
            style={{ animation: "dataStream 18s linear infinite", top: "30%" }}
          ></div>
          <div 
            className="absolute left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full"
            style={{ animation: "dataStream 10s linear infinite", top: "5%" }}
          ></div>

          {/* Corporate Warning Overlays */}
          <div className="absolute top-20 left-10 text-red-400 font-mono text-xs opacity-20 transform -rotate-12">
            [MILITECH_CLASSIFIED]
          </div>
          <div className="absolute top-40 right-20 text-yellow-400 font-mono text-xs opacity-20 transform rotate-12">
            [CORPO_EYES_ONLY]
          </div>
          <div className="absolute bottom-40 left-20 text-pink-500 font-mono text-xs opacity-20 transform -rotate-6">
            [ARASAKA_NEURAL_LINK]
          </div>
          <div className="absolute bottom-20 right-10 text-purple-400 font-mono text-xs opacity-20 transform rotate-6">
            [NIGHT_CITY_SECURE]
          </div>
          
          {/* Corporate Logos/Watermarks */}
          <div className="absolute top-1/3 left-1/4 text-6xl text-cyan-400 opacity-5 transform rotate-45 font-mono">
            MILITECH
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-6xl text-pink-500 opacity-5 transform -rotate-45 font-mono">
            ARASAKA
          </div>
        </div>

        {/* Page sections */}
        <div className="relative z-10">
          <div id="about">
            <CyberpunkCorpoProfile />
          </div>
          
          <div id="journey">
            <CyberpunkDevJourney />
          </div>
          
          <div id="mission">
            <CyberpunkMissionStatement />
          </div>
          
          <div id="outside">
            <CyberpunkOutsideProgramming />
          </div>
          
          <div id="values">
            <CyberpunkValuesMission />
          </div>
          
          <div id="contact">
            <CyberpunkContact />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-950">
        <Footer />
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes dataStream {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(calc(100vh + 100%)); }
        }

        @keyframes scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 8px; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
