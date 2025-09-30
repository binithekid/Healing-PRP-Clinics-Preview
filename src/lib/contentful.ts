import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: unknown;
  coverImage?: {
    url: string;
    title: string;
    description?: string;
  };
  date: string;
  type?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "post",
      //   order: "-fields.date",
    });

    return response.items.map((item: Record<string, unknown>) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        title: fields.title as string,
        slug: fields.slug as string,
        excerpt: fields.excerpt as string,
        content: fields.content,
        coverImage: fields.coverImage
          ? {
              url: `https:${
                (fields.coverImage as Record<string, unknown>).fields?.file?.url
              }`,
              title: (fields.coverImage as Record<string, unknown>).fields
                ?.title as string,
              description: (fields.coverImage as Record<string, unknown>).fields
                ?.description as string,
            }
          : undefined,
        date: fields.date as string,
        type: (fields.type as string[]) || [],
        seoTitle: fields.seoTitle as string,
        seoDescription: fields.seoDescription as string,
      };
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "post",
      "fields.slug": slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const item = response.items[0] as Record<string, unknown>;
    const fields = item.fields as Record<string, unknown>;
    return {
      title: fields.title as string,
      slug: fields.slug as string,
      excerpt: fields.excerpt as string,
      content: fields.content,
      coverImage: fields.coverImage
        ? {
            url: `https:${
              (fields.coverImage as Record<string, unknown>).fields?.file?.url
            }`,
            title: (fields.coverImage as Record<string, unknown>).fields
              ?.title as string,
            description: (fields.coverImage as Record<string, unknown>).fields
              ?.description as string,
          }
        : undefined,
      date: fields.date as string,
      type: (fields.type as string[]) || [],
      seoTitle: fields.seoTitle as string,
      seoDescription: fields.seoDescription as string,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getBlogPostNavigation(slug: string): Promise<{
  previous: BlogPost | null;
  next: BlogPost | null;
}> {
  try {
    const allPosts = await getAllBlogPosts();
    const currentIndex = allPosts.findIndex((post) => post.slug === slug);

    if (currentIndex === -1) {
      return { previous: null, next: null };
    }

    return {
      previous: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      next:
        currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    };
  } catch (error) {
    console.error("Error fetching blog post navigation:", error);
    return { previous: null, next: null };
  }
}
