import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),

    description: z.string(),

    category: z.string(),

    logo: z.string(),

    featuredImage: z.string(),

    rating: z.number(),

    price: z.string(),

    affiliateKey: z.string(),

    author: z.string(),

    published: z.string(),

    updated: z.string(),

    featured: z.boolean(),

    pros: z.array(z.string()),

    cons: z.array(z.string()),

    bestFor: z.array(z.string()),
  }),
});

export const collections = {
  reviews,
};