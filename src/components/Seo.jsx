'use client';
import Head from 'next/head';

export default function Seo({
	title = 'My SEO Playground',
	description = 'Learning SEO hands-on using Next.js and Laravel.',
	canonical,
	image = 'https://seo-playground.vercel.app/next.svg',
	url = 'https://seo-playground.vercel.app',
	type = 'website',
	noIndex = false,
}) {
	return (
		<Head>
			{/* Basic */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{canonical && <link rel="canonical" href={canonical} />}
			{noIndex && <meta name="robots" content="noindex, nofollow" />}

			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={canonical || url} />
			<meta property="og:image" content={image} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Head>
	);
}
