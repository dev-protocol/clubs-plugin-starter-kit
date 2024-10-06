import {
	type ClubsFunctionGetAdminPaths,
	type ClubsFunctionGetPagePaths,
	type ClubsFunctionGetLayout,
	type ClubsFunctionThemePlugin,
	ClubsPluginCategory,
	type ClubsThemePluginMeta,
} from '@devprotocol/clubs-core'
import { default as Default } from './Default.astro'

export const getPagePaths = (async () => []) satisfies ClubsFunctionGetPagePaths

export const getAdminPaths =
	(async () => []) satisfies ClubsFunctionGetAdminPaths

export const getLayout = (async () => ({
	layout: Default,
})) satisfies ClubsFunctionGetLayout

export const meta = {
	id: 'example-theme',
	displayName: 'Example theme',
	category: ClubsPluginCategory.Theme,
	theme: {
		previewImage: 'https://dummyimage.com/600x400/000/fff',
	},
} satisfies ClubsThemePluginMeta

export default {
	getPagePaths,
	getAdminPaths,
	getLayout,
	meta,
} satisfies ClubsFunctionThemePlugin
