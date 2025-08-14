"use client"

import React, { useState } from 'react';
import CyberpunkBorderCard from './CyberpunkBorderCard';

// Education data
const education = [
	{
		degree: "BSc Psychology",
		institution: "University of Plymouth",
		logo: "https://img2.storyblok.com/72x72/filters:format(webp):quality(80)/f/136938/200x200/9e525f77f5/plymouth.png",
		date: "May 2014",
		url: "https://www.plymouth.ac.uk/courses/undergraduate/bsc-psychology",
		description: "In this course, I studied the following topics Individual Differences, human development, Social, Developmental, Cognition, and Biological Psychology. I chose the following four current topics:",
		topics: [
			{
				title: "Neurobiology and crime",
				details: "Researched how lies are formed in the brain and what leads to body cues."
			},
			{
				title: "Neuroscience",
				details: "The role of mental imagery and mental health. The embodied brain and memory"
			},
			{
				title: "Mental disorders and Pharmaceuticalogy",
				details: "Investigated Alzheimers and the role of beta-amyloid plaques The role of anxiety in PTSD"
			}
		],
		colorScheme: "purple",
		id: "EDU-001",
		status: "COMPLETED"
	},
	{
		degree: "HND Applied Psychology",
		institution: "University of Plymouth",
		logo: "https://img2.storyblok.com/72x72/filters:format(webp):quality(80)/f/136938/200x200/1aaf67c08f/plymouth.png",
		date: "May 2012",
		url: "https://www.plymouth.ac.uk/courses/undergraduate/bsc-psychology",
		description: "In this course, I learned about behaviour, and its origins, from theoretical and practical perspectives.",
		topics: [
			{
				title: "Course Topics",
				details: "I studied the following topics: Education Psychology, Communication, Applied Cognition, Environmental Psychology, Health Psychology and Performance Psychology."
			}
		],
		colorScheme: "blue",
		id: "EDU-002",
		status: "COMPLETED"
	}
];

