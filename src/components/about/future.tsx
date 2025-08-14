import React, { useState, useEffect } from 'react';

export const CyberpunkTheFuture = () => {
	const [activeLine, setActiveLine] = useState(0);
	const [glitchEffect, setGlitchEffect] = useState(false);

	// Create a cycling highlight effect
	useEffect(() => {
		const lineInterval = setInterval(() => {
			setActiveLine(prev => (prev + 1) % 6);
		}, 3000);

		return () => clearInterval(lineInterval);
	}, []);

	// Create a periodic glitch effect
	useEffect(() => {
		const glitchInterval = setInterval(() => {
			setGlitchEffect(true);
			setTimeout(() => setGlitchEffect(false), 200);
		}, 8000);

		return () => clearInterval(glitchInterval);
	}, []);

	// Support methods
	const supportMethods = [
		{
			title: "FOLLOW",
			description: "You can encourage me on Twitter, Instagram and LinkedIn. Tell me what you need to know about web-development.",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
			</svg>
		},
		{
			title: "CREATE",
			description: "I would love to write about it and help by making learning material. I want to create content in the forms of blogs, posts and YouTube.",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
			</svg>
		},
		{
			title: "SHARE",
			description: "Share, share and share again! If you enjoy my content, please share it with friends and family. Comment and give me valuable feedback!",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
			</svg>
		},
		{
			title: "LEARN",
			description: "Learn React or Vue.js. These are areas I specialise in so can answer your questions and possibly help collaborate.",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
			</svg>
		},
		{
			title: "CONTRIBUTE",
			description: "Also, come join me on some GitHub projects and practice with me! Find an issue with my tutorial GitHub source let me know!",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
			</svg>
		},
		{
			title: "PR",
			description: "Make a pull request and show off your skills.",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
			</svg>
		}
	];

	return (
		<div className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Tech grid background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(52, 211, 153, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 211, 153, 0.1) 1px, transparent 1px)",
					backgroundSize: "20px 20px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(52, 211, 153, 0.1) 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}}></div>
			</div>

			{/* Circuit paths in background */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 w-full h-px bg-green-400"></div>
				<div className="absolute top-0 left-0 h-full w-px bg-green-400"></div>
				<div className="absolute bottom-0 right-0 w-full h-px bg-green-400"></div>
				<div className="absolute bottom-0 right-0 h-full w-px bg-green-400"></div>

				{/* Corner nodes */}
				<div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-green-400"></div>
				<div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-400"></div>
			</div>

			{/* Glitch effect overlay */}
			{glitchEffect && (
				<div className="absolute inset-0 bg-green-400 bg-opacity-5 z-20 pointer-events-none"></div>
			)}

			<div className="max-w-5xl mx-auto px-6 relative z-10">
				{/* Section header with tech styling */}
				<div className="mb-10">
					<div className="flex items-center gap-4">
						<div
							className="bg-green-900 bg-opacity-30 px-3 py-1 border-l-2 border-green-400 flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<div className="w-2 h-2 bg-green-400 mr-2"></div>
							<span className="text-green-400 font-mono text-xs">TRAJECTORY.exe</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400 uppercase tracking-wider flex items-center">
							<span role="img" aria-label="green heart" className="mr-2">💚</span>
							FUTURE_PROTOCOL
						</h2>
						<div className="h-px bg-green-400 flex-grow opacity-30"></div>
					</div>
					<div className="text-gray-400 font-mono text-sm mt-1">
            {/* forward_projections // collaboration_vectors // community_upgrades */}
					</div>
				</div>

				{/* Main content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Main text panel */}
					<div
						className={`md:col-span-1 bg-gray-800 p-6 relative border-r-2 border-green-400 ${glitchEffect ? 'border-pink-500' : ''} transition-colors duration-100`}
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }}
					>
						<h3 className="text-green-400 font-mono text-lg mb-6">SUPPORT_VECTORS</h3>

						<p className="text-gray-300 font-mono text-sm leading-relaxed">
							Ways to support my journey, values and mission. These methods help expand my network and improve my ability to create valuable content for the community.
						</p>

						{/* Cyberpunk progress bar */}
						<div className="mt-8 mb-4">
							<div className="flex justify-between text-xs font-mono mb-1">
								<span className="text-gray-400">MISSION PROGRESS</span>
								<span className="text-green-400">42%</span>
							</div>
							<div className="w-full h-1 bg-gray-700 relative">
								<div className="absolute inset-0 bg-green-400" style={{ width: "42%" }}></div>
								<div className="absolute h-full bg-green-400 animate-pulse" style={{ width: "1px", left: "42%" }}></div>
							</div>
						</div>

						{/* System stats */}
						<div className="grid grid-cols-2 gap-3 mt-8">
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">BLOGS</div>
								<div className="text-green-400 font-mono text-sm">ACTIVE</div>
							</div>
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">TUTORIALS</div>
								<div className="text-green-400 font-mono text-sm">COMING</div>
							</div>
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">YOUTUBE</div>
								<div className="text-green-400 font-mono text-sm">PLANNED</div>
							</div>
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">GITHUB</div>
								<div className="text-green-400 font-mono text-sm">ACTIVE</div>
							</div>
						</div>

						{/* Tech corner accents */}
						<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
							<div className="absolute top-0 right-0 w-8 h-px bg-green-400"></div>
							<div className="absolute top-0 right-0 w-px h-8 bg-green-400"></div>
						</div>
						<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
							<div className="absolute bottom-0 left-0 w-8 h-px bg-green-400"></div>
							<div className="absolute bottom-0 left-0 w-px h-8 bg-green-400"></div>
						</div>
					</div>

					{/* Support methods panel - interactive cards */}
					<div className="md:col-span-2">
						<div
							className="bg-gray-800 p-6 h-full relative"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							<h3 className="text-green-400 font-mono text-lg mb-6">COLLABORATION_OPTIONS</h3>

							<div className="space-y-4">
								{supportMethods.map((method, index) => (
									<div
										key={index}
										className={`bg-gray-900 p-4 border-l-2 ${activeLine === index ? 'border-green-400 bg-green-900 bg-opacity-10' : 'border-gray-700'} transition-colors duration-300 relative`}
									>
										<div className="flex items-start">
											<div
												className={`w-10 h-10 flex items-center justify-center border ${activeLine === index ? 'border-green-400 text-green-400' : 'border-gray-700 text-gray-500'} mr-4`}
												style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
											>
												{method.icon}
											</div>
											<div>
												<h4 className="text-green-400 font-mono font-bold mb-1">{method.title}</h4>
												<p className="text-gray-300 text-sm font-mono">{method.description}</p>
											</div>
										</div>

										{/* Highlight scanner effect */}
										{activeLine === index && (
											<div
												className="absolute left-0 top-0 bottom-0 w-px bg-green-400 opacity-80"
												style={{ animation: "pulseOpacity 2s infinite" }}
											></div>
										)}
									</div>
								))}
							</div>

							{/* Action button */}
							<div className="flex justify-end mt-6">
								<button
									className="inline-flex items-center px-4 py-2 bg-gray-900 text-green-400 border border-green-400 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300 text-sm font-mono"
									style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
								>
									INITIALIZE_COLLABORATION
									<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</button>
							</div>

							{/* Tech corner accents */}
							<div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 right-0 w-8 h-px bg-green-400"></div>
								<div className="absolute bottom-0 right-0 w-px h-8 bg-green-400"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Tech footer pulse line */}
				<div className="mt-12 relative h-px bg-gray-700">
					<div className="absolute left-0 top-0 w-1/3 h-px bg-green-400"></div>
					<div className="absolute right-0 top-0 w-1/3 h-px bg-pink-500"></div>
					<div className="absolute left-1/3 -top-1 w-2 h-2 bg-green-400 rounded-full" style={{ animation: "pulse 2s infinite" }}></div>
					<div className="absolute right-1/3 -top-1 w-2 h-2 bg-pink-500 rounded-full" style={{ animation: "pulse 3s infinite" }}></div>
				</div>
			</div>

			{/* CSS animations */}
			<style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulseOpacity {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
		</div>
	);
};

export default CyberpunkTheFuture;