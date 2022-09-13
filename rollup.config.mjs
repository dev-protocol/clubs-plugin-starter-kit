import typescript from '@rollup/plugin-typescript'

const astro = () => ({
	name: 'astro',
	resolveId(source) {
		if (source.endsWith('.astro')) {
			return {
				id: source.replace('./', '../src/'),
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
				file: 'dist/index.js',
				format: 'es',
			},
		],
		plugins: [typescript(), astro()],
	},
]
