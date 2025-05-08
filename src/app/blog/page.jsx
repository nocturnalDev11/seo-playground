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

			<main className="max-w-3xl mx-auto px-4 py-10">
				<h1 className="text-3xl font-bold text-gray-900 mb-6 border-b dark:border-gray-600 pb-2 dark:text-white">SEO Blog Posts</h1>

				<ul className="space-y-4">
					{blogPosts.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="block p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm"
							>
								<h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">{post.title}</h2>
								<p className="text-sm text-gray-500 dark:text-gray-300">Read post →</p>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