export default function CyberpunkEducation() {
	const [expandedDegree, setExpandedDegree] = useState<string | null>("EDU-001");
	const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

	return (
		<section className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Tech background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(156, 163, 175, 0.1) 1px, transparent 1px)",
					backgroundSize: "20px 20px"
				}}></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section header */}
				<div className="mb-12">
					<div className="flex items-center mb-4">
						<div
							className="bg-purple-900 bg-opacity-30 text-purple-500 font-mono px-3 py-1 mr-4 border border-purple-500"
							style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
						>
							SYS.ID:0x4544
						</div>
						<h2 className="text-3xl font-mono font-bold text-purple-500 uppercase tracking-wider">
							NEURAL IMPLANTS
						</h2>
						<div className="h-px flex-grow bg-purple-500 ml-4 opacity-30"></div>
					</div>

					<div
						className="font-mono text-sm text-gray-400 border-l-4 border-purple-500 pl-4"
					>
            // Educational enhancements and knowledge repositories integrated into neural cortex
					</div>
				</div>

				{/* Education Timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-0 top-0 bottom-0 w-px bg-purple-500 opacity-30 ml-4 md:ml-10"></div>

					<div className="space-y-12">
						{education.map((edu) => (
							<div key={edu.id} className="relative">
								{/* Timeline node */}
								<div className="absolute left-0 w-8 h-8 rounded-full bg-gray-900 border-2 border-purple-500 flex items-center justify-center z-10 md:ml-6 -ml-4">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
								</div>

								{/* Content */}
								<div className="ml-12 md:ml-20">
									<CyberpunkBorderCard
										variant="tech-frame"
										colorScheme={edu.colorScheme as any}
										borderWidth="medium"
										withAccent
										glowEffect={expandedDegree === edu.id}
										className="overflow-hidden"
									>
										{/* Header section */}
										<div
											className="p-4 flex justify-between items-start cursor-pointer"
											onClick={() => setExpandedDegree(expandedDegree === edu.id ? null : edu.id)}
										>
											<div className="flex items-center">
												{/* Logo */}
												<div
													className={`border-2 ${edu.colorScheme === 'purple' ? 'border-purple-500' : 'border-blue-400'} p-1 bg-gray-800 mr-4`}
													style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
												>
													<img
														src={edu.logo}
														width="64"
														height="64"
														alt={edu.institution}
														className="object-contain"
													/>
												</div>

												{/* Degree info */}
												<div>
													<h3 className={`font-mono font-bold text-xl ${edu.colorScheme === 'purple' ? 'text-purple-500' : 'text-blue-400'}`}>
														{edu.degree}
													</h3>
													<div className="flex items-center">
														<a
															href={edu.url}
															target="_blank"
															rel="noopener noreferrer"
															className={`font-mono text-sm ${edu.colorScheme === 'purple' ? 'text-purple-500' : 'text-blue-400'} hover:underline`}
														>
															@{edu.institution}
														</a>
													</div>
													<p className="text-gray-400 text-xs font-mono mt-1">
														<span className={`${edu.colorScheme === 'purple' ? 'text-purple-500' : 'text-blue-400'} mr-2`}>TIMESTAMP:</span>
														{edu.date}
													</p>
												</div>
											</div>

											{/* Status badge */}
											<div className="flex flex-col items-end">
												<div
													className={`px-2 py-1 text-xs font-mono ${edu.colorScheme === 'purple' ? 'text-purple-500 border-purple-500' : 'text-blue-400 border-blue-400'} border`}
													style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)" }}
												>
													{edu.id}
												</div>

												<div className="flex items-center mt-2">
													<div className={`w-2 h-2 rounded-full ${edu.colorScheme === 'purple' ? 'bg-purple-500' : 'bg-blue-400'} mr-1`}></div>
													<span className={`text-xs font-mono ${edu.colorScheme === 'purple' ? 'text-purple-500' : 'text-blue-400'}`}>{edu.status}</span>
												</div>

												{/* Expand/collapse icon */}
												<div className="mt-2 text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className={`w-5 h-5 transition-transform ${expandedDegree === edu.id ? 'rotate-180' : ''}`}
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
													</svg>
												</div>
											</div>
										</div>

										{/* Expanded content */}
										<div
											className={`bg-gray-800 transition-all duration-300 overflow-hidden ${expandedDegree === edu.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
												}`}
										>
											<div className="p-4 border-t border-gray-700">
												{/* Description */}
												<div className="mb-4">
													<p className="text-gray-300 font-mono text-sm">{edu.description}</p>
												</div>

												{/* Topics */}
												<div className="space-y-4">
													{edu.topics.map((topic, idx) => (
														<div
															key={idx}
															className="bg-gray-900 p-3"
															onMouseEnter={() => setHoveredTopic(`${edu.id}-${idx}`)}
															onMouseLeave={() => setHoveredTopic(null)}
															style={{
																clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)"
															}}
														>
															<div className="flex items-start">
																<div
																	className={`px-2 py-1 font-mono text-xs ${edu.colorScheme === 'purple' ? 'bg-purple-900 bg-opacity-30 text-purple-500 border-purple-500' : 'bg-blue-900 bg-opacity-30 text-blue-400 border-blue-400'} border mr-3`}
																>
																	{`${edu.id}.${idx + 1}`}
																</div>

																<div className="flex-1">
																	<h4 className={`font-mono font-bold mb-1 ${edu.colorScheme === 'purple' ? 'text-purple-500' : 'text-blue-400'}`}>
																		{topic.title}
																	</h4>
																	<p className="text-gray-300 text-sm font-mono">
																		{topic.details}
																	</p>
																</div>
															</div>

															{/* Hover effect */}
															{hoveredTopic === `${edu.id}-${idx}` && (
																<div className="absolute inset-0 pointer-events-none overflow-hidden">
																	<div
																		className={`absolute inset-0 ${edu.colorScheme === 'purple' ? 'bg-purple-500' : 'bg-blue-400'} opacity-5`}
																	></div>
																	{/* Tech corner */}
																	<div className="absolute bottom-0 right-0 w-6 h-6">
																		<div className={`absolute bottom-0 right-0 w-6 h-px ${edu.colorScheme === 'purple' ? 'bg-purple-500' : 'bg-blue-400'} opacity-50`}></div>
																		<div className={`absolute bottom-0 right-0 w-px h-6 ${edu.colorScheme === 'purple' ? 'bg-purple-500' : 'bg-blue-400'} opacity-50`}></div>
																	</div>
																</div>
															)}
														</div>
													))}
												</div>

												{/* View full record button */}
												<div className="flex justify-end mt-4">
													<a
														href={edu.url}
														target="_blank"
														rel="noopener noreferrer"
														className={`inline-flex items-center px-3 py-1 font-mono text-xs ${edu.colorScheme === 'purple'
																? 'border-purple-500 text-purple-500 hover:bg-purple-900 hover:bg-opacity-30'
																: 'border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30'
															} border`}
														style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
													>
														VIEW FULL RECORD
														<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
														</svg>
													</a>
												</div>
											</div>
										</div>
									</CyberpunkBorderCard>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}