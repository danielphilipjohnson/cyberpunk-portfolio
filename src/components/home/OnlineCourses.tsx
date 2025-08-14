"use client"

import React, { useState } from 'react';
import CyberpunkBorderCard from './CyberpunkBorderCard';

// Online courses data
const courses = [
	{
		title: "JavaScript: The Advanced Concepts (2021)",
		provider: "Udemy",
		date: "March 2021",
		certificate: "https://www.udemy.com/certificate/UC-1c64e855-6643-4565-9a57-abcb8876bcf0/",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/284ab63ec7/udemy.jpeg",
		color: "cyan",
		id: "CRS-001",
		category: "JAVASCRIPT"
	},
	{
		title: "JavaScript: Understanding the Weird Parts",
		provider: "Udemy",
		date: "February 2021",
		certificate: "https://www.udemy.com/certificate/UC-464c8109-c194-43ca-b9db-1dbf80a2220b/",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/284ab63ec7/udemy.jpeg",
		color: "cyan",
		id: "CRS-002",
		category: "JAVASCRIPT"
	},
	{
		title: "React Front To Back",
		provider: "Udemy",
		date: "December 2020",
		certificate: "https://www.udemy.com/certificate/UC-f096e0de-844c-4b76-a402-24c369743fec/",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/284ab63ec7/udemy.jpeg",
		color: "cyan",
		id: "CRS-003",
		category: "FRAMEWORKS"
	},
	{
		title: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity",
		provider: "University of California",
		date: "November 2020",
		certificate: "https://www.coursera.org/account/accomplishments/certificate/VL7FXE8FKVNR",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/4ff46f54ea/uci.webp",
		color: "purple",
		id: "CRS-004",
		category: "PRODUCTIVITY"
	},
	{
		title: "Project Management: The Basics for Success",
		provider: "University of California",
		date: "October 2020",
		certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/WKJ9ETHJFF7S",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/4ff46f54ea/uci.webp",
		color: "purple",
		id: "CRS-005",
		category: "PRODUCTIVITY"
	},
	{
		title: "Full-Stack Web Development with React",
		provider: "University of Hong Kong",
		date: "Aug 2020",
		certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/WKJ9ETHJFF7S",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/200x200/3eebbdb5cb/hong.png",
		color: "blue",
		id: "CRS-006",
		category: "FRAMEWORKS"
	},
	{
		title: "Web Applications for Everybody",
		provider: "University of Michigan",
		date: "June 2020",
		certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/EWWJFR4LJM7J",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/4ff46f54ea/uci.webp",
		color: "blue",
		id: "CRS-007",
		category: "WEB"
	},
	{
		title: "Version Control with Git",
		provider: "Atlassian",
		date: "March 2020",
		certificate: "https://www.coursera.org/account/accomplishments/certificate/WCMWFJX9QAXV",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/160x160/903befb722/atlassian.webp",
		color: "blue",
		id: "CRS-008",
		category: "DEVOPS"
	},
	{
		title: "Google IT Automation with Python Specialization",
		provider: "Google",
		date: "March 2020",
		certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/EEGGHB96R3KQ",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/18aa79bc65/google.png",
		color: "green",
		id: "CRS-009",
		category: "PYTHON"
	},
	{
		title: "APIs and Microservices",
		provider: "freeCodeCamp",
		date: "May 2019",
		certificate: "https://www.freecodecamp.org/certification/daniel-philip-johnson/apis-and-microservices",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-010",
		category: "BACKEND"
	},
	{
		title: "Data Visualization",
		provider: "freeCodeCamp",
		date: "May 2019",
		certificate: "https://www.freecodecamp.org/certification/daniel-philip-johnson/data-visualization",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-011",
		category: "DATA"
	},
	{
		title: "Front End Libraries",
		provider: "freeCodeCamp",
		date: "May 2019",
		certificate: "https://www.freecodecamp.org/certification/daniel-philip-johnson/front-end-libraries",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-012",
		category: "FRAMEWORKS"
	},
	{
		title: "JavaScript Algorithms and Data Structures",
		provider: "freeCodeCamp",
		date: "February 2019",
		certificate: "https://www.freecodecamp.org/certification/daniel-philip-johnson/javascript-algorithms-and-data-structures",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-013",
		category: "JAVASCRIPT"
	},
	{
		title: "Responsive Web Design",
		provider: "freeCodeCamp",
		date: "February 2019",
		certificate: "https://www.freecodecamp.org/certification/daniel-philip-johnson/responsive-web-design",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-014",
		category: "WEB"
	},
	{
		title: "Legacy Back End",
		provider: "freeCodeCamp",
		date: "November 2017",
		certificate: "https://freecodecamp.org/certification/daniel-philip-johnson/legacy-back-end",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-015",
		category: "BACKEND"
	},
	{
		title: "Legacy Data Visualization",
		provider: "freeCodeCamp",
		date: "November 2017",
		certificate: "https://freecodecamp.org/certification/daniel-philip-johnson/legacy-data-visualization",
		logo: "https://img2.storyblok.com/75x75/filters:format(webp):quality(80)/f/136938/100x100/7c6c454b95/freecodecamp.jpeg",
		color: "lime",
		id: "CRS-016",
		category: "DATA"
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
		};
		return colorMap[color] || colorMap.cyan;
	};

	return (
		<section className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Tech grid background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-grid-pattern"></div>
				<div className="absolute inset-0 bg-circuit-pattern"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="mb-12">
					<div className="flex items-center gap-4 mb-4">
						<div
							className="px-3 py-1 bg-gray-800 border-l-4 border-cyan-400 font-mono text-xs text-gray-400"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							UPLOAD.STATUS // CORTEX_ENHANCEMENT.LOG
						</div>
						<div className="h-px bg-cyan-400 flex-grow opacity-30"></div>
					</div>

					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-bold font-mono text-cyan-400 uppercase tracking-wider">
							SKILL UPLOADS <span className="text-sm opacity-70">[v2.0.25]</span>
						</h2>

						<div className="text-xs text-gray-400 font-mono bg-gray-800 px-2 py-1 border border-gray-700">
							<span className="text-cyan-400">TOTAL_COUNT:</span> {courses.length}
						</div>
					</div>

					<p className="text-gray-400 font-mono mt-2 text-sm">
            // Neural interface modules for direct knowledge transfer and skill assimilation
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
								variant={course.id.endsWith('1') || course.id.endsWith('5') ? 'hex-corners' :
									course.id.endsWith('2') || course.id.endsWith('6') ? 'top-left-cut' :
										course.id.endsWith('3') || course.id.endsWith('7') ? 'bottom-right-cut' : 'tech-frame'}
								colorScheme={course.color as any}
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
												CERTIFICATE
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
							LOAD MORE MODULES ({courses.length - 8})
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