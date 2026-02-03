import './globals.css';

export const metadata = {
	title: 'DTLA Print - Not All Prints Are Created™',
	description: 'High Quality Boutique Style one stop shop for high quality custom merch'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
