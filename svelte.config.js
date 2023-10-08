import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [ vitePreprocess()],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};
export default config;