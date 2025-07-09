import adapter from '@sveltejs/adapter-static';
import preprocess from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH
		}
	}
};

export default config;

