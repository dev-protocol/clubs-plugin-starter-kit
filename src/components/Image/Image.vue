<template>
	<img :src="image" class="rounded" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		src: String,
	},
	computed: {
		image() {
			return this.src?.startsWith('ipfs:')
				? `https://${this.src.replace('ipfs://', '')}.ipfs.nftstorage.link/`
				: this.src
		},
	},
})
</script>
