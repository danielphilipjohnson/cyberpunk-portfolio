"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

export default function CyberpunkIntroduction() {
	const [typedText, setTypedText] = useState("");
	const [currentLineIndex, setCurrentLineIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const [showCursor, setShowCursor] = useState(true);

	// Personal config terminal content - different from hero
	const introLines = [
		"<span class='text-cyan-400'>CONFIG</span>: Loading personal data...",
		"<span class='text-cyan-400'>PROFILE</span>: Accessing engineer profile...",
		"<span class='text-green-400'>EXPERIENCE</span>: 5+ years development cycle",
		"<span class='text-pink-500'>SPECIALIZATION</span>: Frontend Architecture & DX",
		"<span class='text-purple-400'>CURRENT_PROJECT</span>: Fintech Infrastructure",
		"<span class='text-yellow-400'>MISSION_LEVEL</span>: Senior Engineer Protocol",
		"<span class='text-lime-400'>ACCESS_GRANTED</span>: Personal data ready ✓"
	];

	// Create a typing effect
	useEffect(() => {
		if (!isTyping) return;

		if (currentLineIndex < introLines.length) {
			const line = introLines[currentLineIndex];
			const timeout = setTimeout(() => {
				// Type each character one by one
				if (typedText.length < line.length) {
					setTypedText(line.substring(0, typedText.length + 1));
				} else {
					// Move to next line
					setTimeout(() => {
						setCurrentLineIndex(currentLineIndex + 1);
						setTypedText("");
					}, 300);
				}
			}, 30);

			return () => clearTimeout(timeout);
		} else {
			setIsTyping(false);
		}
	}, [typedText, currentLineIndex, isTyping]);

	// Blinking cursor effect
	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor(prev => !prev);
		}, 500);

		return () => clearInterval(cursorInterval);
	}, []);

	return (
		<section className="py-12 relative overflow-hidden">
			{/* Tech background elements - using grid variant */}
			<div className="absolute inset-0 z-0">
				<CyberpunkSectionDecor variant="grid" intensity="high" />
			</div>

			<div className="max-w-5xl mx-auto px-8 relative z-10">
				{/* Terminal Header */}
				<div className="mb-8">
					<div className="flex items-center">
						<div
							className="bg-gray-800 border-l-4 border-cyan-400 px-4 py-1 inline-flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
							<span className="text-cyan-400 font-mono text-sm">PERSONAL.CONFIG</span>
						</div>
						<div className="h-px bg-cyan-400 flex-grow ml-4 opacity-30"></div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-8">
					{/* Left column - terminal area */}
					<div className="w-full md:w-1/2">
						{/* Terminal style interface */}
						<div
							className="bg-gray-900 border border-gray-700 p-4 mb-6 h-64 overflow-hidden"
							style={{ borderRadius: "4px" }}
						>
							<div className="font-mono text-gray-300 text-sm h-full overflow-y-auto terminal-content">
								{/* Display all completed lines */}
								{introLines.slice(0, currentLineIndex).map((line, index) => (
									<div key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: line }}></div>
								))}

								{/* Current typing line */}
								{isTyping && currentLineIndex < introLines.length && (
									<div dangerouslySetInnerHTML={{ __html: typedText }}></div>
								)}

								{/* Blinking cursor */}
								{showCursor && isTyping && (
									<span className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"></span>
								)}

								{/* Display full content after typing is complete */}
								{!isTyping && (
									<div className="mt-6 pb-2">
										<div className="text-pink-500 font-mono text-sm">// MISSION STATEMENT:</div>
										<div className="text-cyan-400 font-mono text-lg mt-2">
											NETRUNNER.exe executing senior_clearance.protocol
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Resume download */}
						<div className="mb-6">
							<a
								href="/cv/Daniel_Philip_Johnson.pdf"
								download
								className="group relative inline-flex items-center px-5 py-3 bg-gray-800 text-cyan-400 font-mono text-sm border border-cyan-400 hover:bg-cyan-900 hover:bg-opacity-20 transition-colors"
								style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
							>
								<div className="flex items-center">
									<span className="mr-2 text-lg">📝</span>
									<span>DOWNLOAD_RESUME.pdf</span>
								</div>

								{/* Hover animation */}
								<div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
							</a>
						</div>

						{/* About link */}
						<div>
							<Link
								href="/about"
								className="group relative inline-flex items-center px-5 py-3 bg-gray-800 text-pink-500 font-mono text-sm border border-pink-500 hover:bg-pink-900 hover:bg-opacity-20 transition-colors"
								style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
							>
								<div className="flex items-center">
									<span className="mr-2">👉</span>
									<span>ACCESS_PERSONAL_DATA</span>
								</div>

								{/* Hover animation */}
								<div className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></div>
							</Link>
						</div>
					</div>

					{/* Right column - bio text */}
					<div className="w-full md:w-1/2">
						<div
							className="bg-gray-900 border border-gray-700 p-6 relative"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							{/* Bio info with cyberpunk styling */}
							<div className="prose prose-sm prose-cyan max-w-none font-mono text-gray-300">
									<p>
										Operating as a <span className="text-cyan-400 font-bold">NETRUNNER.ENGINEER</span> with <span className="text-cyan-400 font-bold">2+ cycles</span> in the digital matrix, I'm executing a protocol to achieve <span className="text-cyan-400 font-bold">SENIOR_OPERATIVE</span> clearance. My background in startup data-fortresses has honed my ability to architect rapid deployment systems that jack client visions directly into the Net.
									</p>

									<p className="mt-4">
										Currently running point on <span className="text-pink-500 font-bold">PROJECT_GENESIS</span> at <span className="text-pink-500 font-bold">Nexus_Dynamics</span>, deploying neural architecture via Nuxt.3, Node.js, BigCommerce APIs, and ELK surveillance stack for seamless cloud migration to Google's infrastructure backbone.
									</p>

									<p className="mt-4">
										<span className="text-pink-500">CYBERWARE_ARSENAL:</span>
									</p>

									<div className="flex flex-wrap gap-2 mt-2">
										{['Go.exe', 'JavaScript.dll', 'TypeScript.sys', 'Vue.3_Neural', 'Nuxt.3_Matrix', 'Tailwind.css', 'Google_Cloud.net', 'Firebase.db'].map((tech, index) => (
										<div
											key={index}
											className="px-2 py-1 text-xs bg-gray-800 text-lime-400 border border-lime-900"
											style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
										>
											{tech}
										</div>
									))}
								</div>
							</div>

							{/* Tech decoration elements */}
							<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400 opacity-80"></div>
							<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400 opacity-80"></div>
							<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400 opacity-80"></div>

							{/* System details */}
							<div
								className="absolute -bottom-6 right-8 bg-gray-900 px-3 py-1 text-xs font-mono text-gray-500 border-b border-gray-700"
							>
								<div className="flex items-center">
									<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
									<span>SYSTEM OPERATIONAL</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Cyberpunk border */}
			<div className="max-w-5xl mx-auto px-8 mt-12 relative z-10">
				<div className="border-b border-cyan-800 opacity-50 relative">
					<div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
					<div className="absolute bottom-0 right-0 w-1/5 h-1 bg-gradient-to-l from-pink-500 to-transparent"></div>
				</div>
			</div>

			{/* CSS for animations */}
			<style jsx>{`
        .terminal-content::-webkit-scrollbar {
          width: 4px;
        }
        
        .terminal-content::-webkit-scrollbar-track {
          background: #111;
        }
        
        .terminal-content::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
        }
        
        .terminal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.8);
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
		</section>
	);
}