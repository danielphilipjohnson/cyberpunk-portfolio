"use client"

import React, { useState } from 'react';
import CyberpunkBorderCard from './CyberpunkBorderCard';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

// Corporate neural implant training modules - Night City classified programs
const courses = [
	{
		title: "CORTEX.JACK_v4.2: Direct Neural Interface Protocol",
		provider: "Arasaka Biotech Division",
		date: "2077.03",
		certificate: "https://arasaka.corp/neural-cert/CX-4A7B-9F2E",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/284ab63ec7/udemy.jpeg",
		color: "cyan",
		id: "IMP-001",
		category: "BRAIN_DANCE"
	},
	{
		title: "KIROSHI.OPTICS: Visual Data Stream Enhancement",
		provider: "Kiroshi Corporation",
		date: "2077.02",
		certificate: "https://kiroshi.net/cert/KO-5571-VISUAL",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/284ab63ec7/udemy.jpeg",
		color: "purple",
		id: "IMP-002",
		category: "OPTICS"
	},
	{
		title: "ZETATECH.RAM: Memory Palace Architecture",
		provider: "Zetatech Neural Labs",
		date: "2077.01",
		certificate: "https://zetatech.corp/neural/ZT-RAM-8834",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/4ff46f54ea/uci.webp",
		color: "blue",
		id: "IMP-003",
		category: "MEMORY_WARE"
	},
	{
		title: "MILITECH.TARGETING: Combat Reflex Augmentation",
		provider: "Militech Defense Systems",
		date: "2076.12",
		certificate: "https://militech.net/combat-cert/MT-TRG-9912",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/200x200/3eebbdb5cb/hong.png",
		color: "green",
		id: "IMP-004",
		category: "COMBAT_WARE"
	},
	{
		title: "BIOTECHNICA.SYNTH: Artificial Neuron Cultivation",
		provider: "Biotechnica Research",
		date: "2076.11",
		certificate: "https://biotechnica.corp/synth/BT-NEU-4471",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/4ff46f54ea/uci.webp",
		color: "lime",
		id: "IMP-005",
		category: "BIO_MODS"
	},
	{
		title: "NETWATCH.DAEMON: ICE Breaker Neural Protocols",
		provider: "NetWatch Authority",
		date: "2076.10",
		certificate: "https://netwatch.gov/daemon-cert/NW-ICE-7788",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/903befb722/atlassian.webp",
		color: "cyan",
		id: "IMP-006",
		category: "NET_RUNNER"
	},
	{
		title: "RAVEN.MICRO: Stealth Protocol Neural Mesh",
		provider: "Raven Microcybernetics",
		date: "2076.09",
		certificate: "https://raven.tech/stealth/RV-MESH-5533",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/18aa79bc65/google.png",
		color: "purple",
		id: "IMP-007",
		category: "STEALTH_TECH"
	},
	{
		title: "SCAV.TECH: Black Market Implant Extraction",
		provider: "Underground Clinic Network",
		date: "2076.08",
		certificate: "https://darknet.scav/extract/SC-EXT-1134",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "pink",
		id: "IMP-008",
		category: "BLACK_MARKET"
	},
	{
		title: "TRAUMA.TEAM: Emergency Neural Stabilization",
		provider: "Trauma Team International",
		date: "2076.07",
		certificate: "https://trauma.team/cert/TT-STAB-9966",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "green",
		id: "IMP-009",
		category: "MEDTECH"
	},
	{
		title: "KANG.TAO: AI-Neural Interface Harmony",
		provider: "Kang Tao Cybernetics",
		date: "2076.06",
		certificate: "https://kangtao.asia/ai-cert/KT-HAR-3344",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "blue",
		id: "IMP-010",
		category: "AI_SYNC"
	},
	{
		title: "CORPO.LOYALTY: Executive Neural Conditioning",
		provider: "Arasaka HR Division",
		date: "2076.05",
		certificate: "https://arasaka.corp/loyalty/AR-LOY-7722",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "cyan",
		id: "IMP-011",
		category: "CORPO_MODS"
	},
	{
		title: "NIGHT.CITY_SURVIVAL: Street Smart Neural Upgrades",
		provider: "Valentino Street Clinic",
		date: "2076.04",
		certificate: "https://streetclinic.val/survival/VAL-SUR-2211",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "IMP-012",
		category: "STREET_SMART"
	},
	{
		title: "MAELSTROM.RAGE: Combat Stim Neural Integration",
		provider: "Maelstrom Gang Tech",
		date: "2076.03",
		certificate: "https://maelstrom.gang/rage/MS-RAGE-8855",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "purple",
		id: "IMP-013",
		category: "GANG_TECH"
	},
	{
		title: "CORPO.ESPIONAGE: Corporate Intelligence Implants",
		provider: "Night Corp Black Ops",
		date: "2076.02",
		certificate: "https://nightcorp.shadow/esp/NC-ESP-4466",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "pink",
		id: "IMP-014",
		category: "BLACK_OPS"
	},
	{
		title: "VOODOO.BOYS: Net Architecture Invasion Protocols",
		provider: "Voodoo Boys Collective",
		date: "2076.01",
		certificate: "https://voodoo.net/invasion/VB-INV-1177",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "green",
		id: "IMP-015",
		category: "NET_RUNNER"
	},
	{
		title: "RELIC.GHOST: Consciousness Transfer Protocols",
		provider: "Arasaka Soul Killer Division",
		date: "2075.12",
		certificate: "https://arasaka.corp/relic/AR-SOUL-9999",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "cyan",
		id: "IMP-016",
		category: "CONSCIOUSNESS"
	}
];

