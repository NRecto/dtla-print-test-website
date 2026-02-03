export default function AboutSection() {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About DTLA Print</h2>
					<div className="w-24 h-1 bg-gray-900 mx-auto"></div>
				</div>

				<div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
					<p>
						At DTLA Print, we believe <span className="font-bold">Not All Prints Are Created™</span>. We are a High
						Quality Boutique Style one stop shop for high quality custom merch.
					</p>

					<p>
						We offer <span className="font-semibold">Embroidery</span>,{' '}
						<span className="font-semibold">eco-friendly Screen Printing</span> and{' '}
						<span className="font-semibold">Full Package Finishing Services</span> located in Sunny Los Angeles,
						California.
					</p>

					<p>
						We take the brands you love and embroider your logo on the material. Whether it's a hoodie, hat, custom
						t-shirt or a bag - we produce everything in-house to be able to offer low wholesale prices.
					</p>

					<div className="mt-12 pt-8 border-t border-gray-200">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us On</h3>
						<div className="flex flex-wrap justify-center gap-6">
							<a
								href="https://www.dtlaprint.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 transition font-medium"
							>
								Website
							</a>
							<a
								href="https://www.instagram.com/dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 transition font-medium"
							>
								Instagram
							</a>
							<a
								href="https://www.twitter.com/dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 transition font-medium"
							>
								Twitter
							</a>
							<a
								href="https://www.youtube.com/@dtlaprint"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 transition font-medium"
							>
								YouTube
							</a>
							<a
								href="https://www.tiktok.com/@dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 transition font-medium"
							>
								TikTok
							</a>
							<a
								href="https://www.pinterest.com/dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 transition font-medium"
							>
								Pinterest
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
