import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://venerable-licorice-d7b001.netlify.app/",
	integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
