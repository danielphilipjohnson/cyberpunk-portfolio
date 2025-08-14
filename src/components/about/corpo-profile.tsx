import React, { useState, useEffect } from 'react';

export const CyberpunkCorpoProfile = () => {
  const [hoverStat, setHoverStat] = useState<number | null>(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanningTarget, setScanningTarget] = useState<number | null>(null);

  // Corporate neural interface stats
  const neuralStats = [
    { name: "NETRUNNING", value: 92, color: "cyan", corp: "ARASAKA" },
    { name: "ICE_BREAKING", value: 88, color: "pink", corp: "MILITECH" },
    { name: "CORPO_PROTOCOLS", value: 95, color: "purple", corp: "KANG_TAO" },
    { name: "NEURAL_SYNC", value: 89, color: "yellow", corp: "ZETATECH" },
    { name: "DATA_MINING", value: 94, color: "green", corp: "BIOTECHNICA" }
  ];

  // Corporate clearance levels
  const clearanceLevels = [
    { level: "MILITECH_ALPHA", status: "ACTIVE", color: "cyan" },
    { level: "ARASAKA_TIER_7", status: "CLASSIFIED", color: "red" },
    { level: "NETWATCH_BETA", status: "SUSPENDED", color: "yellow" },
    { level: "KANG_TAO_XI", status: "ACTIVE", color: "purple" },
    { level: "BIOTECHNICA_4", status: "ACTIVE", color: "green" }
  ];

  // Create periodic glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Scanning effect
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanningTarget(Math.floor(Math.random() * 5));
      setTimeout(() => setScanningTarget(null), 2000);
    }, 6000);

    return () => clearInterval(scanInterval);
  }, []);

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Corporate Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 25%, transparent 25%)",
          backgroundSize: "60px 60px"
        }}></div>
      </div>

      {/* Glitch overlay */}
      {glitchActive && (
        <div className="absolute inset-0 bg-cyan-400 bg-opacity-5 z-20 pointer-events-none mix-blend-screen"></div>
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Corporate Header */}
        <div className="mb-12">
          <div className="bg-gray-800 border border-cyan-400 p-6 relative"
               style={{ clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)" }}>
            
            {/* Classification Banner */}
            <div className="absolute top-0 left-0 right-0 bg-red-900 bg-opacity-80 text-center py-1">
              <span className="text-red-400 font-mono text-xs font-bold tracking-wider">
                ★ TOP SECRET - MILITECH CORPO CLEARANCE REQUIRED ★
              </span>
            </div>

            <div className="mt-6">
              {/* Corpo ID Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cyan-900 border-2 border-cyan-400 flex items-center justify-center mr-4"
                       style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}>
                    <div className="text-2xl">👤</div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-mono font-bold text-cyan-400 mb-1">DANIEL &quot;VOID&quot; JOHNSON</h1>
                    <div className="text-sm font-mono text-gray-400">
                      CORPO_ID: <span className="text-cyan-400">NC-MLT-4487-VOID</span> | CLEARANCE: <span className="text-red-400">ALPHA-7</span>
                    </div>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="text-right">
                  <div className="text-green-400 font-mono text-sm mb-1 flex items-center justify-end">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    NEURAL_LINK: ACTIVE
                  </div>
                  <div className="text-cyan-400 font-mono text-xs">
                    LOCATION: NIGHT_CITY_CORP_PLAZA
                  </div>
                </div>
              </div>

              {/* Corporate Affiliation */}
              <div className="bg-gray-900 p-4 border border-purple-500 mb-6"
                   style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-purple-500 font-mono font-bold mb-2">CORPORATE AFFILIATION</h3>
                    <div className="text-gray-300 font-mono text-sm">
                      PRIMARY: <span className="text-purple-400 font-bold">HIYIELD CORP</span> - Neural Interface Division
                    </div>
                    <div className="text-gray-300 font-mono text-sm">
                      SUBSIDIARY: <span className="text-cyan-400">MILITECH</span> - Behavioral Modification Protocols
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-500 font-mono text-lg font-bold">RANK_07</div>
                    <div className="text-gray-400 font-mono text-xs">SENIOR_NETRUNNER</div>
                  </div>
                </div>
              </div>

              {/* Mission Brief */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Profile */}
                <div className="md:col-span-2">
                  <div className="bg-gray-800 border-l-4 border-cyan-400 p-6">
                    <h3 className="text-cyan-400 font-mono text-lg mb-4 flex items-center">
                      <div className="w-3 h-3 bg-cyan-400 mr-3"></div>
                      OPERATIVE_PROFILE
                    </h3>
                    
                    <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                      <span className="text-cyan-400 font-bold">Daniel &quot;Void&quot; Johnson</span> - Elite netrunner operative 
                      specializing in <span className="text-purple-400">corporate neural interface architecture</span>. 
                      Five years deep in Night City&apos;s financial sector, running ice-cold infiltration protocols 
                      and behavioral modification systems.
                    </p>
                    
                    <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                      Current assignment involves developing <span className="text-pink-500">next-generation neural 
                      jacks</span> that integrate seamlessly with corporate security systems. Specializes in 
                      zero-latency data streaming and real-time consciousness monitoring.
                    </p>

                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      Operational status: <span className="text-green-400">FULLY_NETRUNNING</span>. Corporate loyalty 
                      metrics consistently exceed <span className="text-cyan-400">92%</span>. Recommended for 
                      advanced <span className="text-yellow-400">Militech enhancement protocols</span>.
                    </p>

                    {/* Corporate Achievements */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="text-cyan-400 font-mono text-sm mb-3">RECENT_ACHIEVEMENTS:</div>
                      <ul className="space-y-2">
                        <li className="text-gray-300 font-mono text-xs flex items-center">
                          <span className="text-green-400 mr-2">▪</span>
                          Successful breach of competing corpo neural networks
                        </li>
                        <li className="text-gray-300 font-mono text-xs flex items-center">
                          <span className="text-green-400 mr-2">▪</span>
                          Implementation of zero-day ICE protection protocols
                        </li>
                        <li className="text-gray-300 font-mono text-xs flex items-center">
                          <span className="text-green-400 mr-2">▪</span>
                          Neural interface optimization: +47% efficiency increase
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Neural Interface Stats */}
                <div>
                  <div className="bg-gray-800 border-r-4 border-pink-500 p-6 h-full">
                    <h3 className="text-pink-500 font-mono text-lg mb-4 flex items-center justify-between">
                      NEURAL_METRICS
                      <div className="text-xs text-gray-500">v2077.4</div>
                    </h3>

                    <div className="space-y-4">
                      {neuralStats.map((stat, index) => (
                        <div 
                          key={index}
                          className={`relative p-3 bg-gray-900 border ${scanningTarget === index ? 'border-cyan-400 bg-cyan-900 bg-opacity-20' : 'border-gray-700'} transition-all duration-500`}
                          onMouseEnter={() => setHoverStat(index)}
                          onMouseLeave={() => setHoverStat(null)}
                        >
                          <div className="flex justify-between text-xs font-mono mb-2">
                            <span className="text-gray-400">{stat.name}</span>
                            <span className={`text-${stat.color}-400`}>{stat.value}%</span>
                          </div>
                          <div className="w-full h-1 bg-gray-700 mb-1">
                            <div 
                              className={`h-full bg-${stat.color}-400`}
                              style={{ width: `${stat.value}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 font-mono">{stat.corp}</div>
                          
                          {/* Scanning effect */}
                          {scanningTarget === index && (
                            <div className="absolute inset-0 pointer-events-none">
                              <div className="w-full h-0.5 bg-cyan-400 opacity-60"
                                   style={{ animation: "scanLine 2s ease-in-out infinite" }}></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Corporate Clearances */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="text-pink-500 font-mono text-sm mb-3">CLEARANCE_LEVELS:</div>
                      <div className="space-y-2">
                        {clearanceLevels.map((clearance, index) => (
                          <div key={index} className="flex justify-between items-center text-xs font-mono">
                            <span className="text-gray-400">{clearance.level}</span>
                            <span className={`text-${clearance.color}-400 px-2 py-1 bg-${clearance.color}-900 bg-opacity-20 border border-${clearance.color}-400`}>
                              {clearance.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes scanLine {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkCorpoProfile;
