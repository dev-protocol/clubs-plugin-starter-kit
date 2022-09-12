<template>
	<h2>#{{ token.id }}</h2>
	<Image :src="token.image" />
</template>

<script lang="ts">
import type { TokenURIWithId } from '../../types'
import { defineComponent, PropType } from 'vue'
import Image from '../Image/Image.vue'

export default defineComponent({
	components: { Image },
	props: {
		token: {
			type: Object as PropType<TokenURIWithId>,
			required: true,
		},
	},
})
</script>
