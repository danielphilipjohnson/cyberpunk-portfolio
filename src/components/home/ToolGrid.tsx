"use client"

import React, { useState } from 'react';
import CyberpunkBorderCard from './CyberpunkBorderCard';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

// Tool data with only valid colorScheme values: "blue", "pink", "green", "purple", "cyan", "lime"
const tools = [
	{
		name: "Neural_JS.dll",
		experience: "3+ Cycles Online",
		description: "Core neural interface protocol for dynamic web matrix interactions. Essential for frontend data-streaming and DOM manipulation.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/630x630/a46190d058/javascript.png",
		color: "cyan",
		status: "PRIMARY",
		code: "NEU-001"
	},
	{
		name: "Serpent.exe",
		experience: "3+ Cycles Online",
		description: "Advanced backend neural processing unit. Specialized for API data-mining, autonomous scripts, and server-side data fortresses.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/5000x4981/4d54b5e6e7/python.png",
		color: "blue",
		status: "PRIMARY",
		code: "SER-002"
	},
	{
		name: "PrismNet.CMS",
		experience: "2+ Cycles Online",
		description: "Content distribution network for corpo marketing campaigns. Streamlined data-flow for commercial net-presence operations.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/300x300/3c20858151/prismic-logo.png",
		color: "purple",
		status: "SECONDARY",
		code: "PRI-003"
	},
	{
		name: "Nuxt_Matrix.3",
		experience: "2+ Cycles Online",
		description: "Vue-based neural framework for rapid corporate site deployment. Server-side rendering for maximum Net penetration efficiency.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/288x178/1fec9bc2ef/nuxt.png",
		color: "green",
		status: "PRIMARY",
		code: "NUX-004"
	},
	{
		name: "React_Core.jsx",
		experience: "2+ Cycles Online",
		description: "Component-based neural interface builder. Utilized for freelance operations and startup hiring-system architecture deployment.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/70x70/4f6a6bc0f9/react.png",
		color: "cyan",
		status: "PRIMARY",
		code: "REA-005"
	},
	{
		name: "Django_Fortress.API",
		experience: "3+ Cycles Online",
		description: "Legacy data-fortress maintenance protocol. Specialized in monolith backend security and gradual endpoint migration procedures.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/550x550/9f34fc566e/django-rest.png",
		color: "green",
		status: "SECONDARY",
		code: "DJA-006"
	},
	{
		name: "Postgres_Vault.db",
		experience: "3+ Cycles Online",
		description: "Advanced relational data-storage matrix. Primary database neural-link for secure data operations and complex query processing.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/1200x1238/fdcd9b9aaf/postgres.png",
		color: "blue",
		status: "SECONDARY",
		code: "POS-007"
	},
	{
		name: "GraphNet_QL.query",
		experience: "1+ Cycle Online",
		description: "Experimental query-language interface replacing legacy Redux protocols. Streamlined data-fetching for API neural-networks.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/400x400/e55ba19986/graphql.png",
		color: "pink",
		status: "TERTIARY",
		code: "GRA-008"
	},
	{
		name: "DockerNet.container",
		experience: "2+ Cycles Online",
		description: "Containerization protocol for cloud migration ops. Automated deployment pipelines via GitHub neural-hooks to Google infrastructure.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/4416x2841/4f7db46cb3/docker.png",
		color: "blue",
		status: "PRIMARY",
		code: "DOC-009"
	},
	{
		name: "K8s_Orchestrator.yaml",
		experience: "1+ Cycle Online",
		description: "Container orchestration neural-mesh for scaling operations. Executed Django lift-and-shift protocol to Google's cluster infrastructure.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/3600x3493/076113f0ed/kubernetes.png",
		color: "blue",
		status: "SECONDARY",
		code: "K8S-010"
	},
	{
		name: "Google_Cloud.net",
		experience: "2+ Cycles Online",
		description: "Corporate cloud infrastructure backbone. Handles legacy system migration, serverless functions, and pub-sub neural event processing.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/1200x630/b423251df3/social-icon-google-cloud-1200-630.png",
		color: "cyan",
		status: "PRIMARY",
		code: "GCP-011"
	},
	{
		name: "Vue_Neural.3",
		experience: "2+ Cycles Online",
		description: "Advanced composition-API neural interface. Specialized for internal library development and reactive component architecture.",
		imageUrl: "",
		color: "green",
		status: "PRIMARY",
		code: "VUE-012"
	},
];

