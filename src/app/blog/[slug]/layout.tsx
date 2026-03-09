import React from "react";

/**
 * Simplified Layout for individual blog posts.
 * The metadata and schema are handled in page.tsx for better performance.
 */
export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-post-wrapper">
      {/* This layout acts as a simple container. 
          It has zero impact on the visual design or content of your posts.
      */}
      {children}
    </div>
  );
}
