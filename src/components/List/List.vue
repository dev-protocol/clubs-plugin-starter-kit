<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TokenURIWithId } from '../../types'
import Image from '../Image/Image.vue'

const props = defineProps({
	slug: String,
	tokens: {
		type: Object as PropType<TokenURIWithId[]>,
		required: true,
	},
})

const { slug, tokens } = props
</script>

<template>
	<ul class="grid gap-2">
		<li v-for="token in tokens" v-bind:key="token.id">
			<a :href="`${slug}/${token.id}`" class="flex gap-2">
					<span>#{{ token.id }}</span>
					<Image :src="token.image" class="h-8" />
			</a>
		</li>
	</ul>
</template>
