"use client"

import React, { useState, useEffect } from 'react';

export default function ContactHero() {
  const [connectionStatus, setConnectionStatus] = useState('INITIALIZING');
  const [dataStream, setDataStream] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState<number[]>([]);
  const [securityLevel, setSecurityLevel] = useState(0);

  // Connection status simulation
  useEffect(() => {
    const statusSequence = ['INITIALIZING', 'SCANNING', 'LINKING', 'CONNECTED'];
    let currentIndex = 0;

    const statusInterval = setInterval(() => {
      setConnectionStatus(statusSequence[currentIndex]);
      currentIndex = (currentIndex + 1) % statusSequence.length;
    }, 3000);

    return () => clearInterval(statusInterval);
  }, []);

  // Data stream simulation
  useEffect(() => {
    const streamInterval = setInterval(() => {
      setDataStream(prev => (prev + Math.random() * 10) % 100);
    }, 500);

    return () => clearInterval(streamInterval);
  }, []);

  // Security level animation
  useEffect(() => {
    const securityInterval = setInterval(() => {
      setSecurityLevel(Math.floor(85 + Math.random() * 15));
    }, 2000);

    return () => clearInterval(securityInterval);
  }, []);

  // Neural activity simulation
  useEffect(() => {
    const activityInterval = setInterval(() => {
      setNeuralActivity(prev => [
        ...prev.slice(-5),
        Math.floor(Math.random() * 100)
      ]);
    }, 1000);

    return () => clearInterval(activityInterval);
  }, []);

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'INITIALIZING': return 'text-yellow-400';
      case 'SCANNING': return 'text-orange-400';
      case 'LINKING': return 'text-purple-400';
      case 'CONNECTED': return 'text-green-400';
      default: return 'text-cyan-400';
    }
  };

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'INITIALIZING': return '🔄';
      case 'SCANNING': return '🔍';
      case 'LINKING': return '🔗';
      case 'CONNECTED': return '✅';
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
              backgroundSize: "30px 30px"
            }}
          />
        </div>

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Connection lines */}
          <path d="M0,20 Q25,50 50,30 T100,40" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M0,60 Q30,30 60,50 T100,20" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" opacity="0.4" />
          <path d="M0,80 Q40,60 80,70 T100,60" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" opacity="0.5" />
          
          {/* Neural nodes */}
          <circle cx="20" cy="30" r="1" fill="#06b6d4" opacity="0.8" />
          <circle cx="50" cy="45" r="1.5" fill="#8b5cf6" opacity="0.7" />
          <circle cx="80" cy="25" r="1" fill="#ec4899" opacity="0.6" />
        </svg>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" 
             style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" 
             style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-500 rounded-full animate-pulse" 
             style={{ animation: 'float 7s ease-in-out infinite' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Status header */}
            <div className="bg-gray-800 border border-gray-700 p-4" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cyan-900 border border-cyan-400 flex items-center justify-center mr-3"
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                    <span className="text-cyan-400 text-sm">{getStatusIcon()}</span>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-mono text-sm font-bold">NEURAL_CONTACT_INTERFACE</div>
                    <div className="text-gray-400 font-mono text-xs">v3.2.7_quantum_encrypted</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-sm font-bold ${getStatusColor()}`}>
                    {connectionStatus}
                  </div>
                  <div className="text-gray-400 font-mono text-xs">
                    SEC_LVL: {securityLevel}%
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-cyan-400 flex-grow opacity-60" />
                <div className="text-cyan-400 font-mono text-xs px-3 py-1 border border-cyan-400 bg-cyan-900/20">
                  DIRECT_NEURAL_LINK
                </div>
                <div className="h-px bg-cyan-400 flex-grow opacity-60" />
              </div>

              <h1 className="text-4xl md:text-6xl font-mono font-bold text-white leading-tight">
                ESTABLISH
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
                  NEURAL_LINK
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-gray-300 font-mono text-lg leading-relaxed">
                  Welcome to the quantum-encrypted communication interface, choom. 
                  Ready to jack into the net and discuss your next neural enhancement project?
                </p>
                
                <div className="bg-gray-800 border-l-4 border-cyan-400 p-4">
                  <div className="font-mono text-sm text-gray-300">
                    <div className="text-cyan-400 font-bold mb-2">{'//'} CONNECTION_PROTOCOLS_AVAILABLE</div>
                    <div className="space-y-1 text-xs">
                      <div>• NEURAL_FORM_INTERFACE &nbsp;&nbsp;&nbsp; [SECURE]</div>
                      <div>• SOCIAL_MEDIA_CHANNELS &nbsp; [ENCRYPTED]</div>
                      <div>• PROFESSIONAL_NETWORKS &nbsp; [VERIFIED]</div>
                      <div>• EMAIL_QUANTUM_TUNNEL &nbsp;&nbsp;&nbsp; [AUTHENTICATED]</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">NEURAL_LINK_ACTIVE</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400">ENCRYPTION_ENABLED</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-mono">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-purple-400">QUANTUM_SECURED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Neural activity display */}
          <div className="space-y-6">
            {/* Neural activity monitor */}
            <div className="bg-gray-800 border border-gray-700 p-6" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-cyan-400 font-mono font-bold">NEURAL_ACTIVITY_MONITOR</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-xs">ACTIVE</span>
                </div>
              </div>

              {/* Data stream visualization */}
              <div className="space-y-4">
                <div className="h-24 bg-gray-900 border border-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-around p-2">
                    {neuralActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-cyan-400 to-purple-400 w-3 transition-all duration-500"
                        style={{ height: `${activity}%` }}
                      />
                    ))}
                  </div>
                  {/* Scan line */}
                  <div 
                    className="absolute w-full h-0.5 bg-cyan-400 opacity-60"
                    style={{ 
                      top: '50%',
                      animation: 'scanVertical 3s ease-in-out infinite'
                    }}
                  />
                </div>

                {/* Status indicators */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-gray-900 p-3 border border-gray-600">
                    <div className="text-gray-400">DATA_STREAM</div>
                    <div className="text-cyan-400 font-bold">{dataStream.toFixed(1)}MB/s</div>
                  </div>
                  <div className="bg-gray-900 p-3 border border-gray-600">
                    <div className="text-gray-400">NEURAL_SYNC</div>
                    <div className="text-green-400 font-bold">99.7%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection quality */}
            <div className="bg-gray-800 border border-gray-700 p-4">
              <h4 className="text-purple-400 font-mono font-bold mb-3">CONNECTION_QUALITY</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">BANDWIDTH</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-700 relative">
                      <div className="h-full bg-cyan-400" style={{ width: '95%' }} />
                    </div>
                    <span className="text-cyan-400 font-mono text-xs">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">LATENCY</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-700 relative">
                      <div className="h-full bg-green-400" style={{ width: '88%' }} />
                    </div>
                    <span className="text-green-400 font-mono text-xs">12ms</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono text-sm">SECURITY</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-700 relative">
                      <div className="h-full bg-purple-400" style={{ width: '100%' }} />
                    </div>
                    <span className="text-purple-400 font-mono text-xs">MAX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-cyan-400 opacity-30" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-cyan-400 opacity-30" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-cyan-400 opacity-30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-cyan-400 opacity-30" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
        }
        
        @keyframes scanVertical {
          0% { top: 0%; opacity: 0.3; }
          50% { top: 50%; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
