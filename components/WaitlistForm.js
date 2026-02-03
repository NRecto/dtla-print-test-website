'use client';

import { useState } from 'react';

export default function WaitlistForm() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setSubmitted(true);
		setIsSubmitting(false);
		setEmail('');
	};

	return (
		<section id="waitlist" className="py-20 bg-gray-50">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Waitlist</h2>
					<p className="text-xl text-gray-600">Be the first to know when we launch new products and services</p>
					<div className="w-24 h-1 bg-gray-900 mx-auto mt-4"></div>
				</div>

				{!submitted ? (
					<form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
						<div className="mb-6">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
								placeholder="your.email@example.com"
							/>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? 'Submitting...' : 'Join Waitlist'}
						</button>
					</form>
				) : (
					<div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg shadow-lg text-center">
						<div className="text-green-600 text-5xl mb-4">✓</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
						<p className="text-gray-700 mb-4">You&apos;ve been added to our waitlist. We&apos;ll be in touch soon!</p>
						<button
							onClick={() => setSubmitted(false)}
							className="text-gray-900 hover:text-gray-700 font-medium underline"
						>
							Add another email
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
