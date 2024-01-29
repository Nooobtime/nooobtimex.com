import { getPostBySlug } from "@/lib/api";
import type { Metadata } from "next"; // Import Metadata type
import { notFound } from "next/navigation";
import React from "react";

type Params = {
  slug: string;
};

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return {
    title: `${post.title} | nooobtimex.me`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      images: [post.Image],
    },
  };
}

export default async function PostLayout(props: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const params = await props.params;

  const { children } = props;

  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    image: ["https://hoyosmash.com" + post.Image],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: [
      {
        "@type": "Person",
        name: "NooobtimeX",
        url: "https://nooobtimex.me/",
      },
    ],
  };

  return (
    <>
      {children}
      {/* Render the JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