export default function CyberpunkToolsGrid() {
	const [activeCategory, setActiveCategory] = useState("ALL");
	const [hoveredTool, setHoveredTool] = useState<number | null>(null);

	// Get a compatibility percentage for display
	const getCompatibility = () => {
		return Math.floor(Math.random() * 20) + 80; // Returns 80-99
	};

	// Map color names to appropriate Tailwind classes, only using valid color schemes
	const getColorClass = (color: string, type: 'text' | 'border' | 'bg') => {
		const colorMap = {
			blue: type === 'text' ? 'text-blue-400' : type === 'border' ? 'border-blue-400' : 'bg-blue-400',
			green: type === 'text' ? 'text-green-400' : type === 'border' ? 'border-green-400' : 'bg-green-400',
			cyan: type === 'text' ? 'text-cyan-400' : type === 'border' ? 'border-cyan-400' : 'bg-cyan-400',
			pink: type === 'text' ? 'text-pink-500' : type === 'border' ? 'border-pink-500' : 'bg-pink-500',
			purple: type === 'text' ? 'text-purple-500' : type === 'border' ? 'border-purple-500' : 'bg-purple-500',
			lime: type === 'text' ? 'text-lime-400' : type === 'border' ? 'border-lime-400' : 'bg-lime-400',
		} as const;

		return colorMap[color as keyof typeof colorMap] || colorMap.blue; // Default to blue if color not found
	};

	return (
		<section className="py-16 relative overflow-hidden">
			{/* Tech background elements - using grid variant */}
			<div className="absolute inset-0 z-0">
				<CyberpunkSectionDecor variant="grid" intensity="high" />
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="mb-12">
					<div
						className="inline-block bg-gray-800 px-4 py-1 border-l-4 border-cyan-400 font-mono text-xs text-gray-400 mb-2"
						style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}
					>
						SYSTEM.STATUS // CYBERWARE.ARRAY
					</div>

					<div className="flex items-center gap-4">
						<h2 className="text-3xl font-bold font-mono text-cyan-400 uppercase">
							CYBERWARE_MATRIX
						</h2>
						<div className="h-px bg-cyan-400 flex-grow opacity-30"></div>
					</div>

					<p className="text-gray-400 font-mono mt-2 text-xs sm:text-sm break-words">
						{'//neural_enhancement_modules_for_net_operations'} v3.7.1
					</p>
				</div>

				{/* Tool Category Filters */}
				<div className="flex flex-wrap gap-2 mb-8">
					<button
						onClick={() => setActiveCategory("ALL")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "ALL" ? "bg-cyan-900 bg-opacity-30 text-cyan-400 border-cyan-400" : "border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
						ALL MODULES
					</button>
					<button
						onClick={() => setActiveCategory("CORE_IMPLANTS")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "CORE_IMPLANTS" ? "bg-green-900 bg-opacity-30 text-green-400 border-green-400" : "border-gray-700 text-gray-400 hover:border-green-400 hover:text-green-400"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
								CORE_IMPLANTS
					</button>
					<button
						onClick={() => setActiveCategory("SUPPORT_WARE")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "SUPPORT_WARE" ? "bg-blue-900 bg-opacity-30 text-blue-400 border-blue-400" : "border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
								SUPPORT_WARE
					</button>
					<button
						onClick={() => setActiveCategory("EXPERIMENTAL")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "EXPERIMENTAL" ? "bg-pink-900 bg-opacity-30 text-pink-500 border-pink-500" : "border-gray-700 text-gray-400 hover:border-pink-500 hover:text-pink-500"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
								EXPERIMENTAL
					</button>
				</div>

				{/* Tool Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{tools
						.filter(tool => activeCategory === "ALL" || activeCategory === "ALL MODULES" || 
							(activeCategory === "CORE_IMPLANTS" && tool.status === "PRIMARY") ||
							(activeCategory === "SUPPORT_WARE" && tool.status === "SECONDARY") ||
							(activeCategory === "EXPERIMENTAL" && tool.status === "TERTIARY"))
						.map((tool, index) => (
							<div
								key={index}
								onMouseEnter={() => setHoveredTool(index)}
								onMouseLeave={() => setHoveredTool(null)}
							>
								<CyberpunkBorderCard
									variant={index % 3 === 0 ? "top-left-cut" : index % 3 === 1 ? "bottom-right-cut" : "straight"}
									colorScheme={tool.color as "blue" | "green" | "cyan" | "pink" | "purple" | "lime"}
									glowEffect={hoveredTool === index}
									borderWidth="thin"
									className="h-full"
								>
									<div className="p-4">
										{/* Tool header with icon and ID */}
										<div className="flex justify-between items-start mb-4">
											<div className="flex items-center">
												{/* Tool icon with tech frame */}
												<div
													className={`w-12 h-12 flex items-center justify-center border ${getColorClass(tool.color, 'border')} bg-gray-800 mr-3 relative overflow-hidden`}
													style={{
														clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)"
													}}
												>
													{tool.imageUrl ? (
														<img
															src={tool.imageUrl}
															alt={tool.name}
															className="w-8 h-8 object-contain"
														/>
													) : (
														<div className={`text-2xl font-bold ${getColorClass(tool.color, 'text')}`}>V</div>
													)}

													{/* Corner accents */}
													<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-20"></div>
													<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-20"></div>
												</div>

												<div>
													{/* Tool name and ID */}
													<h3 className={`font-mono font-bold ${getColorClass(tool.color, 'text')}`}>
														{tool.name.toUpperCase()}
													</h3>
													<div className="flex items-center">
														<div className={`w-1.5 h-1.5 rounded-full ${getColorClass(tool.color, 'bg')} mr-1.5`}></div>
														<span className="text-gray-400 text-xs font-mono">{tool.code}</span>
													</div>
												</div>
											</div>

											{/* Tool status badge */}
											<div
												className={`text-xs px-2 py-0.5 font-mono ${getColorClass(tool.color, 'text')} border ${getColorClass(tool.color, 'border')} bg-gray-900 bg-opacity-80`}
												style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)" }}
											>
												{tool.status}
											</div>
										</div>

										{/* Tool description */}
										<div className="mb-4">
											<p className="text-gray-300 text-sm font-mono mb-2">{tool.description}</p>
											<div className="flex items-center text-xs">
															<span className="text-gray-500 font-mono mr-2">UPTIME:</span>
												<span className={`${getColorClass(tool.color, 'text')} font-mono`}>{tool.experience}</span>
											</div>
										</div>

										{/* Compatibility meter */}
										<div className="mt-4">
											<div className="flex justify-between text-xs font-mono mb-1">
															<span className="text-gray-500">INTEGRATION</span>
												<span className={`${getColorClass(tool.color, 'text')}`}>{getCompatibility()}%</span>
											</div>
											<div className="w-full h-1 bg-gray-800">
												<div
													className={`h-full ${getColorClass(tool.color, 'bg')}`}
													style={{ width: `${getCompatibility()}%` }}
												></div>
											</div>
										</div>

										{/* Tech decorative element - only visible on hover */}
										{hoveredTool === index && (
											<div className="absolute top-2 right-2 w-8 h-8 opacity-30 pointer-events-none">
												<div className={`absolute top-0 right-0 w-8 h-px ${getColorClass(tool.color, 'bg')}`}></div>
												<div className={`absolute top-0 right-0 w-px h-8 ${getColorClass(tool.color, 'bg')}`}></div>
												<div className={`absolute top-2 right-2 w-6 h-px ${getColorClass(tool.color, 'bg')}`}></div>
												<div className={`absolute top-2 right-2 w-px h-6 ${getColorClass(tool.color, 'bg')}`}></div>
											</div>
										)}
									</div>
								</CyberpunkBorderCard>
							</div>
						))
					}
				</div>
			</div>

			{/* CSS for scan animation */}
			<style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0.5; }
          100% { transform: translateY(100%); opacity: 0.2; }
        }
      `}</style>
		</section>
	);
}