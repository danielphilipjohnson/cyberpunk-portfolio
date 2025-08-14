import React, { useState, useEffect } from 'react';

export const CyberpunkOutsideProgramming = () => {
	const [hoveredBook, setHoveredBook] = useState(null);
	const [activeScan, setActiveScan] = useState(false);
	const [pulseText, setPulseText] = useState(null);

	// Create a scanning effect that periodically activates
	useEffect(() => {
		const scanInterval = setInterval(() => {
			setActiveScan(prev => !prev);
		}, 8000);

		return () => clearInterval(scanInterval);
	}, []);

	// Highlight different paragraphs periodically
	useEffect(() => {
		const pulseInterval = setInterval(() => {
			setPulseText(prev => (prev === null ? 0 : (prev + 1) % 4));
		}, 5000);

		return () => clearInterval(pulseInterval);
	}, []);

	// Books data
	const books = [
		{
			title: "Habits for success Inspired Ideas to help you soar",
			author: "Brian Benson",
			url: "https://www.amazon.co.uk/Habits-Success-Inspired-Ideas-Help-ebook/dp/B07FTQMQZM",
			id: "book-1"
		},
		{
			title: "The illusion of invincibility",
			author: "Paul Williams",
			url: "https://www.amazon.co.uk/Illusion-Invincibility-Organizations-Inspired-Incas-ebook/dp/B07V3XTSDS",
			id: "book-2"
		},
		{
			title: "The first 20 hours",
			author: "Josh Kaufman",
			url: "https://www.amazon.co.uk/First-20-Hours-Learn-Anything/dp/0670921912",
			id: "book-3"
		},
		{
			title: "The next big thing",
			author: "Matthew Mockridge",
			url: "https://www.amazon.co.uk/Your-Next-Thing-Matthew-Mockridge/dp/1642501417",
			id: "book-4"
		},
		{
			title: "GET IT DONE 31 Ways to release your inner boss",
			author: "Hayley Hobson",
			url: "https://www.amazon.co.uk/Get-Done-Ways-Release-Inner/dp/1633537900",
			id: "book-5"
		}
	];

	return (
		<article className="py-16 bg-gray-900 relative overflow-hidden">
			{/* Tech grid background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: "linear-gradient(to right, rgba(236, 72, 153, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(236, 72, 153, 0.1) 1px, transparent 1px)",
					backgroundSize: "20px 20px"
				}}></div>
				<div className="absolute inset-0" style={{
					backgroundImage: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}}></div>
			</div>

			{/* Data stream lines */}
			<div className="absolute top-0 left-1/3 h-full w-px bg-pink-500 opacity-10"></div>
			<div className="absolute top-0 right-1/3 h-full w-px bg-pink-500 opacity-10"></div>

			{/* Moving data points */}
			<div
				className="absolute left-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full"
				style={{ animation: "dataStream 15s linear infinite", top: "0%" }}
			></div>
			<div
				className="absolute right-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full"
				style={{ animation: "dataStream 8s linear infinite", top: "10%" }}
			></div>

			<div className="max-w-5xl mx-auto px-6 relative z-10">
				{/* Section header with tech styling */}
				<div className="mb-10">
					<div className="flex items-center gap-4">
						<div
							className="bg-pink-900 bg-opacity-30 px-3 py-1 border-l-2 border-pink-500 flex items-center"
							style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
						>
							<div className="w-2 h-2 bg-pink-500 mr-2"></div>
							<span className="text-pink-500 font-mono text-xs">HUMAN_INTERESTS.dll</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-mono font-bold text-pink-500 uppercase tracking-wider flex items-center">
							<span role="img" aria-label="thunder" className="mr-2">⚡</span>
							RUNTIME_ACTIVITIES
						</h2>
						<div className="h-px bg-pink-500 flex-grow opacity-30"></div>
					</div>
					<div className="text-gray-400 font-mono text-sm mt-1">
            // life_outside_cyberspace // organic_interests // non_digital_pursuits
					</div>
				</div>

				{/* Main content */}
				<div className="relative">
					{/* Scanning line effect */}
					{activeScan && (
						<div
							className="absolute left-0 right-0 h-2 bg-pink-500 bg-opacity-20 pointer-events-none"
							style={{ animation: "scanDown 8s linear 1" }}
						></div>
					)}

					<div
						className="bg-gray-800 p-6 border-l-2 border-pink-500 relative"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
					>
						{/* Memory bank indicator */}
						<div className="absolute top-3 right-3 flex items-center text-xs font-mono">
							<div className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-1 animate-pulse"></div>
							<span className="text-pink-500">PERSONAL_PROTOCOL: ACTIVE</span>
						</div>

						{/* First paragraph */}
						<div className={`relative p-3 ${pulseText === 0 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
								Although it seems like my life is entirely ruled by programming and
								computers. I do have spare time and things that I cherish. I love to
								read about psychology from both books and journals. I also love reading
								in general. Here are some books I've enjoyed reading right now.
							</p>
						</div>

						{/* Books list */}
						<div className="mb-6 p-4 bg-gray-900 border border-gray-700">
							<div className="text-pink-500 font-mono mb-4 flex items-center">
								<div className="h-px w-4 bg-pink-500 mr-2"></div>
								DATA_LIBRARY: READING_LIST
								<div className="h-px flex-grow bg-pink-500 ml-2 opacity-30"></div>
							</div>

							<ul className="space-y-3">
								{books.map((book, index) => (
									<li
										key={index}
										className="relative"
										onMouseEnter={() => setHoveredBook(book.id)}
										onMouseLeave={() => setHoveredBook(null)}
									>
										<a
											href={book.url}
											className="flex items-start text-sm font-mono group"
											target="_blank"
											rel="noreferrer"
										>
											<div
												className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border ${hoveredBook === book.id ? 'bg-pink-900 bg-opacity-30 border-pink-500 text-pink-500' : 'border-gray-700 text-gray-500'} mr-2 group-hover:border-pink-500 group-hover:text-pink-500 transition-colors duration-300`}
												style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)" }}
											>
												{index + 1}
											</div>
											<div>
												<span className="text-gray-300 group-hover:text-pink-500 transition-colors duration-300">{book.title}</span>
												<span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300"> // {book.author}</span>
											</div>
										</a>

										{/* Hover effect */}
										{hoveredBook === book.id && (
											<div className="absolute -left-2 top-0 bottom-0 w-px bg-pink-500"></div>
										)}
									</li>
								))}
							</ul>
						</div>

						{/* Second paragraph */}
						<div className={`relative p-3 ${pulseText === 1 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
								In another life, I was actually for a while a semi-professional Fortnite
								player. I enjoyed playing it a lot. However, after a while, I started to
								feel a great sense of unfulfillment. I started, to realise just because
								you are good at something doesn't necessarily mean you should force
								yourself to do it. I still prefer anonymity for the reason I never liked
								to disclose my real identity. Despite that, I still wish to try public
								speaking at conferences. Who knows what the future holds?
							</p>
						</div>

						{/* Third paragraph */}
						<div className={`relative p-3 ${pulseText === 2 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
								During my competition days, coding made me really happy. I got out of
								bed excited and, it drives my girlfriend crazy as I always bother her
								with my projects and what I had learnt. It still happens now. Always she
								sits there and tries hard to understand.
							</p>
						</div>

						{/* Fourth paragraph */}
						<div className={`relative p-3 ${pulseText === 3 ? 'bg-pink-900 bg-opacity-10' : ''} transition-colors duration-500`}>
							<p className="text-gray-300 font-mono text-sm leading-relaxed">
								The significant part of my life and the biggest change is my girlfriend
								Fabiola. I don't want to name her fully because I want her to still feel
								some anonymity and not feel pressured. With her, everything started to
								click for me in my programming career. Having someone that believes your
								dream so much that even when you feel low and down afterlife beating
								you. She is there still believing in me. She keeps my life in balance by
								forcing me to take breaks when I decide to overdo it. Also giving me
								constant encouragement to be better and quick to offer some pointers on
								what needs addressing. Really we are a great team.
							</p>
						</div>

						{/* Status indicators */}
						<div className="mt-8 pt-4 border-t border-gray-700 grid grid-cols-2 md:grid-cols-4 gap-3">
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">READING</div>
								<div className="text-pink-500 font-mono text-sm">PSYCHOLOGY</div>
							</div>
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">GAMING</div>
								<div className="text-pink-500 font-mono text-sm">SEMI-PRO</div>
							</div>
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">ASPIRATION</div>
								<div className="text-pink-500 font-mono text-sm">SPEAKER</div>
							</div>
							<div className="bg-gray-900 p-2">
								<div className="text-xs text-gray-500 font-mono mb-1">SUPPORT</div>
								<div className="text-pink-500 font-mono text-sm">FABIOLA</div>
							</div>
						</div>

						{/* Tech corner accents */}
						<div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-30">
							<div className="absolute bottom-0 left-0 w-8 h-px bg-pink-500"></div>
							<div className="absolute bottom-0 left-0 w-px h-8 bg-pink-500"></div>
						</div>
						<div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-30">
							<div className="absolute top-0 right-0 w-8 h-px bg-pink-500"></div>
							<div className="absolute top-0 right-0 w-px h-8 bg-pink-500"></div>
						</div>
					</div>
				</div>
			</div>

			{/* CSS animations */}
			<style jsx>{`
        @keyframes dataStream {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        
        @keyframes scanDown {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
		</article>
	);
};

export default CyberpunkOutsideProgramming;