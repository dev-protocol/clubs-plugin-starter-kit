<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
	src: {
		type: String,
		required: true,
	},
})

const image = computed(() => {
	const { src } = props
	if (src.startsWith('ipfs://')) {
		return `https://${src.replace('ipfs://', '')}.ipfs.nftstorage.link/`
	}
	return src
})
</script>

<template>
	<img :src="image" class="rounded" />
</template>

