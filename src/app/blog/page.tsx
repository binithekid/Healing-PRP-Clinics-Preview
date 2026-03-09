import BlogClient from "@/components/pages/BlogClient";
import { getAllBlogPosts } from "@/lib/contentful";
import type { Metadata } from "next";
import Script from "next/script";

// This helps Google index your blog main page correctly
export const metadata: Metadata = {
  title: "Doctor-Led Medical & PRP Blog | Healing-PRP Clinics",
  description: "Stay informed about the latest developments in PRP treatments, joint health, and aesthetic medicine from our medical experts.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/blog",
  },
};

// ✅ FIX 1: Add Revalidation so new Contentful posts appear automatically
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  // We fetch the posts on the server for faster loading and better SEO
  const posts = await getAllBlogPosts();

  // --- CollectionPage Schema for better crawling ---
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Healing-PRP Medical & Regenerative Blog",
    "description": "A collection of expert medical articles on PRP therapy, sexual rejuvenation, and aesthetic medicine.",
    "url": "https://www.healing-prp.co.uk/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Healing-PRP Clinics",
      "logo": "https://www.healing-prp.co.uk/Logo2.png"
    }
  };

  // ✅ FIX 2: Added "|| []" to prevent crash if Contentful returns null
  return (
    <>
      <Script
        id="blog-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogClient initialPosts={posts || []} />
    </>
  );
}
