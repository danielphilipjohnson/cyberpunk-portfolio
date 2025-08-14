import React, { useState, useEffect } from 'react';

export const CyberpunkContact = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [hoverTopic, setHoverTopic] = useState(null);
  const [glitchEffect, setGlitchEffect] = useState(false);
  
  // Create periodic glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 10000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Topics for chat with hover effects
  const chatTopics = [
    {
      title: "ReactJS",
      description: "I would love to hear about your projects, or help you find helpful resources?",
      color: "cyan",
      id: "react"
    },
    {
      title: "JS",
      description: "If you require any resources, course suggestions or app ideas let me know!",
      color: "yellow",
      id: "js"
    },
    {
      title: "HTML/CSS",
      description: "If you want someone to work with on a project and I am free, then I will happily collaborate.",
      color: "purple",
      id: "html"
    },
    {
      title: "Nuxt/Vue",
      description: "I've recently started with Nuxt and Vue.js I would love to share your wisdom and knowledge",
      color: "green",
      id: "vue"
    },
    {
      title: "Psychology",
      description: "I love to talk about this topic feel free to ask me any questions.",
      color: "pink",
      id: "psych"
    },
    {
      title: "Neuroscience",
      description: "My chosen topics are Default Mode Network, Perceptual Priming, Implicit Memory and Mental Imagery",
      color: "blue",
      id: "neuro"
    },
    {
      title: "Have any question",
      description: "Contact me here and I will try to respond quickly",
      color: "cyan",
      id: "question"
    },
    {
      title: "Other",
      description: "Talk to me about your favourite video game, I causally play Fortnite or what you are currently watching? Suggestions always appreciated!",
      color: "pink",
      id: "other"
    }
  ];
  
  // Find Me locations
  const findMeLocations = [
    {
      platform: "LinkedIn",
      description: "Sharing useful programming resources",
      icon: "💼",
      url: "#"
    },
    {
      platform: "Codepen",
      description: "Tinkering with my projects",
      icon: "🏓",
      url: "#"
    },
    {
      platform: "Instagram",
      description: "Showing my work in progress",
      icon: "📹🤳",
      url: "#"
    },
    {
      platform: "Twitter",
      description: "Chat with me about any topic",
      icon: "💬",
      url: "https://twitter.com/danielp_johnson"
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
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(20, 184, 166, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>
      
      {/* Data stream lines */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-teal-400 opacity-10"></div>
      <div className="absolute top-0 right-1/4 h-full w-px bg-pink-500 opacity-10"></div>
      
      {/* Moving data points */}
      <div 
        className="absolute left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full" 
        style={{ animation: "dataStream 15s linear infinite", top: "0%" }}
      ></div>
      <div 
        className="absolute right-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full" 
        style={{ animation: "dataStream 8s linear infinite", top: "10%" }}
      ></div>
      
      {/* Glitch effect overlay */}
      {glitchEffect && (
        <div className="absolute inset-0 bg-teal-400 bg-opacity-5 z-20 pointer-events-none"></div>
      )}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header with tech styling */}
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <div 
              className="bg-teal-900 bg-opacity-30 px-3 py-1 border-l-2 border-teal-400 flex items-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              <div className="w-2 h-2 bg-teal-400 mr-2"></div>
              <span className="text-teal-400 font-mono text-xs">COMMUNICATION.sys</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-teal-400 uppercase tracking-wider flex items-center">
              <span role="img" aria-label="mail" className="mr-2">📫</span>
              CONTACT_INTERFACE
            </h2>
            <div className="h-px bg-teal-400 flex-grow opacity-30"></div>
          </div>
          <div className="text-gray-400 font-mono text-sm mt-1">
            // secure_channel_request // communication_protocol // v1.7.2
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
            className="bg-gray-800 p-6 border-l-2 border-teal-400 relative"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
          >
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gray-900 border border-teal-400 flex items-center justify-center mr-4 text-xl">
                👉
              </div>
              <div>
                <p className="text-gray-300 font-mono">
                  If you want to talk with me you can contact me 
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
                    <span className="text-gray-300">contact@danieljohnson.com</span>
                  </div>
                  <div className="flex items-center text-sm font-mono">
                    <div className="w-4 h-4 bg-teal-400 bg-opacity-20 flex items-center justify-center mr-2">
                      <div className="w-1 h-1 bg-teal-400"></div>
                    </div>
                    <span className="text-gray-300">@danielp_johnson</span>
                  </div>
                  <div className="flex items-center text-sm font-mono">
                    <div className="w-4 h-4 bg-teal-400 bg-opacity-20 flex items-center justify-center mr-2">
                      <div className="w-1 h-1 bg-teal-400"></div>
                    </div>
                    <span className="text-gray-300">Form on my contact page</span>
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
            className="bg-gray-800 p-6 border-l-2 border-pink-500 relative"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
          >
            <h3 className="text-pink-500 font-mono text-lg mb-6 flex items-center">
              <span role="img" aria-label="world" className="mr-2">🌎</span>
              NETWORK_LOCATION_SCAN
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {findMeLocations.map((location, index) => (
                <a 
                  href={location.url}
                  key={index}
                  className="bg-gray-900 p-4 border border-gray-700 hover:border-pink-500 transition-colors group"
                >
                  <div className="flex">
                    <div className="w-12 h-12 bg-gray-800 border border-pink-500 flex items-center justify-center mr-4 text-xl">
                      {location.icon}
                    </div>
                    <div>
                      <h4 className="text-pink-500 font-mono font-bold mb-1 group-hover:text-pink-400 transition-colors">{location.platform}</h4>
                      <p className="text-gray-400 text-sm">{location.description}</p>
                    </div>
                  </div>
                  
                  {/* Connection scanner animation */}
                  <div className="w-full h-px bg-gray-800 mt-4 relative overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 w-10 h-px bg-pink-500 opacity-50"
                      style={{ animation: "scanRight 3s ease-in-out infinite" }}
                    ></div>
                  </div>
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
            className="bg-gray-800 p-6 border-l-2 border-blue-400 relative"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
          >
            <h3 className="text-blue-400 font-mono text-lg mb-6 flex items-center">
              <span role="img" aria-label="coffee" className="mr-2">☕</span>
              CONVERSATION_TOPICS
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center bg-gray-900 p-4 border border-gray-700">
                <div className="w-10 h-10 bg-gray-800 border border-blue-400 flex items-center justify-center mr-4 text-xl">
                  💬
                </div>
                <p className="text-gray-300 font-mono">
                  @ me on <a href="https://twitter.com/danielp_johnson" className="text-blue-400 hover:underline">Twitter</a> about any of the following topics!
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
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes dataStream {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        
        @keyframes scanRight {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkContact;