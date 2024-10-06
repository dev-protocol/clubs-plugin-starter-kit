import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import functional from 'eslint-plugin-functional'

export default tseslint.config(
	{
		files: ['**/*.ts'],
		extends: [
			functional.configs.all,
			prettier,
			eslint.configs.recommended,
			// your other plugin configs here
		],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			// any rule configs here
		},
	},
	{
		files: ['**/*.ts'],
		rules: {
			'functional/prefer-immutable-types': 'off',
			'functional/functional-parameters': 'off',
		},
	},
	{
		files: ['**/*.test.ts'],
		extends: [
			functional.configs.off,
			// your other plugin configs here
		],
	},
)
