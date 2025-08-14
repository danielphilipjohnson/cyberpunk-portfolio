import React, { useState, useEffect } from 'react';

export const CyberpunkValuesMission = () => {
	const [activeGlow, setActiveGlow] = useState(false);
	const [highlightLine, setHighlightLine] = useState(0);

	// Create a glowing effect that cycles on/off
	useEffect(() => {
		const glowInterval = setInterval(() => {
			setActiveGlow(prev => !prev);
		}, 4000);

		return () => clearInterval(glowInterval);
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
			{/* Tech grid background */}
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

			{/* Data stream lines */}
			<div className="absolute top-0 left-1/4 h-full w-px bg-blue-400 opacity-10"></div>
			<div className="absolute top-0 right-1/4 h-full w-px bg-pink-500 opacity-10"></div>
			<div className="absolute top-0 left-1/2 h-full w-px bg-green-400 opacity-10"></div>

			{/* Moving data points */}
			<div
				className="absolute left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"
				style={{ animation: "dataFlow 15s linear infinite", top: "0%" }}
			></div>
			<div
				className="absolute right-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full"
				style={{ animation: "dataFlow 8s linear infinite", top: "10%" }}
			></div>
			<div
				className="absolute left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full"
				style={{ animation: "dataFlow 12s linear infinite", top: "20%" }}
			></div>

			<div className="max-w-5xl mx-auto px-6 relative z-10">
				{/* Section header with tech styling */}
				<div className="mb-10">
					<div className="flex items-center gap-4">
						<div
							className="bg-purple-900 bg-opacity-30 px-3 py-1 border-l-2 border-purple-500 flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<span className="text-purple-500 font-mono text-xs">CORE_VALUES.SYS</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-purple-500 uppercase tracking-wider flex items-center">
							<span role="img" aria-label="trophy" className="mr-2">🏆</span>
							VALUES_AND_DIRECTIVES
						</h2>
						<div className="h-px bg-purple-500 flex-grow opacity-30"></div>
					</div>
					<div className="text-gray-400 font-mono text-sm mt-1">
            // personal_ethics // mission_objectives // encrypted_core_values
					</div>
				</div>

				{/* Two-column layout with text and image */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Text column */}
					<div className="md:col-span-2 relative">
						<div
							className={`bg-gray-800 border-l-2 border-purple-500 p-6 h-full relative ${activeGlow ? 'shadow-[0_0_15px_rgba(168,85,247,0.2)]' : ''} transition-shadow duration-1000`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							{/* Memory bank indicator */}
							<div className="absolute top-3 right-3 flex items-center text-xs font-mono">
								<div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1 animate-pulse"></div>
								<span className="text-purple-500">MEMORY_BANK: ACTIVE</span>
							</div>

							{/* Paragraphs with tech styling */}
							<div className="mt-6">
								<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4 relative">
									I always try to leave the world a better place than yesterday. I try
									to give advice related to programming and personal. I always try 99%
									of the time to help the best I can. If I don't know the answer. I
									will try my hardest to find the answer or find another person that
									can help you. I keep almost all my code 99.9% opensource for others
									to look at and use on <a href="https://github.com/danielphilipjohnson" className="text-purple-500 hover:text-purple-400 underline">GitHub</a>. I want to help you build apps, websites and programs that express
									your ideas.

									{/* Highlight line effect */}
									{highlightLine === 1 && (
										<div className="absolute inset-0 bg-purple-500 bg-opacity-5 pointer-events-none"></div>
									)}
								</p>

								<p className="text-gray-300 font-mono text-sm leading-relaxed relative">
									Currently, I'm finishing off my language studies with the Spanish
									language. I know that speaking and reading in the English language
									is a blessing. Many people do not have access to good programming
									content due to it being in English. Providing a language barrier.
									Also, most educational content is not reasonably priced when you
									convert it to other currencies. For instance, Peruvian Soles to
									Dollars it can make courses very expensive. This is something I'm
									serious about addressing and hoping to help with. That's why I
									volunteer my time and money to help those from South America and
									North America. I want to also make educational content that is
									accessible to as much of the world as possible. If you would like to
									help by converting my future tutorials, blog and books to other
									languages. Please let me know :). I'm happy to give you credit. I
									hope we can all make educational content more accessible to those
									who desire to program can do it.

									{/* Highlight line effect */}
									{highlightLine === 2 && (
										<div className="absolute inset-0 bg-purple-500 bg-opacity-5 pointer-events-none"></div>
									)}
								</p>
							</div>

							{/* Tech decorative elements */}
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-purple-500"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-purple-500"></div>
							</div>

							{/* Stats display */}
							<div className="mt-8 border-t border-gray-700 pt-4 grid grid-cols-3 gap-3">
								<div className="text-center">
									<div className="text-xs text-gray-500 font-mono mb-1">OPEN SOURCE</div>
									<div className="text-purple-500 font-mono">99.9%</div>
								</div>
								<div className="text-center">
									<div className="text-xs text-gray-500 font-mono mb-1">LANGUAGES</div>
									<div className="text-purple-500 font-mono">ESP / ENG</div>
								</div>
								<div className="text-center">
									<div className="text-xs text-gray-500 font-mono mb-1">SUPPORT</div>
									<div className="text-purple-500 font-mono">GLOBAL</div>
								</div>
							</div>
						</div>
					</div>

					{/* Image column */}
					<div className="md:col-span-1">
						<div
							className="bg-gray-800 p-5 h-full relative"
							style={{ clipPath: "polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)" }}
						>
							{/* Image with tech frame */}
							<div
								className="border-2 border-purple-500 mb-3 relative overflow-hidden"
								style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
							>
								<img
									src="/_nuxt/image/07a03c.webp"
									alt="Daniel Johnson wearing a purple face mask on his first day to work"
									className="w-full object-cover"
								/>

								{/* Tech scan line effect */}
								<div
									className="absolute inset-0 pointer-events-none"
									style={{
										background: "linear-gradient(to bottom, transparent 30%, rgba(168, 85, 247, 0.2) 48%, rgba(168, 85, 247, 0.2) 52%, transparent 70%)",
										animation: "scanImage 3s linear infinite"
									}}
								></div>

								{/* Corner accents */}
								<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 opacity-50"></div>
								<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 opacity-50"></div>
							</div>

							{/* Image caption */}
							<figcaption className="font-mono text-gray-400 text-xs text-center mb-2">
								<span className="text-purple-500">IMAGE_ID:</span> FIRST_DAY_ENGINEER
							</figcaption>

							{/* Image metadata */}
							<div className="bg-gray-900 p-3 border border-gray-700">
								<div className="grid grid-cols-2 gap-1 text-xs font-mono">
									<div className="text-gray-500">DATE:</div>
									<div className="text-purple-500">07.21.2021</div>
									<div className="text-gray-500">LOCATION:</div>
									<div className="text-purple-500">HIYIELD_HQ</div>
									<div className="text-gray-500">ROLE:</div>
									<div className="text-purple-500">FULLSTACK_ENG</div>
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

			{/* CSS animations */}
			<style jsx>{`
        @keyframes dataFlow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        
        @keyframes scanImage {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
		</article>
	);
};

export default CyberpunkValuesMission;