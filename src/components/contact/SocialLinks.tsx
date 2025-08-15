"use client"

import React, { useState, useEffect } from 'react';

export default function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [networkStatus, setNetworkStatus] = useState('SCANNING');
  const [activeConnections, setActiveConnections] = useState(0);

  // Network status simulation
  useEffect(() => {
    const statusSequence = ['SCANNING', 'CONNECTING', 'ONLINE', 'SYNCHRONIZED'];
    let currentIndex = 0;

    const statusInterval = setInterval(() => {
      setNetworkStatus(statusSequence[currentIndex]);
      currentIndex = (currentIndex + 1) % statusSequence.length;
    }, 4000);

    return () => clearInterval(statusInterval);
  }, []);

  // Active connections counter
  useEffect(() => {
    const connectionsInterval = setInterval(() => {
      setActiveConnections(Math.floor(3 + Math.random() * 4));
    }, 3000);

    return () => clearInterval(connectionsInterval);
  }, []);

  const socialNetworks = [
    {
      id: 'linkedin',
      name: 'LINKEDIN_NET',
      platform: 'Professional Neural Network',
      url: 'https://www.linkedin.com/in/daniel-philip-johnson/',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'cyan',
      threat: 'LOW',
      bandwidth: '98%',
      description: 'Corporate neural interface for professional data exchange'
    },
    {
      id: 'github',
      name: 'GITHUB_CODE',
      platform: 'Source Code Repository',
      url: 'https://github.com/danielphilipjohnson',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'purple',
      threat: 'MEDIUM',
      bandwidth: '95%',
      description: 'Neural code repository and digital architecture showcase'
    },
    {
      id: 'twitter',
      name: 'TWITTER_FEED',
      platform: 'Real-time Data Stream',
      url: 'https://twitter.com/danielp_johnson',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'blue',
      threat: 'HIGH',
      bandwidth: '87%',
      description: 'Neural thought stream and tech discourse broadcasting'
    },
    {
      id: 'instagram',
      name: 'INSTAGRAM_VIS',
      platform: 'Visual Neural Interface',
      url: 'https://www.instagram.com/danielphilipjohnson/',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'pink',
      threat: 'MEDIUM',
      bandwidth: '92%',
      description: 'Visual neural memory bank and lifestyle documentation'
    },
    {
      id: 'youtube',
      name: 'YOUTUBE_CAST',
      platform: 'Video Transmission Hub',
      url: 'https://www.youtube.com/c/DanielPhilipJohnson/',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'red',
      threat: 'LOW',
      bandwidth: '89%',
      description: 'Neural knowledge transmission and educational broadcasts'
    },
    {
      id: 'dev',
      name: 'DEV_COMM',
      platform: 'Developer Community Hub',
      url: 'https://dev.to/danielphilipjohnson',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45c.42-.02.82-.13 1.14-.32.32-.2.32-.53.32-.53s0-.34-.02-.54c-.03-.2-.06-.38-.08-.55-.02-.17-.04-.32-.04-.32s0-.13.02-.26c.03-.1.05-.2.05-.2s-.03-.04-.05-.06c-.02-.02-.05-.04-.05-.04l.02-.02z"/>
          <path d="M24 0v24H0V0h24zM8.56 12.5c0 .37.04.72.14 1.05.1.33.25.62.45.87.2.25.45.45.75.6.3.15.65.23 1.05.23.4 0 .75-.08 1.05-.23.3-.15.55-.35.75-.6.2-.25.35-.54.45-.87.1-.33.15-.68.15-1.05v-1c0-.37-.05-.72-.15-1.05-.1-.33-.25-.62-.45-.87-.2-.25-.45-.45-.75-.6-.3-.15-.65-.23-1.05-.23-.4 0-.75.08-1.05.23-.3.15-.55.35-.75.6-.2.25-.35.54-.45.87-.1.33-.15.68-.15 1.05v1zm7.07-4.5h-.72c-.3 0-.6.1-.9.3-.3.2-.55.5-.75.9v-1.1h-1.4v7h1.4v-3.8c0-.5.1-.9.3-1.2.2-.3.5-.45.9-.45h.17v-1.65z"/>
        </svg>
      ),
      color: 'green',
      threat: 'LOW',
      bandwidth: '94%',
      description: 'Developer community neural interface and knowledge sharing'
    }
  ];

  const getColorClass = (color: string, type: 'text' | 'border' | 'bg') => {
    const colorMap: Record<string, Record<string, string>> = {
      cyan: { text: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400' },
      purple: { text: 'text-purple-400', border: 'border-purple-400', bg: 'bg-purple-400' },
      blue: { text: 'text-blue-400', border: 'border-blue-400', bg: 'bg-blue-400' },
      pink: { text: 'text-pink-400', border: 'border-pink-400', bg: 'bg-pink-400' },
      red: { text: 'text-red-400', border: 'border-red-400', bg: 'bg-red-400' },
      green: { text: 'text-green-400', border: 'border-green-400', bg: 'bg-green-400' }
    };
    return colorMap[color]?.[type] || colorMap.cyan[type];
  };

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-cyan-400';
    }
  };

  const getNetworkStatusColor = () => {
    switch (networkStatus) {
      case 'SCANNING': return 'text-yellow-400';
      case 'CONNECTING': return 'text-orange-400';
      case 'ONLINE': return 'text-green-400';
      case 'SYNCHRONIZED': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-16 bg-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        {/* Neural grid */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>
        
        {/* Data stream lines */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20" />
        <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gray-900 border border-gray-700 p-6 mb-8"
               style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-900 border border-purple-400 flex items-center justify-center mr-3"
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                  <div className="w-3 h-3 bg-purple-400 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-purple-400 font-mono font-bold text-md md:text-xl">SOCIAL_NETWORK_INTERFACE</h2>
                  <div className="text-gray-400 font-mono text-sm">quantum_social_protocol_v2.3.1</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-mono text-sm font-bold ${getNetworkStatusColor()}`}>
                  {networkStatus}
                </div>
                <div className="text-gray-400 font-mono text-xs">
                  ACTIVE: {activeConnections}/6
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-md sm:text-2xl font-mono font-bold text-white mb-2">
                NEURAL_NETWORK_ACCESS_POINTS
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                Multiple quantum-secured channels available for neural data exchange
              </p>
            </div>
          </div>
        </div>

        {/* Social links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialNetworks.map((network) => (
            <a
              key={network.id}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900 border border-gray-700 p-6 hover:border-gray-500 transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}
              onMouseEnter={() => setHoveredLink(network.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {/* Hover scan effect */}
              {hoveredLink === network.id && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div 
                    className={`absolute w-full h-0.5 ${getColorClass(network.color, 'bg')} opacity-60`}
                    style={{ 
                      top: '50%',
                      animation: 'scanHorizontal 2s ease-in-out infinite'
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="relative z-20">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${getColorClass(network.color, 'bg')} bg-opacity-20 border ${getColorClass(network.color, 'border')} flex items-center justify-center mr-3 p-2`}
                         style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                      <div className={`${getColorClass(network.color, 'text')}`}>
                        {network.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`${getColorClass(network.color, 'text')} font-mono font-bold text-sm`}>
                        {network.name}
                      </h4>
                      <div className="text-gray-400 font-mono text-xs">
                        {network.platform}
                      </div>
                    </div>
                  </div>
                  
                  {/* Threat indicator */}
                  <div className="text-right">
                    <div className={`w-3 h-3 rounded-full animate-pulse ${
                      network.threat === 'LOW' ? 'bg-green-400' :
                      network.threat === 'MEDIUM' ? 'bg-yellow-400' :
                      'bg-red-400'
                    }`} />
                    <div className={`font-mono text-xs ${getThreatColor(network.threat)}`}>
                      {network.threat}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                  {network.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono text-xs">BANDWIDTH:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1 bg-gray-700">
                        <div 
                          className={`h-full ${getColorClass(network.color, 'bg')}`}
                          style={{ width: network.bandwidth }}
                        />
                      </div>
                      <span className={`${getColorClass(network.color, 'text')} font-mono text-xs`}>
                        {network.bandwidth}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono text-xs">STATUS:</span>
                    <span className="text-green-400 font-mono text-xs">ONLINE</span>
                  </div>
                </div>

                {/* Connection indicator */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${getColorClass(network.color, 'bg')} rounded-full animate-pulse`} />
                      <span className={`${getColorClass(network.color, 'text')} font-mono text-xs`}>
                        NEURAL_LINK_ACTIVE
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${getColorClass(network.color, 'border')} opacity-50`} />
              <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${getColorClass(network.color, 'border')} opacity-50`} />
            </a>
          ))}
        </div>

        {/* Network status footer */}
        <div className="mt-12 bg-gray-900 border border-gray-700 p-6 text-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center space-x-8 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400">NETWORKS_ONLINE: 6/6</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400">ENCRYPTION: QUANTUM</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-purple-400">UPTIME: 99.9%</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanHorizontal {
          0% { left: -100%; opacity: 0.3; }
          50% { left: 50%; opacity: 1; }
          100% { left: 100%; opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
