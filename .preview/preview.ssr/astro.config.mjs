import { defineConfig } from 'astro/config'
import clubs from '@devprotocol/clubs-core'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

export default defineConfig({
	output: 'server',
	integrations: [clubs(), vue(), tailwind(), svelte()],
})
