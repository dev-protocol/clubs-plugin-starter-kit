import { encode } from '@devprotocol/clubs-core'

export default () =>
	encode({
		name: 'Debug',
		twitterHandle: '@debug',
		description: '',
		url: '',
		propertyAddress: '',
		chainId: 137,
		rpcUrl: 'https://polygon-rpc.com/',
		adminRolePoints: 50,
		plugins: [
			{
				name: 'theme',
				options: [],
			},
			{
				name: 'sTokensViewer',
				options: [
					{ key: 'slug', value: 'stokens' },
					{ key: 'rpc', value: 'https://polygon-rpc.com/' },
					{ key: 'maxpage', value: 30 },
				],
			},
		],
	})
