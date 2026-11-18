import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),
			adapter: adapter({
				// default options are shown. On some platforms
				// these options are set automatically — see below
				pages: 'build',
				assets: 'build',
				// GitHub Pages serves 404.html for unknown paths
				fallback: '404.html',
				precompress: false,
				strict: true
			}),
			paths: {
				base: process.argv.includes('dev')
					? ''
					: (process.env.BASE_PATH as '' | `/${string}` | undefined)
			}
		})
	]
});
