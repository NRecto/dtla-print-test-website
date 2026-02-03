import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import WaitlistForm from '@/components/WaitlistForm';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navigation />
			<HomeSection />
			<AboutSection />
			<WaitlistForm />
			<ContactForm />
			<Footer />
		</main>
	);
}
