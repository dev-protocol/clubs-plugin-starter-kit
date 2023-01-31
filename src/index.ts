import {
	ClubsFunctionGetAdminPaths,
	ClubsFunctionGetPagePaths,
	ClubsFunctionPlugin,
	ClubsPluginCategory,
	ClubsPluginMeta,
	ClubsStaticPaths,
} from '@devprotocol/clubs-core'
import { clientsSTokens } from '@devprotocol/dev-kit/agent'
import { UndefinedOr, whenDefined } from '@devprotocol/util-ts'
import { ethers } from 'ethers'
import { always } from 'ramda'
import { default as List } from './pages/List.astro'
import { default as Page } from './pages/Page.astro'
import { default as Admin } from './pages/Admin.astro'

export const getPagePaths: ClubsFunctionGetPagePaths = async (options) => {
	const slug = options.find(({ key }) => key === 'slug')
		?.value as UndefinedOr<string>
	const rpc = options.find(({ key }) => key === 'rpc')
		?.value as UndefinedOr<string>
	const maxpage =
		(options.find(({ key }) => key === 'maxpage')
			?.value as UndefinedOr<number>) ?? 10

	const provider = whenDefined(
		rpc,
		(url) => new ethers.providers.JsonRpcProvider(url)
	)
	const clients = await whenDefined(provider, clientsSTokens)
	const contract = whenDefined(clients, ([l1, l2]) => l1 || l2)
	const tokens = await whenDefined(contract, (sTokens) =>
		Promise.all(
			new Array(maxpage).fill(null).map(async (_, i) => {
				const id = i + 1
				const token = await sTokens.tokenURI(id).catch(always(undefined))
				return whenDefined(token, (item) => ({ id, ...item }))
			})
		)
	)
	const secondaryPages = tokens
		? (tokens.map((token) => ({
				paths: [slug, token?.id],
				props: { token },
				component: Page,
		  })) as ClubsStaticPaths)
		: []

	return slug && tokens
		? [
				{ paths: [slug], component: List, props: { slug, tokens } },
				...secondaryPages,
		  ]
		: []
}

export const getAdminPaths: ClubsFunctionGetAdminPaths = async (options) => {
	const slug = options.find(({ key }) => key === 'slug')
		?.value as UndefinedOr<string>

	return [{ paths: [slug ?? 'stokens'], component: Admin, props: { options } }]
}

export const meta: ClubsPluginMeta = {
	id: 'unique-and-descriptive-name-here',
	displayName: 'sTokens Viewer',
	category: ClubsPluginCategory.Uncategorized,
}

export default {
	getPagePaths,
	getAdminPaths,
	meta,
} as ClubsFunctionPlugin
