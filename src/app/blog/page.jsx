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
				canonical="https://seo-playground.vercel.app/"
			/>
			<main>
				<h1>Blog Posts</h1>
				<ul>
					{blogPosts.map(post => (
						<li key={post.slug}>
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
