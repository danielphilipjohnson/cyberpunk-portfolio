import React, { useState, useEffect } from 'react';

export const CyberpunkMissionStatement = () => {
	const [activeScanLine, setActiveScanLine] = useState<string | null>(null);
	const [hoveredWord, setHoveredWord] = useState<number | null>(null);
	const [glitchActive, setGlitchActive] = useState(false);
	const [securityLevel, setSecurityLevel] = useState(0);
	const [dataStreamActive, setDataStreamActive] = useState(false);
	const [systemStatus, setSystemStatus] = useState('OPERATIONAL');
	const [threatLevel, setThreatLevel] = useState('MINIMAL');

	// Advanced scanning system with multiple phases
	useEffect(() => {
		const scanInterval = setInterval(() => {
			setActiveScanLine(prev => {
				if (prev === null) return 'header-scan';
				if (prev === 'header-scan') return 'mission-scan';
				if (prev === 'mission-scan') return 'profile-scan';
				if (prev === 'profile-scan') return 'stack-scan';
				return null;
			});
		}, 4000);

		// Random glitch effects
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.75) {
				setGlitchActive(true);
				setTimeout(() => setGlitchActive(false), 400);
			}
		}, 12000);

		// Security level simulation
		const securityInterval = setInterval(() => {
			setSecurityLevel(Math.floor(Math.random() * 100));
			setThreatLevel(prev => {
				const levels = ['MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
				return levels[Math.floor(Math.random() * levels.length)];
			});
		}, 3000);

		// Data stream activation
		const streamInterval = setInterval(() => {
			setDataStreamActive(prev => !prev);
		}, 8000);

		return () => {
			clearInterval(scanInterval);
			clearInterval(glitchInterval);
			clearInterval(securityInterval);
			clearInterval(streamInterval);
		};
	}, []);

	// Enhanced neural tech stack with threat assessment
	const neuralTechStack = [
		{ 
			name: "DJANGO_REST.neural", 
			color: "bg-green-400", 
			width: "85%", 
			threat: "LOW",
			status: "OPERATIONAL",
			ice: "MINIMAL" 
		},
		{ 
			name: "NUXT_FRAMEWORK.js", 
			color: "bg-cyan-400", 
			width: "92%", 
			threat: "SECURE",
			status: "OPTIMAL",
			ice: "HARDENED" 
		},
		{ 
			name: "VUE_REACTIVE.core", 
			color: "bg-blue-400", 
			width: "88%", 
			threat: "MINIMAL",
			status: "ACTIVE",
			ice: "PROTECTED" 
		},
		{ 
			name: "TAILWIND_CSS.matrix", 
			color: "bg-pink-500", 
			width: "95%", 
			threat: "ZERO",
			status: "ENHANCED",
			ice: "FORTIFIED" 
		},
		{ 
			name: "WORDPRESS.legacy", 
			color: "bg-purple-500", 
			width: "75%", 
			threat: "MEDIUM",
			status: "MAINTAINED",
			ice: "STANDARD" 
		}
	];

	// Words to highlight in the mission paragraph
	const highlightWords = ["Full-Stack", "nuxt", "vue.js", "django-rest", "tailwind", "WordPress"];

	// Function to highlight specific words
	const highlightText = (text: string) => {
		const result = [];
		let lastIndex = 0;

		// Find all occurrences of highlight words
		for (let i = 0; i < text.length; i++) {
			for (const word of highlightWords) {
				if (text.substring(i, i + word.length).toLowerCase() === word.toLowerCase()) {
					// Add text before the highlighted word
					if (i > lastIndex) {
						result.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex, i)}</span>);
					}

					// Add the highlighted word
					result.push(
						<span
							key={`highlight-${i}`}
							className={`text-cyan-400 relative ${hoveredWord === i ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400' : ''}`}
							onMouseEnter={() => setHoveredWord(i)}
							onMouseLeave={() => setHoveredWord(null)}
						>
							{text.substring(i, i + word.length)}
						</span>
					);

					lastIndex = i + word.length;
					i += word.length - 1;
					break;
				}
			}
		}

		// Add remaining text
		if (lastIndex < text.length) {
			result.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex)}</span>);
		}

		return result;
	};

	return (
		<section className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Advanced neural network background matrix */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)",
					backgroundSize: "25px 25px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 2px, transparent 2px)",
					backgroundSize: "60px 60px"
				}}></div>
				{/* Moving data streams */}
				<div className="absolute top-0 left-1/5 w-px h-full bg-cyan-400 opacity-15 animate-pulse"></div>
				<div className="absolute top-0 right-1/4 w-px h-full bg-pink-500 opacity-15" style={{ animationDelay: '1.5s' }}></div>
				<div className="absolute top-0 left-3/5 w-px h-full bg-purple-500 opacity-15" style={{ animationDelay: '3s' }}></div>
			</div>

			{/* Glitch overlay effect */}
			{glitchActive && (
				<div className="absolute inset-0 z-20 pointer-events-none">
					<div className="absolute inset-0 bg-cyan-400 opacity-10 animate-pulse"></div>
					<div className="absolute top-1/3 left-0 right-0 h-1 bg-pink-500 opacity-60" style={{ animation: "glitchFlicker 0.1s linear infinite" }}></div>
					<div className="absolute bottom-2/5 left-0 right-0 h-0.5 bg-cyan-400 opacity-50" style={{ animation: "glitchFlicker 0.15s linear infinite reverse" }}></div>
				</div>
			)}

			{/* Neural pathway circuit matrix */}
			<div className="absolute inset-0 z-0 opacity-20">
				<svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
					{/* Main neural pathways */}
					<path d="M50,150 Q400,80 750,150 Q400,220 50,150" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.7" />
					<path d="M50,300 Q200,200 400,300 Q600,400 750,300" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.7" />
					<path d="M50,450 Q400,350 750,450 Q400,550 50,450" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.7" />
					
					{/* Connection lines */}
					<line x1="150" y1="150" x2="650" y2="300" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4" />
					<line x1="400" y1="100" x2="400" y2="500" stroke="#ec4899" strokeWidth="0.5" opacity="0.4" />
					<line x1="650" y1="150" x2="150" y2="450" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.4" />
					
					{/* Neural nodes with animations */}
					<circle cx="150" cy="150" r="6" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.9">
						<animate attributeName="r" values="4;10;4" dur="2.5s" repeatCount="indefinite" />
					</circle>
					<circle cx="400" cy="300" r="8" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.9">
						<animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
					</circle>
					<circle cx="650" cy="450" r="5" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.9">
						<animate attributeName="r" values="3;9;3" dur="2s" repeatCount="indefinite" />
					</circle>
					
					{/* Data flow particles */}
					<circle cx="50" cy="150" r="2" fill="#06b6d4" opacity="0.8">
						<animateMotion dur="6s" repeatCount="indefinite">
							<path d="M0,0 Q350,-70 700,0 Q350,70 0,0" />
						</animateMotion>
					</circle>
					<circle cx="50" cy="300" r="2" fill="#ec4899" opacity="0.8">
						<animateMotion dur="8s" repeatCount="indefinite">
							<path d="M0,0 Q150,-100 300,0 Q450,100 600,0" />
						</animateMotion>
					</circle>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Advanced neural interface header */}
				<div className="mb-12">
					<div className="bg-gray-800 border-l-4 border-cyan-400 p-6 mb-6 relative overflow-hidden"
						style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}>
						
						{/* Animated header scan lines */}
						<div className="absolute inset-0 pointer-events-none">
							{activeScanLine === 'header-scan' && (
								<div className="absolute w-full h-0.5 bg-cyan-400 opacity-40" 
									style={{ animation: "headerSweep 3s ease-in-out infinite" }}></div>
							)}
						</div>
						
						{/* Security status panel */}
						<div className="absolute top-2 right-2 sm:right-4 hidden sm:flex items-center space-x-2 lg:space-x-4">
							<div className="flex items-center space-x-1 sm:space-x-2">
								<div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full animate-pulse ${
									threatLevel === 'MINIMAL' || threatLevel === 'LOW' ? 'bg-green-400' :
									threatLevel === 'MEDIUM' ? 'bg-yellow-400' : 'bg-red-400'
								}`}></div>
								<span className="text-gray-400 font-mono text-xs hidden lg:inline">THREAT: </span>
								<span className={`font-mono text-xs ${
									threatLevel === 'MINIMAL' || threatLevel === 'LOW' ? 'text-green-400' :
									threatLevel === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'
								}`}>{threatLevel}</span>
							</div>
							<div className="flex items-center space-x-1 sm:space-x-2">
								<span className="text-cyan-400 font-mono text-xs">{securityLevel}%</span>
								<div className="w-8 sm:w-12 lg:w-16 h-1 bg-gray-700 relative overflow-hidden">
									<div className="absolute inset-0 bg-cyan-400" style={{ 
										width: `${securityLevel}%`,
										transition: 'width 3s ease'
									}}></div>
								</div>
							</div>
						</div>
						
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
							{/* System identifier */}
							<div className="bg-cyan-900 bg-opacity-40 px-3 sm:px-4 py-1 sm:py-2 border-l-2 border-cyan-400 flex items-center shrink-0 mb-2 sm:mb-0"
								style={{ clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)" }}>
								<div className="w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 mr-2 sm:mr-3 animate-pulse"></div>
								<span className="text-cyan-400 font-mono text-xs sm:text-sm font-bold">CORP_DIRECTIVE.proto</span>
							</div>
							
							{/* Main title */}
							<div className="flex-1 min-w-0">
								<h2 className="text-xl sm:text-2xl md:text-4xl font-mono font-bold text-white uppercase tracking-wider flex flex-wrap items-center mb-2 gap-2">
									<span className="text-cyan-400 mr-1 sm:mr-3">⚡</span>
									<span className="break-words">MISSION_PROTOCOL</span>
									<div className="mt-1 sm:mt-0 sm:ml-2 px-2 sm:px-3 py-1 bg-pink-900 bg-opacity-30 border border-pink-500 text-pink-500 text-xs shrink-0">
										[PRIORITY_ALPHA]
									</div>
								</h2>
								<div className="text-gray-400 font-mono text-xs sm:text-sm break-words">
									Target: FULLSTACK_NETRUNNER // Clearance: BETA // Mission_ID: MP-2077
								</div>
							</div>
						</div>
						
						{/* System status readout */}
						<div className="absolute bottom-2 left-4 flex space-x-4 text-xs font-mono">
							<div className="flex items-center text-green-400">
								<div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-pulse"></div>
								SYSTEM: {systemStatus}
							</div>
							<div className="flex items-center text-cyan-400">
								<div className="w-1 h-1 bg-cyan-400 rounded-full mr-1 animate-pulse"></div>
								DATA_STREAM: {dataStreamActive ? 'ACTIVE' : 'STANDBY'}
							</div>
							<div className="flex items-center text-purple-400">
								<div className="w-1 h-1 bg-purple-400 rounded-full mr-1 animate-pulse"></div>
								NEURAL_LINK: ESTABLISHED
							</div>
						</div>
					</div>
					
					{/* Mission briefing readout */}
					<div className="text-gray-400 font-mono text-sm bg-gray-800 bg-opacity-50 p-4 border border-gray-700">
						<div className="flex items-center justify-between">
							<div>
								{'// accessing_mission_parameters // corporate_directive_analysis // neural_pathway_optimization'}
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-cyan-400">PROGRESS:</span>
								<div className="w-20 h-2 bg-gray-700 relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500" style={{ 
										width: `${securityLevel}%`,
										transition: 'width 3s ease'
									}}></div>
								</div>
								<span className="text-cyan-400">{securityLevel}%</span>
							</div>
						</div>
					</div>
				</div>

				{/* Mission quote in tech frame */}
				<div className="mb-8">
					<div
						className="bg-gray-800 border-l-2 border-pink-500 p-4 sm:p-6 relative"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
					>
						<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pink-500 opacity-60"></div>
						<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 opacity-60"></div>

						<h3 className="text-base sm:text-lg md:text-xl font-mono text-pink-500 italic relative mb-2 break-words leading-relaxed">
							&quot;Mission driven nuxt developer with a passion to create apps that allows
							you to express your ideas.&quot;
						</h3>

						{/* Terminal cursor effect */}
						<div className="h-3 sm:h-4 w-1 sm:w-2 bg-pink-500 opacity-75 inline-block ml-1 animate-pulse absolute"></div>

						{/* Technical ID */}
						<div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-gray-900 text-xs font-mono text-gray-500 px-1 sm:px-2 py-1">
							DIRECTIVE.0x1
						</div>
					</div>
				</div>

				{/* Main content with dual panel layout */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
					{/* Main paragraph with highlighted tech words */}
					<div className="lg:col-span-2 order-2 lg:order-1">
						<div
							className="bg-gray-800 p-4 sm:p-6 h-full relative"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }}
						>
							<div className="flex items-center mb-3 sm:mb-4">
								<div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-cyan-400 mr-2 sm:mr-3"></div>
								<h3 className="text-base sm:text-lg font-mono text-cyan-400">DEVELOPER_PROFILE</h3>
							</div>

							<p className="text-gray-300 font-mono leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4 break-words">
								{highlightText("Adaptive mesh architect expanding operational bandwidth within Neurovia Corporation’s Neural Interface Division. Currently engaged as a full-stack SynthPython engineer, with a strong theoretical foundation in NeuroHTML, PulseCSS, and QuantumScript. Formerly specialized in Reactix Frameworks before transitioning to Nuxtara and Vuestral Systems. Primary tech stack includes Django-ΣREST, Nuxtara Core, Vuestral UI, and Tailwind-X for interface modulation, as well as contributing to the Neurovia HoloPress Deployment Team.")}
							</p>

							{/* Status indicator */}
							<div className="flex flex-wrap items-center text-xs font-mono text-gray-400 mt-4 sm:mt-6 gap-2">
								<div className="flex items-center">
									<div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
									<span className="whitespace-nowrap">SYSTEM OPERATIONAL</span>
								</div>
								<span className="text-cyan-400 whitespace-nowrap">UPTIME: 765d:12h:43m</span>
							</div>

							{/* Tech corner accents */}
							<div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 left-0 w-6 sm:w-8 h-px bg-cyan-400"></div>
								<div className="absolute bottom-0 left-0 w-px h-6 sm:h-8 bg-cyan-400"></div>
							</div>
						</div>
					</div>

					{/* Enhanced neural tech stack visualization */}
					<div className="order-1 lg:order-2">
						<div
							className={`bg-gray-800 p-4 sm:p-6 h-full border-r-2 lg:border-r-2 border-b-2 lg:border-b-0 border-lime-400 relative ${activeScanLine === 'stack-scan' ? 'shadow-lg shadow-lime-400/20' : ''} transition-all duration-700`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							{/* Neural scan effect */}
							{activeScanLine === 'stack-scan' && (
								<div className="absolute inset-0 pointer-events-none z-20"
									style={{
										background: "linear-gradient(to bottom, transparent 30%, rgba(34, 197, 94, 0.3) 48%, rgba(34, 197, 94, 0.5) 50%, rgba(34, 197, 94, 0.3) 52%, transparent 70%)",
										animation: "stackScan 3s linear infinite"
									}}></div>
							)}

							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
								<div className="flex items-center">
									<div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-lime-400 mr-2 sm:mr-3"></div>
									<h3 className="text-base sm:text-lg font-mono text-lime-400">NEURAL_TECH_STACK</h3>
								</div>
								<div className="text-xs font-mono text-gray-500 flex items-center">
									<div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-lime-400 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
									v4.0.1_neural
								</div>
							</div>

							<div className="space-y-4">
								{neuralTechStack.map((tech, index) => (
									<div key={index} className="relative group">
										<div className="flex justify-between text-xs font-mono mb-2">
											<span className="text-gray-400">{tech.name}</span>
											<div className="flex items-center space-x-2">
												<span className={`text-${tech.color.replace('bg-', '')} font-bold`}>{tech.width}</span>
												<span className={`text-xs px-1 border ${
													tech.threat === 'ZERO' || tech.threat === 'SECURE' || tech.threat === 'LOW' || tech.threat === 'MINIMAL' ? 'text-green-400 border-green-400' :
													tech.threat === 'MEDIUM' ? 'text-yellow-400 border-yellow-400' : 'text-red-400 border-red-400'
												}`}>
													{tech.threat}
												</span>
											</div>
										</div>
										
										{/* Enhanced progress bar with ICE protection indicator */}
										<div className="w-full h-2 bg-gray-700 relative overflow-hidden border border-gray-600">
											<div
												className={`h-full ${tech.color} relative`}
												style={{ 
													width: tech.width,
													transition: 'width 2s ease, box-shadow 0.3s ease'
												}}
											>
												{/* Glowing effect */}
												<div className="absolute inset-0 opacity-50 animate-pulse"></div>
											</div>
											
											{/* ICE protection indicator */}
											<div className="absolute top-0 right-1 h-full w-1 bg-white opacity-30"></div>
										</div>

										{/* Status and ICE readout */}
										<div className="flex justify-between text-xs font-mono mt-1 text-gray-500">
											<span>STATUS: <span className="text-green-400">{tech.status}</span></span>
											<span>ICE: <span className="text-cyan-400">{tech.ice}</span></span>
										</div>

										{/* Hover neural link effect */}
										<div className="absolute -left-2 top-0 w-1 h-full bg-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
								))}
							</div>

							{/* System diagnostic panel */}
							<div className="mt-6 pt-4 border-t border-lime-400">
								<div className="grid grid-cols-2 gap-3 text-xs font-mono">
									<div className="bg-gray-900 p-2 border border-green-400 relative">
										<div className="absolute top-1 right-1 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
										<div className="text-gray-500 mb-1">NEURAL_OS</div>
										<div className="text-green-400 font-bold">LINUX_MATRIX</div>
									</div>
									<div className="bg-gray-900 p-2 border border-cyan-400 relative">
										<div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
										<div className="text-gray-500 mb-1">PRIMARY_LANG</div>
										<div className="text-cyan-400 font-bold">JS_NEURAL.exe</div>
									</div>
									<div className="bg-gray-900 p-2 border border-pink-500 relative">
										<div className="absolute top-1 right-1 w-1 h-1 bg-pink-500 rounded-full animate-pulse"></div>
										<div className="text-gray-500 mb-1">DB_CORE</div>
										<div className="text-pink-500 font-bold">POSTGRES.sql</div>
									</div>
									<div className="bg-gray-900 p-2 border border-purple-500 relative">
										<div className="absolute top-1 right-1 w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
										<div className="text-gray-500 mb-1">DEPLOY_NET</div>
										<div className="text-purple-500 font-bold">CLOUD.matrix</div>
									</div>
								</div>
							</div>

							{/* Tech corner accents */}
							<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute top-0 right-0 w-8 h-px bg-lime-400"></div>
								<div className="absolute top-0 right-0 w-px h-8 bg-lime-400"></div>
							</div>
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-lime-400"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-lime-400"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Advanced cyberpunk CSS animations */}
			<style jsx>{`
        @keyframes scanEffect {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes headerSweep {
          0% { transform: translateY(-100%) scaleX(0.8); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(50%) scaleX(1.2); }
          90% { opacity: 1; }
          100% { transform: translateY(400%) scaleX(0.8); opacity: 0; }
        }

        @keyframes stackScan {
          0% { transform: translateY(-100%) scaleX(0.9); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(300%) scaleX(1.1); opacity: 0; }
        }

        @keyframes glitchFlicker {
          0% { transform: translateX(0); }
          10% { transform: translateX(-3px); }
          20% { transform: translateX(3px); }
          30% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          50% { transform: translateX(-1px); }
          60% { transform: translateX(1px); }
          70% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        @keyframes neuralPulse {
          0% { opacity: 0.7; transform: scale(1); box-shadow: 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { opacity: 1; transform: scale(1.05); box-shadow: 0 0 20px rgba(34, 197, 94, 0.7); }
          100% { opacity: 0.7; transform: scale(1); box-shadow: 0 0 0 rgba(34, 197, 94, 0.4); }
        }

        @keyframes dataStream {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes threatPulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        /* Enhanced glow effects */
        .border-cyan-400 {
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.4);
        }

        .border-lime-400 {
          box-shadow: 0 0 8px rgba(163, 230, 53, 0.4);
        }

        .border-pink-500 {
          box-shadow: 0 0 8px rgba(236, 72, 153, 0.4);
        }

        /* Hover intensification */
        .group:hover .border-lime-400 {
          box-shadow: 0 0 15px rgba(163, 230, 53, 0.6), 0 0 30px rgba(163, 230, 53, 0.3);
        }

        /* Neural link activation */
        .neural-link-active {
          animation: neuralPulse 2s ease-in-out infinite;
        }

        /* Data stream animation */
        .data-stream {
          animation: dataStream 4s linear infinite;
        }
      `}</style>
		</section>
	);
};

export default CyberpunkMissionStatement;