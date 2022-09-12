<template>
	<h2>#{token.id}</h2>
	<img :src="imageURL" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type TokenURIWithId = {
	id: number
	image: string
}

export default defineComponent({
	props: {
		token: {
			type: Object as PropType<TokenURIWithId>,
			required: true,
		},
	},
	computed: {
		imageURL() {
			return this.token.image.startsWith('ipfs:')
				? `https://${this.token.image.replace(
						'ipfs://',
						''
				  )}.ipfs.nftstorage.link/`
				: this.token.image
		},
	},
})
</script>
