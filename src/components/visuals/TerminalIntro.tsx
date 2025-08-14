"use client"

import { useEffect, useState } from "react";

export default function TerminalIntro() {
  const introLines = [
    "<span class='text-cyan-400'>SYSTEM</span>: Initializing identity protocol...",
    "<span class='text-cyan-400'>SYSTEM</span>: Scanning neural patterns...",
    "<span class='text-cyan-400'>SYSTEM</span>: Identity confirmed ✓",
    "<span class='text-pink-500'>CODENAME</span>: Daniel Philip Johnson",
    "<span class='text-green-400'>STATUS</span>: Full-Stack Engineer [ACTIVE]",
    "<span class='text-lime-400'>LOCATION</span>: Cornwall [REMOTE UPLINK]",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    if (currentLineIndex < introLines.length) {
      const line = introLines[currentLineIndex];
      const timeout = setTimeout(() => {
        if (typedText.length < line.length) {
          setTypedText(line.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
            setTypedText("");
          }, 300);
        }
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, currentLineIndex, isTyping]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      className="bg-gray-900/90 border border-teal-400/50 p-4 mb-6 h-64 overflow-hidden backdrop-blur-sm"
      style={{ 
        borderRadius: "4px",
        clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)'
      }}
    >
      {/* Terminal header */}
      <div className="flex items-center mb-3 pb-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-400 font-mono">
          daniel@cyberpunk-portfolio:~$
        </div>
      </div>

      <div className="font-mono text-gray-300 text-sm h-full overflow-y-auto terminal-content">
        {introLines.slice(0, currentLineIndex).map((line, index) => (
          <div
            key={index}
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}

        {isTyping && currentLineIndex < introLines.length && (
          <div dangerouslySetInnerHTML={{ __html: typedText }} />
        )}

        {showCursor && isTyping && (
          <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle animate-pulse" />
        )}

        {!isTyping && (
          <div className="mt-6 pb-2">
            <div className="text-pink-500 font-mono text-sm">// MISSION STATEMENT:</div>
            <div className="text-cyan-400 font-mono text-lg mt-2">
              Full-Stack Engineer on mission to senior level
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
