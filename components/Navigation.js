'use client';

import { useState } from 'react';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<button
							onClick={() => scrollToSection('home')}
							className="text-2xl font-bold text-gray-900 hover:text-gray-700"
						>
							DTLA Print
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<button
								onClick={() => scrollToSection('home')}
								className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition"
							>
								Home
							</button>
							<button
								onClick={() => scrollToSection('about')}
								className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection('waitlist')}
								className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition"
							>
								Waitlist
							</button>
							<button
								onClick={() => scrollToSection('contact')}
								className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
							>
								Contact
							</button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
						<button
							onClick={() => scrollToSection('home')}
							className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 w-full text-left"
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection('about')}
							className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 w-full text-left"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection('waitlist')}
							className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 w-full text-left"
						>
							Waitlist
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className="block px-3 py-2 text-base font-medium bg-gray-900 text-white rounded-md w-full text-left"
						>
							Contact
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
