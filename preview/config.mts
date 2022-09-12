import type { ClubsConfiguration } from '@devprotocol/clubs-core'

export default {
	name: 'Debug',
	twitterHandle: '@debug',
	description: '',
	url: '',
	propertyAddress: '',
	plugins: [
		{
			name: 'sTokensViewer',
			options: [
				{ key: 'slug', value: 'stokens' },
				{ key: 'rpc', value: 'https://polygon-rpc.com/' },
				{ key: 'maxpage', value: 30 },
			],
		},
	],
} as ClubsConfiguration
