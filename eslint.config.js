import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import functional from 'eslint-plugin-functional'

export default tseslint.config(
	{
		files: ['**/*.{ts,tsx,mts}'],
		extends: [
			eslint.configs.recommended,
			functional.configs.recommended,
			prettier,
		],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		files: ['**/*.test.ts', '**/*.{js,mjs,cjs}'],
		extends: [functional.configs.off],
	},
	{ ignores: ['dist'] },
)