// Group courses by category
const getCategories = () => {
	const categories = [...new Set(courses.map(course => course.category))];
	return ['ALL', ...categories];
};

export default function CyberpunkOnlineCourses() {
	const [activeCategory, setActiveCategory] = useState('ALL');
	const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
	const [showAll, setShowAll] = useState(false);

	const categories = getCategories();

	// Filter courses based on active category and limit display unless showAll is true
	const filteredCourses = courses
		.filter(course => activeCategory === 'ALL' || course.category === activeCategory)
		.slice(0, showAll ? courses.length : 8);

	// Get course color class
	const getColorClass = (color: string, type: 'text' | 'border' | 'bg') => {
		const colorMap = {
			blue: type === 'text' ? 'text-blue-400' : type === 'border' ? 'border-blue-400' : 'bg-blue-400',
			cyan: type === 'text' ? 'text-cyan-400' : type === 'border' ? 'border-cyan-400' : 'bg-cyan-400',
			pink: type === 'text' ? 'text-pink-500' : type === 'border' ? 'border-pink-500' : 'bg-pink-500',
			purple: type === 'text' ? 'text-purple-500' : type === 'border' ? 'border-purple-500' : 'bg-purple-500',
			green: type === 'text' ? 'text-green-400' : type === 'border' ? 'border-green-400' : 'bg-green-400',
			lime: type === 'text' ? 'text-lime-400' : type === 'border' ? 'border-lime-400' : 'bg-lime-400',
		} as const;
		return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
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
					<div className="flex items-center gap-4 mb-4">
						<div
							className="px-3 py-1 bg-gray-800 border-l-4 border-cyan-400 font-mono text-xs text-gray-400"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
						IMPLANT.STATUS // CORPO_NEURAL_DATABASE.LOG
						</div>
						<div className="h-px bg-cyan-400 flex-grow opacity-30"></div>
					</div>

					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-bold font-mono text-cyan-400 uppercase tracking-wider">
							NEURAL IMPLANTS <span className="text-sm opacity-70">[CORPO.v2077]</span>
						</h2>

						<div className="text-xs text-gray-400 font-mono bg-gray-800 px-2 py-1 border border-gray-700">
							<span className="text-cyan-400">{'// IMPLANT_CATALOG:'}</span> {courses.length}
						</div>
					</div>

					<p className="text-gray-400 font-mono mt-2 text-sm">
            			Classified corpo neural enhancement catalog - black market augmentations and corporate training modules
					</p>
				</div>

				{/* Category Filter Tabs */}
				<div className="mb-8 overflow-x-auto pb-2">
					<div className="flex space-x-2">
						{categories.map(category => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`whitespace-nowrap px-3 py-1 text-xs font-mono border ${activeCategory === category
										? 'bg-cyan-900 bg-opacity-30 text-cyan-400 border-cyan-400'
										: 'border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
									}`}
								style={{
									clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)"
								}}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Courses Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{filteredCourses.map((course) => (
						<div
							key={course.id}
							className="relative"
							onMouseEnter={() => setHoveredCourse(course.id)}
							onMouseLeave={() => setHoveredCourse(null)}
						>
							<CyberpunkBorderCard
								variant={course.id.endsWith('1') || course.id.endsWith('5') ? 'top-left-cut' :
									course.id.endsWith('2') || course.id.endsWith('6') ? 'bottom-right-cut' :
										course.id.endsWith('3') || course.id.endsWith('7') ? 'straight' : undefined}
								colorScheme={course.color as "blue" | "cyan" | "pink" | "purple" | "green" | "lime"}
								borderWidth="thin"
								glowEffect={hoveredCourse === course.id}
								className="h-full p-4"
							>
								<div className="flex">
									{/* Course logo in tech frame */}
									<div className="flex-shrink-0 mr-4">
										<div
											className={`w-16 h-16 border ${getColorClass(course.color, 'border')} flex items-center justify-center bg-gray-800 relative`}
											style={{
												clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)"
											}}
										>
											<img
												src={course.logo}
												alt={course.provider}
												className="w-12 h-12 object-contain"
											/>

											{/* Corner accents */}
											<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-20"></div>
											<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-20"></div>
										</div>
									</div>

									{/* Course details */}
									<div className="flex-1">
										<div className="flex justify-between items-start">
											<div>
												<h3 className={`font-mono font-bold text-sm ${getColorClass(course.color, 'text')} leading-tight`}>
													{course.title}
												</h3>
												<p className="text-gray-400 text-xs mt-1 font-mono">
													{course.provider}
												</p>
											</div>

											<div
												className={`text-xs px-2 py-0.5 font-mono ${getColorClass(course.color, 'text')} border ${getColorClass(course.color, 'border')} ml-2 flex-shrink-0`}
												style={{
													clipPath: "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))"
												}}
											>
												{course.id}
											</div>
										</div>

										<div className="flex justify-between items-center mt-2">
											<div className="flex items-center">
												<div className={`w-1.5 h-1.5 rounded-full ${getColorClass(course.color, 'bg')} mr-1.5`}></div>
												<span className="text-gray-400 text-xs font-mono">{course.date}</span>
											</div>

											<a
												href={course.certificate}
												target="_blank"
												rel="noopener noreferrer"
												className={`inline-flex items-center gap-1 text-xs font-mono ${getColorClass(course.color, 'text')} hover:underline`}
											>
												<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 640 512">
													<path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
												</svg>
									VERIFY.HASH
											</a>
										</div>

										{/* Tech scan effect on hover */}
										{hoveredCourse === course.id && (
											<div className="absolute inset-0 pointer-events-none overflow-hidden">
												<div
													className="absolute top-0 left-0 w-full h-1 bg-scan-line"
													style={{
														background: `linear-gradient(90deg, transparent, ${getColorClass(course.color, 'bg').replace('bg-', 'rgb(')})`,
														animation: 'scanEffect 1.5s ease-in-out infinite'
													}}
												></div>
											</div>
										)}
									</div>
								</div>
							</CyberpunkBorderCard>
						</div>
					))}
				</div>

				{/* Show More Button */}
				{!showAll && courses.length > 8 && (
					<div className="flex justify-center mt-8">
						<button
							onClick={() => setShowAll(true)}
							className="px-6 py-2 bg-gray-800 border border-cyan-400 text-cyan-400 font-mono text-sm hover:bg-cyan-900 hover:bg-opacity-20 transition-colors"
							style={{
								clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)"
							}}
						>
						INSTALL_ADDITIONAL.IMPLANTS ({courses.length - 8})
						</button>
					</div>
				)}
			</div>

			{/* CSS for animations */}
			<style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(156, 163, 175, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .bg-circuit-pattern {
          background-image: linear-gradient(0deg, transparent 24%, rgba(156, 163, 175, 0.05) 25%, rgba(156, 163, 175, 0.05) 26%, transparent 27%, transparent 74%, rgba(156, 163, 175, 0.05) 75%, rgba(156, 163, 175, 0.05) 76%, transparent 77%, transparent);
          background-size: 30px 30px;
        }
        
        @keyframes scanEffect {
          0% { transform: translateY(-100%); opacity: 0.7; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
      `}</style>
		</section>
	);
}