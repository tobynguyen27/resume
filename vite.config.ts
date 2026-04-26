import { defineConfig } from 'vite-plus';
import Vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
	staged: {
		'*': 'vp check --fix',
	},
	lint: { options: { typeAware: true, typeCheck: true }, plugins: ['vue'] },
	fmt: {
		useTabs: true,
		tabWidth: 4,
		printWidth: 100,
		endOfLine: 'lf',
		bracketSameLine: true,
		singleQuote: true,
		ignorePatterns: ['dist/**', 'node_modules/**'],
		overrides: [
			{
				files: ['*.yml', '*.yaml', '*.md'],
				options: {
					tabWidth: 2,
					useTabs: false,
				},
			},
		],
	},
	plugins: [Vue(), UnoCSS(), cloudflare()],
});
