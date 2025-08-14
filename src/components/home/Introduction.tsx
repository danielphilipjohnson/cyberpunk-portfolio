"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CyberpunkIntroduction() {
	const [typedText, setTypedText] = useState("");
	const [currentLineIndex, setCurrentLineIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const [showCursor, setShowCursor] = useState(true);

	// Text to be typed with cyberpunk styling
	const introLines = [
		"<span class='text-cyan-400'>SYSTEM</span>: Initializing identity protocol...",
		"<span class='text-cyan-400'>SYSTEM</span>: Scanning neural patterns...",
		"<span class='text-cyan-400'>SYSTEM</span>: Identity confirmed ✓",
		"<span class='text-pink-500'>CODENAME</span>: Daniel Philip Johnson",
		"<span class='text-green-400'>STATUS</span>: Full-Stack Engineer [ACTIVE]",
		"<span class='text-lime-400'>LOCATION</span>: Cornwall [REMOTE UPLINK]"
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
		<section className="py-12 bg-gray-900 relative overflow-hidden">
			{/* Tech background elements */}
			<div className="absolute inset-0 z-0">
				{/* Grid lines */}
				<div
					className="absolute inset-0 opacity-5"
					style={{
						backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
						backgroundSize: "20px 20px"
					}}
				></div>

				{/* Radial circles */}
				<div
					className="absolute inset-0 opacity-5"
					style={{
						backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
						backgroundPosition: "0 0"
					}}
				></div>

				{/* Tech decoration elements */}
				<div className="absolute top-0 left-0 w-40 h-40 border-t border-l border-cyan-800 opacity-30"></div>
				<div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-cyan-800 opacity-30"></div>
				<div className="absolute bottom-0 left-0 w-40 h-40 border-b border-l border-cyan-800 opacity-30"></div>
				<div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-cyan-800 opacity-30"></div>
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
											Full-Stack Engineer on mission to senior level
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
									As a driven <span className="text-cyan-400 font-bold">Full-Stack Engineer</span> with over <span className="text-cyan-400 font-bold">2+ years</span> of coding experience, I am on a mission to elevate my skills to the level of a <span className="text-cyan-400 font-bold">senior engineer</span>. With a background in startup environments, I thrive on the challenge of building rapid greenfield projects that bring clients' visions to market as quickly as possible.
								</p>

								<p className="mt-4">
									Currently, I am leading a <span className="text-pink-500 font-bold">Greenfield project</span> at <span className="text-pink-500 font-bold">Hiyield</span>, where I am utilizing my expertise in Nuxt 3, Node, Bigcommerce and the Elkstack to migrate the project to Google Cloud.
								</p>

								<p className="mt-4">
									My tech stack includes:
								</p>

								<div className="flex flex-wrap gap-2 mt-2">
									{['Go', 'JavaScript', 'TypeScript', 'Vue 3', 'Nuxt 3', 'Tailwind', 'Google Cloud', 'Firebase'].map((tech, index) => (
										<div
											key={index}
											className="px-2 py-1 text-xs bg-gray-800 text-cyan-400 border border-cyan-900"
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