import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, BookOpen, Code, Cpu, Terminal } from 'lucide-react';
import Image from 'next/image';

export const CyberpunkAbout = () => {
	const [hoverStat, setHoverStat] = useState<number | null>(null);

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
					{/* Profile header with enhanced cyberpunk animations */}
					<div
						className="bg-gray-800 border-l-2 border-cyan-400 relative overflow-hidden group"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
					>
						{/* Animated scanning lines */}
						<div className="absolute inset-0 pointer-events-none">
							{/* Horizontal scan line */}
							<div className="absolute w-full h-0.5 bg-cyan-400 opacity-30"
								 style={{ animation: "scanHorizontal 3s ease-in-out infinite" }}></div>
							{/* Vertical scan line */}
							<div className="absolute w-0.5 h-full bg-pink-500 opacity-30"
								 style={{ animation: "scanVertical 4s ease-in-out infinite" }}></div>
						</div>

						{/* Glitch overlay effect */}
						<div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
							 style={{ animation: "glitchFlicker 8s infinite" }}></div>

						{/* Corporate data streams */}
						<div className="absolute top-2 right-4 flex space-x-1 opacity-60">
							<div className="w-1 h-1 bg-red-400 animate-pulse"></div>
							<div className="w-1 h-1 bg-yellow-400" style={{ animation: "pulse 1.5s infinite" }}></div>
							<div className="w-1 h-1 bg-green-400" style={{ animation: "pulse 2s infinite" }}></div>
						</div>

						{/* Neural activity indicators */}
						<div className="absolute top-4 left-2 text-xs font-mono text-cyan-400 opacity-50">
							<div className="flex items-center space-x-1">
								<span>NEURAL:</span>
								<span className="animate-pulse">ACTIVE</span>
							</div>
						</div>

						{/* Corner frame animations */}
						<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-60"
							 style={{ animation: "cornerPulse 2s ease-in-out infinite" }}></div>
						<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 opacity-60"
							 style={{ animation: "cornerPulse 2s ease-in-out infinite 1s" }}></div>
						<div className="flex flex-col md:flex-row items-start md:items-center p-6">
							{/* Profile image with tech frame */}
							<div className="relative mb-6 md:mb-0 md:mr-8">
								<div
									className="w-32 h-32 border-2 border-cyan-400 relative flex items-center justify-center bg-gray-900"
									style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
								>
									<Image
										src="/_nuxt/image/4a30fe.webp"
										alt="Daniel Philip Johnson"
										width={112}
										height={112}
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

							{/* Corporate Identity Header */}
							<div className="flex-1">
								<div className="flex items-center mb-3">
									<h1 className="text-3xl md:text-4xl font-bold font-mono text-white mr-4">
										DANIEL &quot;VOID&quot; JOHNSON
									</h1>
									<div className="hidden md:flex items-center space-x-2">
										<div className="text-xs px-3 py-1 text-red-400 border border-red-400 bg-red-900 bg-opacity-30 animate-pulse">
											ID: NC-MLT-4487
										</div>
										<div className="text-xs px-3 py-1 text-yellow-400 border border-yellow-400 bg-yellow-900 bg-opacity-30">
											CLEARANCE: ALPHA
										</div>
									</div>
								</div>

								<div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
									<div>
										<h2 className="text-2xl font-bold font-mono text-cyan-400 mb-1">SENIOR NETRUNNER OPERATIVE</h2>
										<div className="flex items-center space-x-4 mb-2">
											<h3 className="text-sm font-mono text-purple-400 flex items-center">
												<span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
												HIYIELD CORP - Neural Interface Division
											</h3>
										</div>
										<div className="text-xs font-mono text-gray-400 flex items-center">
											<span className="text-green-400 mr-2">▲</span>
											LOCATION: NIGHT_CITY_REMOTE_NODE // Cornwall Sector
										</div>
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

								{/* Social links with enhanced animations */}
								<div className="flex space-x-2 mb-2">
									{socialLinks.map((link, index) => (
										<a
											key={index}
											href={link.url}
											className={`w-8 h-8 flex items-center justify-center border border-gray-700 bg-gray-900 ${link.color} transition-all duration-300 hover:border-current hover:shadow-lg social-icon group`}
											style={{ 
												clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
												transform: `rotate(${index * 2}deg)`
											}}
										>
											{/* Pulse overlay on hover */}
											<div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
												 style={{ 
													clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
													animation: "socialGlow 2s ease-in-out infinite"
												}}></div>
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
								ever since and yes, I use KDE for my GUI &quot;you know what they say
								old habits die hard.&quot;
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

        @keyframes scanHorizontal {
          0% { transform: translateY(-100%) scaleX(0.8); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400%) scaleX(1.2); opacity: 0; }
        }

        @keyframes scanVertical {
          0% { transform: translateX(-100%) scaleY(0.8); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(400%) scaleY(1.2); opacity: 0; }
        }

        @keyframes glitchFlicker {
          0%, 98% { opacity: 0; }
          1% { opacity: 0.1; }
          2% { opacity: 0; }
          3% { opacity: 0.05; }
          4%, 7% { opacity: 0; }
          8% { opacity: 0.1; }
          9% { opacity: 0; }
          10% { opacity: 0.05; }
          11%, 98% { opacity: 0; }
          99% { opacity: 0.1; }
          100% { opacity: 0; }
        }

        @keyframes cornerPulse {
          0% { 
            opacity: 0.6; 
            transform: scale(1); 
            box-shadow: 0 0 0 rgba(6, 182, 212, 0.5);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); 
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
          }
          100% { 
            opacity: 0.6; 
            transform: scale(1); 
            box-shadow: 0 0 0 rgba(6, 182, 212, 0.5);
          }
        }

        @keyframes socialGlow {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1); }
        }

        /* Enhanced neon glow effects */
        .group:hover .border-cyan-400 {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
        }

        .group:hover .border-pink-500 {
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
        }

        .social-icon:hover {
          transform: rotate(0deg) scale(1.1) !important;
          box-shadow: 0 0 20px currentColor;
        }

        /* Particle texture background animations */
        .bg-gray-900::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, rgba(6, 182, 212, 0.15), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(236, 72, 153, 0.1), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(34, 197, 94, 0.1), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(59, 130, 246, 0.1), transparent);
          background-size: 200px 200px;
          animation: particleFloat 20s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes particleFloat {
          0% { transform: translate(0px, 0px); }
          25% { transform: translate(-10px, -10px); }
          50% { transform: translate(10px, -5px); }
          75% { transform: translate(-5px, 10px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>
		</div>
	);
};

export default CyberpunkAbout;