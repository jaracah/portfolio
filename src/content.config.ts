import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		order: z.number().optional(),
		tags: z.array(z.string()).default([]),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				})
			)
			.default([]),
		links: z
			.array(
				z.object({
					label: z.string(),
					url: z.string(),
				})
			)
			.default([]),
	}),
});

const about = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
	schema: z.object({
		title: z.string().optional(),
		tagline: z.string().optional(),
	}),
});

export const collections = { projects, about };
