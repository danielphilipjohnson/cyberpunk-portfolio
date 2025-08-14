"use client"

import React, { useState, useEffect, useMemo } from 'react';

interface BootSequenceProps {
  onBootComplete: () => void;
}

export default function CyberpunkBootSequence({ onBootComplete }: BootSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Boot sequence steps with realistic netrunner startup messages
  const bootSteps = useMemo(() => [
    {
      lines: [
        "INITIALIZING NEURAL INTERFACE...",
        "CONNECTING TO NIGHT CITY NETWORK...",
        "LOADING NETRUNNER PROTOCOLS...",
      ],
      delay: 800,
      color: "text-cyan-400"
    },
    {
      lines: [
        "",
        "[ OK ] NEURAL JACK CONNECTED",
        "[ OK ] ICE WALL STATUS: ACTIVE", 
        "[ OK ] ENCRYPTION PROTOCOLS LOADED",
        "[ OK ] BREACH TOOLS INITIALIZED",
      ],
      delay: 600,
      color: "text-green-400"
    },
    {
      lines: [
        "",
        "SCANNING AVAILABLE SYSTEMS...",
        "CORPO_DATABASE.exe .............. [FOUND]",
        "NEURAL_IMPLANTS.sys ............ [LOADED]",
        "CYBERWARE_MATRIX.dll ........... [ACTIVE]",
        "BEHAVIORAL_CONTROL.bin ......... [SECURE]",
      ],
      delay: 500,
      color: "text-purple-400"
    },
    {
      lines: [
        "",
        "WARNING: ENTERING NIGHT CITY NETWORK",
        "SECURITY LEVEL: MAXIMUM",
        "IDENTITY: void.dev",
        "STATUS: NETRUNNER OPERATIVE",
        "CLEARANCE: ARASAKA_CLASSIFIED",
      ],
      delay: 700,
      color: "text-yellow-400"
    },
    {
      lines: [
        "",
        "ACTIVATING PERSONALITY CONSTRUCT...",
        "LOADING STREET CRED DATABASE...",
        "ESTABLISHING SECURE CHANNELS...",
        "",
        "SYSTEM READY",
        "WELCOME TO NIGHT CITY, CHOOM.",
      ],
      delay: 600,
      color: "text-cyan-400"
    }
  ], []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Main boot sequence logic
  useEffect(() => {
    if (currentStep >= bootSteps.length) {
      // Boot sequence complete
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onBootComplete();
        }, 1000);
      }, 1500);
      return;
    }

    const currentStepData = bootSteps[currentStep];
    
    if (currentLine >= currentStepData.lines.length) {
      // Move to next step
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setCurrentLine(0);
      }, currentStepData.delay);
      return;
    }

    // Type out current line
    const line = currentStepData.lines[currentLine];
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayText(prev => {
          const newText = [...prev];
          const lineIndex = prev.length - 1;
          
          if (lineIndex < 0 || prev[lineIndex]?.endsWith('\n')) {
            newText.push(line.substring(0, charIndex));
          } else {
            newText[lineIndex] = line.substring(0, charIndex);
          }
          
          return newText;
        });
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Add line break and move to next line
        setDisplayText(prev => {
          const newText = [...prev];
          newText[newText.length - 1] = line + '\n';
          return newText;
        });
        
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
        }, 100);
      }
    }, Math.random() * 30 + 20); // Variable typing speed for realism

    return () => clearInterval(typingInterval);
  }, [currentStep, currentLine, onBootComplete, bootSteps]);

  // Get current step color
  const getCurrentColor = () => {
    if (currentStep < bootSteps.length) {
      return bootSteps[currentStep].color;
    }
    return "text-cyan-400";
  };

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 opacity-0">
        <div className="text-cyan-400 font-mono text-2xl animate-pulse">
          NEURAL LINK ESTABLISHED
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}></div>
        </div>
        
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: "linear-gradient(transparent 50%, rgba(6, 182, 212, 0.03) 50%)",
            backgroundSize: "100% 4px"
          }}></div>
        </div>

        {/* Data streams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-400 opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-purple-400 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-8">
        <div className="flex items-center justify-between border-b border-cyan-900 pb-4 mb-6">
          <div>
            <h1 className="text-cyan-400 font-mono text-xl font-bold">ARASAKA NEURAL OS v2077.3.14</h1>
            <p className="text-cyan-600 font-mono text-sm">Netrunner Interface Protocol</p>
          </div>
          <div className="text-right">
            <div className="text-cyan-400 font-mono text-sm">NODE: NC_CITY_01</div>
            <div className="text-cyan-600 font-mono text-xs">SECURE_CHANNEL: ACTIVE</div>
          </div>
        </div>
      </div>

      {/* Terminal content */}
      <div className="flex-1 px-8 pb-8 relative z-10">
        <div className="bg-gray-900 bg-opacity-80 border border-cyan-900 h-full p-6 font-mono text-sm overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-400 ml-4">NEURAL_BOOT_SEQUENCE.exe</span>
            </div>
            <div className="text-gray-500 text-xs">PID: 2077</div>
          </div>

          {/* Boot text content */}
          <div className="space-y-0">
            {displayText.map((line, index) => (
              <div key={index} className={`${getCurrentColor()} whitespace-pre-line`}>
                {line}
              </div>
            ))}
            {/* Cursor */}
            <span className={`${getCurrentColor()} ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              █
            </span>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-400 text-xs">BOOT_PROGRESS</span>
              <span className="text-cyan-400 text-xs">
                {Math.min(100, Math.round(((currentStep + 1) / bootSteps.length) * 100))}%
              </span>
            </div>
            <div className="w-full bg-gray-800 h-2 border border-cyan-900">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500"
                style={{ 
                  width: `${Math.min(100, Math.round(((currentStep + 1) / bootSteps.length) * 100))}%` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400 opacity-50"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400 opacity-50"></div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mix-blend-multiply opacity-10">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -skew-x-12"></div>
        </div>
      </div>
    </div>
  );
}
