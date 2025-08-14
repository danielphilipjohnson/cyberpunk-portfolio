"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  showBackToArchive?: boolean;
}

export default function Navigation({ showBackToArchive = false }: NavigationProps) {
  const pathname = usePathname();
  const isOnBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';
  return (
    <header className="relative z-20 px-6 md:px-12 py-6 bg-gray-900/60 backdrop-blur-md">
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
                <Link href="/about" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                  About
                </Link>
                <Link href="/projects" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                  Projects
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                  Blog
                </Link>
                <Link href="/contact" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
                  Contact
                </Link>
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
            </>
          )}

          {/* Mobile menu button */}
          <button className="md:hidden text-teal-400 hover:text-teal-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
