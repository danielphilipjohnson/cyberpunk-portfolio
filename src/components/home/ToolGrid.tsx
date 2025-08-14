"use client"

import React, { useState } from 'react';
import CyberpunkBorderCard from './CyberpunkBorderCard';

// Tool data with only valid colorScheme values: "blue", "pink", "green", "purple", "cyan", "lime"
const tools = [
	{
		name: "JavaScript",
		experience: "3+ Years Active",
		description: "With over 3 years experience using JavaScript I have built websites, React and Vue webapps.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/630x630/a46190d058/javascript.png",
		color: "cyan", // Changed from yellow to cyan
		status: "PRIMARY",
		code: "JS-001"
	},
	{
		name: "Python",
		experience: "3+ Years Active",
		description: "Backend protocol handler. Used for APIs, scripting and data automation.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/5000x4981/4d54b5e6e7/python.png",
		color: "blue",
		status: "PRIMARY",
		code: "PY-002"
	},
	{
		name: "Prismic",
		experience: "2+ Years Active",
		description: "Built marketing sites and online stores for clients.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/300x300/3c20858151/prismic-logo.png",
		color: "purple",
		status: "SECONDARY",
		code: "PRC-003"
	},
	{
		name: "Nuxt",
		experience: "2+ Years Active",
		description: "Built marketing sites and online stores for clients.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/288x178/1fec9bc2ef/nuxt.png",
		color: "green",
		status: "PRIMARY",
		code: "NXT-004"
	},
	{
		name: "React",
		experience: "2+ Years Active",
		description: "With 2 years experience building with React both freelance and at a startup building a hiring system.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/70x70/4f6a6bc0f9/react.png",
		color: "cyan",
		status: "PRIMARY",
		code: "RCT-005"
	},
	{
		name: "Django Rest",
		experience: "3+ Years Active",
		description: "Maintain monolith legacy backend apis and slowly migrate endpoints to the new stack.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/550x550/9f34fc566e/django-rest.png",
		color: "green",
		status: "SECONDARY",
		code: "DRF-006"
	},
	{
		name: "Postgres",
		experience: "3+ Years Active",
		description: "When the project requires working with database I use Postgres.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/1200x1238/fdcd9b9aaf/postgres.png",
		color: "blue",
		status: "SECONDARY",
		code: "PSG-007"
	},
	{
		name: "GraphQL",
		experience: "1+ Year Active",
		description: "In my first job I slowly moved from redux to GraphQL. I use this as query language for some API's.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/400x400/e55ba19986/graphql.png",
		color: "pink",
		status: "TERTIARY",
		code: "GQL-008"
	},
	{
		name: "Docker",
		experience: "2+ Years Active",
		description: "Building images so projects can be moved to google cloud run. Creating github action hooks to deploy to google cloud.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/4416x2841/4f7db46cb3/docker.png",
		color: "blue",
		status: "PRIMARY",
		code: "DCK-009"
	},
	{
		name: "Kubernetes",
		experience: "1+ Year Active",
		description: "Moved a django-rest as part of a lift and shift to google kubernetes engine to scale a slow system.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/3600x3493/076113f0ed/kubernetes.png",
		color: "blue",
		status: "SECONDARY",
		code: "K8S-010"
	},
	{
		name: "Google Cloud",
		experience: "2+ Years Active",
		description: "Migrating legacy django-rest web applications with lift and shift and remove and replace. Using cloud functions and pub-sub events.",
		imageUrl: "https://img2.storyblok.com/64x64/filters:format(webp):quality(80)/f/136938/1200x630/b423251df3/social-icon-google-cloud-1200-630.png",
		color: "cyan",  // Changed from blue to cyan to add variety
		status: "PRIMARY",
		code: "GCP-011"
	},
	{
		name: "Vue",
		experience: "2+ Years Active",
		description: "Focuses mainly on vue 3 with composition API. Built internal libraries.",
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
		};

		return colorMap[color] || colorMap.blue; // Default to blue if color not found
	};

	return (
		<section className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Tech grid background */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(156, 163, 175, 0.1) 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}}></div>
				{/* Scanlines effect */}
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(156, 163, 175, 0.05) 25%, rgba(156, 163, 175, 0.05) 26%, transparent 27%, transparent 74%, rgba(156, 163, 175, 0.05) 75%, rgba(156, 163, 175, 0.05) 76%, transparent 77%, transparent)",
					backgroundSize: "100px 100px"
				}}></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="mb-12">
					<div
						className="inline-block bg-gray-800 px-4 py-1 border-l-4 border-cyan-400 font-mono text-xs text-gray-400 mb-2"
						style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}
					>
						SYSTEM.STATUS // TOOLKIT.ARRAY
					</div>

					<div className="flex items-center gap-4">
						<h2 className="text-3xl font-bold font-mono text-cyan-400 uppercase">
							TOOLKIT_UPLINK
						</h2>
						<div className="h-px bg-cyan-400 flex-grow opacity-30"></div>
					</div>

					<p className="text-gray-400 font-mono mt-2 text-sm">
            // specialized_tools_for_digital_ops // v2.4.2
					</p>
				</div>

				{/* Tool Category Filters */}
				<div className="flex flex-wrap gap-2 mb-8">
					<button
						onClick={() => setActiveCategory("ALL")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "ALL" ? "bg-cyan-900 bg-opacity-30 text-cyan-400 border-cyan-400" : "border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
						ALL TOOLS
					</button>
					<button
						onClick={() => setActiveCategory("PRIMARY")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "PRIMARY" ? "bg-green-900 bg-opacity-30 text-green-400 border-green-400" : "border-gray-700 text-gray-400 hover:border-green-400 hover:text-green-400"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
						PRIMARY
					</button>
					<button
						onClick={() => setActiveCategory("SECONDARY")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "SECONDARY" ? "bg-blue-900 bg-opacity-30 text-blue-400 border-blue-400" : "border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
						SECONDARY
					</button>
					<button
						onClick={() => setActiveCategory("TERTIARY")}
						className={`px-3 py-1 font-mono text-xs border ${activeCategory === "TERTIARY" ? "bg-pink-900 bg-opacity-30 text-pink-500 border-pink-500" : "border-gray-700 text-gray-400 hover:border-pink-500 hover:text-pink-500"}`}
						style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
					>
						TERTIARY
					</button>
				</div>

				{/* Tool Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{tools
						.filter(tool => activeCategory === "ALL" || tool.status === activeCategory)
						.map((tool, index) => (
							<div
								key={index}
								onMouseEnter={() => setHoveredTool(index)}
								onMouseLeave={() => setHoveredTool(null)}
							>
								<CyberpunkBorderCard
									variant={index % 3 === 0 ? "hex-corners" : index % 3 === 1 ? "tech-frame" : "top-left-cut"}
									colorScheme={tool.color as any}
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
												<span className="text-gray-500 font-mono mr-2">STATUS:</span>
												<span className={`${getColorClass(tool.color, 'text')} font-mono`}>{tool.experience}</span>
											</div>
										</div>

										{/* Compatibility meter */}
										<div className="mt-4">
											<div className="flex justify-between text-xs font-mono mb-1">
												<span className="text-gray-500">COMPATIBILITY</span>
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