'use client';
import Head from 'next/head';

export default function Seo({ title, description, canonical }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{canonical && <link rel="canonical" href={canonical} />}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
}
