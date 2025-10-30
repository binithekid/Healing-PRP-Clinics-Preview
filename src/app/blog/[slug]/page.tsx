"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Dot } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  BlogPost,
  getBlogPostBySlug,
  getBlogPostNavigation,
} from "@/lib/contentful";
import Footer from "@/components/Footer";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [navigation, setNavigation] = useState<{
    previous: BlogPost | null;
    next: BlogPost | null;
  }>({ previous: null, next: null });
  const [isLoaded, setIsLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);

    const fetchPost = async () => {
      try {
        if (params.slug) {
          const [blogPost, nav] = await Promise.all([
            getBlogPostBySlug(params.slug as string),
            getBlogPostNavigation(params.slug as string),
          ]);

          if (blogPost) {
            setPost(blogPost);
            setNavigation(nav);
          } else {
            setNotFound(true);
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setNotFound(true);
      }
    };

    fetchPost();

    // Set loaded state after a short delay for smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [params.slug]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  const renderRichText = (content: unknown) => {
    if (!content) return null;

    // Simple rich text rendering - you might want to use @contentful/rich-text-react-renderer for more complex content
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // Handle Contentful rich text structure
    if (content && typeof content === "object" && "content" in content) {
      const richContent = content as { content: unknown[] };
      return richContent.content.map((node: unknown, index: number) => {
        const nodeObj = node as { nodeType: string; content?: unknown[] };
        if (nodeObj.nodeType === "paragraph") {
          return (
            <p
              key={index}
              className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-600 leading-relaxed"
            >
              {nodeObj.content?.map((textNode: unknown, textIndex: number) => {
                const textObj = textNode as {
                  value: string;
                  marks?: Array<{ type: string }>;
                };
                let element: React.ReactNode = textObj.value;

                // Apply text formatting based on marks
                if (textObj.marks) {
                  textObj.marks.forEach((mark: { type: string }) => {
                    switch (mark.type) {
                      case "bold":
                        element = (
                          <strong key={`${textIndex}-bold`}>{element}</strong>
                        );
                        break;
                      case "italic":
                        element = (
                          <em key={`${textIndex}-italic`}>{element}</em>
                        );
                        break;
                      case "underline":
                        element = (
                          <u key={`${textIndex}-underline`}>{element}</u>
                        );
                        break;
                      case "code":
                        element = (
                          <code
                            key={`${textIndex}-code`}
                            className="bg-gray-100 px-1 py-0.5 rounded text-sm"
                          >
                            {element}
                          </code>
                        );
                        break;
                    }
                  });
                }

                return element;
              })}
            </p>
          );
        }
        if (nodeObj.nodeType === "heading-2") {
          return (
            <h2
              key={index}
              className="text-xl sm:text-2xl font-raleway text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4"
            >
              {nodeObj.content?.map((textNode: unknown, textIndex: number) => {
                const textObj = textNode as {
                  value: string;
                  marks?: Array<{ type: string }>;
                };
                let element: React.ReactNode = textObj.value;

                if (textObj.marks) {
                  textObj.marks.forEach((mark: { type: string }) => {
                    switch (mark.type) {
                      case "bold":
                        element = (
                          <strong key={`${textIndex}-bold`}>{element}</strong>
                        );
                        break;
                      case "italic":
                        element = (
                          <em key={`${textIndex}-italic`}>{element}</em>
                        );
                        break;
                      case "underline":
                        element = (
                          <u key={`${textIndex}-underline`}>{element}</u>
                        );
                        break;
                    }
                  });
                }

                return element;
              })}
            </h2>
          );
        }
        if (nodeObj.nodeType === "heading-3") {
          return (
            <h3
              key={index}
              className="text-lg sm:text-xl font-raleway text-slate-900 mt-4 sm:mt-6 mb-2 sm:mb-3"
            >
              {nodeObj.content?.map((textNode: unknown, textIndex: number) => {
                const textObj = textNode as {
                  value: string;
                  marks?: Array<{ type: string }>;
                };
                let element: React.ReactNode = textObj.value;

                if (textObj.marks) {
                  textObj.marks.forEach((mark: { type: string }) => {
                    switch (mark.type) {
                      case "bold":
                        element = (
                          <strong key={`${textIndex}-bold`}>{element}</strong>
                        );
                        break;
                      case "italic":
                        element = (
                          <em key={`${textIndex}-italic`}>{element}</em>
                        );
                        break;
                      case "underline":
                        element = (
                          <u key={`${textIndex}-underline`}>{element}</u>
                        );
                        break;
                    }
                  });
                }

                return element;
              })}
            </h3>
          );
        }
        if (nodeObj.nodeType === "unordered-list") {
          return (
            <ul
              key={index}
              className="mb-3 sm:mb-4 list-disc list-inside text-sm sm:text-base text-slate-600"
            >
              {nodeObj.content?.map((listItem: unknown, listIndex: number) => {
                const listItemObj = listItem as { content?: unknown[] };
                return (
                  <li key={listIndex} className="mb-2">
                    {listItemObj.content?.map(
                      (textNode: unknown, textIndex: number) => {
                        const textObj = textNode as {
                          value: string;
                          marks?: Array<{ type: string }>;
                        };
                        let element: React.ReactNode = textObj.value;

                        if (textObj.marks) {
                          textObj.marks.forEach((mark: { type: string }) => {
                            switch (mark.type) {
                              case "bold":
                                element = (
                                  <strong key={`${textIndex}-bold`}>
                                    {element}
                                  </strong>
                                );
                                break;
                              case "italic":
                                element = (
                                  <em key={`${textIndex}-italic`}>{element}</em>
                                );
                                break;
                              case "underline":
                                element = (
                                  <u key={`${textIndex}-underline`}>
                                    {element}
                                  </u>
                                );
                                break;
                            }
                          });
                        }

                        return element;
                      }
                    )}
                  </li>
                );
              })}
            </ul>
          );
        }
        if (nodeObj.nodeType === "ordered-list") {
          return (
            <ol
              key={index}
              className="mb-3 sm:mb-4 list-decimal list-inside text-sm sm:text-base text-slate-600"
            >
              {nodeObj.content?.map((listItem: unknown, listIndex: number) => {
                const listItemObj = listItem as { content?: unknown[] };
                return (
                  <li key={listIndex} className="mb-2">
                    {listItemObj.content?.map(
                      (textNode: unknown, textIndex: number) => {
                        const textObj = textNode as {
                          value: string;
                          marks?: Array<{ type: string }>;
                        };
                        let element: React.ReactNode = textObj.value;

                        if (textObj.marks) {
                          textObj.marks.forEach((mark: { type: string }) => {
                            switch (mark.type) {
                              case "bold":
                                element = (
                                  <strong key={`${textIndex}-bold`}>
                                    {element}
                                  </strong>
                                );
                                break;
                              case "italic":
                                element = (
                                  <em key={`${textIndex}-italic`}>{element}</em>
                                );
                                break;
                              case "underline":
                                element = (
                                  <u key={`${textIndex}-underline`}>
                                    {element}
                                  </u>
                                );
                                break;
                            }
                          });
                        }

                        return element;
                      }
                    )}
                  </li>
                );
              })}
            </ol>
          );
        }
        return null;
      });
    }

    return null;
  };

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <div className="text-center">
          <h1 className="text-2xl font-raleway text-slate-900 mb-4">
            Post not found
          </h1>
          <p className="text-slate-600 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)] font-inter font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div> */}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={pageVariants}
    >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="mb-6 sm:mb-10 inline-flex items-center justify-between w-full gap-2"
              variants={itemVariants}
            >
              <Link
                href="/blog"
                className="inline-flex rounded-full bg-gray-100 px-2 sm:px-3 py-[0.13rem] items-center text-gray-600 hover:text-[var(--brand-blue-dark)] text-xs transition-colors duration-300"
              >
                Back
              </Link>

              {navigation.next ? (
                <Link
                  href={`/blog/${navigation.next.slug}`}
                  className="inline-flex rounded-full bg-gray-100 px-2 sm:px-3 py-[0.13rem] items-center text-gray-600 hover:text-[var(--brand-blue-dark)] text-xs transition-colors duration-300"
                >
                  Next
                </Link>
              ) : (
                <span className="inline-flex rounded-full bg-gray-50 px-2 sm:px-3 py-[0.13rem] items-center text-gray-400 text-xs cursor-not-allowed">
                  Next
                </span>
              )}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="inline-flex mb-2 items-center text-gray-600"
            >
              {post.type && post.type.length > 0 && (
                <motion.div className="flex flex-wrap gap-2">
                  {post.type.map((type, index) => (
                    <span key={index} className="text-xs">
                      {/* <Tag className="w-3 h-3" /> */}
                      {type}
                    </span>
                  ))}
                </motion.div>
              )}

              <Dot className="w-3 h-3" />
              <motion.div className="flex flex-wrap text-xs items-center gap-6">
                {post.date && (
                  <div className="flex items-center gap-2">
                    <span>{formatDate(post.date)}</span>
                  </div>
                )}
              </motion.div>
            </motion.div>
            <motion.h1
              className="text-2xl sm:text-3xl font-raleway text-slate-900 mb-3 sm:mb-4 leading-tight"
              variants={itemVariants}
            >
              {post.title}
            </motion.h1>

            {post.excerpt && (
              <motion.p
                className="text-sm text-slate-500 mb-4 sm:mb-6"
                variants={itemVariants}
              >
                {post.excerpt}
              </motion.p>
            )}

            {/* <motion.div
              className="flex flex-wrap items-center gap-6 text-slate-600 mb-6"
              variants={itemVariants}
            >
              {post.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.date)}</span>
                </div>
              )}
            </motion.div> */}
            {/* 
            {post.type && post.type.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2"
                variants={itemVariants}
              >
                {post.type.map((type, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-sm font-inter"
                  >
                    <Tag className="w-3 h-3" />
                    {type}
                  </span>
                ))}
              </motion.div>
            )} */}
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-4 sm:py-6 lg:py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={post.coverImage.url}
                alt={post.coverImage.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            className="prose prose-lg max-w-none"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="text-slate-600 leading-relaxed"
              variants={itemVariants}
            >
              {renderRichText(post.content)}
            </motion.div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
