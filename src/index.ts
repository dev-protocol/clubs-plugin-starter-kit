import type {
	ClubsFunctionGetAdminPaths,
	ClubsFunctionGetPagePaths,
	ClubsFunctionPlugin,
	ClubsPluginMeta,
	ClubsStaticPaths,
} from '@devprotocol/clubs-core'
import { ClubsPluginCategory } from '@devprotocol/clubs-core'
import { clientsSTokens } from '@devprotocol/dev-kit/agent'
import { type UndefinedOr, whenDefined } from '@devprotocol/util-ts'
import { JsonRpcProvider } from 'ethers'
import { always } from 'ramda'
import List from './pages/List.astro'
import Page from './pages/Page.astro'
import Admin from './pages/Admin.astro'
import Readme from './readme.astro'

export const getPagePaths = (async (options) => {
	const slug = options.find(({ key }) => key === 'slug')
		?.value as UndefinedOr<string>
	const rpc = options.find(({ key }) => key === 'rpc')
		?.value as UndefinedOr<string>
	const maxpage =
		(options.find(({ key }) => key === 'maxpage')
			?.value as UndefinedOr<number>) ?? 10

	const provider = whenDefined(rpc, (url) => new JsonRpcProvider(url))
	const clients = await whenDefined(provider, clientsSTokens)
	const contract = whenDefined(clients, ([l1, l2]) => l1 || l2)
	const tokens = await whenDefined(contract, (sTokens) =>
		Promise.all(
			new Array(maxpage).fill(null).map(async (_, i) => {
				const id = i + 1
				const token = await sTokens.tokenURI(id).catch(always(undefined))
				return whenDefined(token, (item) => ({ id, ...item }))
			}),
		),
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
}) satisfies ClubsFunctionGetPagePaths

export const getAdminPaths = (async (options) => {
	const slug = options.find(({ key }) => key === 'slug')
		?.value as UndefinedOr<string>

	return [{ paths: [slug ?? 'stokens'], component: Admin, props: { options } }]
}) satisfies ClubsFunctionGetAdminPaths

export const meta = {
	id: 'unique-and-descriptive-name-here',
	displayName: 'sTokens Viewer',
	category: ClubsPluginCategory.Uncategorized,
	readme: Readme,
} satisfies ClubsPluginMeta

export default {
	getPagePaths,
	getAdminPaths,
	meta,
} satisfies ClubsFunctionPlugin
