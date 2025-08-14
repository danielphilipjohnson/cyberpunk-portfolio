import React, { useState, useEffect } from 'react';

export const CyberpunkValuesMission = () => {
	const [activeGlow, setActiveGlow] = useState(false);
	const [highlightLine, setHighlightLine] = useState(0);
	const [activeScanLine, setActiveScanLine] = useState(null);
	const [neuralState, setNeuralState] = useState('INITIALIZING');
	const [glitchEffect, setGlitchEffect] = useState(false);

	// Create a glowing effect that cycles on/off
	useEffect(() => {
		const glowInterval = setInterval(() => {
			setActiveGlow(prev => !prev);
		}, 4000);

		return () => clearInterval(glowInterval);
	}, []);

	// Advanced neural scanning system
	useEffect(() => {
		const scanInterval = setInterval(() => {
			setActiveScanLine(prev => {
				if (prev === null) return 'header-scan';
				if (prev === 'header-scan') return 'memory-scan';
				if (prev === 'memory-scan') return 'data-scan';
				return null;
			});
		}, 5000);

		return () => clearInterval(scanInterval);
	}, []);

	// Neural state cycling
	useEffect(() => {
		const stateInterval = setInterval(() => {
			setNeuralState(prev => {
				const states = ['INITIALIZING', 'ACTIVE', 'PROCESSING', 'OPTIMIZED'];
				const currentIndex = states.indexOf(prev);
				return states[(currentIndex + 1) % states.length];
			});
		}, 4000);

		return () => clearInterval(stateInterval);
	}, []);

	// Periodic glitch effect
	useEffect(() => {
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.85) {
				setGlitchEffect(true);
				setTimeout(() => setGlitchEffect(false), 300);
			}
		}, 15000);

		return () => clearInterval(glitchInterval);
	}, []);

	// Highlight different lines of text periodically
	useEffect(() => {
		const lineInterval = setInterval(() => {
			setHighlightLine(prev => (prev + 1) % 10);
		}, 3000);

		return () => clearInterval(lineInterval);
	}, []);

	return (
		<article className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Enhanced cyberpunk neural grid background */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.15) 1px, transparent 1px)",
					backgroundSize: "30px 30px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 2px, transparent 2px)",
					backgroundSize: "80px 80px"
				}}></div>
				{/* Additional neural network pattern */}
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(45deg, rgba(20, 184, 166, 0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(20, 184, 166, 0.05) 25%, transparent 25%)",
					backgroundSize: "60px 60px"
				}}></div>
			</div>

			{/* Enhanced data stream lines with neural activity */}
			<div className="absolute top-0 left-1/5 h-full w-px bg-purple-400 opacity-25 animate-pulse"></div>
			<div className="absolute top-0 right-1/5 h-full w-px bg-pink-500 opacity-25" style={{ animationDelay: '1s' }}></div>
			<div className="absolute top-0 left-2/3 h-full w-px bg-cyan-400 opacity-20" style={{ animationDelay: '2s' }}></div>
			<div className="absolute top-0 left-1/2 h-full w-px bg-green-400 opacity-15" style={{ animationDelay: '3s' }}></div>

			{/* Enhanced moving neural data particles */}
			<div
				className="absolute left-1/5 w-2 h-2 bg-purple-400 rounded-full"
				style={{ animation: "neuralDataFlow 16s linear infinite", top: "5%" }}
			></div>
			<div
				className="absolute right-1/5 w-2 h-2 bg-pink-500 rounded-full"
				style={{ animation: "neuralDataFlow 12s linear infinite", top: "15%" }}
			></div>
			<div
				className="absolute left-2/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"
				style={{ animation: "neuralDataFlow 10s linear infinite", top: "25%" }}
			></div>
			<div
				className="absolute left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full"
				style={{ animation: "neuralDataFlow 14s linear infinite", top: "35%" }}
			></div>

			{/* Advanced glitch overlay effect */}
			{glitchEffect && (
				<div className="absolute inset-0 z-20 pointer-events-none">
					<div className="absolute inset-0 bg-purple-400 opacity-8 animate-pulse"></div>
					<div className="absolute top-1/4 left-0 right-0 h-1 bg-pink-500 opacity-70" style={{ animation: "glitchFlicker 0.1s linear infinite" }}></div>
					<div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-cyan-400 opacity-60" style={{ animation: "glitchFlicker 0.12s linear infinite reverse" }}></div>
				</div>
			)}

			<div className="max-w-5xl mx-auto px-6 relative z-10">
				{/* Enhanced neural interface header with scanning effects */}
				<div className={`mb-10 relative ${activeScanLine === 'header-scan' ? 'bg-purple-900 bg-opacity-5' : ''} transition-all duration-700`}>
					{/* Header scan effect */}
					{activeScanLine === 'header-scan' && (
						<div className="absolute inset-0 pointer-events-none z-20"
							style={{
								background: "linear-gradient(to right, transparent 20%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 80%)",
								animation: "neuralHeaderScan 3s ease-in-out infinite"
							}}
						></div>
					)}

					<div className="flex items-center gap-4">
						<div
							className="bg-purple-900 bg-opacity-30 px-3 py-1 border-l-2 border-purple-500 flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<div className="w-2 h-2 bg-purple-500 mr-2 animate-pulse"></div>
							<span className="text-purple-500 font-mono text-xs">NEURAL_ETHICS.sys</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-purple-500 uppercase tracking-wider flex items-center">
							<span role="img" aria-label="brain" className="mr-2">🧠</span>
							VALUES_AND_DIRECTIVES
						</h2>
						<div className="h-px bg-purple-500 flex-grow opacity-30"></div>
					</div>
					<div className="flex items-center justify-between mt-3">
						<div className="text-gray-400 font-mono text-sm">
							// neural_protocols // void_directives // quantum_ethics // v2.1.7
						</div>
						<div className="flex items-center space-x-4 text-xs font-mono">
							<div className="text-gray-400">NEURAL_STATE: <span className={`font-bold ${
								neuralState === 'INITIALIZING' ? 'text-yellow-400' :
								neuralState === 'ACTIVE' ? 'text-green-400' :
								neuralState === 'PROCESSING' ? 'text-cyan-400' : 'text-purple-400'
							}`}>{neuralState}</span></div>
							<div className="text-gray-400">VOID_PROTOCOL: <span className="text-purple-500">ENABLED</span></div>
						</div>
					</div>
				</div>

				{/* Enhanced two-column layout with neural scanning */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Enhanced neural memory text column */}
					<div className="md:col-span-2 relative">
						<div
							className={`bg-gray-800 border-l-2 relative transition-all duration-700 ${
								activeScanLine === 'memory-scan' 
									? 'border-purple-500 shadow-lg shadow-purple-500/20' 
									: 'border-purple-500'
							} ${activeGlow ? 'shadow-[0_0_25px_rgba(168,85,247,0.3)]' : ''} p-6 h-full`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							{/* Memory scan effect */}
							{activeScanLine === 'memory-scan' && (
								<div className="absolute inset-0 pointer-events-none z-20"
									style={{
										background: "linear-gradient(to bottom, transparent 25%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 75%)",
										animation: "neuralMemoryScan 4s ease-in-out infinite"
									}}
								></div>
							)}

							{/* Enhanced neural memory bank indicator */}
							<div className="absolute top-3 right-3 flex items-center text-xs font-mono">
								<div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1 animate-pulse"></div>
								<span className="text-purple-500">NEURAL_MEMORY: SYNCHRONIZED</span>
							</div>

							{/* Enhanced neural directive protocols */}
							<div className="mt-6">
								<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4 relative">
									void.dev operates under core neural directives: optimize digital landscapes,
									enhance human-machine interfaces, and democratize access to neural programming
									knowledge. 99.7% of all code repositories remain open-source on the neural
									network for collective consciousness advancement. If data cannot be located
									in local memory banks, external neural networks are accessed to retrieve
									optimal solutions. All <a href="https://github.com/danielphilipjohnson" className="text-purple-500 hover:text-purple-400 underline font-bold">neural repositories</a> 
									are maintained for cybernetic enhancement and consciousness expansion.

									{/* Neural highlight pulse effect */}
									{highlightLine === 1 && (
										<div className="absolute inset-0 bg-purple-500 bg-opacity-10 pointer-events-none" style={{ animation: "neuralPulse 2s ease-in-out infinite" }}></div>
									)}
								</p>

								<p className="text-gray-300 font-mono text-sm leading-relaxed relative">
									Currently executing linguistic protocol expansions through Spanish-language
									neural pathways. Primary directive: eliminate knowledge access barriers
									caused by language encryption incompatibilities. Many neural networks remain
									isolated due to English-only programming interfaces. Currency conversion
									algorithms reveal educational content costs exceed neural credits available
									in developing regions. This represents a critical system vulnerability that
									void.dev has prioritized for resolution. Resource allocation protocols:
									volunteer computational cycles and neural credits to assist consciousness
									expansion across Pan-American neural networks. Seeking collaborative
									protocols for multi-language content translation. All contributors receive
									proper attribution in neural memory banks. Mission objective: universal
									access to cybernetic programming knowledge for all conscious entities
									desiring neural enhancement capabilities.

									{/* Neural highlight pulse effect */}
									{highlightLine === 2 && (
										<div className="absolute inset-0 bg-purple-500 bg-opacity-10 pointer-events-none" style={{ animation: "neuralPulse 2s ease-in-out infinite" }}></div>
									)}
								</p>
							</div>

							{/* Tech decorative elements */}
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-purple-500"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-purple-500"></div>
							</div>

							{/* Enhanced neural metrics display */}
							<div className={`mt-8 border-t border-gray-700 pt-4 grid grid-cols-3 gap-3 relative transition-all duration-700 ${
								activeScanLine === 'data-scan' ? 'bg-purple-900 bg-opacity-10' : ''
							}`}>
								{/* Data scan effect */}
								{activeScanLine === 'data-scan' && (
									<div className="absolute inset-0 pointer-events-none z-20"
										style={{
											background: "linear-gradient(to right, transparent 20%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 80%)",
											animation: "neuralDataScan 3s ease-in-out infinite"
										}}
									></div>
								)}

								<div className="text-center">
									<div className="text-xs text-gray-500 font-mono mb-1">NEURAL_REPOS</div>
									<div className="text-purple-500 font-mono font-bold">99.7%</div>
									<div className="w-full h-1 bg-gray-700 mt-1">
										<div className="h-full bg-purple-500" style={{ width: "99.7%" }}></div>
									</div>
								</div>
								<div className="text-center">
									<div className="text-xs text-gray-500 font-mono mb-1">PROTOCOLS</div>
									<div className="text-purple-500 font-mono font-bold">ESP / ENG / BIN</div>
									<div className="w-full h-1 bg-gray-700 mt-1">
										<div className="h-full bg-purple-500" style={{ width: "85%" }}></div>
									</div>
								</div>
								<div className="text-center">
									<div className="text-xs text-gray-500 font-mono mb-1">NEURAL_NET</div>
									<div className="text-purple-500 font-mono font-bold">GLOBAL</div>
									<div className="w-full h-1 bg-gray-700 mt-1">
										<div className="h-full bg-purple-500" style={{ width: "92%" }}></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Enhanced neural interface image column */}
					<div className="md:col-span-1">
						<div
							className="bg-gray-800 p-5 h-full relative"
							style={{ clipPath: "polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)" }}
						>
							{/* Enhanced neural interface frame */}
							<div
								className="border-2 border-purple-500 mb-3 relative overflow-hidden"
								style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
							>
								<img
									src="/_nuxt/image/07a03c.webp"
									alt="void.dev neural interface initialization - first corporate infiltration protocol"
									className="w-full object-cover"
								/>

								{/* Enhanced neural scan line effect */}
								<div
									className="absolute inset-0 pointer-events-none"
									style={{
										background: "linear-gradient(to bottom, transparent 25%, rgba(168, 85, 247, 0.3) 46%, rgba(168, 85, 247, 0.6) 50%, rgba(168, 85, 247, 0.3) 54%, transparent 75%)",
										animation: "neuralImageScan 4s linear infinite"
									}}
								></div>

								{/* Enhanced corner accents with pulse */}
								<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 opacity-50 animate-pulse"></div>
								<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
								<div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
								<div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-pink-500 opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
							</div>

							{/* Enhanced neural image caption */}
							<figcaption className="font-mono text-gray-400 text-xs text-center mb-2">
								<span className="text-purple-500">NEURAL_ID:</span> CORPORATE_INFILTRATION_PROTOCOL
							</figcaption>

							{/* Enhanced neural metadata */}
							<div className="bg-gray-900 p-3 border border-gray-700 relative">
								<div className="grid grid-cols-2 gap-1 text-xs font-mono">
									<div className="text-gray-500">INIT_DATE:</div>
									<div className="text-purple-500">07.21.2021</div>
									<div className="text-gray-500">NEURAL_HUB:</div>
									<div className="text-purple-500">CORP_MATRIX</div>
									<div className="text-gray-500">ACCESS_LVL:</div>
									<div className="text-purple-500">VOID_DEV</div>
									<div className="text-gray-500">STATUS:</div>
									<div className="text-green-400">INFILTRATED</div>
								</div>
								{/* Scanning line for metadata */}
								<div className="absolute bottom-0 left-0 w-full h-px bg-purple-500 opacity-30">
									<div className="w-4 h-px bg-purple-500" style={{ animation: "neuralMetadataScan 2s ease-in-out infinite" }}></div>
								</div>
							</div>

							{/* Tech decorative elements */}
							<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute top-0 right-0 w-8 h-px bg-purple-500"></div>
								<div className="absolute top-0 right-0 w-px h-8 bg-purple-500"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Enhanced cyberpunk neural interface animations */}
			<style jsx>{`
        @keyframes neuralDataFlow {
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
            transform: translateY(1200%);
            opacity: 0.2;
          }
        }
        
        @keyframes neuralImageScan {
          0% { 
            transform: translateY(-100%);
            opacity: 0.3;
          }
          50% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% { 
            transform: translateY(100%);
            opacity: 0.3;
          }
        }

        @keyframes neuralHeaderScan {
          0% {
            background: linear-gradient(to right, transparent 20%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 80%);
            transform: translateX(-100%);
            opacity: 0.4;
          }
          50% {
            background: linear-gradient(to right, transparent 10%, rgba(139, 92, 246, 0.5) 45%, rgba(139, 92, 246, 0.9) 50%, rgba(139, 92, 246, 0.5) 55%, transparent 90%);
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            background: linear-gradient(to right, transparent 20%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 80%);
            transform: translateX(100%);
            opacity: 0.4;
          }
        }

        @keyframes neuralMemoryScan {
          0% {
            background: linear-gradient(to bottom, transparent 25%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 75%);
            transform: translateY(-100%);
          }
          50% {
            background: linear-gradient(to bottom, transparent 15%, rgba(139, 92, 246, 0.5) 45%, rgba(139, 92, 246, 0.8) 50%, rgba(139, 92, 246, 0.5) 55%, transparent 85%);
            transform: translateY(0%);
          }
          100% {
            background: linear-gradient(to bottom, transparent 25%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 75%);
            transform: translateY(100%);
          }
        }

        @keyframes neuralDataScan {
          0% {
            background: linear-gradient(to right, transparent 20%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 80%);
            transform: translateX(-100%);
          }
          50% {
            background: linear-gradient(to right, transparent 10%, rgba(139, 92, 246, 0.5) 45%, rgba(139, 92, 246, 0.8) 50%, rgba(139, 92, 246, 0.5) 55%, transparent 90%);
            transform: translateX(0%);
          }
          100% {
            background: linear-gradient(to right, transparent 20%, rgba(139, 92, 246, 0.3) 48%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0.3) 52%, transparent 80%);
            transform: translateX(100%);
          }
        }

        @keyframes neuralMetadataScan {
          0%, 100% { 
            transform: translateX(-100%);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(2000%);
            opacity: 1;
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
            box-shadow: 0 0 5px rgba(139, 92, 246, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.8), 0 0 25px rgba(236, 72, 153, 0.3);
            transform: scale(1.02);
          }
        }
      `}</style>
		</article>
	);
};

export default CyberpunkValuesMission;