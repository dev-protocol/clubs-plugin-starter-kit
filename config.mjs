/* eslint-disable no-undef */
/* eslint-disable functional/no-expression-statement */
import { encode } from '@devprotocol/clubs-core'

console.log(
	encode({
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
	})
)
