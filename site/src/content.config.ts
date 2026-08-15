import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const productsDir = new URL("../../Products", import.meta.url);
const legalDir = new URL("../../Legal", import.meta.url);

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

// 제품별 개인정보처리방침. 본문은 Legal/<제품>.<lang>.md 에 있다.
const legal = defineCollection({
  loader: glob({
    pattern: ["*.md", "!_*.md"],
    base: legalDir,
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    product: z.string(),
    updated: z.string(),
    // 실제 배포된 구현과 대조한 날짜. 비어 있으면 초안이므로 공개하지 않는다.
    verifiedAgainstBuild: z.string().optional(),
  }),
});

export const collections = { products, legal };
