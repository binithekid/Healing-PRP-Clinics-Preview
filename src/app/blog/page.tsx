"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost, getAllBlogPosts } from "@/lib/contentful";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await getAllBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      {/* Hero Section */}
      <section className="relative py-12 border-b border-slate-200 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
              variants={itemVariants}
            >
              Health & Wellness Blog
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl font-raleway text-slate-900 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Latest Insights on PRP & Regenerative Medicine
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Stay informed about the latest developments in Platelet-Rich
              Plasma treatments, sexual wellness, joint health, and aesthetic
              medicine from our medical experts.
            </motion.p>
          </motion.div>
        </div>
        {/* <hr className="mt-20 mx-36 border-slate-300" /> */}
      </section>
      {/* Blog Posts Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--brand-blue)]"></div>
              <p className="mt-4 text-slate-600">Loading blog posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-raleway text-slate-900 mb-4">
                No blog posts yet
              </h3>
              <p className="text-slate-600">
                Check back soon for the latest insights on PRP treatments.
              </p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {posts.map((post) => (
                <motion.article
                  key={post.slug}
                  className="bg-white rounded-sm shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                >
                  {post.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.coverImage.url}
                        alt={post.coverImage.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-4 text-xs text-slate-500 mb-2 sm:mb-3">
                      {post.date && (
                        <div className="flex items-center gap-1">
                          {/* <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> */}
                          <span>{formatDate(post.date)}</span>
                        </div>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-xl font-raleway text-slate-900 mb-2 sm:mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-sm text-slate-600 mb-3 sm:mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {/* {post.type && post.type.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.type.slice(0, 3).map((type, typeIndex) => (
                          <span
                            key={typeIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                          >
                            <Tag className="w-3 h-3" />
                            {type}
                          </span>
                        ))}
                      </div>
                    )} */}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)] transition-colors duration-300"
                    >
                      Read More
                      <svg
                        className="w-3 h-3 mt-[0.2rem] ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
