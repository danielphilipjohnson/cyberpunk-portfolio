"use client"

import React, { useState } from "react";
import { Pencil, BookOpen, Code2, MonitorSmartphone, Paintbrush, Hammer } from "lucide-react";
import CyberpunkBorderCard from "./CyberpunkBorderCard";
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

const services = [
	{
		icon: <Code2 className="w-6 h-6" />,
		title: "NEURAL_INTERFACE.exe",
		description: "Direct cortex-to-digital interface development. Seamless user experiences that bypass conscious processing for maximum bandwidth.",
		color: "cyan",
		id: "CORP-001",
		status: "ACTIVE",
	},
	{
		icon: <MonitorSmartphone className="w-6 h-6" />,
		title: "BREACH_PROTOCOL.sys",
		description: "Security penetration testing and vulnerability assessment. Finding the weak points before your competitors do.",
		color: "green",
		id: "CORP-002",
		status: "ACTIVE",
	},
	{
		icon: <Paintbrush className="w-6 h-6" />,
		title: "CORPO_FRONTEND.dll",
		description: "High-end corporate web presence with neon aesthetics. Making your brand glow in the digital wasteland.",
		color: "pink",
		id: "CORP-003",
		status: "ACTIVE",
	},
	{
		icon: <Hammer className="w-6 h-6" />,
		title: "DATA_FORTRESS.bin",
		description: "Secure backend architecture that keeps corpo secrets locked down. Military-grade encryption for sensitive operations.",
		color: "purple",
		id: "CORP-004",
		status: "ACTIVE",
	},
	{
		icon: <BookOpen className="w-6 h-6" />,
		title: "QUICKHACK.cfg",
		description: "Rapid deployment solutions and emergency fixes. When the corpo needs it done yesterday, we deliver.",
		color: "blue",
		id: "CORP-005",
		status: "ACTIVE",
	},
	{
		icon: <Pencil className="w-6 h-6" />,
		title: "NET_ARCHITECTURE.bat",
		description: "Full-stack system design for Night City's digital infrastructure. From street-level apps to corpo mainframes.",
		color: "lime",
		id: "CORP-006",
		status: "ACTIVE",
	}
];

