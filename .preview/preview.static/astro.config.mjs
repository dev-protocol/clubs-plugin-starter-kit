import { defineConfig } from 'astro/config'
import clubs from '@devprotocol/clubs-core'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	server: {
		port: 3000,
	},
	integrations: [clubs(), vue(), tailwind()],
})
