import React, { useState } from 'react';
import { Camera, Github, Linkedin, Twitter, Mail, MapPin, BookOpen, Code, Cpu, Terminal, Coffee } from 'lucide-react';

export const CyberpunkAbout = () => {
	const [hoverStat, setHoverStat] = useState(null);

	// Personal stats with visual indicators
	const personalStats = [
		{ name: "CODING", value: 89 },
		{ name: "PSYCHOLOGY", value: 82 },
		{ name: "LINUX", value: 95 },
		{ name: "TEAMWORK", value: 87 },
		{ name: "VUE/REACT", value: 91 }
	];

	// Personal info points with icons
	const infoPoints = [
		{ icon: <span className="mr-2">😄</span>, text: "Pronouns: Him, he, they" },
		{ icon: <MapPin size={16} className="mr-2 text-pink-500" />, text: "Cornwall 🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
		{ icon: <BookOpen size={16} className="mr-2 text-cyan-400" />, text: "Bsc Psychology | University of Plymouth 🏫" },
		{ icon: <Code size={16} className="mr-2 text-green-400" />, text: "Psychologist turned React developer 🖥️" },
		{ icon: <Cpu size={16} className="mr-2 text-blue-400" />, text: "I'm currently using Kubuntu 20.04 and Manjaro 20.0.3" },
		{ icon: <Terminal size={16} className="mr-2 text-purple-500" />, text: "In my spare time I build linux from scratch" }
	];

	// Social links
	const socialLinks = [
		{ icon: <Github className="w-5 h-5" />, url: "#", color: "text-white hover:text-cyan-400" },
		{ icon: <Linkedin className="w-5 h-5" />, url: "#", color: "text-white hover:text-blue-400" },
		{ icon: <Twitter className="w-5 h-5" />, url: "#", color: "text-white hover:text-pink-500" },
		{ icon: <Mail className="w-5 h-5" />, url: "#", color: "text-white hover:text-green-400" }
	];

	return (
		<div className="relative bg-gray-900 overflow-hidden">
			{/* Background grid effect */}
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

			{/* Top accent bar */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-blue-400"></div>

			<div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
				{/* Profile section with neo-tech framing */}
				<div className="relative mb-16">
					{/* Profile header with angular cuts */}
					<div
						className="bg-gray-800 border-l-2 border-cyan-400 relative overflow-hidden"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
					>
						<div className="flex flex-col md:flex-row items-start md:items-center p-6">
							{/* Profile image with tech frame */}
							<div className="relative mb-6 md:mb-0 md:mr-8">
								<div
									className="w-32 h-32 border-2 border-cyan-400 relative flex items-center justify-center bg-gray-900"
									style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
								>
									<img
										src="/_nuxt/image/4a30fe.webp"
										alt="Daniel Philip Johnson"
										className="w-28 h-28 object-cover"
									/>

									{/* Corner accents */}
									<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400 opacity-70"></div>
									<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400 opacity-70"></div>
								</div>

								{/* Status indicator */}
								<div className="absolute -bottom-2 -right-2 bg-gray-900 text-xs font-mono py-1 px-2 border border-cyan-400 text-cyan-400">
									<div className="flex items-center">
										<div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
										<span>ONLINE</span>
									</div>
								</div>
							</div>

							{/* Name and title */}
							<div className="flex-1">
								<h1 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2 flex items-center">
									Daniel Philip Johnson
									<div className="ml-3 text-xs px-2 py-1 text-cyan-400 border border-cyan-400 hidden md:block">ID-X327</div>
								</h1>

								<div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
									<div>
										<h2 className="text-2xl font-bold font-mono text-cyan-400">Full-stack developer</h2>
										<h3 className="text-sm font-mono text-gray-400 flex items-center">
											<span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
											I work remote 🏠 in Cornwall
										</h3>
									</div>

									{/* Resume button with tech styling */}
									<div className="mt-4 md:mt-0">
										<a
											href="/static/Daniel_Philip_Johnson_Front_End_Engineer-afc8e0c1b966394ae65c1dbd9697fd63.pdf"
											download
											className="inline-flex items-center px-4 py-2 bg-gray-900 text-cyan-400 border border-cyan-400 hover:bg-cyan-900 hover:bg-opacity-20 transition-all duration-300 text-sm font-mono"
											style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)" }}
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
											DOWNLOAD_CV.pdf
										</a>
									</div>
								</div>

								{/* Social links */}
								<div className="flex space-x-2 mb-2">
									{socialLinks.map((link, index) => (
										<a
											key={index}
											href={link.url}
											className={`w-8 h-8 flex items-center justify-center border border-gray-700 bg-gray-900 ${link.color} transition-all duration-300`}
											style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }}
										>
											{link.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Bottom accent line with glowing points */}
					<div className="relative h-px bg-gray-700 mt-1">
						<div className="absolute left-0 top-0 w-1/4 h-px bg-cyan-400"></div>
						<div className="absolute right-0 top-0 w-1/4 h-px bg-pink-500"></div>
						<div className="absolute left-1/4 -top-1 w-2 h-2 bg-cyan-400 rounded-full" style={{ animation: "pulse 2s infinite" }}></div>
						<div className="absolute right-1/4 -top-1 w-2 h-2 bg-pink-500 rounded-full" style={{ animation: "pulse 3s infinite" }}></div>
					</div>
				</div>

				{/* Main content grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left column - Personal mission */}
					<div className="lg:col-span-2">
						<div
							className="bg-gray-800 border-l-2 border-pink-500 p-6 mb-8 relative"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
						>
							<h3 className="text-xl font-mono text-pink-500 mb-4 flex items-center">
								<div className="w-1 h-6 bg-pink-500 mr-3"></div>
								MISSION STATEMENT
							</h3>

							<p className="text-gray-300 font-mono leading-relaxed mb-4 text-sm">
								My personal goal is to help others get their first programming job
								and work my way towards becoming a senior.
							</p>

							{/* Personal stats */}
							<div className="mt-6">
								<div className="text-sm font-mono text-pink-500 mb-4">SYSTEM CAPABILITIES // PERFORMANCE_METRICS</div>
								<div className="space-y-3">
									{personalStats.map((stat, idx) => (
										<div
											key={idx}
											className="relative"
											onMouseEnter={() => setHoverStat(idx)}
											onMouseLeave={() => setHoverStat(null)}
										>
											<div className="flex justify-between text-xs font-mono mb-1">
												<span className="text-gray-400">{stat.name}</span>
												<span className="text-pink-500">{stat.value}%</span>
											</div>
											<div className="w-full h-1 bg-gray-700">
												<div
													className="h-full bg-pink-500"
													style={{ width: `${stat.value}%` }}
												></div>
											</div>

											{/* Hover effect */}
											{hoverStat === idx && (
												<div
													className="absolute inset-0 pointer-events-none opacity-20"
													style={{
														background: `repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(236, 72, 153, 0.5) 6px, transparent 7px, transparent 15px)`,
													}}
												></div>
											)}
										</div>
									))}
								</div>
							</div>

							{/* Tech corner accents */}
							<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-50">
								<div className="absolute top-0 right-0 w-8 h-px bg-pink-500"></div>
								<div className="absolute top-0 right-0 w-px h-8 bg-pink-500"></div>
							</div>
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-50">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-pink-500"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-pink-500"></div>
							</div>
						</div>

						{/* Fun fact panel */}
						<div
							className="bg-gray-800 border-l-2 border-cyan-400 p-6 mb-8 relative"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }}
						>
							<div className="flex items-center mb-4">
								<div className="w-5 h-5 border border-cyan-400 flex items-center justify-center mr-3">
									<span className="text-cyan-400 text-xs">!</span>
								</div>
								<h3 className="text-xl font-mono text-cyan-400">FUN FACT // HISTORICAL_DATA</h3>
							</div>

							<p className="text-gray-300 font-mono text-sm leading-relaxed">
								⚡ <span className="text-cyan-400">Fun fact:</span> I started
								programming with Basic on Commodore 64 (CBM 64) but never owned
								a pc until Windows Vista in 2008 😑. My desktop 🖥️ was Packard
								Bell iMedia x2414 with an enormous amount of Ram totalling 2GB.
								It did not take too long for me to consider my options and use
								Ubuntu 9.04 (Jaunty Jackalope). From, there I have used Linux
								ever since and yes, I use KDE for my GUI "you know what they say
								old habits die hard."
							</p>

							{/* Tech corner accents */}
							<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-50">
								<div className="absolute bottom-0 left-0 w-8 h-px bg-cyan-400"></div>
								<div className="absolute bottom-0 left-0 w-px h-8 bg-cyan-400"></div>
							</div>
						</div>
					</div>

					{/* Right column - Personal info */}
					<div>
						<div
							className="bg-gray-800 border-r-2 border-green-400 p-6 relative h-full"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 15px))" }}
						>
							<h3 className="text-xl font-mono text-green-400 mb-6 flex items-center justify-between">
								<span>PERSONAL_DATA</span>
								<div className="flex items-center text-xs">
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
									ONLINE
								</div>
							</h3>

							{/* Personal info list with tech styling */}
							<ul className="space-y-5 mb-6">
								{infoPoints.map((point, idx) => (
									<li key={idx} className="flex items-start">
										<div
											className="flex-shrink-0 w-8 h-8 bg-gray-900 border border-gray-700 flex items-center justify-center mr-3"
											style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }}
										>
											{point.icon}
										</div>
										<div className="text-gray-300 font-mono text-sm mt.5">{point.text}</div>
									</li>
								))}
							</ul>

							{/* Technical specs */}
							<div className="mt-8 pt-6 border-t border-gray-700">
								<div className="text-xs font-mono text-green-400 mb-4">SYSTEM_SPECS // HARDWARE</div>
								<div className="grid grid-cols-2 gap-3 text-xs font-mono">
									<div className="bg-gray-900 p-2 border border-gray-800">
										<div className="text-gray-500 mb-1">CPU</div>
										<div className="text-green-400">AMD Ryzen 7</div>
									</div>
									<div className="bg-gray-900 p-2 border border-gray-800">
										<div className="text-gray-500 mb-1">GPU</div>
										<div className="text-green-400">RTX 3070</div>
									</div>
									<div className="bg-gray-900 p-2 border border-gray-800">
										<div className="text-gray-500 mb-1">RAM</div>
										<div className="text-green-400">32GB DDR4</div>
									</div>
									<div className="bg-gray-900 p-2 border border-gray-800">
										<div className="text-gray-500 mb-1">OS</div>
										<div className="text-green-400">Kubuntu 20.04</div>
									</div>
								</div>
							</div>

							{/* Tech corner accents */}
							<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-50">
								<div className="absolute top-0 right-0 w-8 h-px bg-green-400"></div>
								<div className="absolute top-0 right-0 w-px h-8 bg-green-400"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CSS animations */}
			<style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
		</div>
	);
};

export default CyberpunkAbout;