'use client';

import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setSubmitted(true);
		setIsSubmitting(false);
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<section id="contact" className="py-20 bg-white">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
					<p className="text-xl text-gray-600 mb-2">
						Have questions or want to speak with a real person?
					</p>
					<p className="text-lg text-gray-700">
						Email us at{' '}
						<a
							href="mailto:sales@dtlaprint.com"
							className="text-gray-900 font-semibold hover:underline"
						>
							sales@dtlaprint.com
						</a>{' '}
						to set up an appointment.
					</p>
					<div className="w-24 h-1 bg-gray-900 mx-auto mt-4"></div>
				</div>

				{!submitted ? (
					<form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
						<div className="mb-6">
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
								placeholder="Your name"
							/>
						</div>

						<div className="mb-6">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
								placeholder="your.email@example.com"
							/>
						</div>

						<div className="mb-6">
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
								placeholder="Tell us about your project or ask us a question..."
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				) : (
					<div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg shadow-lg text-center">
						<div className="text-green-600 text-5xl mb-4">✓</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
						<p className="text-gray-700 mb-4">
							Thank you for contacting us. We&apos;ll get back to you as soon as possible.
						</p>
						<button
							onClick={() => setSubmitted(false)}
							className="text-gray-900 hover:text-gray-700 font-medium underline"
						>
							Send another message
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
