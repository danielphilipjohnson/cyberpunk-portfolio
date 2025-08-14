"use client"

import { useState, useEffect } from 'react';
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
    };
    return colorMap[color] || colorMap.cyan;
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
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] backdrop-blur-sm">
          <div className="bg-red-900 border-2 border-red-400 p-6 max-w-md mx-4 relative"
               style={{ clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)" }}>
            
            {/* Warning Icon */}
            <div className="text-center mb-4">
              <div className="text-6xl text-red-400 animate-pulse">⚠️</div>
            </div>
            
            {/* Warning Text */}
            <div className="text-center mb-6">
              <h2 className="text-red-400 font-mono font-bold text-lg mb-2 uppercase tracking-wider">
                CORPO SECURITY ALERT
              </h2>
              <p className="text-red-300 font-mono text-sm leading-relaxed mb-4">
                You are accessing classified Militech neural interface data. 
                Unauthorized viewing may result in memory wipe protocols.
              </p>
              <div className="text-red-400 font-mono text-xs mb-4">
                [NEURAL_TRACE_ACTIVE] • [ICE_MONITORING] • [CORPO_OVERSIGHT]
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowSecurityWarning(false)}
                className="flex-1 bg-red-400 text-black font-mono font-bold py-2 px-4 hover:bg-red-300 transition-colors"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                [ACCEPT_RISK]
              </button>
              <a 
                href="/"
                className="flex-1 bg-gray-700 text-red-400 font-mono font-bold py-2 px-4 hover:bg-gray-600 transition-colors text-center"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                [JACK_OUT]
              </a>
            </div>
            
            {/* Auto-dismiss countdown */}
            <div className="mt-4 text-center">
              <span className="text-red-400 font-mono text-xs opacity-60">
                Auto-dismissing in 5 seconds...
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Navigation Bar */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main nav container */}
          <div className="bg-gray-900/60 backdrop-blur-md border border-teal-400/20 p-4 flex items-center justify-between"
            style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-teal-400/20 border border-teal-400 flex items-center justify-center mr-3"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 3A6.5 6.5 0 0 0 3 9.5v1A1.5 1.5 0 0 0 4.5 12H6a1.5 1.5 0 0 0 1.5-1.5v-1A3.5 3.5 0 0 1 11 6h1a3.5 3.5 0 0 1 3.5 3.5v1A1.5 1.5 0 0 0 17 12h1.5a1.5 1.5 0 0 0 1.5-1.5v-1A6.5 6.5 0 0 0 13.5 3h-4z" fill="#5eead4"/>
                  <path d="M4.5 15a1.5 1.5 0 0 0-1.5 1.5v2A4.5 4.5 0 0 0 7.5 23h9a4.5 4.5 0 0 0 4.5-4.5v-2a1.5 1.5 0 0 0-1.5-1.5h-15z" fill="#5eead4"/>
                </svg>
              </div>
              <div>
                <div className="text-teal-400 font-bold text-lg tracking-wider lowercase font-mono">void.dev</div>
                <div className="text-gray-400 text-xs font-mono">[NETRUNNER.PORTFOLIO]</div>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                Home
              </a>
              <a href="/about" className="text-teal-400 border-b border-teal-400 text-sm font-mono uppercase tracking-wider pb-1">
                About
              </a>
              <a href="/projects" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                Projects
              </a>
              <a href="/blog" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                Blog
              </a>
              <a href="/contact" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <a
              href="/cv/Daniel_Philip_Johnson.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-teal-400 text-gray-900 hover:bg-teal-300 transition-all duration-300 font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-teal-400/25"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download CV
            </a>

            {/* Mobile menu button */}
            <button className="md:hidden text-teal-400 hover:text-teal-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Page-specific Cyberpunk Header */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Page title */}
            <div className="flex items-center">
              <a href="/" className="flex items-center mr-6 group">
                <div className="w-8 h-8 bg-cyan-900 bg-opacity-30 border border-cyan-400 flex items-center justify-center mr-2 group-hover:bg-cyan-400 group-hover:text-gray-900 transition-colors"
                     style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
                  </svg>
                </div>
                <span className="text-cyan-400 font-mono text-xs group-hover:text-cyan-300">[HOME]</span>
              </a>
              <div 
                className="bg-cyan-900 bg-opacity-30 px-3 py-1 border-l-2 border-cyan-400 flex items-center mr-4"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
              >
                <div className="w-2 h-2 bg-cyan-400 mr-2"></div>
                <span className="text-cyan-400 font-mono text-xs">ABOUT.sys</span>
              </div>
              <h1 className="text-2xl font-mono font-bold text-cyan-400 uppercase tracking-wider">
                CORPO_OPERATIVE_DOSSIER
              </h1>
            </div>

            {/* Corporate controls */}
            <div className="flex items-center space-x-4">
              <div className="text-red-400 font-mono text-xs px-2 py-1 border border-red-400 bg-red-900 bg-opacity-20">
                [CLASSIFIED]
              </div>
              <div className="text-lime-400 font-mono text-xs cursor-pointer hover:text-lime-300 underline"
                   onClick={triggerReboot}>
                [ICE_REBOOT]
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex overflow-x-auto pb-4 scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 font-mono text-sm border-t-2 mr-2 ${getNavColorClass(section.color, activeSection === section.id)} bg-opacity-10 transition-all duration-300`}
                style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
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
