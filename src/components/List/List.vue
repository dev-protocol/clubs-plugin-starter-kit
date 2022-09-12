<template>
	<ul class="grid gap-2">
		<li v-for="token in tokens" v-bind:key="token.id">
			<a :href="slug + '/' + token.id" class="flex gap-2"
				><span>#{{ token.id }}</span
				><Image :src="token.image" class="h-8"
			/></a>
		</li>
	</ul>
</template>

<script lang="ts">
import type { TokenURIWithId } from '../../types'
import { defineComponent, PropType } from 'vue'
import Image from '../Image/Image.vue'

export default defineComponent({
	components: { Image },
	props: {
		slug: String,
		tokens: {
			type: Array as PropType<TokenURIWithId[]>,
			required: true,
		},
	},
})
</script>
