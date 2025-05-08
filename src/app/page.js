import Image from 'next/image';
import Seo from "@/components/Seo";
import hero from '../../public/images/globe.svg';

export default function Home() {
	return (
		<>
			<Seo
				title="Home | SEO Playground"
				description="Learn and test SEO in a static Next.js site"
				canonical="https://seo-playground.vercel.app/"
			/>
			<main>
				<h1>Welcome to the SEO Playground</h1>
				<Image src={hero} alt="SEO Globe" width={200} height={200} priority />
				<p>This is your learning space for testing SEO in Next.js.</p>
      		</main>
		</>
	);
}
