export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">DTLA Print</h3>
						<p className="text-gray-400">
							Not All Prints Are Created™
						</p>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<p className="text-gray-400 mb-2">
							<a href="mailto:sales@dtlaprint.com" className="hover:text-white transition">
								sales@dtlaprint.com
							</a>
						</p>
						<p className="text-gray-400">Los Angeles, California</p>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">Follow Us</h3>
						<div className="flex flex-wrap gap-4">
							<a
								href="https://www.instagram.com/dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition"
							>
								Instagram
							</a>
							<a
								href="https://www.twitter.com/dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition"
							>
								Twitter
							</a>
							<a
								href="https://www.youtube.com/@dtlaprint"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition"
							>
								YouTube
							</a>
							<a
								href="https://www.tiktok.com/@dtlaprint/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition"
							>
								TikTok
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; {new Date().getFullYear()} DTLA Print. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
