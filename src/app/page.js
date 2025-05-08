'use client';
import Link from 'next/link';
import Seo from '@/components/Seo.jsx';

const blogPosts = [
	{ slug: 'my-first-post', title: 'My First Post' },
	{ slug: 'nextjs-seo-guide', title: 'Next.js SEO Guide' },
];

export default function BlogList() {
	return (
		<>
			<Seo
				title="Blog | SEO Playground"
				description="List of SEO blog posts for testing Next.js SEO features."
				canonical="https://seo-playground.vercel.app/blog"
			/>

			<main className="max-w-3xl mx-auto px-4 py-12">
				<header className="mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">SEO Blog Posts</h1>
					<p className="text-gray-600 text-lg">
						Explore sample blog posts created to test SEO performance in Next.js.
					</p>
				</header>

				<ul className="space-y-6">
					{blogPosts.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="block p-5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-shadow shadow-sm hover:shadow-md"
							>
								<h2 className="text-2xl font-semibold text-blue-700">{post.title}</h2>
								<p className="text-sm text-gray-500 mt-1">Read more →</p>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
