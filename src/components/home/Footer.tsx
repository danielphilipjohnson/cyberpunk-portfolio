"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useLoading } from '@/providers/LoadingProvider';

export default function CyberpunkFooter() {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);
	const { triggerReboot } = useLoading();

	// Internal navigation links
	const internalLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "/contact" }
	];

	// Blog links
	const blogLinks = [
		{ name: "Blog", path: "/blog" }
	];

	// Project links
	const projectLinks = [
		{ name: "Projects", path: "/project" }
	];

	// External links
	const externalLinks = [
		{ name: "Hashnode", url: "https://danielphilipjohnson.me/", alt: "Hashnode of Daniel Philip Johnson" },
		{ name: "dev.to", url: "https://dev.to/danielphilipjohnson", alt: "dev.to of Daniel Philip Johnson" }
	];

	// Developer links
	const developerLinks = [
		{
			name: "HackerRank",
			url: "https://www.hackerrank.com/daniel_p_johnson",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 512 512">
					<path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" />
				</svg>
			)
		},
		{
			name: "CodePen",
			url: "https://codepen.io/danielphilipjohnson",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 64 64">
					<path d="M62,20.4L33.5,1.4c-1-0.6-2-0.6-3,0L2.1,20.4C1.4,20.8,1,21.8,1,22.5v18.9c0,0.8,0.4,1.7,1.1,2.3l28.4,18.9c1,0.6,2,0.6,3,0
	l28.4-18.9c0.7-0.4,1.1-1.4,1.1-2.3V22.5C63.1,21.7,62.7,20.8,62,20.4L62,20.4z M34.7,8.6l20.9,14l-9.5,6.2L34.6,21
	C34.7,21,34.7,8.6,34.7,8.6z M29.4,8.6V21l-11.6,7.8l-9.3-6.2L29.4,8.6z M6.4,27.5L13,32l-6.6,4.5V27.5L6.4,27.5z M29.4,55.4
	l-20.9-14l9.3-6.2L29.4,43C29.4,43,29.4,55.4,29.4,55.4z M32.1,38.4L22.6,32l9.5-6.4l9.5,6.4L32.1,38.4z M34.7,55.4V43l11.6-7.8
	l9.3,6.2L34.7,55.4z M57.7,36.5L51.1,32l6.6-4.5V36.5L57.7,36.5z" />
				</svg>
			)
		},
		{
			name: "StackOverflow",
			url: "https://stackoverflow.com/users/13921677/daniel-philip-johnson",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 64 64">
					<path d="M50.2 57.5H11.5V40.9H5.79999V63H55.6V40.9H50.2V57.5Z" />
					<path d="M41.7316 0.980119L37.3145 4.25702L53.7586 26.4226L58.1756 23.1457L41.7316 0.980119Z" />
					<path d="M31.5592 9.87634L28.0425 14.1053L49.2642 31.7527L52.7809 27.5238L31.5592 9.87634Z" />
					<path d="M44.6 46.4H17V51.9H44.6V46.4Z" />
					<path d="M48.4 33.1L23.5 21.3L21.1 26.4L46.1 38.1L48.4 33.1Z" />
					<path d="M45.7 39.6L18.7 33.8L17.4 39.3L44.6 45L45.7 39.6Z" />
				</svg>
			)
		},
		{
			name: "GitHub",
			url: "https://github.com/danielphilipjohnson",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 64 64">
					<path d="M32,1.8c-17,0-31,13.8-31,31C1,46.4,9.9,58,22.3,62.2c1.6,0.3,2.1-0.7,2.1-1.4c0-0.7,0-2.7-0.1-5.4
	c-8.6,2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2,0.1-2,0.1-2c3.1,0.1,4.8,3.2,4.8,3.2c2.7,4.8,7.3,3.4,9,2.5
	c0.3-2,1.1-3.4,2-4.2c-6.8-0.7-14.1-3.4-14.1-15.2c0-3.4,1.3-6.1,3.2-8.2c-0.3-0.7-1.4-3.9,0.3-8.2c0,0,2.7-0.8,8.6,3.2
	c2.5-0.7,5.1-1.1,7.8-1.1c2.7,0,5.4,0.3,7.8,1.1c5.9-3.9,8.5-3.2,8.5-3.2c1.7,4.2,0.7,7.5,0.3,8.2c2,2.1,3.2,4.9,3.2,8.2
	c0,11.8-7.3,14.5-14.1,15.2c1.1,1,2.1,3,2.1,5.8c0,4.2-0.1,7.5-0.1,8.5c0,0.8,0.6,1.7,2.1,1.4C54.1,57.8,63,46.3,63,32.6
	C62.9,15.6,49,1.8,32,1.8z" />
				</svg>
			)
		}
	];

	// Social links
	const socialLinks = [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/daniel-philip-johnson/",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 64 64">
					<path d="M58.5,1H5.6C3.1,1,1.1,3,1.1,5.5v53c0,2.4,2,4.5,4.5,4.5h52.7c2.5,0,4.5-2,4.5-4.5V5.4C63,3,61,1,58.5,1z M19.4,53.7h-9.1
	V24.2h9.1V53.7z M14.8,20.1c-3,0-5.3-2.4-5.3-5.3s2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3S17.9,20.1,14.8,20.1z M53.9,53.7h-9.1V39.4
	c0-3.4-0.1-7.9-4.8-7.9c-4.8,0-5.5,3.8-5.5,7.6v14.6h-9.1V24.2h8.9v4.1h0.1c1.3-2.4,4.2-4.8,8.7-4.8c9.3,0,11,6,11,14.2v16H53.9z" />
				</svg>
			)
		},
		{
			name: "Twitter",
			url: "https://twitter.com/danielp_johnson",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 64 64">
					<path d="M20.3,57.4c23.6,0,36.4-19.5,36.4-36.4c0-0.4,0-1.1-0.1-1.7c2.5-1.8,4.7-4.1,6.4-6.6c-2.4,1.1-4.8,1.7-7.3,2
	c2.7-1.6,4.7-4.1,5.6-7.1c-2.5,1.4-5.1,2.5-8.2,3.1c-2.4-2.5-5.6-4.1-9.3-4.1c-7.1,0-12.9,5.8-12.9,12.9c0,1,0.1,2,0.3,3
	C20.9,21.8,11.5,16.7,5.1,9c-1.1,2-1.7,4.1-1.7,6.4c0,4.5,2.3,8.3,5.8,10.6c-2.1-0.1-4.1-0.7-5.8-1.6c0,0.1,0,0.1,0,0.1
	c0,6.1,4.4,11.4,10.2,12.6c-1.1,0.3-2.3,0.4-3.2,0.4c-0.8,0-1.7-0.1-2.4-0.3c1.7,5.1,6.4,8.8,12,8.9c-4.4,3.4-9.9,5.5-15.8,5.5
	C3,51.8,2,51.6,1,51.5C6.4,55.3,13.1,57.4,20.3,57.4" />
				</svg>
			)
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/danielphilipjohnson/",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 64 64">
					<g>
						<path d="M62.9,19.2c-0.1-3.2-0.7-5.5-1.4-7.6S59.7,7.8,58,6.1s-3.4-2.7-5.4-3.5c-2-0.8-4.2-1.3-7.6-1.4C41.5,1,40.5,1,32,1
		s-9.4,0-12.8,0.1s-5.5,0.7-7.6,1.4S7.8,4.4,6.1,6.1s-2.8,3.4-3.5,5.5c-0.8,2-1.3,4.2-1.4,7.6S1,23.5,1,32s0,9.4,0.1,12.8
		c0.1,3.4,0.7,5.5,1.4,7.6c0.7,2.1,1.8,3.8,3.5,5.5s3.5,2.8,5.5,3.5c2,0.7,4.2,1.3,7.6,1.4C22.5,63,23.4,63,31.9,63s9.4,0,12.8-0.1
		s5.5-0.7,7.6-1.4c2.1-0.7,3.8-1.8,5.5-3.5s2.8-3.5,3.5-5.5c0.7-2,1.3-4.2,1.4-7.6c0.1-3.2,0.1-4.2,0.1-12.7S63,22.6,62.9,19.2z
		 M57.3,44.5c-0.1,3-0.7,4.6-1.1,5.8c-0.6,1.4-1.3,2.5-2.4,3.5c-1.1,1.1-2.1,1.7-3.5,2.4c-1.1,0.4-2.7,1-5.8,1.1
		c-3.2,0-4.2,0-12.4,0s-9.3,0-12.5-0.1c-3-0.1-4.6-0.7-5.8-1.1c-1.4-0.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5
		c-0.4-1.1-1-2.7-1.1-5.8c0-3.1,0-4.1,0-12.4s0-9.3,0.1-12.5c0.1-3,0.7-4.6,1.1-5.8c0.6-1.4,1.3-2.5,2.3-3.5
		c1.1-1.1,2.1-1.7,3.5-2.3c1.1-0.4,2.7-1,5.8-1.1c3.2-0.1,4.2-0.1,12.5-0.1s9.3,0,12.5,0.1c3,0.1,4.6,0.7,5.8,1.1
		c1.4,0.6,2.5,1.3,3.5,2.3c1.1,1.1,1.7,2.1,2.4,3.5c0.4,1.1,1,2.7,1.1,5.8c0.1,3.2,0.1,4.2,0.1,12.5S57.4,41.3,57.3,44.5z" />
						<path d="M32,16.1c-8.9,0-15.9,7.2-15.9,15.9c0,8.9,7.2,15.9,15.9,15.9S48,40.9,48,32S40.9,16.1,32,16.1z M32,42.4
		c-5.8,0-10.4-4.7-10.4-10.4S26.3,21.6,32,21.6c5.8,0,10.4,4.6,10.4,10.4S37.8,42.4,32,42.4z" />
						<ellipse cx="48.7" cy="15.4" rx="3.7" ry="3.7"></ellipse>
					</g>
				</svg>
			)
		},
		{
			name: "YouTube",
			url: "https://www.youtube.com/c/DanielPhilipJohnson/",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 576 512">
					<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
				</svg>
			)
		},
		{
			name: "Dev.to",
			url: "https://dev.to/danielphilipjohnson",
			icon: (
				<svg className="w-full h-full" fill="currentColor" viewBox="0 0 448 512">
					<path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
				</svg>
			)
		}
	];

	// Generate a random number for the visual hash
	const getRandomHash = () => {
		return Math.floor(Math.random() * 10000).toString(16).padStart(4, '0');
	};

	return (
		<footer className="relative bg-gray-900 text-gray-300 font-mono overflow-hidden border-t border-cyan-900 pt-8">
			{/* Background circuit pattern */}
			<div className="absolute inset-0 overflow-hidden z-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
					backgroundSize: "20px 20px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
					backgroundSize: "30px 30px"
				}}></div>

				{/* Data streams - animated lines */}
				<div className="absolute h-full w-1 bg-cyan-400 opacity-20 left-1/5 top-0" style={{
					animation: "dataStream 8s linear infinite",
					left: "20%"
				}}></div>
				<div className="absolute h-full w-1 bg-pink-500 opacity-20 left-2/5 top-0" style={{
					animation: "dataStream 12s linear infinite",
					left: "40%"
				}}></div>
				<div className="absolute h-full w-1 bg-cyan-400 opacity-20 left-3/5 top-0" style={{
					animation: "dataStream 7s linear infinite",
					left: "60%"
				}}></div>
				<div className="absolute h-full w-1 bg-pink-500 opacity-20 left-4/5 top-0" style={{
					animation: "dataStream 10s linear infinite",
					left: "80%"
				}}></div>
			</div>

			{/* Footer Content */}
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Top section with links */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 pb-12">
					{/* Internal Links */}
					<div className="lg:col-span-1">
						<div className="mb-4">
							<h2 className="inline-flex items-center text-cyan-400 text-sm font-bold uppercase mb-2">
								<span className="w-2 h-2 bg-cyan-400 mr-2"></span>
								SYS.LINKS
							</h2>
							<div className="h-px w-full bg-cyan-900 mb-4"></div>
						</div>

						<ul className="space-y-2">
							{internalLinks.map((link, index) => (
								<li key={index} className="relative mb-1">
									<Link
										href={link.path}
										className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
										onMouseEnter={() => setHoveredLink(`internal-${index}`)}
										onMouseLeave={() => setHoveredLink(null)}
									>
										<span className="w-1 h-1 bg-cyan-400 mr-2 opacity-50 group-hover:opacity-100"></span>
										{link.name}

										{/* Hover effect */}
										{hoveredLink === `internal-${index}` && (
											<span className="ml-2 text-xs text-cyan-400 opacity-70">0x{getRandomHash()}</span>
										)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Blog Links */}
					<div className="lg:col-span-1">
						<div className="mb-4">
							<h2 className="inline-flex items-center text-pink-500 text-sm font-bold uppercase mb-2">
								<span className="w-2 h-2 bg-pink-500 mr-2"></span>
								DATA.LOGS
							</h2>
							<div className="h-px w-full bg-pink-900 mb-4"></div>
						</div>

						<ul className="space-y-2">
							{blogLinks.map((link, index) => (
								<li key={index} className="relative mb-1">
									<Link
										href={link.path}
										className="text-gray-300 hover:text-pink-500 transition-colors flex items-center group"
										onMouseEnter={() => setHoveredLink(`blog-${index}`)}
										onMouseLeave={() => setHoveredLink(null)}
									>
										<span className="w-1 h-1 bg-pink-500 mr-2 opacity-50 group-hover:opacity-100"></span>
										{link.name}

										{/* Hover effect */}
										{hoveredLink === `blog-${index}` && (
											<span className="ml-2 text-xs text-pink-500 opacity-70">0x{getRandomHash()}</span>
										)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Project Links */}
					<div className="lg:col-span-1">
						<div className="mb-4">
							<h2 className="inline-flex items-center text-green-400 text-sm font-bold uppercase mb-2">
								<span className="w-2 h-2 bg-green-400 mr-2"></span>
								SYS.PROJECTS
							</h2>
							<div className="h-px w-full bg-green-900 mb-4"></div>
						</div>

						<ul className="space-y-2">
							{projectLinks.map((link, index) => (
								<li key={index} className="relative mb-1">
									<Link
										href={link.path}
										className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
										onMouseEnter={() => setHoveredLink(`project-${index}`)}
										onMouseLeave={() => setHoveredLink(null)}
									>
										<span className="w-1 h-1 bg-green-400 mr-2 opacity-50 group-hover:opacity-100"></span>
										{link.name}

										{/* Hover effect */}
										{hoveredLink === `project-${index}` && (
											<span className="ml-2 text-xs text-green-400 opacity-70">0x{getRandomHash()}</span>
										)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* External Links */}
					<div className="lg:col-span-1">
						<div className="mb-4">
							<h2 className="inline-flex items-center text-purple-500 text-sm font-bold uppercase mb-2">
								<span className="w-2 h-2 bg-purple-500 mr-2"></span>
								EXT.NETWORK
							</h2>
							<div className="h-px w-full bg-purple-900 mb-4"></div>
						</div>

						<ul className="space-y-2">
							{externalLinks.map((link, index) => (
								<li key={index} className="relative mb-1">
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={link.alt}
										className="text-gray-400 hover:text-purple-500 transition-colors flex items-center group"
										onMouseEnter={() => setHoveredLink(`external-${index}`)}
										onMouseLeave={() => setHoveredLink(null)}
									>
										<span className="w-1 h-1 bg-purple-500 mr-2 opacity-50 group-hover:opacity-100"></span>
										{link.name}

										{/* Hover effect */}
										{hoveredLink === `external-${index}` && (
											<span className="ml-2 text-xs text-purple-500 opacity-70">[EXT]</span>
										)}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Developer Links with Icons */}
					<div className="lg:col-span-2">
						<div className="mb-4">
							<h2 className="inline-flex items-center text-cyan-400 text-sm font-bold uppercase mb-2">
								<span className="w-2 h-2 bg-cyan-400 mr-2"></span>
								DEV.UPLINKS
							</h2>
							<div className="h-px w-full bg-cyan-900 mb-4"></div>
						</div>

						<div className="flex flex-wrap gap-3">
							{developerLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.name}
									className="relative"
									onMouseEnter={() => setHoveredLink(`dev-${index}`)}
									onMouseLeave={() => setHoveredLink(null)}
								>
									<div className="w-10 h-10 border border-cyan-900 bg-gray-800 hover:border-cyan-400 transition-colors p-2 flex items-center justify-center text-gray-400 hover:text-cyan-400"
										style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}>
										{link.icon}

										{/* Tech scan effect */}
										{hoveredLink === `dev-${index}` && (
											<div className="absolute inset-0 pointer-events-none overflow-hidden">
												<div className="absolute top-0 left-0 w-full h-px bg-cyan-400 opacity-50"
													style={{ animation: "scanY 1.5s linear infinite" }}></div>
												<div className="absolute top-0 left-0 h-full w-px bg-cyan-400 opacity-50"
													style={{ animation: "scanX 1.5s linear infinite" }}></div>
											</div>
										)}
									</div>

									{/* Name tooltip */}
									{hoveredLink === `dev-${index}` && (
										<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 whitespace-nowrap">
											{link.name}
										</div>
									)}
								</a>
							))}
						</div>
					</div>

					{/* Social Links with Icons */}
					<div className="lg:col-span-2">
						<div className="mb-4">
							<h2 className="inline-flex items-center text-pink-500 text-sm font-bold uppercase mb-2">
								<span className="w-2 h-2 bg-pink-500 mr-2"></span>
								SOCIAL.MESH
							</h2>
							<div className="h-px w-full bg-pink-900 mb-4"></div>
						</div>

						<div className="flex flex-wrap gap-3">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.name}
									className="relative"
									onMouseEnter={() => setHoveredLink(`social-${index}`)}
									onMouseLeave={() => setHoveredLink(null)}
								>
									<div className="w-10 h-10 border border-pink-900 bg-gray-800 hover:border-pink-500 transition-colors p-2 flex items-center justify-center text-gray-400 hover:text-pink-500"
										style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)" }}>
										{link.icon}

										{/* Tech scan effect */}
										{hoveredLink === `social-${index}` && (
											<div className="absolute inset-0 pointer-events-none overflow-hidden">
												<div className="absolute top-0 left-0 w-full h-px bg-pink-500 opacity-50"
													style={{ animation: "scanY 1.5s linear infinite" }}></div>
												<div className="absolute top-0 left-0 h-full w-px bg-pink-500 opacity-50"
													style={{ animation: "scanX 1.5s linear infinite" }}></div>
											</div>
										)}
									</div>

									{/* Name tooltip */}
									{hoveredLink === `social-${index}` && (
										<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-pink-500 whitespace-nowrap">
											{link.name}
										</div>
									)}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom border with data pulse */}
				<div className="border-t border-gray-800 mt-12 relative">
					<div className="absolute top-0 left-0 w-1/4 h-px bg-cyan-400"></div>
					<div className="absolute top-0 right-0 w-1/4 h-px bg-pink-500"></div>

					{/* Pulsing data point */}
					<div className="absolute -top-1 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
						style={{ animation: "pulse 2s infinite" }}></div>
					<div className="absolute -top-1 right-1/4 w-2 h-2 bg-pink-500 rounded-full"
						style={{ animation: "pulse 3s infinite" }}></div>
				</div>

				{/* Copyright section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 pt-6 pb-8">
					<div className="text-sm">
						<div className="flex items-center">
							<span className="text-cyan-400 font-mono mr-2">[SYS.INFO]</span>
							<span className="text-gray-400">© 2020-{new Date().getFullYear()} • Developed by Daniel Philip Johnson</span>
							{/* Hidden reboot easter egg */}
							<button
								onClick={triggerReboot}
								className="ml-4 text-xs text-gray-600 hover:text-cyan-400 font-mono opacity-30 hover:opacity-100 transition-all"
								title="Reboot neural system"
							>
								[REBOOT]
							</button>
						</div>
					</div>

					<div className="text-sm flex items-center justify-start lg:justify-end">
						<span className="text-gray-500 mr-2">POWERED_BY:</span>
						<a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 mx-1">#Nuxt</a>
						<span className="text-gray-600">|</span>
						<a href="https://www.storyblok.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 mx-1">#Storyblok</a>
						<span className="text-gray-600">|</span>
						<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 mx-1">#TailwindCSS</a>
					</div>
				</div>

				{/* CSS Animations */}
				<style jsx>{`
  @keyframes dataStream {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  @keyframes scanY {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  @keyframes scanX {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
    100% { opacity: 1; transform: scale(1); }
  }
`}</style>
			</div>
		</footer>
	);
}