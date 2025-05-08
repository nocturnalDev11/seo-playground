import Seo from "@/components/Seo";

export default function Home() {
	return (
		<>
			<Seo
				title="Home | SEO Playground"
				description="Learn and test SEO in a static Next.js site"
				canonical="https://your-site.vercel.app"
			/>
			<main>
				<h1>Welcome to My SEO Playground</h1>
				<p>This is where I test and learn SEO features.</p>
			</main>
		</>
	);
}
