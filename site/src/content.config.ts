import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const productsDir = new URL("../../Products", import.meta.url);

const products = defineCollection({
  loader: glob({
    pattern: ["*.md", "!_*.md"],
    base: productsDir,
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    status: z.enum(["idea", "prototype", "beta", "live"]),
    tags: z.array(z.string()),
    price: z.number().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { products };
