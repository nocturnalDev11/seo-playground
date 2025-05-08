'use client';
import { useParams } from 'next/navigation';
import Seo from '@/components/Seo.jsx';

const blogData = {
	'my-first-post': {
		title: 'My First Post',
		description: 'This is my first post in the SEO playground.',
	},
	'nextjs-seo-guide': {
		title: 'Next.js SEO Guide',
		description: 'Step-by-step SEO setup using Next.js App Router.',
	},
};

export default function BlogPost() {
	const { slug } = useParams();
	const post = blogData[slug] || { title: 'Not Found', description: 'No content available.' };

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": post.title,
		"description": post.description,
		"author": { "@type": "Person", "name": "Your Name" },
		"publisher": {
			"@type": "Organization",
			"name": "SEO Playground",
			"logo": {
				"@type": "ImageObject",
				"url": "https://seo-playground.vercel.app/images/globe.svg"
			}
		},
		"url": `https://seo-playground.vercel.app/blog/${slug}`
	};

	return (
		<>
			<Seo
				title={`${post.title} | SEO Playground`}
				description={post.description}
				canonical={`https://seo-playground.vercel.app/blog/${slug}`}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
				}}
			/>
			<main>
				<article>
				<h1>{post.title}</h1>
				<p>{post.description}</p>
				</article>
			</main>
		</>
	);
}
