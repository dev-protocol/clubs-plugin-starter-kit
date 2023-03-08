import { dirname, relative, resolve } from 'path'
import typescript from '@rollup/plugin-typescript'

const dir = 'dist'

const useSrc = ({ dir: _dir, ext } = {}) => ({
	name: 'local:useSrc',
	resolveId(source, importer) {
		if (ext.some((e) => source.endsWith(e))) {
			const from = _dir ?? dirname(importer)
			const importerDir = dirname(importer)
			const original = resolve(importerDir, source)
			const relativePath = relative(from, original)
			return {
				id: relativePath,
				external: true,
			}
		}
	},
})

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				dir,
				format: 'es',
			},
		],
		plugins: [
			typescript(),
			useSrc({ ext: ['.astro', '.svelte', '.vue', '.scss', '.css'], dir }),
		],
	},
]
