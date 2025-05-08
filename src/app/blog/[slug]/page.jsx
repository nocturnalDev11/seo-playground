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

	return (
		<>
			<Seo
				title={`${post.title} | SEO Playground`}
				description={post.description}
				canonical={`https://your-site.vercel.app/blog/${slug}`}
			/>
			<main>
				<h1>{post.title}</h1>
				<p>{post.description}</p>
			</main>
		</>
	);
}
