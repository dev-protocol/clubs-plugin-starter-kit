import { defineConfig } from 'astro/config'
import clubs from '@devprotocol/clubs-core'
import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'
import { config } from 'dotenv'

config({ path: './.env' })

export default defineConfig({
	output: 'server',
	integrations: [clubs(), vue(), svelte()],
	vite: { plugins: [tailwindcss()] },
})
