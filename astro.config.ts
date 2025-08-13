import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: 'https://ai.craftlions.com',
	adapter: cloudflare(),
});
