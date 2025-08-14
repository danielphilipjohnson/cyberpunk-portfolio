import React, { useState, useEffect } from 'react';

export const CyberpunkOutsideProgramming = () => {
	const [hoveredBook, setHoveredBook] = useState(null);
	const [activeScanLine, setActiveScanLine] = useState(null);
	const [pulseText, setPulseText] = useState(null);
	const [glitchActive, setGlitchActive] = useState(false);
	const [biometricLevel, setBiometricLevel] = useState(0);
	const [personalityMatrix, setPersonalityMatrix] = useState(0);
	const [neuralLinkStatus, setNeuralLinkStatus] = useState('STABLE');
	const [dataIntegrity, setDataIntegrity] = useState(100);

	// Advanced neural scanning system
	useEffect(() => {
		const scanInterval = setInterval(() => {
			setActiveScanLine(prev => {
				if (prev === null) return 'header-scan';
				if (prev === 'header-scan') return 'library-scan';
				if (prev === 'library-scan') return 'persona-scan';
				if (prev === 'persona-scan') return 'biometric-scan';
				return null;
			});
		}, 5000);

		return () => clearInterval(scanInterval);
	}, []);

	// Neural activity simulation
	useEffect(() => {
		const biometricInterval = setInterval(() => {
			setBiometricLevel(Math.floor(Math.random() * 100));
			setPersonalityMatrix(Math.floor(Math.random() * 100));
			setDataIntegrity(Math.floor(85 + Math.random() * 15)); // 85-100%
			setNeuralLinkStatus(prev => {
				const statuses = ['STABLE', 'OPTIMAL', 'ENHANCED', 'SYNCHRONIZED'];
				return statuses[Math.floor(Math.random() * statuses.length)];
			});
		}, 3500);

		return () => clearInterval(biometricInterval);
	}, []);

	// Random glitch effects
	useEffect(() => {
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.8) {
				setGlitchActive(true);
				setTimeout(() => setGlitchActive(false), 350);
			}
		}, 15000);

		return () => clearInterval(glitchInterval);
	}, []);

	// Highlight different content sections periodically
	useEffect(() => {
		const pulseInterval = setInterval(() => {
			setPulseText(prev => (prev === null ? 0 : (prev + 1) % 4));
		}, 6000);

		return () => clearInterval(pulseInterval);
	}, []);

	// Enhanced neural data library with cyberpunk book metadata
	const neuralLibrary = [
		{
			title: "NEURAL_HABITS_PROTOCOL.data",
			originalTitle: "Habits for success Inspired Ideas to help you soar",
			author: "BRIAN_BENSON.dll",
			url: "https://www.amazon.co.uk/Habits-Success-Inspired-Ideas-Help-ebook/dp/B07FTQMQZM",
			id: "neural-book-1",
			threatLevel: "BENEFICIAL",
			iceRating: "KNOWLEDGE_BOOST",
			neuralImpact: "95%"
		},
		{
			title: "ILLUSION_MATRIX.exe",
			originalTitle: "The illusion of invincibility",
			author: "PAUL_WILLIAMS.neural",
			url: "https://www.amazon.co.uk/Illusion-Invincibility-Organizations-Inspired-Incas-ebook/dp/B07V3XTSDS",
			id: "neural-book-2",
			threatLevel: "ENLIGHTENING",
			iceRating: "PERCEPTION_HACK",
			neuralImpact: "88%"
		},
		{
			title: "LEARNING_ACCELERATOR.bin",
			originalTitle: "The first 20 hours",
			author: "JOSH_KAUFMAN.core",
			url: "https://www.amazon.co.uk/First-20-Hours-Learn-Anything/dp/0670921912",
			id: "neural-book-3",
			threatLevel: "OPTIMIZATION",
			iceRating: "SKILL_MATRIX",
			neuralImpact: "92%"
		},
		{
			title: "INNOVATION_DRIVER.sys",
			originalTitle: "The next big thing",
			author: "MATTHEW_MOCKRIDGE.ai",
			url: "https://www.amazon.co.uk/Your-Next-Thing-Matthew-Mockridge/dp/1642501417",
			id: "neural-book-4",
			threatLevel: "INSPIRING",
			iceRating: "VISION_ENHANCER",
			neuralImpact: "90%"
		},
		{
			title: "PRODUCTIVITY_OVERRIDE.cmd",
			originalTitle: "GET IT DONE 31 Ways to release your inner boss",
			author: "HAYLEY_HOBSON.boss",
			url: "https://www.amazon.co.uk/Get-Done-Ways-Release-Inner/dp/1633537900",
			id: "neural-book-5",
			threatLevel: "EMPOWERING",
			iceRating: "EFFICIENCY_BOOST",
			neuralImpact: "87%"
		}
	];

	// Enhanced cyberpunk runtime activity metrics
	const neuralActivities = [
		{ label: "NEURAL_PSYCHOLOGY.protocol", value: "ADVANCED", color: "text-pink-500", status: "ACTIVE" },
		{ label: "DIGITAL_COMBAT.rank", value: "VOID_TIER", color: "text-purple-500", status: "ARCHIVED" },
		{ label: "CONSCIOUSNESS_BROADCAST.desire", value: "CRITICAL", color: "text-cyan-500", status: "PENDING" },
		{ label: "SYMBIOTIC_LINK.stability", value: "ENHANCED", color: "text-green-400", status: "SYNCHRONIZED" }
	];

	return (
		<article className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Advanced neural network background matrix */}
			<div className="absolute inset-0 opacity-12">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(236, 72, 153, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(236, 72, 153, 0.15) 1px, transparent 1px)",
					backgroundSize: "30px 30px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 2px, transparent 2px)",
					backgroundSize: "80px 80px"
				}}></div>
				{/* Enhanced data stream lines */}
				<div className="absolute top-0 left-1/5 h-full w-px bg-pink-500 opacity-20 animate-pulse"></div>
				<div className="absolute top-0 right-1/5 h-full w-px bg-purple-500 opacity-20" style={{ animationDelay: '2s' }}></div>
				<div className="absolute top-0 left-2/3 h-full w-px bg-cyan-400 opacity-15" style={{ animationDelay: '4s' }}></div>
			</div>

			{/* Glitch overlay effect */}
			{glitchActive && (
				<div className="absolute inset-0 z-20 pointer-events-none">
					<div className="absolute inset-0 bg-pink-500 opacity-8 animate-pulse"></div>
					<div className="absolute top-1/4 left-0 right-0 h-1 bg-purple-500 opacity-70" style={{ animation: "glitchFlicker 0.1s linear infinite" }}></div>
					<div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-pink-500 opacity-60" style={{ animation: "glitchFlicker 0.12s linear infinite reverse" }}></div>
				</div>
			)}

			{/* Enhanced moving data particles */}
			<div className="absolute left-1/5 w-2 h-2 bg-pink-500 rounded-full" style={{ animation: "dataStream 12s linear infinite", top: "5%" }}></div>
			<div className="absolute right-1/5 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: "dataStream 18s linear infinite", top: "15%" }}></div>
			<div className="absolute left-2/3 w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{ animation: "dataStream 10s linear infinite", top: "25%" }}></div>

			<div className="max-w-5xl mx-auto px-6 relative z-10">
				{/* Section header with tech styling */}
				<div className="mb-10">
					<div className="flex items-center gap-4">
						<div
							className="bg-pink-900 bg-opacity-30 px-3 py-1 border-l-2 border-pink-500 flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<div className="w-2 h-2 bg-pink-500 mr-2"></div>
							<span className="text-pink-500 font-mono text-xs">VOID_RUNTIME.exe</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-pink-500 uppercase tracking-wider flex items-center">
							<span role="img" aria-label="thunder" className="mr-2">⚡</span>
							RUNTIME_ACTIVITIES
						</h2>
						<div className="h-px bg-pink-500 flex-grow opacity-30"></div>
					</div>
					<div className="text-gray-400 font-mono text-sm mt-1">
            // void_runtime_processes // neural_downtime_protocols // consciousness_expansion
					</div>
				</div>

				{/* Main content */}
				<div className="relative">
					{/* Scanning line effect */}
					{activeScanLine && (
						<div
							className="absolute left-0 right-0 h-2 bg-pink-500 bg-opacity-20 pointer-events-none"
							style={{ animation: "scanDown 8s linear 1" }}
						></div>
					)}

					<div
						className="bg-gray-800 p-6 border-l-2 border-pink-500 relative"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
					>
						{/* Memory bank indicator */}
						<div className="absolute top-3 right-3 flex items-center text-xs font-mono">
							<div className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-1 animate-pulse"></div>
							<span className="text-pink-500">VOID_RUNTIME: SYNCHRONIZED</span>
						</div>

						{/* First paragraph */}
						<div className={`relative p-3 ${pulseText === 0 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
								While void.dev operates primarily within digital matrices, runtime
								downtime protocols remain essential for consciousness stability.
								Psychological neural pathway analysis through knowledge data-streams
								provides enhanced understanding of human cognitive architecture.
								Current neural library contains optimized data packages for
								cybernetic enhancement protocols.
							</p>
						</div>

					{/* Enhanced neural data library */}
					<div className={`mb-6 p-6 bg-gray-900 border-2 relative ${activeScanLine === 'library-scan' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-gray-700'} transition-all duration-700`}
						style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}>

						{/* Library scan effect */}
						{activeScanLine === 'library-scan' && (
							<div className="absolute inset-0 pointer-events-none z-20"
								style={{
									background: "linear-gradient(to bottom, transparent 25%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 75%)",
									animation: "libraryScan 4s ease-in-out infinite"
								}}></div>
						)}

						{/* Library header with biometric readings */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center">
								<div className="h-px w-6 bg-pink-500 mr-3"></div>
								<span className="text-pink-500 font-mono font-bold">NEURAL_DATA_LIBRARY.sys</span>
								<div className="h-px flex-grow bg-pink-500 ml-3 opacity-40"></div>
							</div>
							<div className="flex items-center space-x-4 text-xs font-mono">
								<div className="text-gray-400">DATA_INTEGRITY: <span className="text-green-400">{dataIntegrity}%</span></div>
								<div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
							</div>
						</div>

						<ul className="space-y-4">
							{neuralLibrary.map((book, index) => (
								<li
									key={index}
									className="relative group"
									onMouseEnter={() => setHoveredBook(book.id)}
									onMouseLeave={() => setHoveredBook(null)}
								>
									<div className="bg-gray-800 p-4 border-l-2 border-purple-500 relative"
										style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}>
										
										{/* Book neural interface */}
										<a
											href={book.url}
											className="flex items-start text-sm font-mono group"
											target="_blank"
											rel="noreferrer"
										>
											<div
												className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 ${hoveredBook === book.id ? 'bg-pink-900 bg-opacity-40 border-pink-500 text-pink-500' : 'border-purple-500 text-purple-400'} mr-3 group-hover:border-pink-500 group-hover:text-pink-500 transition-all duration-300`}
												style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
											>
												<span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
											</div>

											<div className="flex-1">
												<div className="flex items-center justify-between mb-2">
													<span className="text-pink-400 group-hover:text-pink-300 font-bold transition-colors duration-300">
														{book.title}
													</span>
													<div className="flex items-center space-x-2">
														<span className={`text-xs px-2 py-1 border font-mono ${
															book.threatLevel === 'BENEFICIAL' || book.threatLevel === 'OPTIMIZATION' || book.threatLevel === 'EMPOWERING' ? 'text-green-400 border-green-400' :
															book.threatLevel === 'ENLIGHTENING' || book.threatLevel === 'INSPIRING' ? 'text-cyan-400 border-cyan-400' : 'text-purple-400 border-purple-400'
														}`}>
															{book.threatLevel}
														</span>
														<span className="text-purple-400 font-mono text-xs">{book.neuralImpact}</span>
													</div>
												</div>
												
												<div className="text-gray-400 text-xs mb-2">
													<span className="text-gray-500">ORIGINAL_TITLE:</span> {book.originalTitle}
												</div>
												
												<div className="flex justify-between items-center text-xs font-mono text-gray-500">
													<span>AUTHOR: <span className="text-purple-400">{book.author}</span></span>
													<span>ICE_RATING: <span className="text-cyan-400">{book.iceRating}</span></span>
												</div>
											</div>
										</a>

										{/* Neural activity indicator */}
										<div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
										
										{/* Hover neural link effect */}
										{hoveredBook === book.id && (
											<>
												<div className="absolute -left-1 top-0 bottom-0 w-1 bg-pink-500 animate-pulse"></div>
												<div className="absolute inset-0 bg-pink-500 bg-opacity-5 pointer-events-none"></div>
											</>
										)}
									</div>
								</li>
							))}
						</ul>

						{/* Library footer stats */}
						<div className="mt-6 pt-4 border-t border-pink-500 grid grid-cols-3 gap-4 text-xs font-mono">
							<div className="text-center">
								<div className="text-gray-500">ENTRIES</div>
								<div className="text-pink-500 font-bold">{neuralLibrary.length}</div>
							</div>
							<div className="text-center">
								<div className="text-gray-500">AVG_IMPACT</div>
								<div className="text-cyan-400 font-bold">90.4%</div>
							</div>
							<div className="text-center">
								<div className="text-gray-500">STATUS</div>
								<div className="text-green-400 font-bold">ACTIVE</div>
							</div>
						</div>
					</div>

						{/* Second paragraph */}
						<div className={`relative p-3 ${pulseText === 1 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
								Previous runtime cycle involved intensive digital combat simulations
								within corporate-sponsored virtual arenas. Achieved void-tier
								performance metrics but detected consciousness fragmentation protocols.
								Optimal skill execution != neural fulfillment algorithms. Identity
								obfuscation remains critical security protocol; however, consciousness
								broadcast initiatives through neural conference networks present
								intriguing expansion possibilities for knowledge propagation matrices.
								Future runtime: undefined but promising.
							</p>
						</div>

						{/* Third paragraph */}
						<div className={`relative p-3 ${pulseText === 2 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
								During competitive digital combat phases, neural programming provided
								optimal dopamine generation algorithms. Consciousness initialization
								routines executed with maximum efficiency. Current symbiotic neural link
								experiences minor overload from excessive data-sharing protocols.
								Compatible consciousness attempts processing but lacks cybernetic
								enhancement modules. Patience protocols: admirable.
							</p>
						</div>

						{/* Fourth paragraph */}
						<div className={`relative p-3 ${pulseText === 3 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed">
								Critical system upgrade: establishment of symbiotic neural link with
								compatible consciousness [NEXUS_7.enhanced]. Privacy encryption protocols
								maintained to preserve individual autonomy matrices. This neural
								partnership initiated optimal synchronization across all void.dev
								operational systems. Belief-strength algorithms provide exceptional
								stability during system vulnerability phases. Automatic load-balancing
								prevents consciousness overclocking. Continuous optimization feedback
								loops enhance performance metrics. Neural link status: perfectly
								complementary distributed system architecture.
							</p>
						</div>

						{/* Enhanced personal metrics dashboard */}
						<div className={`mt-8 pt-6 border-t-2 ${activeScanLine === 'biometric-scan' ? 'border-pink-500' : 'border-gray-700'} transition-colors duration-700`}>
							
							{/* Biometric scan effect */}
							{activeScanLine === 'biometric-scan' && (
								<div className="absolute inset-0 pointer-events-none z-20"
									style={{
										background: "linear-gradient(to right, transparent 20%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 80%)",
										animation: "biometricScan 3s ease-in-out infinite"
									}}></div>
							)}

							{/* Biometric header */}
							<div className="flex items-center justify-between mb-6">
								<div className="flex items-center">
									<div className="w-2 h-6 bg-pink-500 mr-3 animate-pulse"></div>
									<span className="text-pink-500 font-mono font-bold text-lg">BIOMETRIC_ANALYSIS.sys</span>
								</div>
								<div className="flex items-center space-x-4 text-xs font-mono">
									<div className="text-gray-400">NEURAL_LINK: <span className={`font-bold ${
										neuralLinkStatus === 'STABLE' ? 'text-green-400' :
										neuralLinkStatus === 'OPTIMAL' ? 'text-cyan-400' :
										neuralLinkStatus === 'ENHANCED' ? 'text-purple-400' : 'text-pink-400'
									}`}>{neuralLinkStatus}</span></div>
									<div className="text-gray-400">PERSONALITY: <span className="text-yellow-400">{personalityMatrix}%</span></div>
								</div>
							</div>

							{/* Enhanced metrics grid */}
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{neuralActivities.map((metric, index) => (
									<div key={index} className="bg-gray-900 p-4 border-2 border-gray-700 hover:border-pink-500 transition-all duration-300 relative group"
										style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}>
										
										{/* Metric scan lines */}
										<div className="absolute top-0 left-0 right-0 h-px bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										<div className="absolute bottom-0 left-0 right-0 h-px bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										
										{/* Status indicator */}
										<div className="absolute top-2 right-2 flex items-center">
											<div className={`w-2 h-2 rounded-full animate-pulse ${
												metric.status === 'ACTIVE' ? 'bg-green-400' :
												metric.status === 'SYNCHRONIZED' ? 'bg-cyan-400' :
												metric.status === 'PENDING' ? 'bg-yellow-400' :
												metric.status === 'ARCHIVED' ? 'bg-purple-400' : 'bg-gray-500'
											}`}></div>
										</div>
										
										<div className="text-xs text-gray-500 font-mono mb-2 uppercase">{metric.label}</div>
										<div className={`${metric.color} font-mono text-sm font-bold mb-1`}>{metric.value}</div>
										<div className={`text-xs font-mono ${
											metric.status === 'ACTIVE' ? 'text-green-400' :
											metric.status === 'SYNCHRONIZED' ? 'text-cyan-400' :
											metric.status === 'PENDING' ? 'text-yellow-400' :
											metric.status === 'ARCHIVED' ? 'text-purple-400' : 'text-gray-500'
										}`}>STATUS: {metric.status}</div>
										
										{/* Biometric progress bar */}
										<div className="mt-3 w-full h-1 bg-gray-700 relative overflow-hidden">
											<div className={`h-full ${metric.color.replace('text-', 'bg-')} relative`} style={{ 
												width: `${biometricLevel}%`,
												transition: 'width 3.5s ease'
											}}>
												<div className="absolute inset-0 opacity-60 animate-pulse"></div>
											</div>
											<div className="absolute top-0 right-0 h-full w-px bg-white opacity-20"></div>
										</div>
										
										<div className="mt-2 text-xs font-mono text-gray-500">{biometricLevel}% NEURAL</div>
									</div>
								))}
							</div>

							{/* Neural link status panel */}
							<div className="mt-6 p-4 bg-gray-900 border-2 border-pink-500 relative"
								style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<div className="w-3 h-3 bg-pink-500 animate-pulse"></div>
										<span className="text-pink-500 font-mono font-bold">VOID_RUNTIME_ANALYSIS</span>
									</div>
									<div className="text-xs font-mono text-gray-400">REAL_TIME_MONITORING</div>
								</div>
								<div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
									<div className="flex justify-between">
										<span className="text-gray-400">NEURAL_DRIVE:</span>
										<span className="text-pink-500 font-bold">CONSCIOUSNESS.expansion</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-400">SYMBIOTIC_LINK:</span>
										<span className="text-green-400 font-bold">NEXUS_7.synchronized</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-400">BROADCAST_PROTOCOL:</span>
										<span className="text-cyan-400 font-bold">NEURAL_SPEAKER.pending</span>
									</div>
								</div>
							</div>
						</div>

						{/* Tech corner accents */}
						<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
							<div className="absolute bottom-0 left-0 w-8 h-px bg-pink-500"></div>
							<div className="absolute bottom-0 left-0 w-px h-8 bg-pink-500"></div>
						</div>
						<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
							<div className="absolute top-0 right-0 w-8 h-px bg-pink-500"></div>
							<div className="absolute top-0 right-0 w-px h-8 bg-pink-500"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Complete CSS animations for cyberpunk neural interface */}
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
        
        @keyframes scanDown {
          0% { 
            top: 0;
            box-shadow: 0 2px 10px rgba(236, 72, 153, 0.5);
          }
          50% {
            box-shadow: 0 2px 20px rgba(236, 72, 153, 0.8);
          }
          100% { 
            top: 100%;
            box-shadow: 0 2px 10px rgba(236, 72, 153, 0.5);
          }
        }

        @keyframes libraryScan {
          0% {
            background: linear-gradient(to bottom, transparent 25%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 75%);
            transform: translateY(-100%);
          }
          50% {
            background: linear-gradient(to bottom, transparent 15%, rgba(236, 72, 153, 0.5) 45%, rgba(236, 72, 153, 0.8) 50%, rgba(236, 72, 153, 0.5) 55%, transparent 85%);
            transform: translateY(0%);
          }
          100% {
            background: linear-gradient(to bottom, transparent 25%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 75%);
            transform: translateY(100%);
          }
        }

        @keyframes biometricScan {
          0% {
            background: linear-gradient(to right, transparent 20%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 80%);
            transform: translateX(-100%);
            opacity: 0.4;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            background: linear-gradient(to right, transparent 10%, rgba(236, 72, 153, 0.5) 45%, rgba(236, 72, 153, 0.9) 50%, rgba(236, 72, 153, 0.5) 55%, transparent 90%);
            transform: translateX(0%);
            opacity: 1;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            background: linear-gradient(to right, transparent 20%, rgba(236, 72, 153, 0.3) 48%, rgba(236, 72, 153, 0.5) 50%, rgba(236, 72, 153, 0.3) 52%, transparent 80%);
            transform: translateX(100%);
            opacity: 0.4;
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
            box-shadow: 0 0 5px rgba(236, 72, 153, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.8), 0 0 25px rgba(139, 92, 246, 0.3);
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

        @keyframes scanLineMove {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes dataFlowVertical {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          20%, 80% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes threatIndicator {
          0% {
            border-color: rgba(236, 72, 153, 0.3);
            box-shadow: none;
          }
          50% {
            border-color: rgba(236, 72, 153, 0.8);
            box-shadow: inset 0 0 10px rgba(236, 72, 153, 0.2);
          }
          100% {
            border-color: rgba(236, 72, 153, 0.3);
            box-shadow: none;
          }
        }

        /* Utility animations */
        .animate-neural-pulse {
          animation: neuralPulse 2s ease-in-out infinite;
        }
        
        .animate-matrix-flow {
          animation: matrixFlow 20s linear infinite;
        }
        
        .animate-scan-line {
          animation: scanLineMove 3s ease-in-out infinite;
        }
        
        .animate-data-flow {
          animation: dataFlowVertical 4s ease-in-out infinite;
        }
        
        .animate-threat-indicator {
          animation: threatIndicator 1.5s ease-in-out infinite;
        }
      `}</style>
		</article>
	);
};

export default CyberpunkOutsideProgramming;