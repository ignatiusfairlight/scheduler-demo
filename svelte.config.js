import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// GitHub Pages needs this for client-side routing to work
			fallback: '404.html'
		}),
		paths: {
			// Empty for dev, set by GitHub Actions for production
			base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH
		},
		// Optional: prevents trailing slashes like /about/ → /about
		trailingSlash: 'never'
	}
};

export default config;
