export default function HomeSection() {
	return (
		<section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Not All Prints Are Created™
					</h1>
					<p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
						High Quality Boutique Style one stop shop for high quality custom merch
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="#waitlist"
							className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition shadow-lg"
						>
							Join Waitlist
						</a>
						<a
							href="#contact"
							className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition shadow-lg border-2 border-gray-900"
						>
							Get in Touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
