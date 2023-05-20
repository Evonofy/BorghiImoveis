import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  site: "https://borhgi-imoveis.vercel.app",
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2022-02-24"),
    }),
    prefetch(),
    image(),
  ],
})
