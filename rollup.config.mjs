import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'

const astro = () => ({
	name: 'astro',
	resolveId(source) {
		if (source.endsWith('.astro')) {
			return {
				id: `../src/layouts${source.replace('./', '/')}`,
				external: true,
			}
		}
	},
})

export default [
	{
		input: 'dist/src/index.js',
		output: [
			{
				file: 'dist/index.mjs',
				format: 'es',
			},
			{
				file: 'dist/index.cjs',
				format: 'cjs',
			},
		],
		plugins: [commonjs(), astro()],
	},
	{
		input: 'dist/src/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [dts(), astro()],
	},
]
