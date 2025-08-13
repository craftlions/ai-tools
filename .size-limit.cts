import type { SizeLimitConfig } from "size-limit";

module.exports = [
	{
		path: ".wrangler/size/index.js",
		brotli: false,
		gzip: false,
	},
] satisfies SizeLimitConfig;
