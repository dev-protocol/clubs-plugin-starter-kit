import {
	type ClubsFunctionGetAdminPaths,
	type ClubsFunctionGetPagePaths,
	type ClubsFunctionGetLayout,
	type ClubsFunctionThemePlugin,
	ClubsPluginCategory,
	ClubsThemePluginMeta,
} from '@devprotocol/clubs-core'
import { default as Default } from './Default.astro'

export const getPagePaths: ClubsFunctionGetPagePaths = async () => []

export const getAdminPaths: ClubsFunctionGetAdminPaths = async () => []

export const getLayout: ClubsFunctionGetLayout = async () => ({
	layout: Default,
})

export const meta: ClubsThemePluginMeta = {
	id: 'example-theme',
	displayName: 'Example theme',
	category: ClubsPluginCategory.Theme,
	theme: {
		previewImage: 'https://dummyimage.com/600x400/000/fff',
	},
}

export default {
	getPagePaths,
	getAdminPaths,
	getLayout,
	meta,
} as ClubsFunctionThemePlugin
