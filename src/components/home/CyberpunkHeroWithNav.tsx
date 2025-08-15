"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';
import ScanLines from '../visuals/ScanLines';
import GlitchEffect from '../visuals/GlitchEffect';
import FloatingParticles from '../visuals/FloatingParticles';
import TerminalIntro from '../visuals/TerminalIntro';

export const CyberpunkHeroWithNav = () => {
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	// Close mobile menu on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsMobileMenuOpen(false);
				setIsAnimating(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	const toggleMobileMenu = () => {
		if (!isMobileMenuOpen) {
			setIsMobileMenuOpen(true);
			setIsAnimating(true);
		} else {
			setIsAnimating(false);
			setTimeout(() => setIsMobileMenuOpen(false), 300);
		}
	};

	const navLinks = [
		{ href: '/', label: 'Home', icon: '🏠' },
		{ href: '/about', label: 'About', icon: '👤' },
		{ href: '/projects', label: 'Projects', icon: '💻' },
		{ href: '/blog', label: 'Blog', icon: '📡' },
		{ href: '/contact', label: 'Contact', icon: '🔗' }
	];

	return (
		<section
			className="relative min-h-screen text-white font-mono overflow-hidden"
			style={{
				background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%)',
			}}
		>
			{/* Background overlay */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

			{/* Cyberpunk Visual Effects - no grid lines */}
			<div className="absolute inset-0 z-0">
				<CyberpunkSectionDecor variant="solid" intensity="low" />
			</div>
			<ScanLines />
			<GlitchEffect />
			<FloatingParticles />


			{/* Enhanced Navigation bar */}
			<header className="relative z-20 px-6 md:px-12 py-6">
				<div className="max-w-7xl mx-auto">
					{/* Main nav container */}
					<div className="bg-gray-900/60 backdrop-blur-md border border-teal-400/20 p-4 flex items-center justify-between"
						style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
						
						{/* Logo */}
						<div className="flex items-center">
							<div className="w-10 h-10 bg-teal-400/20 border border-teal-400 flex items-center justify-center mr-3"
								style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.5 3A6.5 6.5 0 0 0 3 9.5v1A1.5 1.5 0 0 0 4.5 12H6a1.5 1.5 0 0 0 1.5-1.5v-1A3.5 3.5 0 0 1 11 6h1a3.5 3.5 0 0 1 3.5 3.5v1A1.5 1.5 0 0 0 17 12h1.5a1.5 1.5 0 0 0 1.5-1.5v-1A6.5 6.5 0 0 0 13.5 3h-4z" fill="#5eead4"/>
									<path d="M4.5 15a1.5 1.5 0 0 0-1.5 1.5v2A4.5 4.5 0 0 0 7.5 23h9a4.5 4.5 0 0 0 4.5-4.5v-2a1.5 1.5 0 0 0-1.5-1.5h-15z" fill="#5eead4"/>
								</svg>
							</div>
							<div>
						<div className="text-teal-400 font-bold text-lg tracking-wider lowercase font-mono">void.dev</div>
						<div className="text-gray-400 text-xs font-mono">[NETRUNNER.PORTFOLIO]</div>
							</div>
						</div>

						{/* Navigation links */}
						<nav className="hidden md:flex items-center space-x-8">
							<Link href="/about" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
								About
							</Link>
							<Link href="/projects" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
								Projects
							</Link>
							<Link href="/blog" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
								Blog
							</Link>
							<Link href="/contact" className="text-white/80 hover:text-teal-400 transition-colors text-sm font-mono uppercase tracking-wider border-b border-transparent hover:border-teal-400 pb-1">
								Contact
							</Link>
						</nav>

						{/* CTA Button */}
						<a
							href="/cv/Daniel_Philip_Johnson.pdf"
							download
							className="hidden md:flex items-center gap-2 px-4 py-2 bg-teal-400 text-gray-900 hover:bg-teal-300 transition-all duration-300 font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-teal-400/25"
							style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
							</svg>
							Download CV
						</a>

						{/* Mobile menu button */}
						<button 
							onClick={toggleMobileMenu}
							className="md:hidden text-teal-400 hover:text-teal-300 transition-colors relative z-50"
						>
							<div className="relative w-6 h-6">
								<span 
									className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
										isAnimating ? 'top-3 rotate-45' : 'top-1'
									}`}
								/>
								<span 
									className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out top-3 ${
										isAnimating ? 'opacity-0' : 'opacity-100'
									}`}
								/>
								<span 
									className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
										isAnimating ? 'top-3 -rotate-45' : 'top-5'
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</header>

			{/* Angular frame decoration - bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-24 z-10">
				<div className="h-full flex items-center justify-center text-center">
					<div className="flex flex-col items-center">
					<span className="text-teal-400 uppercase tracking-widest text-sm mb-2">Dive deeper choom</span>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</div>
				</div>
			</div>

			{/* Social media icons with angular containers - left side */}
			<div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
				<div className="flex flex-col space-y-4 p-4">
					<div className="w-10 h-10 bg-teal-900/80 flex items-center justify-center text-teal-400 hover:bg-teal-800 transition-colors"
						style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
						</svg>
					</div>
					<div className="w-10 h-10 bg-teal-900/80 flex items-center justify-center text-teal-400 hover:bg-teal-800 transition-colors"
						style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
						</svg>
					</div>
					<div className="w-10 h-10 bg-teal-900/80 flex items-center justify-center text-teal-400 hover:bg-teal-800 transition-colors"
						style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
						</svg>
					</div>
					<div className="w-10 h-10 bg-teal-900/80 flex items-center justify-center text-teal-400 hover:bg-teal-800 transition-colors"
						style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)' }}>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
						</svg>
					</div>
				</div>
			</div>

			<div className="relative z-10 px-6 md:px-16 pt-12 pb-24 max-w-7xl mx-auto">
				{/* Streamlined content area */}
				<div className="max-w-4xl mx-auto text-center">
					{/* Status indicator */}
					<div className="flex items-center justify-center mb-6">
						<div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse mr-2"></div>
						<div className="text-teal-400 text-sm font-mono tracking-wider">
							[NETRUNNER: ONLINE] • [BREACH_PROTOCOL: READY]
						</div>
					</div>

					{/* Main title */}
					<h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-wider text-white mb-4">
						NETRUNNER <span className="text-teal-400">OPERATIVE</span>
					</h1>

					{/* Company affiliation */}
					<div className="mb-8 flex justify-center">
						<div className="inline-flex items-center bg-gray-800/60 border border-pink-500/30 px-4 py-2"
							style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
							<span className="text-pink-500 font-mono text-sm mr-2">[CORPO_LINK]</span>
							<span className="text-white font-bold tracking-wider">HIYIELD CORP</span>
						</div>
					</div>

					{/* Condensed Terminal Introduction */}
					<div className="max-w-2xl mx-auto mb-12">
						<TerminalIntro />
					</div>

					{/* Simplified mission statement */}
					<div className="max-w-3xl mx-auto mb-10">
						<p className="text-white/90 text-lg font-mono leading-relaxed mb-4">
							Specialized in <span className="text-teal-400 font-bold">neural interface architecture</span> - crafting seamless digital experiences that jack straight into the user&apos;s cortex. Zero-lag, zero-glitch, maximum bandwidth.
						</p>
						<p className="text-white/70 text-base font-mono leading-relaxed">
							<span className="text-pink-500 font-bold">5+ years</span> deep in the corporate data streams of Night City&apos;s financial district. When the corpo needs clean code and the street needs results - I deliver both.
						</p>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-wrap justify-center gap-4">
						<button
							onClick={() => router.push('/projects')}
							className="px-8 py-3 bg-teal-400 hover:bg-teal-300 text-gray-900 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25 cursor-pointer"
							style={{
								clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
							}}
						>
							[JACK_IN]
						</button>
						<button
							onClick={() => router.push('/contact')}
							className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-gray-900 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 cursor-pointer"
							style={{
								clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
							}}
						>
							[SEND_MESSAGE]
						</button>
					</div>
				</div>

				{/* Single streamlined tech display */}
				<div className="mt-20 max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* System stats cards */}
						<div className="bg-gray-900/40 backdrop-blur-sm border border-teal-400/20 p-4 text-center"
							style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
							<div className="text-teal-400 text-sm font-mono mb-1">UPTIME</div>
							<div className="text-white font-bold text-xl">99.7%</div>
						</div>
						<div className="bg-gray-900/40 backdrop-blur-sm border border-pink-500/20 p-4 text-center"
							style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
							<div className="text-pink-500 text-sm font-mono mb-1">STREET CRED</div>
							<div className="text-white font-bold text-xl">LVL 47</div>
						</div>
						<div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 p-4 text-center md:col-span-2 lg:col-span-1"
							style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
							<div className="text-cyan-400 text-sm font-mono mb-1">GIGS</div>
							<div className="text-white font-bold text-xl">∞</div>
						</div>
					</div>
				</div>
			</div>

			{/* Cyberpunk Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<>
					{/* Backdrop */}
					<div 
						className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-sm z-40 md:hidden"
						onClick={toggleMobileMenu}
					/>
					
					{/* Mobile Menu Panel */}
					<div className={`fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-gray-900/95 backdrop-blur-md border-l border-cyan-400/30 z-50 transform transition-all duration-300 ease-out md:hidden flex flex-col ${
						isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
					}`}>
						
						{/* Neural grid background */}
						<div className="absolute inset-0 opacity-10">
							<div className="absolute inset-0" style={{
								backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
								backgroundSize: "20px 20px"
							}} />
						</div>
						
						{/* Scanlines */}
						<div className="absolute inset-0 pointer-events-none">
							<div className="absolute w-full h-0.5 bg-cyan-400 opacity-30" style={{
								animation: "mobileScan 3s ease-in-out infinite"
							}} />
						</div>
						
						{/* Menu Header */}
						<div className="relative z-10 border-b border-cyan-900 p-6">
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center">
									<div className="w-8 h-8 bg-cyan-900/50 border border-cyan-400 flex items-center justify-center mr-3"
										 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }}>
										<div className="w-2 h-2 bg-cyan-400 animate-pulse" />
									</div>
									<div>
										<div className="text-cyan-400 font-mono text-sm font-bold">NEURAL_MENU</div>
										<div className="text-gray-400 font-mono text-xs">v2.0.77</div>
									</div>
								</div>
								
								{/* Status indicators */}
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<div className="w-2 h-2 bg-yellow-400 rounded-full" style={{ animation: "pulse 1.5s infinite" }} />
									<div className="w-2 h-2 bg-red-400 rounded-full" style={{ animation: "pulse 2s infinite" }} />
								</div>
							</div>
							
							<div className="text-xs font-mono text-gray-400">
								NODE: MOBILE_INTERFACE_01
							</div>
						</div>
						
						{/* Scrollable content area */}
						<div className="flex-1 overflow-y-auto">
							{/* Navigation Links */}
							<nav className="relative z-10 flex flex-col p-6 space-y-1">
								{navLinks.map((link, index) => {
									const isActive = false; // No active state for home page
									return (
										<Link
											key={link.href}
											href={link.href}
											className="group relative flex items-center p-4 font-mono text-sm uppercase tracking-wider transition-all duration-300 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 border-l-2 border-transparent hover:border-cyan-400"
											style={{
												animationDelay: `${index * 100}ms`
											}}
										>
											{/* Connection line */}
											<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700 group-hover:bg-cyan-400 transition-all duration-300" />
											
											{/* Icon */}
											<div className="flex items-center justify-center w-8 h-8 mr-4 border border-gray-700 group-hover:border-cyan-400 transition-colors"
												 style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
												<span className="text-xs">{link.icon}</span>
											</div>
											
											{/* Label with data stream effect */}
											<div className="flex-1">
												<div className="flex items-center justify-between">
													<span>{link.label}</span>
												</div>
												<div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
													ACCESS_NODE_{(index + 1).toString().padStart(2, '0')}
												</div>
											</div>
											
											{/* Hover effect scanner */}
											<div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none">
												<div className="absolute inset-0 bg-cyan-400" style={{
													animation: "menuItemScan 2s ease-in-out infinite"
												}} />
											</div>
										</Link>
									);
								})}
							</nav>
							
							{/* Download CV Button */}
							<div className="relative z-10 p-6 border-t border-gray-800">
								<a
									href="/cv/Daniel_Philip_Johnson.pdf"
									download
									className="flex items-center justify-center w-full p-4 bg-teal-400 text-gray-900 hover:bg-teal-300 transition-all duration-300 font-mono font-bold text-sm uppercase tracking-wider"
									style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
								>
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
									Download Neural_CV.pdf
								</a>
							</div>
						</div>
						
						{/* System Info Footer */}
						<div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-900/90">
							<div className="flex items-center justify-between text-xs font-mono">
								<div className="text-gray-400">
									<div>ENCRYPTION: [ACTIVE]</div>
									<div>NODES: {navLinks.length}_CONNECTED</div>
								</div>
								<div className="flex items-center space-x-2">
									<div className="w-1 h-1 bg-green-400 animate-pulse" />
									<span className="text-green-400">SECURE</span>
								</div>
							</div>
						</div>
						
						{/* Corner decorations */}
						<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-50" />
						<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-50" />
					</div>
				</>
			)}

			{/* CSS Animations */}
			<style jsx>{`
				@keyframes dataFlow {
					0% { transform: translateX(-100%); opacity: 0; }
					50% { opacity: 1; }
					100% { transform: translateX(100%); opacity: 0; }
				}

				@keyframes pulse {
					0%, 100% { opacity: 1; transform: scale(1); }
					50% { opacity: 0.6; transform: scale(1.1); }
				}

				@keyframes glow {
					0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.5); }
					50% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.4); }
				}

				@keyframes mobileScan {
					0% { top: 0%; opacity: 0.3; }
					50% { top: 50%; opacity: 1; }
					100% { top: 100%; opacity: 0.3; }
				}
				
				@keyframes menuItemScan {
					0% { transform: translateX(-100%); }
					100% { transform: translateX(100%); }
				}
			`}</style>
		</section>
	);
};

export default CyberpunkHeroWithNav;
