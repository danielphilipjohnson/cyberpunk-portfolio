"use client"

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';

export default function ContactPage() {
  const [showContent, setShowContent] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className={`min-h-screen bg-gray-900 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <main className="relative">
        {/* Cyberpunk background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Moving data streams */}
          <div 
            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          />
          <div 
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-20"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          />

          {/* Floating neural particles */}
          <div 
            className="absolute top-1/3 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{ transform: `translate(${Math.sin(scrollY * 0.01) * 20}px, ${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-2/3 right-10 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"
            style={{ transform: `translate(${Math.cos(scrollY * 0.015) * 15}px, ${scrollY * -0.15}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-pink-500 rounded-full animate-pulse"
            style={{ transform: `translate(${Math.sin(scrollY * 0.02) * 25}px, ${scrollY * 0.05}px)` }}
          />
        </div>

        {/* Contact Form Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px bg-cyan-400 flex-grow opacity-60 max-w-32" />
                <div className="bg-gray-800 border border-cyan-400 px-4 py-2"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
                  <span className="text-cyan-400 font-mono text-sm font-bold">NEURAL_COMMUNICATION_FORM</span>
                </div>
                <div className="h-px bg-cyan-400 flex-grow opacity-60 max-w-32" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                INITIATE_DIRECT_CONNECTION
              </h2>
              <p className="text-gray-300 font-mono text-lg max-w-2xl mx-auto">
                Use the quantum-encrypted form below to establish secure neural link communication. 
                All transmissions are monitored by advanced ICE protocols for maximum security.
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />

            {/* Additional contact info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 text-center"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
                <div className="w-12 h-12 bg-cyan-900 border border-cyan-400 flex items-center justify-center mx-auto mb-4"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-cyan-400 font-mono font-bold text-sm mb-2">QUANTUM_EMAIL</h3>
                <p className="text-gray-300 font-mono text-sm">daniel@void.dev</p>
                <div className="text-green-400 font-mono text-xs mt-2">ENCRYPTION: ACTIVE</div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 text-center"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
                <div className="w-12 h-12 bg-purple-900 border border-purple-400 flex items-center justify-center mx-auto mb-4"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-purple-400 font-mono font-bold text-sm mb-2">RESPONSE_TIME</h3>
                <p className="text-gray-300 font-mono text-sm">24-48 hours</p>
                <div className="text-green-400 font-mono text-xs mt-2">AUTOMATED: FALSE</div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 text-center"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
                <div className="w-12 h-12 bg-pink-900 border border-pink-400 flex items-center justify-center mx-auto mb-4"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-pink-400 font-mono font-bold text-sm mb-2">SECURITY_LEVEL</h3>
                <p className="text-gray-300 font-mono text-sm">QUANTUM_MAX</p>
                <div className="text-green-400 font-mono text-xs mt-2">ICE: ENABLED</div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <SocialLinks />

        {/* Neural Connection Status */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-800 border border-gray-700 p-8 text-center"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-green-400 font-mono font-bold text-xl">NEURAL_LINK_ESTABLISHED</h3>
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              </div>
              
              <p className="text-gray-300 font-mono text-lg mb-6">
                Ready to collaborate on your next cybernetic enhancement project? 
                Whether you need neural interface development, quantum-secured applications, 
                or advanced AI integration - let&apos;s jack into the net together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-900 border border-gray-600 p-4">
                  <div className="text-cyan-400 font-mono text-sm font-bold">PROJECTS</div>
                  <div className="text-white font-mono text-lg">50+</div>
                </div>
                <div className="bg-gray-900 border border-gray-600 p-4">
                  <div className="text-purple-400 font-mono text-sm font-bold">CLIENTS</div>
                  <div className="text-white font-mono text-lg">25+</div>
                </div>
                <div className="bg-gray-900 border border-gray-600 p-4">
                  <div className="text-pink-400 font-mono text-sm font-bold">UPTIME</div>
                  <div className="text-white font-mono text-lg">99.9%</div>
                </div>
                <div className="bg-gray-900 border border-gray-600 p-4">
                  <div className="text-green-400 font-mono text-sm font-bold">SECURITY</div>
                  <div className="text-white font-mono text-lg">MAX</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Background neural activity */}
      <div className="fixed bottom-10 right-10 pointer-events-none z-50">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      </div>
      <div className="fixed top-20 left-10 pointer-events-none z-50">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-40" />
      </div>
      <div className="fixed top-1/2 right-20 pointer-events-none z-50">
        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse opacity-50" />
      </div>
    </div>
  );
}
