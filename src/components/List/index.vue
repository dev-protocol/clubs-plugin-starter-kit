<template>
	<ul class="p-8">
		<li v-for="token in tokens" v-bind:key="token.id">
			<a :href="slug + '/' + token.id">{token.id}</a>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type TokenURIsWithId = {
	id: number
	image: string
}[]

export default defineComponent({
	props: {
		slug: String,
		tokens: {
			type: Array as PropType<TokenURIsWithId>,
			required: true,
		},
	},
})
</script>
