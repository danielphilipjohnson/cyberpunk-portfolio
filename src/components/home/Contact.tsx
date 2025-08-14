"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function CyberpunkContact() {
	const [hoverSocial, setHoverSocial] = useState<string | null>(null);

	// Social media data
	const socialLinks = [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/daniel-philip-johnson/",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
					<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
				</svg>
			),
			color: "cyan",
			id: "LINK-001"
		},
		{
			name: "Twitter",
			url: "https://twitter.com/danielp_johnson",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
					<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
				</svg>
			),
			color: "blue",
			id: "LINK-002"
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/danielphilipjohnson/",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
					<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
				</svg>
			),
			color: "pink",
			id: "LINK-003"
		},
		{
			name: "YouTube",
			url: "https://www.youtube.com/c/DanielPhilipJohnson/",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
					<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
				</svg>
			),
			color: "lime",
			id: "LINK-004"
		},
		{
			name: "GitHub",
			url: "https://github.com/danielphilipjohnson",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 496 512">
					<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
				</svg>
			),
			color: "purple",
			id: "LINK-005"
		}
	];

	// Function to get color class based on color name
	const getColorClass = (color: string, type: 'text' | 'border' | 'bg') => {
		const colorMap = {
			blue: type === 'text' ? 'text-blue-400' : type === 'border' ? 'border-blue-400' : 'bg-blue-400',
			cyan: type === 'text' ? 'text-cyan-400' : type === 'border' ? 'border-cyan-400' : 'bg-cyan-400',
			pink: type === 'text' ? 'text-pink-500' : type === 'border' ? 'border-pink-500' : 'bg-pink-500',
			purple: type === 'text' ? 'text-purple-500' : type === 'border' ? 'border-purple-500' : 'bg-purple-500',
			green: type === 'text' ? 'text-green-400' : type === 'border' ? 'border-green-400' : 'bg-green-400',
			lime: type === 'text' ? 'text-lime-400' : type === 'border' ? 'border-lime-400' : 'bg-lime-400',
		};
		return colorMap[color] || colorMap.cyan;
	};

	return (
		<section className="py-16 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
			{/* Cyberpunk background elements */}
			<div className="absolute inset-0 z-0">
				{/* Grid pattern */}
				<div className="absolute inset-0 opacity-5">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: "radial-gradient(circle, rgba(156, 163, 175, 0.1) 1px, transparent 1px)",
							backgroundSize: "20px 20px"
						}}
					></div>
				</div>

				{/* Connection lines */}
				<svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
					<line x1="0" y1="0" x2="100" y2="100" stroke="rgb(45, 212, 191)" strokeWidth="0.1" />
					<line x1="100" y1="0" x2="0" y2="100" stroke="rgb(45, 212, 191)" strokeWidth="0.1" />
					<line x1="50" y1="0" x2="50" y2="100" stroke="rgb(45, 212, 191)" strokeWidth="0.1" />
					<line x1="0" y1="50" x2="100" y2="50" stroke="rgb(45, 212, 191)" strokeWidth="0.1" />
				</svg>

				{/* Tech decoration corners */}
				<div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-800 opacity-40"></div>
				<div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-800 opacity-40"></div>
				<div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-800 opacity-40"></div>
				<div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-800 opacity-40"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-3xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12">
						<div className="inline-block mb-4">
							<div className="flex items-center">
								<div
									className="bg-cyan-900 bg-opacity-30 px-3 py-1 border-l-2 border-cyan-400 flex items-center"
									style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
								>
									<div className="w-2 h-2 bg-cyan-400 mr-2"></div>
									<span className="text-cyan-400 font-mono text-xs">INITIATING_CONTACT_PROTOCOLS</span>
								</div>
								<div
									className="bg-cyan-900 bg-opacity-20 px-3 py-1 border-r-2 border-cyan-400"
									style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)" }}
								>
									<span className="text-cyan-400 font-mono text-xs">v.2.4.5</span>
								</div>
							</div>
						</div>

						<h2 className="text-3xl font-bold font-mono text-cyan-400 uppercase tracking-wide mb-2">
							NEURAL LINK ESTABLISHED
						</h2>

						<div className="w-24 h-1 bg-cyan-400 mx-auto mb-8 opacity-80"></div>

						<p className="text-xl text-gray-300 font-mono">
							Secure channel ready for data transmission
						</p>
					</div>

					{/* Contact Button */}
					<div className="text-center mb-16">
						<div className="relative inline-block">
							{/* Button with frame */}
							<Link
								href="/contact"
								className="inline-flex items-center justify-center px-16 py-4 font-mono font-bold uppercase text-black bg-cyan-400 tracking-wide transition-all duration-300 hover:bg-cyan-300"
								style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
							>
								{/* Tech decorations */}
								<span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black opacity-30"></span>
								<span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black opacity-30"></span>
								<span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black opacity-30"></span>
								<span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black opacity-30"></span>

								{/* Text with icon */}
								<span className="mr-2">Initialize Connection</span>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
								</svg>
							</Link>

							{/* Decorative elements */}
							<div
								className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 opacity-80"
								style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
							></div>
							<div
								className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 opacity-80"
								style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
							></div>
						</div>
					</div>

					{/* Social Links */}
					<div className="px-8">
						<div className="relative py-8 border-t border-b border-gray-800">
							{/* Tech decorations */}
							<div className="absolute top-0 left-0 transform -translate-y-1/2 bg-gray-900 px-4">
								<span className="text-gray-500 font-mono text-xs">EXTERNAL_LINKS</span>
							</div>

							<div className="absolute top-0 right-0 transform -translate-y-1/2 bg-gray-900 px-4">
								<span className="text-gray-500 font-mono text-xs">[5]</span>
							</div>

							{/* Social links */}
							<div className="flex flex-wrap justify-center">
								{socialLinks.map((social) => (
									<a
										key={social.id}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.name}
										className="relative m-2"
										onMouseEnter={() => setHoverSocial(social.id)}
										onMouseLeave={() => setHoverSocial(null)}
									>
										<div
											className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${hoverSocial === social.id
													? `${getColorClass(social.color, 'bg')} text-gray-900`
													: `bg-gray-800 ${getColorClass(social.color, 'text')}`
												}`}
										>
											{social.icon}

											{/* Scan effect on hover */}
											{hoverSocial === social.id && (
												<span className="absolute inset-0 rounded-full overflow-hidden">
													<span
														className="absolute w-full h-px bg-gray-900 opacity-30"
														style={{
															top: '50%',
															animation: 'scanY 1.5s infinite linear'
														}}
													></span>
													<span
														className="absolute w-px h-full bg-gray-900 opacity-30"
														style={{
															left: '50%',
															animation: 'scanX 1.5s infinite linear'
														}}
													></span>
												</span>
											)}
										</div>

										{/* Name that appears on hover */}
										<div
											className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${hoverSocial === social.id ? 'opacity-100' : 'opacity-0'
												}`}
										>
											<span className={`text-xs font-mono ${getColorClass(social.color, 'text')}`}>
												{social.name}
											</span>
										</div>
									</a>
								))}
							</div>

							{/* Status indicator */}
							<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-900 px-4">
								<div className="flex items-center">
									<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-1"></div>
									<span className="text-cyan-400 font-mono text-xs">SECURE CHANNELS</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Animations */}
			<style jsx>{`
        @keyframes scanX {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scanY {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
		</section>
	);
}