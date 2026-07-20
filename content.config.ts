import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  schema: z.object({
    toolName: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    rating: z.number(),
    price: z.string(),
    website: z.string().url(),
    logo: z.string(),
    featured: z.boolean().default(false),
    publishedDate: z.coerce.date(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    bestFor: z.array(z.string()),
  }),
});

const comparisons = defineCollection({
  schema: z.object({
    title: z.string(),
    tool1: z.string(),
    tool2: z.string(),
    category: z.string(),
    winner: z.string(),
    description: z.string(),
    score1: z.number(),
    score2: z.number(),
    price1: z.string(),
    price2: z.string(),
    logo1: z.string(),
    logo2: z.string(),
    publishedDate: z.coerce.date(),
    features: z.array(
      z.object({
        name: z.string(),
        tool1: z.union([z.boolean(), z.string()]),
        tool2: z.union([z.boolean(), z.string()]),
      })
    ),
  }),
});

export const collections = {
  reviews,
  comparisons,
};