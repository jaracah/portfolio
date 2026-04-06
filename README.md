# Portfolio

My portfolio site.

## Tech Stack

- [Astro](https://astro.build) - static site generator
- Content collections with Markdown
- Hosted on Cloudflare Pages

## Local Dev

```sh
npm install
npm run dev
```

runs at `localhost:4321`.

## Content

- Projects: `src/content/projects/*.md`
- About: `src/content/about/index.md`
- Social links: `src/data/socials.ts`
- Site config: `src/data/site.ts`

## Deployment

Pushes to `master` auto deploy to cloudflare pages.

Pushes to any other branch deploys a preview in cloudflare.

Build command: `npm run build`
Output directory: `dist`