export default function EnhancedCyberpunkServiceGrid() {
	const [hoveredService, setHoveredService] = useState<number | null>(null);

	const getRandomPercentage = () => {
		return Math.floor(Math.random() * 30) + 70; // Random number between 70-99
	};

	return (
		<section className="relative py-16 overflow-hidden">
			{/* Tech background elements - using solid variant */}
			<div className="absolute inset-0 z-0">
				<CyberpunkSectionDecor variant="solid" intensity="low" />
			</div>

			{/* Section Header */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 mb-12">
				<div className="flex items-center mb-8">
					<div className="w-8 h-8 bg-gray-800 border-2 border-blue-400 flex items-center justify-center mr-3">
						<span className="text-blue-400 text-sm font-mono">{'>'}</span>
					</div>
					<h2 className="text-3xl font-bold font-mono text-blue-400 uppercase tracking-wider">SERVICES_MATRIX</h2>
				</div>

				<div
					className="bg-gray-800 border-l-4 border-blue-400 p-4 mb-8"
					style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
				>
					<div className="flex items-center text-gray-300 font-mono mb-2">
						<span className="text-blue-400 mr-2">$</span>
								<span className="typing-effect">scanning_available_services...</span>
					</div>
					<p className="text-gray-400 font-mono text-sm">Choose your service package. All operations executed with corpo-level discretion.</p>
				</div>
			</div>

			{/* Services Grid */}
			<div className="relative z-10 max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map(({ icon, title, description, color, id, status }, i) => (
						<div
							key={i}
							onMouseEnter={() => setHoveredService(i)}
							onMouseLeave={() => setHoveredService(null)}
						>
							<CyberpunkBorderCard
								variant={i % 2 === 0 ? "bottom-right-cut" : "top-left-cut"}
								colorScheme={color}
								borderWidth="medium"
								glowEffect={hoveredService === i}
								withAccent
								className="p-5 relative h-full"
							>
								{/* Service ID and Status */}
								<div className="flex justify-between items-start mb-4">
									<div className={`text-xs px-2 py-0.5 border border-${color === 'pink' ? 'pink-500' : `${color}-400`} text-${color === 'pink' ? 'pink-500' : `${color}-400`} font-mono`}>
										{id}
									</div>
									<div className="flex items-center">
										<div className={`w-2 h-2 rounded-full bg-${color === 'pink' ? 'pink-500' : `${color}-400`} animate-pulse mr-1`}></div>
										<span className={`text-${color === 'pink' ? 'pink-500' : `${color}-400`} text-xs font-mono`}>
											{status}
										</span>
									</div>
								</div>

								{/* Icon with tech background */}
								<div className="flex space-x-4 items-start">
									<div
										className={`p-3 bg-gray-800 border border-${color === 'pink' ? 'pink-500' : `${color}-400`} relative overflow-hidden`}
										style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)" }}
									>
										<div className={`text-${color === 'pink' ? 'pink-500' : `${color}-400`}`}>
											{icon}
										</div>
										{/* Tech decorative elements */}
										<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-30"></div>
										<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-30"></div>
									</div>

									<div className="flex-1">
										<h3 className={`text-${color === 'pink' ? 'pink-500' : `${color}-400`} font-mono font-bold mb-2 text-lg leading-tight`}>
											{title}
										</h3>
										<p className="text-sm text-gray-300 font-mono leading-relaxed mb-4">{description}</p>

										{/* Tech statistics */}
										<div className="mt-2 space-y-2">
											<div>
												<div className="flex justify-between text-xs font-mono mb-1">
													<span className="text-gray-400">EFFICIENCY</span>
													<span className={`text-${color === 'pink' ? 'pink-500' : `${color}-400`}`}>{getRandomPercentage()}%</span>
												</div>
												<div className="w-full h-1 bg-gray-700">
													<div
														className={`h-full bg-${color === 'pink' ? 'pink-500' : `${color}-400`}`}
														style={{ width: `${getRandomPercentage()}%` }}
													></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between text-xs font-mono mb-1">
													<span className="text-gray-400">UPTIME</span>
													<span className={`text-${color === 'pink' ? 'pink-500' : `${color}-400`}`}>{getRandomPercentage()}%</span>
												</div>
												<div className="w-full h-1 bg-gray-700">
													<div
														className={`h-full bg-${color === 'pink' ? 'pink-500' : `${color}-400`}`}
														style={{ width: `${getRandomPercentage()}%` }}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Interactive button */}
								<div className="mt-4 text-right">
									<button
										className={`text-xs font-mono px-3 py-1 bg-gray-800 border border-${color === 'pink' ? 'pink-500' : `${color}-400`} text-${color === 'pink' ? 'pink-500' : `${color}-400`} hover:bg-${color === 'pink' ? 'pink-900' : `${color}-900`} hover:bg-opacity-30 transition-colors`}
										style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)" }}
									>
										INITIATE CONTACT {'>'}
									</button>
								</div>

								{/* Hover scanner effect */}
								{hoveredService === i && (
									<div
										className={`absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-transparent`}
										style={{
											background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(${color === 'pink' ? '236,72,153' : color === 'blue' ? '96,165,250' : color === 'green' ? '74,222,128' : color === 'purple' ? '168,85,247' : color === 'cyan' ? '34,211,238' : '163,230,53'}, 0.05) 3px, transparent 3px, transparent 4px)`,
											animation: 'scanline 2s linear infinite'
										}}
									></div>
								)}

								{/* Debug pattern corner */}
								<div className="absolute bottom-0 right-0 w-8 h-8 opacity-20 pointer-events-none">
									{[...Array(4)].map((_, index) => (
										<div
											key={index}
											className={`absolute bottom-${index * 2} right-${index * 2} w-${8 - index * 2} h-0.5 bg-${color === 'pink' ? 'pink-500' : `${color}-400`}`}
										></div>
									))}
								</div>
							</CyberpunkBorderCard>
						</div>
					))}
				</div>
			</div>

			{/* CSS for animations */}
			<style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .typing-effect {
          overflow: hidden;
          border-right: 2px solid #60a5fa;
          white-space: nowrap;
          animation: typing 3.5s steps(30, end), blink-caret .75s step-end infinite;
          max-width: fit-content;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #60a5fa }
        }
      `}</style>
		</section>
	);
}