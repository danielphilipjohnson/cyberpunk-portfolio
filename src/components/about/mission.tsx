import React, { useState, useEffect } from 'react';

export const CyberpunkMissionStatement = () => {
	const [scanLine, setScanLine] = useState(false);
	const [hoveredWord, setHoveredWord] = useState(null);

	// Toggle scan line effect periodically
	useEffect(() => {
		const interval = setInterval(() => {
			setScanLine(prev => !prev);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	// Tech stack with visual representation
	const techStack = [
		{ name: "DJANGO-REST", color: "bg-green-400", width: "85%" },
		{ name: "NUXT", color: "bg-cyan-400", width: "92%" },
		{ name: "VUE", color: "bg-blue-400", width: "88%" },
		{ name: "TAILWIND", color: "bg-pink-500", width: "95%" },
		{ name: "WORDPRESS", color: "bg-purple-500", width: "75%" }
	];

	// Words to highlight in the mission paragraph
	const highlightWords = ["Full-Stack", "nuxt", "vue.js", "django-rest", "tailwind", "WordPress"];

	// Function to highlight specific words
	const highlightText = (text) => {
		let result = [];
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
			{/* Tech background grid */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
					backgroundSize: "20px 20px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}}></div>
			</div>

			{/* Animated scan line */}
			{scanLine && (
				<div
					className="absolute inset-0 z-10 pointer-events-none"
					style={{
						background: "linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.15) 49%, rgba(6, 182, 212, 0.1) 50%, transparent 51%)",
						backgroundSize: "100% 8px",
						animation: "scanEffect 10s linear infinite",
						opacity: 0.4
					}}
				></div>
			)}

			<div className="max-w-4xl mx-auto px-6 relative z-10">
				{/* Section header with tech styling */}
				<div className="mb-8">
					<div className="flex items-center">
						<div
							className="bg-blue-900 bg-opacity-30 text-cyan-400 font-mono px-3 py-1 mr-4 border border-cyan-400"
							style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)" }}
						>
							SYS.ID:0xF32A
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-cyan-400 uppercase tracking-wider">
							MISSION_PROTOCOL
						</h2>
						<div className="h-px flex-grow bg-cyan-400 ml-4 opacity-30"></div>
					</div>
					<div className="text-gray-400 font-mono text-sm mt-1">
            // primary_directive // system_purpose // v2.4.7
					</div>
				</div>

				{/* Mission quote in tech frame */}
				<div className="mb-8">
					<div
						className="bg-gray-800 border-l-2 border-pink-500 p-6 relative"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
					>
						<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pink-500 opacity-60"></div>
						<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 opacity-60"></div>

						<h3 className="text-xl font-mono text-pink-500 italic relative mb-2">
							"Mission driven nuxt developer with a passion to create apps that allows
							you to express your ideas."
						</h3>

						{/* Terminal cursor effect */}
						<div className="h-4 w-2 bg-pink-500 opacity-75 inline-block ml-1 animate-pulse absolute"></div>

						{/* Technical ID */}
						<div className="absolute -bottom-3 -right-3 bg-gray-900 text-xs font-mono text-gray-500 px-2 py-1">
							DIRECTIVE.0x1
						</div>
					</div>
				</div>

				{/* Main content with dual panel layout */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Main paragraph with highlighted tech words */}
					<div className="md:col-span-2">
						<div
							className="bg-gray-800 p-6 h-full relative"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }}
						>
							<div className="flex items-center mb-4">
								<div className="w-1.5 h-6 bg-cyan-400 mr-3"></div>
								<h3 className="text-lg font-mono text-cyan-400">DEVELOPER_PROFILE</h3>
							</div>

							<p className="text-gray-300 font-mono leading-relaxed text-sm mb-4">
								{highlightText("Enthusiastic programmer who is expanding his skills at hiyield. He currently works as a Full-Stack python developer. I have a Theoretical knowledge of the fundamentals HTML, CSS and JS. Formely specialised in react development, until switching to nuxt and vue.js. My tech stack is django-rest, nuxt, vue and tailwind for styling as well as contributing with the WordPress team.")}
							</p>

							{/* Status indicator */}
							<div className="flex items-center text-xs font-mono text-gray-400 mt-6">
								<div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
								<span>SYSTEM OPERATIONAL</span>
								<span className="ml-2 text-cyan-400">UPTIME: 765d:12h:43m</span>
							</div>

							{/* Tech corner accents */}
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-cyan-400"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-cyan-400"></div>
							</div>
						</div>
					</div>

					{/* Tech stack visualization */}
					<div>
						<div
							className="bg-gray-800 p-6 h-full border-r-2 border-lime-400"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-mono text-lime-400">TECH_STACK</h3>
								<div className="text-xs font-mono text-gray-500">v3.2.1</div>
							</div>

							<div className="space-y-4">
								{techStack.map((tech, index) => (
									<div key={index} className="relative">
										<div className="flex justify-between text-xs font-mono mb-1">
											<span className="text-gray-400">{tech.name}</span>
											<span className={`text-${tech.color.replace('bg-', '')}`}>{tech.width}</span>
										</div>
										<div className="w-full h-1 bg-gray-700">
											<div
												className={`h-full ${tech.color}`}
												style={{ width: tech.width }}
											></div>
										</div>
									</div>
								))}
							</div>

							{/* Tech corner accent */}
							<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute top-0 right-0 w-8 h-px bg-lime-400"></div>
								<div className="absolute top-0 right-0 w-px h-8 bg-lime-400"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CSS animations */}
			<style jsx>{`
        @keyframes scanEffect {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
		</section>
	);
};

export default CyberpunkMissionStatement;