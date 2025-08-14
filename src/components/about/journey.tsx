import React, { useState, useEffect } from 'react';

export const CyberpunkDevJourney = () => {
	const [activeScanLine, setActiveScanLine] = useState(null);
	const [activeLink, setActiveLink] = useState(null);

	// Create scanning effect that moves between sections
	useEffect(() => {
		const scanInterval = setInterval(() => {
			setActiveScanLine(prev => {
				if (prev === null) return 'left-image';
				if (prev === 'left-image') return 'main-text';
				if (prev === 'main-text') return 'right-image';
				return null;
			});
		}, 4000);

		return () => clearInterval(scanInterval);
	}, []);

	// Tech links with styling
	const renderTechLink = (url, text, id) => (
		<a
			href={url}
			className={`relative text-cyan-400 ${activeLink === id ? 'border-b border-cyan-400' : ''}`}
			onMouseEnter={() => setActiveLink(id)}
			onMouseLeave={() => setActiveLink(null)}
		>
			{text}
			{activeLink === id && (
				<div
					className="absolute top-0 -right-3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
				></div>
			)}
		</a>
	);

	// Tech highlights for specific terms
	const techTerms = {
		"Commodore 64": "https://en.wikipedia.org/wiki/Commodore_64",
		"Blue Meanies from Outer Space": "https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/",
		"Packard Bell iMedia x2414": "https://www.mrmemory.co.uk/memory-ram-upgrades/packard-bell/imedia/x2414",
		"Windows Vista": "https://en.wikipedia.org/wiki/Windows_Vista",
		"DHCP no longer worked": "https://social.technet.microsoft.com/Forums/windows/en-US/69029855-21c1-411d-bdd3-b864222eefb6/dhcp-on-vista-has-stopped-running?forum=itprovistasetup",
		"Ubuntu 9.04": "https://wiki.ubuntu.com/JauntyJackalope",
		"Kubuntu 20.10": "https://kubuntu.org/",
		"Manjaro": "https://manjaro.org/",
		"Arch Linux": "https://archlinux.org/",
		"KDE": "https://kde.org/",
		"Windows 7": "https://en.wikipedia.org/wiki/Windows_7",
		"XNA Game Studio 3.0": "https://en.wikipedia.org/wiki/Microsoft_XNA_Game_Studio",
		"Microsoft Academy": "https://docs.microsoft.com/en-us/learn/",
		"RPG game from the toolkit": "https://sourceforge.net/projects/xnarpgtoolkit/",
		"Ubuntu Linux server": "https://ubuntu.com/server",
		"pandas": "https://pandas.pydata.org/",
		"NumPy": "https://numpy.org/",
		"matplotlib": "https://matplotlib.org/"
	};

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

			{/* Circuit paths in background */}
			<div className="absolute inset-0 z-0 opacity-10">
				<svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
					<path d="M100,100 L900,100 L900,900 L100,900 Z" fill="none" stroke="#06b6d4" strokeWidth="2" />
					<path d="M300,100 L300,900" fill="none" stroke="#06b6d4" strokeWidth="2" />
					<path d="M700,100 L700,900" fill="none" stroke="#06b6d4" strokeWidth="2" />
					<path d="M100,300 L900,300" fill="none" stroke="#06b6d4" strokeWidth="2" />
					<path d="M100,700 L900,700" fill="none" stroke="#06b6d4" strokeWidth="2" />
					<circle cx="300" cy="300" r="5" fill="#06b6d4" />
					<circle cx="700" cy="300" r="5" fill="#06b6d4" />
					<circle cx="300" cy="700" r="5" fill="#06b6d4" />
					<circle cx="700" cy="700" r="5" fill="#06b6d4" />
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Section header with tech styling */}
				<div className="mb-12">
					<div className="flex items-center gap-4">
						<div
							className="bg-teal-900 bg-opacity-30 px-3 py-1 border-l-2 border-teal-400 flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<div className="w-2 h-2 bg-teal-400 mr-2"></div>
							<span className="text-teal-400 font-mono text-xs">LOG_FILE.dat</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-teal-400 uppercase tracking-wider flex items-center">
							<span role="img" aria-label="notebook" className="mr-2">📔</span>
							DEVELOPER_EVOLUTION
						</h2>
						<div className="h-px bg-teal-400 flex-grow opacity-30"></div>
					</div>
					<div className="text-gray-400 font-mono text-sm mt-1">
            // system_genesis // node_initialization // skill_acquisition_timeline
					</div>
				</div>

				{/* First section - Childhood and first exposure */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
					{/* Left image */}
					<div className="md:col-span-1">
						<div
							className={`bg-gray-800 p-4 h-full relative ${activeScanLine === 'left-image' ? 'border-2 border-teal-400' : 'border border-gray-700'} transition-colors duration-500`}
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
						>
							{/* Image with tech frame */}
							<div className="relative mb-3 overflow-hidden">
								<img
									src="/_nuxt/image/0a9ae2.webp"
									alt="4 year old Daniel Johnson playing in the garden"
									className="w-full object-cover"
								/>

								{/* Scan line effect */}
								{activeScanLine === 'left-image' && (
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
										<span className="text-gray-400">SYS_ID:</span>
										<span className="text-teal-400">CHILD_01</span>
									</div>
								</div>
							</div>

							{/* Image caption */}
							<figcaption className="text-xs text-center font-mono text-gray-400">
								<span className="text-teal-400">SCAN:</span> 4 year old Daniel Johnson
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
							<h3 className="text-teal-400 font-mono text-lg mb-4">EARLY_SYSTEM_INITIALIZATION</h3>

							<div className="text-gray-300 font-mono text-sm leading-relaxed relative">
								<strong className="text-teal-400">When did I discover programming:</strong> Well, when I was a young
								child, my mother, in her spare time would copy code from a manual to
								make games run on the {renderTechLink("https://en.wikipedia.org/wiki/Commodore_64", "Commodore 64 (CBM 64)", "c64")}
								but putting them into memory. She kept this console for quite some
								time it was the closest thing we had to a computer. The first game I
								remember helping run was {renderTechLink("https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/", "Blue Meanies from Outer Space", "meanies")}

								<p className="mt-3">
									It was so exciting to see it running, however, not so for my mom.
									She claimed all that time for a space invaders clone.
								</p>
							</div>

							{/* Read more button */}
							<div className="mt-6">
								<a
									href="/about/my-story"
									className="inline-flex items-center px-4 py-2 bg-gray-900 text-teal-400 border border-teal-400 hover:bg-teal-900 hover:bg-opacity-20 transition-all duration-300 text-xs font-mono"
									style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
								>
									<span role="img" aria-label="go here" className="mr-1">👉</span>
									ACCESS_FULL_STORY.log
								</a>
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
							<h3 className="text-teal-400 font-mono text-lg mb-4">SYSTEM_UPGRADE_SEQUENCE</h3>

							<p className="text-gray-300 font-mono text-sm leading-relaxed">
								Span a few years to one year before I started college. I needed to
								buy a PC to submit my assignments. So during the summer of 2008, I
								worked so hard cleaning hotels with my mother. I now had enough
								money to buy my first computer a
								{renderTechLink("https://www.mrmemory.co.uk/memory-ram-upgrades/packard-bell/imedia/x2414", "Packard Bell iMedia x2414", "packard")}
								with an enormous amount of Ram totalling 2GB and an intel Celeron
								with duo cores. The best part was it was running everyone's
								favourite Windows version
								{renderTechLink("https://en.wikipedia.org/wiki/Windows_Vista", "Windows Vista", "vista")}.
								It was so hard to get any work done. Then one fatal evening
								windows broke the
								{renderTechLink("https://social.technet.microsoft.com/Forums/windows/en-US/69029855-21c1-411d-bdd3-b864222eefb6/dhcp-on-vista-has-stopped-running?forum=itprovistasetup", "DHCP no longer worked", "dhcp")}.
								I had no clue how to fix it and no other device to search how to fix
								it. I was then forced to use the library to find a solution get a
								windows disc this seemed almost impossible. I started to ask what is
								Windows and is there an alternative. The answer was Yes!
								{renderTechLink("https://wiki.ubuntu.com/JauntyJackalope", "Ubuntu 9.04 (Jaunty Jackalope)", "ubuntu")}.
								I encountered problems I was unable to download the ISO. So I
								asked canonical for a disc and enclosed a cheque to cover the
								shipping. From that day I have used Linux ever since. The distros I
								commonly use now are
								{renderTechLink("https://kubuntu.org/", "Kubuntu 20.10", "kubuntu")},
								{renderTechLink("https://manjaro.org/", "Manjaro", "manjaro")} and
								{renderTechLink("https://archlinux.org/", "Arch Linux", "arch")}. I
								use {renderTechLink("https://kde.org/", "KDE", "kde")} as my GUI "you
								know what they say old habits die hard." Yes, I occasionally use
								Windows. After I built my next PC, I got
								{renderTechLink("https://en.wikipedia.org/wiki/Windows_7", "Windows 7", "win7")}
								and came across
								{renderTechLink("https://en.wikipedia.org/wiki/Microsoft_XNA_Game_Studio", "XNA Game Studio 3.0", "xna")}.
								The idea of making games for Xbox seemed great. It gave me a
								moment of nostalgia with my mom. Which lead me to learn C# from
								{renderTechLink("https://docs.microsoft.com/en-us/learn/", "Microsoft Academy", "msacademy")}
								and eventually built an
								{renderTechLink("https://sourceforge.net/projects/xnarpgtoolkit/", "RPG game from the toolkit", "rpg")}
								they provided. I progressed onto making an
								{renderTechLink("https://ubuntu.com/server", "Ubuntu Linux server", "ubuntuserver")}
								out of interest as well as a samba server. All in my free time.
								During my final year of studies, I was responsible for creating
								experiments with python and using libraries such as
								{renderTechLink("https://pandas.pydata.org/", "pandas", "pandas")},
								{renderTechLink("https://numpy.org/", "NumPy", "numpy")}
								and
								{renderTechLink("https://matplotlib.org/", "matplotlib", "matplotlib")}
								to plot and analysis data. Now I found my calling with web
								development and love every moment I get using JavaScript and
								react.js
							</p>

							{/* Scan effect */}
							{activeScanLine === 'main-text' && (
								<div
									className="absolute inset-0 pointer-events-none opacity-20"
									style={{
										background: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(20, 184, 166, 0.1) 20px, rgba(20, 184, 166, 0.1) 25px)"
									}}
								></div>
							)}

							{/* System stats display */}
							<div className="mt-8 pt-4 border-t border-gray-700 grid grid-cols-2 md:grid-cols-4 gap-3">
								<div className="bg-gray-900 p-2">
									<div className="text-xs text-gray-500 font-mono mb-1">FIRST_OS</div>
									<div className="text-teal-400 font-mono text-sm">WINDOWS_VISTA</div>
								</div>
								<div className="bg-gray-900 p-2">
									<div className="text-xs text-gray-500 font-mono mb-1">CURRENT_OS</div>
									<div className="text-teal-400 font-mono text-sm">KUBUNTU_20.10</div>
								</div>
								<div className="bg-gray-900 p-2">
									<div className="text-xs text-gray-500 font-mono mb-1">FIRST_LANG</div>
									<div className="text-teal-400 font-mono text-sm">BASIC</div>
								</div>
								<div className="bg-gray-900 p-2">
									<div className="text-xs text-gray-500 font-mono mb-1">CURRENT_LANG</div>
									<div className="text-teal-400 font-mono text-sm">JAVASCRIPT</div>
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
									src="/_nuxt/image/5a372e.webp"
									alt="A selfie of me with the sea the st ives sea behind."
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

			{/* CSS animations */}
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
      `}</style>
		</article>
	);
};

export default CyberpunkDevJourney;