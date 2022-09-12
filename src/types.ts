export type Option =
	| { readonly key: 'slug'; readonly value?: string }
	| { readonly key: 'rpc'; readonly value?: string }
	| { readonly key: 'maxpage'; readonly value?: number }

export type TokenURIWithId = {
	readonly id: number
	readonly image: string
}
