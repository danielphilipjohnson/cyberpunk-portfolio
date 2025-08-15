"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navigation() {
  const pathname = usePathname();
  const isOnBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAnimating(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMobileMenuOpen(false), 300);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/projects', label: 'Projects', icon: '💻' },
    { href: '/blog', label: 'Blog', icon: '📡' },
    { href: '/contact', label: 'Contact', icon: '🔗' }
  ];
  return (
    <header className="relative z-50 px-6 md:px-12 py-6 bg-gray-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Main nav container */}
        <div className="bg-gray-900/60 backdrop-blur-md border border-teal-400/20 p-4 flex items-center justify-between"
          style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
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
            </Link>
          </div>

          {/* Navigation links or Back to Archive */}
          {isOnBlogPost ? (
            // Back to Archive button for single posts
            <Link 
              href="/blog" 
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-sm font-mono uppercase tracking-wider"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Archive
            </Link>
          ) : (
            // Normal navigation for other pages
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/about" className={`text-sm font-mono uppercase tracking-wider pb-1 transition-colors ${
                  pathname === '/about' 
                    ? 'text-teal-400 border-b border-teal-400' 
                    : 'text-white/80 hover:text-teal-400 border-b border-transparent hover:border-teal-400'
                }`}>
                  About
                </Link>
                <Link href="/projects" className={`text-sm font-mono uppercase tracking-wider pb-1 transition-colors ${
                  pathname === '/projects' 
                    ? 'text-teal-400 border-b border-teal-400' 
                    : 'text-white/80 hover:text-teal-400 border-b border-transparent hover:border-teal-400'
                }`}>
                  Projects
                </Link>
                <Link href="/blog" className={`text-sm font-mono uppercase tracking-wider pb-1 transition-colors ${
                  pathname === '/blog' || isOnBlogPost
                    ? 'text-teal-400 border-b border-teal-400' 
                    : 'text-white/80 hover:text-teal-400 border-b border-transparent hover:border-teal-400'
                }`}>
                  Blog
                </Link>
                <Link href="/contact" className={`text-sm font-mono uppercase tracking-wider pb-1 transition-colors ${
                  pathname === '/contact' 
                    ? 'text-teal-400 border-b border-teal-400' 
                    : 'text-white/80 hover:text-teal-400 border-b border-transparent hover:border-teal-400'
                }`}>
                  Contact
                </Link>
              </nav>

              {/* CTA Button */}
              <a
                href="/cv/mira_dossan_resume.pdf"
                download
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-teal-400 text-gray-900 hover:bg-teal-300 transition-all duration-300 font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-teal-400/25"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            </>
          )}

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-teal-400 hover:text-teal-300 transition-colors relative z-50"
            aria-label="Toggle mobile menu"
            title="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
                  isAnimating ? 'top-3 rotate-45' : 'top-1'
                }`}
              />
              <span 
                className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out top-3 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
                  isAnimating ? 'top-3 -rotate-45' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Cyberpunk Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            onClick={toggleMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className={`fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-gray-900/95 backdrop-blur-md border-l border-cyan-400/30 z-[70] transform transition-all duration-300 ease-out md:hidden flex flex-col ${
            isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            
            {/* Neural grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }} />
            </div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-full h-0.5 bg-cyan-400 opacity-30" style={{
                animation: "mobileScan 3s ease-in-out infinite"
              }} />
            </div>
            
            {/* Menu Header */}
            <div className="relative z-10 border-b border-cyan-900 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cyan-900/50 border border-cyan-400 flex items-center justify-center mr-3"
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }}>
                    <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-cyan-400 font-mono text-sm font-bold">NEURAL_MENU</div>
                    <div className="text-gray-400 font-mono text-xs">v2.0.77</div>
                  </div>
                </div>
                
                {/* Status indicators */}
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{ animation: "pulse 1.5s infinite" }} />
                  <div className="w-2 h-2 bg-red-400 rounded-full" style={{ animation: "pulse 2s infinite" }} />
                </div>
              </div>
              
              <div className="text-xs font-mono text-gray-400">
                NODE: MOBILE_INTERFACE_01
              </div>
            </div>
            
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto">
              {/* Navigation Links */}
              <nav className="relative z-10 flex flex-col p-6 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group relative flex items-center p-4 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                        isActive 
                          ? 'text-cyan-400 bg-cyan-900/20 border-l-2 border-cyan-400' 
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 border-l-2 border-transparent hover:border-cyan-400'
                      }`}
                      style={{
                        clipPath: isActive ? 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' : 'none',
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Connection line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                        isActive ? 'bg-cyan-400' : 'bg-gray-700 group-hover:bg-cyan-400'
                      }`} />
                      
                      {/* Icon */}
                      <div className="flex items-center justify-center w-8 h-8 mr-4 border border-gray-700 group-hover:border-cyan-400 transition-colors"
                           style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                        <span className="text-xs">{link.icon}</span>
                      </div>
                      
                      {/* Label with data stream effect */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span>{link.label}</span>
                          {isActive && (
                            <div className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-cyan-400 animate-pulse" />
                              <div className="text-xs text-cyan-400/60">[ACTIVE]</div>
                            </div>
                          )}
                        </div>
                        {!isActive && (
                          <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            ACCESS_NODE_{(index + 1).toString().padStart(2, '0')}
                          </div>
                        )}
                      </div>
                      
                      {/* Hover effect scanner */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-cyan-400" style={{
                          animation: "menuItemScan 2s ease-in-out infinite"
                        }} />
                      </div>
                    </Link>
                  );
                })}
              </nav>
              
              {/* Download CV Button */}
              <div className="relative z-10 p-6 border-t border-gray-800">
                <a
                  href="/cv/mira_dossan_resume.pdf"
                  download
                  className="flex items-center justify-center w-full p-4 bg-teal-400 text-gray-900 hover:bg-teal-300 transition-all duration-300 font-mono font-bold text-sm uppercase tracking-wider"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Neural_CV.pdf
                </a>
              </div>
            </div>
            
            {/* System Info Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-900/90">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="text-gray-400">
                  <div>ENCRYPTION: [ACTIVE]</div>
                  <div>NODES: {navLinks.length}_CONNECTED</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-green-400 animate-pulse" />
                  <span className="text-green-400">SECURE</span>
                </div>
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-50" />
          </div>
        </>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes mobileScan {
          0% { top: 0%; opacity: 0.3; }
          50% { top: 50%; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
        
        @keyframes menuItemScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </header>
  );
}
