import React, { useState, useEffect } from 'react';

export const CyberpunkContact = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [hoverTopic, setHoverTopic] = useState(null);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [activeScanLine, setActiveScanLine] = useState(null);
  const [commLinkStatus, setCommLinkStatus] = useState('STABLE');
  const [encryptionLevel, setEncryptionLevel] = useState(0);
  const [dataIntegrity, setDataIntegrity] = useState(100);
  const [pulseText, setPulseText] = useState(null);
  
  // Advanced neural scanning system
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setActiveScanLine(prev => {
        if (prev === null) return 'header-scan';
        if (prev === 'header-scan') return 'contact-scan';
        if (prev === 'contact-scan') return 'network-scan';
        if (prev === 'network-scan') return 'chat-scan';
        return null;
      });
    }, 4500);

    return () => clearInterval(scanInterval);
  }, []);

  // Communication link simulation
  useEffect(() => {
    const commInterval = setInterval(() => {
      setEncryptionLevel(Math.floor(85 + Math.random() * 15)); // 85-100%
      setDataIntegrity(Math.floor(95 + Math.random() * 5)); // 95-100%
      setCommLinkStatus(prev => {
        const statuses = ['STABLE', 'OPTIMAL', 'ENHANCED', 'SYNCHRONIZED'];
        return statuses[Math.floor(Math.random() * statuses.length)];
      });
    }, 3000);

    return () => clearInterval(commInterval);
  }, []);
  
  // Create periodic glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 300);
      }
    }, 12000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Highlight different content sections periodically
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseText(prev => (prev === null ? 0 : (prev + 1) % 3));
    }, 5000);

    return () => clearInterval(pulseInterval);
  }, []);
  
  // Neural conversation protocols with cyberpunk themes
  const chatTopics = [
    {
      title: "NEURAL_FRAMEWORKS.jsx",
      description: "Discuss advanced React neural architectures, quantum state management, and ICE protection protocols for frontend development.",
      color: "cyan",
      id: "react"
    },
    {
      title: "NETRUNNER_SCRIPTS.js",
      description: "Exchange JavaScript exploits, neural interface APIs, and cybernetic enhancement algorithms for the neural web.",
      color: "yellow",
      id: "js"
    },
    {
      title: "MATRIX_STYLING.css",
      description: "Collaborate on neural interface design systems, holographic UX patterns, and cyberpunk visual protocols.",
      color: "purple",
      id: "html"
    },
    {
      title: "QUANTUM_FRAMEWORKS.vue",
      description: "Share knowledge about Next-Gen Vue quantum computing, neural network integrations, and advanced AI frameworks.",
      color: "green",
      id: "vue"
    },
    {
      title: "PSYCH_WARFARE.dll",
      description: "Analyze corporate mind control techniques, neural manipulation protocols, and digital consciousness studies.",
      color: "pink",
      id: "psych"
    },
    {
      title: "BRAIN_INTERFACE.sys",
      description: "Explore neural link technologies, memory implants, consciousness uploading, and cybernetic enhancement protocols.",
      color: "blue",
      id: "neuro"
    },
    {
      title: "SECURE_CHANNELS.enc",
      description: "Initiate encrypted communication protocols through quantum-secured neural networks for sensitive data exchange.",
      color: "cyan",
      id: "question"
    },
    {
      title: "ENTERTAINMENT_MATRIX.vr",
      description: "Discuss immersive neural gaming experiences, virtual reality consciousness, and cyberpunk entertainment protocols.",
      color: "pink",
      id: "other"
    }
  ];
  
  // Neural network access points
  const findMeLocations = [
    {
      platform: "CORPORATE_LINK.net",
      description: "Professional neural network for corporate data exchange",
      icon: "🏢",
      url: "#",
      threat: "LOW",
      ice: "CORPORATE_FIREWALL"
    },
    {
      platform: "CODE_MATRIX.exe",
      description: "Neural programming experiments and digital architecture",
      icon: "⚡",
      url: "#",
      threat: "MEDIUM",
      ice: "CREATIVE_PROTOCOL"
    },
    {
      platform: "VISUAL_STREAM.vr",
      description: "Real-time neural project broadcasting and digital art",
      icon: "👁️",
      url: "#",
      threat: "HIGH",
      ice: "EXPOSURE_RISK"
    },
    {
      platform: "QUANTUM_COMM.sys",
      description: "Encrypted neural communication channel for data runners",
      icon: "🌐",
      url: "https://twitter.com/danielp_johnson",
      threat: "CRITICAL",
      ice: "QUANTUM_ENCRYPTION"
    }
  ];
  
  // Get color class based on color name
  const getColorClass = (color, type) => {
    const colorMap = {
      blue: type === 'text' ? 'text-blue-400' : type === 'border' ? 'border-blue-400' : 'bg-blue-400',
      cyan: type === 'text' ? 'text-cyan-400' : type === 'border' ? 'border-cyan-400' : 'bg-cyan-400',
      pink: type === 'text' ? 'text-pink-500' : type === 'border' ? 'border-pink-500' : 'bg-pink-500',
      purple: type === 'text' ? 'text-purple-500' : type === 'border' ? 'border-purple-500' : 'bg-purple-500',
      green: type === 'text' ? 'text-green-400' : type === 'border' ? 'border-green-400' : 'bg-green-400',
      yellow: type === 'text' ? 'text-yellow-400' : type === 'border' ? 'border-yellow-400' : 'bg-yellow-400'
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Advanced neural network background matrix */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(20, 184, 166, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.15) 1px, transparent 1px)",
          backgroundSize: "35px 35px"
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 2px, transparent 2px)",
          backgroundSize: "90px 90px"
        }}></div>
        {/* Enhanced data stream lines */}
        <div className="absolute top-0 left-1/5 h-full w-px bg-teal-400 opacity-25 animate-pulse"></div>
        <div className="absolute top-0 right-1/5 h-full w-px bg-pink-500 opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 h-full w-px bg-purple-400 opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Enhanced moving data particles */}
      <div className="absolute left-1/5 w-2 h-2 bg-teal-400 rounded-full" style={{ animation: "dataStream 14s linear infinite", top: "5%" }}></div>
      <div className="absolute right-1/5 w-2 h-2 bg-pink-500 rounded-full" style={{ animation: "dataStream 18s linear infinite", top: "15%" }}></div>
      <div className="absolute left-2/3 w-1.5 h-1.5 bg-purple-400 rounded-full" style={{ animation: "dataStream 12s linear infinite", top: "25%" }}></div>
      
      {/* Enhanced glitch overlay effect */}
      {glitchEffect && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-teal-400 opacity-8 animate-pulse"></div>
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-purple-500 opacity-70" style={{ animation: "glitchFlicker 0.1s linear infinite" }}></div>
          <div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-pink-500 opacity-60" style={{ animation: "glitchFlicker 0.12s linear infinite reverse" }}></div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Enhanced neural interface header with scanning effects */}
        <div className={`mb-10 relative ${activeScanLine === 'header-scan' ? 'bg-teal-900 bg-opacity-5' : ''} transition-all duration-700`}>
          {/* Header scan effect */}
          {activeScanLine === 'header-scan' && (
            <div className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: "linear-gradient(to right, transparent 20%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.5) 50%, rgba(20, 184, 166, 0.3) 52%, transparent 80%)",
                animation: "headerScan 3s ease-in-out infinite"
              }}></div>
          )}

          <div className="flex items-center gap-4">
            <div 
              className="bg-teal-900 bg-opacity-30 px-3 py-1 border-l-2 border-teal-400 flex items-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              <div className="w-2 h-2 bg-teal-400 mr-2 animate-pulse"></div>
              <span className="text-teal-400 font-mono text-xs">COMMUNICATION.sys</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-teal-400 uppercase tracking-wider flex items-center">
              <span role="img" aria-label="mail" className="mr-2">📫</span>
              CONTACT_INTERFACE
            </h2>
            <div className="h-px bg-teal-400 flex-grow opacity-30"></div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text-gray-400 font-mono text-sm">
              // secure_channel_request // communication_protocol // v1.7.2
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="text-gray-400">COMM_LINK: <span className={`font-bold ${
                commLinkStatus === 'STABLE' ? 'text-green-400' :
                commLinkStatus === 'OPTIMAL' ? 'text-cyan-400' :
                commLinkStatus === 'ENHANCED' ? 'text-purple-400' : 'text-pink-400'
              }`}>{commLinkStatus}</span></div>
              <div className="text-gray-400">ENCRYPTION: <span className="text-teal-400">{encryptionLevel}%</span></div>
              <div className="text-gray-400">INTEGRITY: <span className="text-green-400">{dataIntegrity}%</span></div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveSection('main')}
            className={`whitespace-nowrap px-4 py-2 font-mono text-sm border-t-2 ${activeSection === 'main' ? 'text-teal-400 border-teal-400 bg-teal-900 bg-opacity-10' : 'text-gray-400 border-gray-700 hover:text-teal-400 hover:border-teal-400'} transition-colors`}
          >
            MAIN_CONTACT
          </button>
          <button
            onClick={() => setActiveSection('find')}
            className={`whitespace-nowrap px-4 py-2 font-mono text-sm border-t-2 ${activeSection === 'find' ? 'text-pink-500 border-pink-500 bg-pink-900 bg-opacity-10' : 'text-gray-400 border-gray-700 hover:text-pink-500 hover:border-pink-500'} transition-colors`}
          >
            NETWORK_VECTORS
          </button>
          <button
            onClick={() => setActiveSection('chat')}
            className={`whitespace-nowrap px-4 py-2 font-mono text-sm border-t-2 ${activeSection === 'chat' ? 'text-blue-400 border-blue-400 bg-blue-900 bg-opacity-10' : 'text-gray-400 border-gray-700 hover:text-blue-400 hover:border-blue-400'} transition-colors`}
          >
            CHAT_REQUEST
          </button>
        </div>

        {/* Main Contact Section */}
        {activeSection === 'main' && (
          <div 
            className={`bg-gray-800 p-6 border-l-2 relative ${activeScanLine === 'contact-scan' ? 'border-teal-400 shadow-lg shadow-teal-400/20' : 'border-teal-400'} transition-all duration-700`}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
          >
            {/* Contact scan effect */}
            {activeScanLine === 'contact-scan' && (
              <div className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: "linear-gradient(to bottom, transparent 25%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.5) 50%, rgba(20, 184, 166, 0.3) 52%, transparent 75%)",
                  animation: "contactScan 4s ease-in-out infinite"
                }}></div>
            )}
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gray-900 border border-teal-400 flex items-center justify-center mr-4 text-xl">
                👉
              </div>
              <div>
                <p className="text-gray-300 font-mono">
                  If you want to establish neural link with void.dev you can initiate contact protocols 
                  <a href="/contact" className="text-teal-400 ml-1 hover:underline">here</a>
                </p>
              </div>
            </div>
            
            {/* Contact form or additional information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-4 border border-gray-700">
                <h3 className="text-teal-400 font-mono mb-4 text-sm uppercase">Direct Communication</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-mono">
                    <div className="w-4 h-4 bg-teal-400 bg-opacity-20 flex items-center justify-center mr-2">
                      <div className="w-1 h-1 bg-teal-400"></div>
                    </div>
                    <span className="text-gray-300">void.dev@neural.link</span>
                  </div>
                  <div className="flex items-center text-sm font-mono">
                    <div className="w-4 h-4 bg-teal-400 bg-opacity-20 flex items-center justify-center mr-2">
                      <div className="w-1 h-1 bg-teal-400"></div>
                    </div>
                    <span className="text-gray-300">@void_dev_neural</span>
                  </div>
                  <div className="flex items-center text-sm font-mono">
                    <div className="w-4 h-4 bg-teal-400 bg-opacity-20 flex items-center justify-center mr-2">
                      <div className="w-1 h-1 bg-teal-400"></div>
                    </div>
                    <span className="text-gray-300">Neural interface portal</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 border border-gray-700">
                <h3 className="text-teal-400 font-mono mb-4 text-sm uppercase">Response Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">RESPONSE TIME</span>
                      <span className="text-teal-400">24-48h</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700">
                      <div className="h-full bg-teal-400" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">AVAILABILITY</span>
                      <span className="text-teal-400">ACTIVE</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700">
                      <div className="h-full bg-teal-400" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action button */}
            <div className="mt-8 text-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-teal-400 text-black font-mono font-bold text-sm hover:bg-teal-300 transition-colors"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                INITIALIZE_CONTACT_SEQUENCE
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Tech corner accents */}
            <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
              <div className="absolute bottom-0 left-0 w-8 h-px bg-teal-400"></div>
              <div className="absolute bottom-0 left-0 w-px h-8 bg-teal-400"></div>
            </div>
          </div>
        )}
        
        {/* Find Me Around The Web Section */}
        {activeSection === 'find' && (
          <div 
            className={`bg-gray-800 p-6 border-l-2 relative ${activeScanLine === 'network-scan' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-pink-500'} transition-all duration-700`}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
          >
            {/* Network scan effect */}
            {activeScanLine === 'network-scan' && (
              <div className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: "linear-gradient(to right, transparent 20%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 80%)",
                  animation: "networkScan 4s ease-in-out infinite"
                }}></div>
            )}

            <h3 className="text-pink-500 font-mono text-lg mb-6 flex items-center">
              <span role="img" aria-label="world" className="mr-2">🌐</span>
              NEURAL_NETWORK_ACCESS_POINTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {findMeLocations.map((location, index) => (
                <a 
                  href={location.url}
                  key={index}
                  className="bg-gray-900 p-4 border border-gray-700 hover:border-pink-500 transition-colors group relative"
                  style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}
                >
                  {/* Threat level indicator */}
                  <div className="absolute top-2 right-2 flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      location.threat === 'LOW' ? 'bg-green-400' :
                      location.threat === 'MEDIUM' ? 'bg-yellow-400' :
                      location.threat === 'HIGH' ? 'bg-orange-400' : 'bg-red-400'
                    }`}></div>
                    <span className="text-xs font-mono text-gray-500">{location.threat}</span>
                  </div>

                  <div className="flex">
                    <div className="w-12 h-12 bg-gray-800 border border-pink-500 flex items-center justify-center mr-4 text-xl group-hover:border-pink-400 transition-colors">
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-pink-500 font-mono font-bold mb-1 group-hover:text-pink-400 transition-colors">{location.platform}</h4>
                      <p className="text-gray-400 text-sm font-mono leading-tight mb-2">{location.description}</p>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-gray-500">ICE: <span className="text-cyan-400">{location.ice}</span></span>
                        <span className={`${
                          location.threat === 'LOW' ? 'text-green-400' :
                          location.threat === 'MEDIUM' ? 'text-yellow-400' :
                          location.threat === 'HIGH' ? 'text-orange-400' : 'text-red-400'
                        }`}>{location.threat}_THREAT</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced connection scanner animation */}
                  <div className="w-full h-px bg-gray-800 mt-4 relative overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 w-10 h-px bg-pink-500 opacity-50"
                      style={{ animation: "scanRight 3s ease-in-out infinite" }}
                    ></div>
                  </div>

                  {/* Neural activity on hover */}
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                </a>
              ))}
            </div>
            
            {/* Network status */}
            <div className="flex justify-between items-center bg-gray-900 p-4 border border-gray-700">
              <div className="flex items-center font-mono text-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-400">NETWORK_STATUS:</span>
                <span className="text-gray-300 ml-2">ONLINE</span>
              </div>
              <div className="text-gray-400 font-mono text-xs">
                UPTIME: 99.8%
              </div>
            </div>
            
            {/* Tech corner accents */}
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
              <div className="absolute top-0 right-0 w-8 h-px bg-pink-500"></div>
              <div className="absolute top-0 right-0 w-px h-8 bg-pink-500"></div>
            </div>
          </div>
        )}
        
        {/* Wanna Chat Section */}
        {activeSection === 'chat' && (
          <div 
            className={`bg-gray-800 p-6 border-l-2 relative ${activeScanLine === 'chat-scan' ? 'border-blue-400 shadow-lg shadow-blue-400/20' : 'border-blue-400'} transition-all duration-700`}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
          >
            {/* Chat scan effect */}
            {activeScanLine === 'chat-scan' && (
              <div className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: "linear-gradient(to bottom, transparent 25%, rgba(59, 130, 246, 0.3) 48%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.3) 52%, transparent 75%)",
                  animation: "chatScan 4s ease-in-out infinite"
                }}></div>
            )}

            <h3 className="text-blue-400 font-mono text-lg mb-6 flex items-center">
              <span role="img" aria-label="brain" className="mr-2">🧠</span>
              NEURAL_CONVERSATION_PROTOCOLS
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center bg-gray-900 p-4 border border-gray-700" style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}>
                <div className="w-10 h-10 bg-gray-800 border border-blue-400 flex items-center justify-center mr-4 text-xl">
                  🌐
                </div>
                <p className="text-gray-300 font-mono">
                  Initiate quantum-encrypted neural link via <a href="https://twitter.com/danielp_johnson" className="text-blue-400 hover:underline font-bold">@void_dev_neural</a> for the following data exchange protocols:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chatTopics.map((topic, index) => (
                <div 
                  key={index}
                  className={`bg-gray-900 p-4 border ${hoverTopic === topic.id ? `border-${topic.color === 'yellow' ? 'yellow-400' : getColorClass(topic.color, 'border').replace('border-', '')}` : 'border-gray-700'} relative group`}
                  onMouseEnter={() => setHoverTopic(topic.id)}
                  onMouseLeave={() => setHoverTopic(null)}
                >
                  <h4 className={`font-mono font-bold mb-2 ${getColorClass(topic.color, 'text')}`}>{topic.title}</h4>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">{topic.description}</p>
                  
                  {/* Hover scanner effect */}
                  {hoverTopic === topic.id && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `repeating-linear-gradient(90deg, transparent, transparent 10px, ${getColorClass(topic.color, 'bg').replace('bg-', 'rgba(')} 10px, ${getColorClass(topic.color, 'bg').replace('bg-', 'rgba(')} 11px, transparent 11px, transparent 20px)`,
                        opacity: 0.05
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Tech corner accents */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-30">
              <div className="absolute bottom-0 right-0 w-8 h-px bg-blue-400"></div>
              <div className="absolute bottom-0 right-0 w-px h-8 bg-blue-400"></div>
            </div>
          </div>
        )}
        
        {/* Tech footer pulse line */}
        <div className="mt-12 relative h-px bg-gray-700">
          <div className="absolute left-0 top-0 w-1/3 h-px bg-teal-400"></div>
          <div className="absolute right-0 top-0 w-1/3 h-px bg-pink-500"></div>
          <div className="absolute left-1/3 -top-1 w-2 h-2 bg-teal-400 rounded-full" style={{ animation: "pulse 2s infinite" }}></div>
          <div className="absolute right-1/3 -top-1 w-2 h-2 bg-pink-500 rounded-full" style={{ animation: "pulse 3s infinite" }}></div>
        </div>
      </div>
      
      {/* Complete cyberpunk neural interface animations */}
      <style jsx>{`
        @keyframes dataStream {
          0% { 
            transform: translateY(-100%);
            opacity: 0.2;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% { 
            transform: translateY(1000%);
            opacity: 0.2;
          }
        }
        
        @keyframes scanRight {
          0%, 100% { 
            transform: translateX(-100%);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(100%);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.5); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        @keyframes headerScan {
          0% {
            background: linear-gradient(to right, transparent 20%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.5) 50%, rgba(20, 184, 166, 0.3) 52%, transparent 80%);
            transform: translateX(-100%);
            opacity: 0.4;
          }
          50% {
            background: linear-gradient(to right, transparent 10%, rgba(20, 184, 166, 0.5) 45%, rgba(20, 184, 166, 0.9) 50%, rgba(20, 184, 166, 0.5) 55%, transparent 90%);
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            background: linear-gradient(to right, transparent 20%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.5) 50%, rgba(20, 184, 166, 0.3) 52%, transparent 80%);
            transform: translateX(100%);
            opacity: 0.4;
          }
        }

        @keyframes contactScan {
          0% {
            background: linear-gradient(to bottom, transparent 25%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.5) 50%, rgba(20, 184, 166, 0.3) 52%, transparent 75%);
            transform: translateY(-100%);
          }
          50% {
            background: linear-gradient(to bottom, transparent 15%, rgba(20, 184, 166, 0.5) 45%, rgba(20, 184, 166, 0.8) 50%, rgba(20, 184, 166, 0.5) 55%, transparent 85%);
            transform: translateY(0%);
          }
          100% {
            background: linear-gradient(to bottom, transparent 25%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.5) 50%, rgba(20, 184, 166, 0.3) 52%, transparent 75%);
            transform: translateY(100%);
          }
        }

        @keyframes networkScan {
          0% {
            background: linear-gradient(to right, transparent 20%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 80%);
            transform: translateX(-100%);
          }
          50% {
            background: linear-gradient(to right, transparent 10%, rgba(236, 72, 153, 0.5) 45%, rgba(236, 72, 153, 0.8) 50%, rgba(236, 72, 153, 0.5) 55%, transparent 90%);
            transform: translateX(0%);
          }
          100% {
            background: linear-gradient(to right, transparent 20%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 80%);
            transform: translateX(100%);
          }
        }

        @keyframes chatScan {
          0% {
            background: linear-gradient(to bottom, transparent 25%, rgba(59, 130, 246, 0.3) 48%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.3) 52%, transparent 75%);
            transform: translateY(-100%);
          }
          50% {
            background: linear-gradient(to bottom, transparent 15%, rgba(59, 130, 246, 0.5) 45%, rgba(59, 130, 246, 0.8) 50%, rgba(59, 130, 246, 0.5) 55%, transparent 85%);
            transform: translateY(0%);
          }
          100% {
            background: linear-gradient(to bottom, transparent 25%, rgba(59, 130, 246, 0.3) 48%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.3) 52%, transparent 75%);
            transform: translateY(100%);
          }
        }
        
        @keyframes glitchFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 0.99;
            transform: translate3d(0, 0, 0) skewX(0deg);
          }
          20%, 24% {
            opacity: 0.4;
            transform: translate3d(-2px, 0, 0) skewX(-0.5deg);
          }
          55% {
            opacity: 0.6;
            transform: translate3d(2px, 0, 0) skewX(0.5deg);
          }
        }

        @keyframes neuralPulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(20, 184, 166, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 15px rgba(20, 184, 166, 0.8), 0 0 25px rgba(139, 92, 246, 0.3);
            transform: scale(1.02);
          }
        }
        
        @keyframes matrixFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        /* Utility animations */
        .animate-neural-pulse {
          animation: neuralPulse 2s ease-in-out infinite;
        }
        
        .animate-matrix-flow {
          animation: matrixFlow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CyberpunkContact;