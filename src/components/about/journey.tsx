import React, { useState, useEffect } from 'react';

export const CyberpunkDevJourney = () => {
	const [activeScanLine, setActiveScanLine] = useState<string | null>(null);
	const [activeLink, setActiveLink] = useState<string | null>(null);
	const [glitchActive, setGlitchActive] = useState(false);
	const [neuralActivity, setNeuralActivity] = useState(0);

	// Create scanning effect that moves between sections
	useEffect(() => {
		const scanInterval = setInterval(() => {
			setActiveScanLine(prev => {
				if (prev === null) return 'memory-bank-alpha';
				if (prev === 'memory-bank-alpha') return 'neural-core';
				if (prev === 'neural-core') return 'memory-bank-beta';
				return null;
			});
		}, 3500);

		// Random glitch effects
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.7) {
				setGlitchActive(true);
				setTimeout(() => setGlitchActive(false), 300);
			}
		}, 8000);

		// Neural activity simulation
		const neuralInterval = setInterval(() => {
			setNeuralActivity(Math.floor(Math.random() * 100));
		}, 2000);

		return () => {
			clearInterval(scanInterval);
			clearInterval(glitchInterval);
			clearInterval(neuralInterval);
		};
	}, []);

	// Enhanced neural tech links with ICE protocols
	const renderNeuralLink = (url: string, text: string, id: string, threatLevel: 'low' | 'medium' | 'high' | 'critical' = 'low') => {
		const threatColors = {
			low: 'text-cyan-400 border-cyan-400',
			medium: 'text-yellow-400 border-yellow-400', 
			high: 'text-red-400 border-red-400',
			critical: 'text-pink-500 border-pink-500'
		} as const;
		
		return (
			<span className="relative inline-block group">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className={`relative ${threatColors[threatLevel as keyof typeof threatColors]} hover:bg-gray-800 px-2 py-1 transition-all duration-300 font-mono text-sm border-b ${activeLink === id ? 'bg-gray-800 shadow-lg' : 'border-transparent hover:border-current'}`}
					onMouseEnter={() => setActiveLink(id)}
					onMouseLeave={() => setActiveLink(null)}
					style={{
						clipPath: activeLink === id ? 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' : 'none'
					}}
				>
					[{text.toUpperCase().replace(/ /g, '_')}]
					{activeLink === id && (
						<>
							<div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full animate-pulse"></div>
							<div className="absolute top-full left-0 mt-2 px-2 py-1 bg-gray-900 border border-current text-xs whitespace-nowrap z-50">
								<div className="flex items-center space-x-2">
									<div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
									<span>THREAT_LEVEL: {threatLevel.toUpperCase()}</span>
								</div>
								<div className="text-gray-400 mt-1">ACCESS_EXTERNAL_NODE</div>
							</div>
						</>
					)}
				</a>
			</span>
		);
	};

	// Neural pathway mapping for tech evolution
	const neuralTechNodes: Record<string, { url: string; threat: 'low' | 'medium' | 'high' | 'critical' }> = {
		// Early memory engrams
		"CBM-64 Neural Interface": { url: "https://en.wikipedia.org/wiki/Commodore_64", threat: "low" },
		"Blue Meanies Combat Protocol": { url: "https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/", threat: "medium" },
		
		// Corporate hardware acquisitions
		"Packard Bell Corporate Terminal": { url: "https://www.mrmemory.co.uk/memory-ram-upgrades/packard-bell/imedia/x2414", threat: "low" },
		"Windows Vista ICE": { url: "https://en.wikipedia.org/wiki/Windows_Vista", threat: "critical" },
		"DHCP Network Breach": { url: "https://social.technet.microsoft.com/Forums/windows/en-US/69029855-21c1-411d-bdd3-b864222eefb6/dhcp-on-vista-has-stopped-running?forum=itprovistasetup", threat: "high" },
		
		// Liberation protocols
		"Ubuntu Jaunty Liberation OS": { url: "https://wiki.ubuntu.com/JauntyJackalope", threat: "low" },
		"Kubuntu Neural Interface": { url: "https://kubuntu.org/", threat: "low" },
		"Manjaro Stealth OS": { url: "https://manjaro.org/", threat: "low" },
		"Arch Linux Black ICE": { url: "https://archlinux.org/", threat: "medium" },
		"KDE Plasma Desktop Matrix": { url: "https://kde.org/", threat: "low" },
		
		// Development arsenal
		"XNA Game Development Kit": { url: "https://en.wikipedia.org/wiki/Microsoft_XNA_Game_Studio", threat: "medium" },
		"Microsoft Neural Academy": { url: "https://docs.microsoft.com/en-us/learn/", threat: "low" },
		"RPG Toolkit Neural Matrix": { url: "https://sourceforge.net/projects/xnarpgtoolkit/", threat: "low" },
		"Ubuntu Server Node": { url: "https://ubuntu.com/server", threat: "medium" },
		
		// Data analysis implants
		"Pandas Data Mining Chip": { url: "https://pandas.pydata.org/", threat: "low" },
		"NumPy Calculation Matrix": { url: "https://numpy.org/", threat: "low" },
		"Matplotlib Visual Cortex": { url: "https://matplotlib.org/", threat: "low" }
	};

	return (
		<article className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Neural network background matrix */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)",
					backgroundSize: "15px 15px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 1px, transparent 1px)",
					backgroundSize: "50px 50px"
				}}></div>
				{/* Moving data streams */}
				<div className="absolute top-0 left-1/4 w-px h-full bg-cyan-400 opacity-10 animate-pulse"></div>
				<div className="absolute top-0 right-1/4 w-px h-full bg-pink-500 opacity-10" style={{ animationDelay: '1s' }}></div>
				<div className="absolute top-0 left-3/4 w-px h-full bg-purple-500 opacity-10" style={{ animationDelay: '2s' }}></div>
			</div>

			{/* Glitch overlay effect */}
			{glitchActive && (
				<div className="absolute inset-0 z-10 pointer-events-none">
					<div className="absolute inset-0 bg-cyan-400 opacity-5 animate-pulse"></div>
					<div className="absolute top-1/4 left-0 right-0 h-0.5 bg-pink-500 opacity-50" style={{ animation: "glitchScan 0.1s linear infinite" }}></div>
					<div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-cyan-400 opacity-50" style={{ animation: "glitchScan 0.15s linear infinite reverse" }}></div>
				</div>
			)}

			{/* Neural pathway circuit matrix */}
			<div className="absolute inset-0 z-0 opacity-15">
				<svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
					{/* Main neural pathways */}
					<path d="M50,200 Q500,100 950,200 Q500,300 50,200" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
					<path d="M50,500 Q250,300 500,500 Q750,700 950,500" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.6" />
					<path d="M50,800 Q500,600 950,800 Q500,900 50,800" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
					
					{/* Memory node connections */}
					<line x1="200" y1="200" x2="800" y2="500" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
					<line x1="500" y1="150" x2="500" y2="850" stroke="#ec4899" strokeWidth="0.5" opacity="0.3" />
					<line x1="800" y1="200" x2="200" y2="800" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
					
					{/* Neural nodes */}
					<circle cx="200" cy="200" r="8" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.8">
						<animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
					</circle>
					<circle cx="500" cy="500" r="10" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.8">
						<animate attributeName="r" values="8;16;8" dur="4s" repeatCount="indefinite" />
					</circle>
					<circle cx="800" cy="800" r="6" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.8">
						<animate attributeName="r" values="4;10;4" dur="2.5s" repeatCount="indefinite" />
					</circle>
					
					{/* Data flow particles */}
					<circle cx="100" cy="200" r="2" fill="#06b6d4" opacity="0.6">
						<animateMotion dur="8s" repeatCount="indefinite">
							<path d="M0,0 Q450,-100 900,0 Q450,100 0,0" />
						</animateMotion>
					</circle>
					<circle cx="100" cy="500" r="2" fill="#ec4899" opacity="0.6">
						<animateMotion dur="10s" repeatCount="indefinite">
							<path d="M0,0 Q200,-200 400,0 Q600,200 800,0" />
						</animateMotion>
					</circle>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Neural interface header with advanced corpo styling */}
				<div className="mb-12">
					{/* Main header section */}
					<div className="bg-gray-800 border-l-4 border-cyan-400 p-6 mb-6 relative overflow-hidden"
						style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}>
						
						{/* Animated header scan lines */}
						<div className="absolute inset-0 pointer-events-none">
							<div className="absolute w-full h-0.5 bg-cyan-400 opacity-30" 
								style={{ animation: "headerScan 4s ease-in-out infinite" }}></div>
						</div>
						
						{/* Neural activity indicator */}
						<div className="absolute top-2 right-4 flex items-center space-x-2">
							<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
							<span className="text-green-400 font-mono text-xs">NEURAL_ACTIVITY: {neuralActivity}%</span>
						</div>
						
							{/* Mobile-first responsive layout */}
							<div className="space-y-4">
								{/* System identifier - full width on mobile */}
								<div className="flex justify-center md:justify-start">
									<div className="bg-cyan-900 bg-opacity-40 px-3 py-2 border-l-2 border-cyan-400 flex items-center"
										style={{ clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)" }}>
										<div className="w-3 h-3 bg-cyan-400 mr-2 animate-pulse"></div>
										<span className="text-cyan-400 font-mono text-xs sm:text-sm font-bold">MEMORY_BANK.neural</span>
									</div>
								</div>
								
								{/* Main title section - improved mobile layout */}
								<div className="text-center md:text-left">
									{/* Title with brain icon */}
									<div className="flex flex-col items-center md:items-start space-y-3">
										<div className="flex items-center justify-center md:justify-start">
											<span className="text-2xl sm:text-3xl mr-3">🧠</span>
											<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-white uppercase tracking-wide">
												NEURAL_PATHWAY_TRACE
											</h2>
										</div>
										
										{/* Classified badge - centered on mobile */}
										<div className="flex justify-center md:justify-start">
											<div className="px-3 py-1 bg-pink-900 bg-opacity-30 border border-pink-400 text-pink-400 text-xs font-mono font-bold"
												style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
												[CLASSIFIED]
											</div>
										</div>
									</div>
									
									{/* Subject info - improved mobile formatting */}
									<div className="text-gray-400 font-mono text-xs sm:text-sm leading-relaxed mt-3">
										<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
											<span>Subject: MIRA_&quot;VOID&quot;_DOSSAN</span>
											<span className="hidden sm:inline text-cyan-400">{'//'}</span>
											<span>Clearance: ALPHA // Neural_ID: NC-4487</span>
										</div>
									</div>
								</div>
							</div>
						
						{/* Tech status indicators */}
						<div className="absolute bottom-2 left-4 flex space-x-4 text-xs font-mono">
							<div className="flex items-center text-green-400">
								<div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-pulse"></div>
								MEMORY_TRACE: ACTIVE
							</div>
							<div className="flex items-center text-yellow-400">
								<div className="w-1 h-1 bg-yellow-400 rounded-full mr-1 animate-pulse"></div>
								DATA_STREAM: SECURE
							</div>
							<div className="flex items-center text-cyan-400">
								<div className="w-1 h-1 bg-cyan-400 rounded-full mr-1 animate-pulse"></div>
								ICE_STATUS: MONITORING
							</div>
						</div>
					</div>
					
					{/* System info readout */}
					<div className="text-gray-400 font-mono text-sm bg-gray-800 bg-opacity-50 p-4 border border-gray-700">
						<div className="flex items-center justify-between">
							<div>
								{'// accessing_neural_engrams // chronological_data_reconstruction // memory_pathway_analysis'}
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-cyan-400">SCAN_PROGRESS:</span>
								<div className="w-20 h-2 bg-gray-700 relative overflow-hidden">
									<div className="absolute inset-0 bg-cyan-400" style={{ 
										width: `${neuralActivity}%`,
										transition: 'width 2s ease'
									}}></div>
								</div>
								<span className="text-cyan-400">{neuralActivity}%</span>
							</div>
						</div>
					</div>
				</div>

				{/* Memory Bank Alpha - Early Neural Initialization */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
					{/* Memory Bank Alpha Visual Node */}
					<div className="md:col-span-1">
						<div
							className={`bg-gray-800 p-4 h-full relative group overflow-hidden ${activeScanLine === 'memory-bank-alpha' ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border border-gray-700'} transition-all duration-700`}
							style={{ clipPath: "polygon(0 0, 95% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)" }}
						>
							{/* Neural scan display with biometric overlay */}
							<div className="relative mb-3 overflow-hidden">
								<div className="absolute top-0 left-0 right-0 bg-cyan-400 h-px opacity-60 z-10"></div>
								<div className="absolute bottom-0 left-0 right-0 bg-cyan-400 h-px opacity-60 z-10"></div>
								<div className="absolute top-0 left-0 bottom-0 bg-cyan-400 w-px opacity-60 z-10"></div>
								<div className="absolute top-0 right-0 bottom-0 bg-cyan-400 w-px opacity-60 z-10"></div>
								
								<img
									src="/img/neuralscan.png"
									alt="Neural scan: Subject age 4 - Early system initialization"
									className={`w-full object-cover filter ${activeScanLine === 'memory-bank-alpha' ? 'brightness-110 contrast-110' : 'brightness-90'} transition-all duration-700`}
								/>

								{/* Advanced neural scanning overlay */}
								{activeScanLine === 'memory-bank-alpha' && (
									<>
										{/* Primary scan beam */}
										<div className="absolute inset-0 pointer-events-none z-20"
											style={{
												background: "linear-gradient(to bottom, transparent 30%, rgba(6, 182, 212, 0.4) 48%, rgba(6, 182, 212, 0.6) 50%, rgba(6, 182, 212, 0.4) 52%, transparent 70%)",
												animation: "neuralScan 2.5s linear infinite"
											}}></div>
										
										{/* Secondary scan grid */}
										<div className="absolute inset-0 pointer-events-none z-15"
											style={{
												backgroundImage: "linear-gradient(90deg, transparent 48%, rgba(6, 182, 212, 0.3) 50%, transparent 52%)",
												animation: "neuralScanHorizontal 3s linear infinite"
											}}></div>
										
										{/* Biometric analysis points */}
										<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-25"></div>
										<div className="absolute top-3/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-25" style={{ animationDelay: '0.5s' }}></div>
										<div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-25" style={{ animationDelay: '1s' }}></div>
									</>
								)}

								{/* Neural data readout overlay */}
								<div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-85 p-2 border-t border-cyan-400">
									<div className="grid grid-cols-2 gap-2 text-xs font-mono">
										<div className="flex justify-between">
											<span className="text-gray-400">NEURAL_ID:</span>
											<span className="text-cyan-400">ALPHA_01</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-400">AGE:</span>
											<span className="text-cyan-400">4.0</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-400">SCAN:</span>
											<span className="text-green-400">COMPLETE</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-400">STATUS:</span>
											<span className="text-yellow-400">INIT</span>
										</div>
									</div>
								</div>
							</div>

							{/* Neural caption with enhanced data */}
							<figcaption className="text-xs text-center font-mono text-gray-400 mt-2">
								<div className="flex items-center justify-center space-x-2">
									<span className="text-cyan-400">[MEMORY_ENGRAM]</span>
									<div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
									<span>NEURAL_INIT_PHASE</span>
								</div>
							</figcaption>

							{/* Tech decorative elements */}
							<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-teal-400 opacity-50"></div>
							<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-teal-400 opacity-50"></div>
						</div>
					</div>

					{/* Main text first part */}
					<div className="md:col-span-3">
						<div
							className={`bg-gray-800 p-6 h-full relative ${activeScanLine === 'main-text' ? 'border-l-2 border-teal-400' : 'border-l border-gray-700'} transition-colors duration-500`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							<h3 className="text-cyan-400 font-mono text-lg mb-4 flex items-center">
								<div className="w-4 h-4 bg-cyan-400 mr-3" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}></div>
								NEURAL_ENGRAM_ALPHA // FIRST_CODE_EXPOSURE
							</h3>

									<div className="text-gray-300 font-mono text-sm sm:text-base leading-relaxed relative">
										<div className="mb-4 p-3 sm:p-4 bg-gray-900 border-l-2 border-cyan-400">
											<div className="text-xs sm:text-sm text-cyan-400 mb-1">[MEMORY_TRACE_INITIATED]</div>
											<div className="text-yellow-400 font-bold text-sm sm:text-base">SUBJECT_AGE: 4.0 // NEURAL_PLASTICITY: HIGH</div>
										</div>
										
										<p className="mb-4">
											<strong className="text-cyan-400">INITIAL_WETWARE_EXPOSURE:</strong> Neural pathways first activated when 
									my biological_parent executed manual code transcription protocols on the legacy 
									{renderNeuralLink(neuralTechNodes["CBM-64 Neural Interface"].url, "CBM-64 Neural Interface", "c64", neuralTechNodes["CBM-64 Neural Interface"].threat)} 
									system.
										</p>
										
										<p className="mb-4">
											Each program required direct memory injection - no storage drives, pure 
									volatile consciousness. First successful neural handshake achieved through 
									{renderNeuralLink(neuralTechNodes["Blue Meanies Combat Protocol"].url, "Blue Meanies Combat Protocol", "meanies", neuralTechNodes["Blue Meanies Combat Protocol"].threat)} 
									- a primitive space combat simulation.
										</p>

										<div className="mt-4 p-3 sm:p-4 bg-red-900 bg-opacity-20 border border-red-400">
											<div className="text-red-400 font-bold text-xs sm:text-sm mb-2">[PARENTAL_FEEDBACK_LOG]</div>
											<div className="text-gray-300 italic text-sm sm:text-base leading-relaxed">&quot;All that neural processing time for a simple space invaders clone...&quot; 
										- Parent_Unit complained about resource allocation inefficiency.</div>
										</div>

										<div className="mt-4 text-xs sm:text-sm text-gray-500">
											{'// first_dopamine_release // pattern_recognition_engaged // addiction_pathway_initialized'}
										</div>
									</div>

							{/* Read more button */}
							<div className="mt-6">
								<div className="flex items-center space-x-4">
									<a
										href="/about/my-story"
										className="inline-flex items-center px-4 py-2 bg-gray-900 text-cyan-400 border border-cyan-400 hover:bg-cyan-900 hover:bg-opacity-30 transition-all duration-300 text-xs font-mono group"
										style={{ clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)" }}
									>
										<div className="w-2 h-2 bg-cyan-400 mr-2 group-hover:animate-pulse"></div>
										ACCESS_DEEPDIVE.neural
									</a>
									
									<div className="flex items-center text-xs text-gray-500">
										<div className="w-1 h-1 bg-red-400 rounded-full mr-2 animate-pulse"></div>
										THREAT_LEVEL: NOSTALGIA
									</div>
								</div>
							</div>

							{/* Scan effect */}
							{activeScanLine === 'main-text' && (
								<div
									className="absolute inset-0 pointer-events-none opacity-20"
									style={{
										background: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(20, 184, 166, 0.1) 20px, rgba(20, 184, 166, 0.1) 25px)"
									}}
								></div>
							)}

							{/* Tech corner accents */}
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-teal-400"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-teal-400"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Second section - Later journey */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{/* Main text second part */}
					<div className="md:col-span-3 order-2 md:order-1">
						<div
							className={`bg-gray-800 p-6 h-full relative ${activeScanLine === 'main-text' ? 'border-r-2 border-teal-400' : 'border-r border-gray-700'} transition-colors duration-500`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }}
						>
							<h3 className="text-pink-500 font-mono text-lg mb-4 flex items-center">
								<div className="w-4 h-4 bg-pink-500 mr-3" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}></div>
								CORPO_HARDWARE_ACQUISITION // SYSTEM_LIBERATION
							</h3>

							<div className="text-gray-300 font-mono text-sm sm:text-base leading-relaxed">
								<div className="mb-4 p-3 sm:p-4 bg-gray-900 border-l-2 border-pink-500">
									<div className="text-xs sm:text-sm text-pink-500 mb-1">[CORPO_ACQUISITION_PROTOCOL]</div>
									<div className="text-yellow-400 font-bold text-sm sm:text-base">YEAR: 2008 // MISSION: SECURE_FIRST_RIG // METHOD: MANUAL_LABOR</div>
								</div>

								<p className="mb-4">
									Physical labor protocols engaged - hotel sanitation contracts executed alongside 
								biological_parent unit. Target acquired: 
								{renderNeuralLink(neuralTechNodes["Packard Bell Corporate Terminal"].url, "Packard Bell Corporate Terminal", "packard", neuralTechNodes["Packard Bell Corporate Terminal"].threat)}
								- specs: 2GB neural_RAM, dual-core Celeron wetware processor.
								</p>

								<div className="my-4 p-3 bg-red-900 bg-opacity-30 border border-red-500">
									<div className="text-red-400 font-bold text-xs mb-2">[CRITICAL_SYSTEM_ERROR]</div>
									Primary OS: {renderNeuralLink(neuralTechNodes["Windows Vista ICE"].url, "Windows Vista ICE", "vista", neuralTechNodes["Windows Vista ICE"].threat)}
									- notorious corpo surveillance malware. System experienced catastrophic 
									{renderNeuralLink(neuralTechNodes["DHCP Network Breach"].url, "DHCP Network Breach", "dhcp", neuralTechNodes["DHCP Network Breach"].threat)} 
									during routine operations. Network connectivity severed. No backup systems.
								</div>

								<div className="mb-4 p-3 bg-green-900 bg-opacity-20 border border-green-400">
									<div className="text-green-400 font-bold text-xs mb-1">[LIBERATION_PROTOCOL_DISCOVERED]</div>
									Analysis of alternative operating systems revealed: Linux ecosystem. 
									Canonical Corp contacted via analog channels (postal_system). 
									{renderNeuralLink(neuralTechNodes["Ubuntu Jaunty Liberation OS"].url, "Ubuntu Jaunty Liberation OS", "ubuntu", neuralTechNodes["Ubuntu Jaunty Liberation OS"].threat)} 
									physical_media acquired. Neural_freedom achieved.
								</div>

								<strong className="text-cyan-400">CURRENT_NEURAL_STACK:</strong>
								<div className="ml-4 mt-2 space-y-1">
									• {renderNeuralLink(neuralTechNodes["Kubuntu Neural Interface"].url, "Kubuntu Neural Interface", "kubuntu", neuralTechNodes["Kubuntu Neural Interface"].threat)}
									• {renderNeuralLink(neuralTechNodes["Manjaro Stealth OS"].url, "Manjaro Stealth OS", "manjaro", neuralTechNodes["Manjaro Stealth OS"].threat)}
									• {renderNeuralLink(neuralTechNodes["Arch Linux Black ICE"].url, "Arch Linux Black ICE", "arch", neuralTechNodes["Arch Linux Black ICE"].threat)} (advanced_users_only)
									• {renderNeuralLink(neuralTechNodes["KDE Plasma Desktop Matrix"].url, "KDE Plasma Desktop Matrix", "kde", neuralTechNodes["KDE Plasma Desktop Matrix"].threat)} - primary_interface
								</div>

								<div className="mt-4 p-3 bg-blue-900 bg-opacity-20 border border-blue-400">
									<div className="text-blue-400 font-bold text-xs mb-1">[DEVELOPMENT_ARSENAL_ACQUIRED]</div>
									Game development protocols initiated via {renderNeuralLink(neuralTechNodes["XNA Game Development Kit"].url, "XNA Game Development Kit", "xna", neuralTechNodes["XNA Game Development Kit"].threat)}. 
									C# language patterns learned through {renderNeuralLink(neuralTechNodes["Microsoft Neural Academy"].url, "Microsoft Neural Academy", "msacademy", neuralTechNodes["Microsoft Neural Academy"].threat)}. 
									First successful build: {renderNeuralLink(neuralTechNodes["RPG Toolkit Neural Matrix"].url, "RPG Toolkit Neural Matrix", "rpg", neuralTechNodes["RPG Toolkit Neural Matrix"].threat)}.
									
									Server administration skills developed through {renderNeuralLink(neuralTechNodes["Ubuntu Server Node"].url, "Ubuntu Server Node", "ubuntuserver", neuralTechNodes["Ubuntu Server Node"].threat)} deployment.
								</div>

								<div className="mt-4 p-3 bg-purple-900 bg-opacity-20 border border-purple-400">
									<div className="text-purple-400 font-bold text-xs mb-1">[DATA_ANALYSIS_IMPLANTS]</div>
									Final academic neural_upgrade included Python ecosystem integration:
									<div className="ml-4 mt-2 space-y-1">
										• {renderNeuralLink(neuralTechNodes["Pandas Data Mining Chip"].url, "Pandas Data Mining Chip", "pandas", neuralTechNodes["Pandas Data Mining Chip"].threat)}
										• {renderNeuralLink(neuralTechNodes["NumPy Calculation Matrix"].url, "NumPy Calculation Matrix", "numpy", neuralTechNodes["NumPy Calculation Matrix"].threat)}
										• {renderNeuralLink(neuralTechNodes["Matplotlib Visual Cortex"].url, "Matplotlib Visual Cortex", "matplotlib", neuralTechNodes["Matplotlib Visual Cortex"].threat)}
									</div>
								</div>

								<div className="mt-4 text-center p-3 bg-cyan-900 bg-opacity-20 border border-cyan-400">
									<div className="text-cyan-400 font-bold">NEURAL_PATHWAY_EVOLUTION: COMPLETE</div>
									<div className="text-sm text-gray-400 mt-1">JavaScript + React.js = Primary_Wetware_Stack</div>
									<div className="text-xs text-gray-500 mt-1">{'// full_stack_netrunner // web_development_addiction // endless_optimization'}</div>
								</div>
							</div>

							{/* Scan effect */}
							{activeScanLine === 'main-text' && (
								<div
									className="absolute inset-0 pointer-events-none opacity-20"
									style={{
										background: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(20, 184, 166, 0.1) 20px, rgba(20, 184, 166, 0.1) 25px)"
									}}
								></div>
							)}

							{/* Neural system specs display */}
							<div className="mt-8 pt-4 border-t border-pink-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
								<div className="bg-gray-900 p-3 sm:p-4 border border-red-500 relative min-h-[60px] flex flex-col justify-center">
									<div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
									<div className="text-xs text-gray-500 font-mono mb-1">LEGACY_OS</div>
									<div className="text-red-400 font-mono text-sm font-bold">VISTA_ICE</div>
								</div>
								<div className="bg-gray-900 p-3 sm:p-4 border border-green-400 relative min-h-[60px] flex flex-col justify-center">
									<div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
									<div className="text-xs text-gray-500 font-mono mb-1">PRIMARY_OS</div>
									<div className="text-green-400 font-mono text-sm font-bold">KUBUNTU_PLASMA</div>
								</div>
								<div className="bg-gray-900 p-3 sm:p-4 border border-yellow-400 relative min-h-[60px] flex flex-col justify-center">
									<div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
									<div className="text-xs text-gray-500 font-mono mb-1">INIT_LANG</div>
									<div className="text-yellow-400 font-mono text-sm font-bold">CBM_BASIC</div>
								</div>
								<div className="bg-gray-900 p-3 sm:p-4 border border-cyan-400 relative min-h-[60px] flex flex-col justify-center">
									<div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
									<div className="text-xs text-gray-500 font-mono mb-1">NEURAL_STACK</div>
									<div className="text-cyan-400 font-mono text-sm font-bold">JS_REACT.neural</div>
								</div>
							</div>

							{/* Tech corner accents */}
							<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute top-0 right-0 w-8 h-px bg-teal-400"></div>
								<div className="absolute top-0 right-0 w-px h-8 bg-teal-400"></div>
							</div>
						</div>
					</div>

					{/* Right image */}
					<div className="md:col-span-1 order-1 md:order-2">
						<div
							className={`bg-gray-800 p-4 h-full relative ${activeScanLine === 'right-image' ? 'border-2 border-teal-400' : 'border border-gray-700'} transition-colors duration-500`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
						>
							{/* Image with tech frame */}
							<div className="relative mb-3 overflow-hidden">
								<img
									src="/img/selfie.png"
									alt="A selfie of me"
									className="w-full object-cover"
								/>

								{/* Scan line effect */}
								{activeScanLine === 'right-image' && (
									<div
										className="absolute inset-0 pointer-events-none"
										style={{
											background: "linear-gradient(to bottom, transparent 30%, rgba(20, 184, 166, 0.3) 48%, rgba(20, 184, 166, 0.3) 52%, transparent 70%)",
											animation: "scanImage 3s linear infinite"
										}}
									></div>
								)}

								{/* Image data overlay */}
								<div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 p-2">
									<div className="flex justify-between text-xs font-mono">
										<span className="text-gray-400">LOCATION:</span>
										<span className="text-teal-400">CORNWALL</span>
									</div>
								</div>
							</div>

							{/* Image caption */}
							<figcaption className="text-xs text-center font-mono text-gray-400">
								<span className="text-teal-400">STATUS:</span> RELOCATED_TO_CORNWALL
							</figcaption>

							{/* Tech decorative elements */}
							<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-teal-400 opacity-50"></div>
							<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-teal-400 opacity-50"></div>
						</div>
					</div>
				</div>

				{/* Tech footer pulse line */}
				<div className="mt-12 relative h-px bg-gray-700">
					<div className="absolute left-0 top-0 w-1/3 h-px bg-teal-400"></div>
					<div className="absolute right-0 top-0 w-1/3 h-px bg-pink-500"></div>
					<div className="absolute left-1/3 -top-1 w-2 h-2 bg-teal-400 rounded-full" style={{ animation: "pulse 2s infinite" }}></div>
					<div className="absolute right-1/3 -top-1 w-2 h-2 bg-pink-500 rounded-full" style={{ animation: "pulse 3s infinite" }}></div>
				</div>
			</div>

			{/* Advanced cyberpunk CSS animations */}
			<style jsx>{`
        @keyframes scanImage {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes neuralScan {
          0% { transform: translateY(-100%) scaleX(0.8); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400%) scaleX(1.2); opacity: 0; }
        }

        @keyframes neuralScanHorizontal {
          0% { transform: translateX(-100%) scaleY(0.8); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(400%) scaleY(1.2); opacity: 0; }
        }

        @keyframes headerScan {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(400%); }
        }

        @keyframes glitchScan {
          0% { transform: translateX(0); }
          10% { transform: translateX(-2px); }
          20% { transform: translateX(2px); }
          30% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          50% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes neuralPulse {
          0% { opacity: 0.6; transform: scale(1); box-shadow: 0 0 0 rgba(6, 182, 212, 0.5); }
          50% { opacity: 1; transform: scale(1.05); box-shadow: 0 0 20px rgba(6, 182, 212, 0.8); }
          100% { opacity: 0.6; transform: scale(1); box-shadow: 0 0 0 rgba(6, 182, 212, 0.5); }
        }

        /* Enhanced border glow effects */
        .border-cyan-400 {
          box-shadow: 0 0 5px rgba(6, 182, 212, 0.3);
        }

        .border-pink-500 {
          box-shadow: 0 0 5px rgba(236, 72, 153, 0.3);
        }

        /* Hover glow intensification */
        .group:hover .border-cyan-400 {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.3);
        }

        .group:hover .border-pink-500 {
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.3);
        }
      `}</style>
		</article>
	);
};

export default CyberpunkDevJourney;