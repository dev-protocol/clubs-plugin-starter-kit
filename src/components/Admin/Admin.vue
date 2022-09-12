<template>
	<h2 class="text-lg font-bold mb-16">sTokens Viewer</h2>
	<form class="grid gap-16" @change="onChange">
		<label class="grid gap-2"
			>Slug
			<input type="text" v-model="slug" class="bg-black rounded p-2" />
		</label>
		<label class="grid gap-2"
			>RPC Endpoint
			<input type="text" v-model="rpc" class="bg-black rounded p-2" />
		</label>
		<label class="grid gap-2"
			>Max items
			<input type="number" v-model="maxpage" class="bg-black rounded p-2" />
		</label>
	</form>
</template>

<script lang="ts">
import type { ClubsPropsAdminPages } from '@devprotocol/clubs-core'
import { setOptions } from '@devprotocol/clubs-core'
import { defineComponent, PropType } from 'vue'
import type { Option } from '../../types'
import Image from '../Image/Image.vue'

export default defineComponent({
	components: { Image },
	props: {
		options: {
			type: Array as PropType<Option[]>,
			required: true,
		},
		clubs: {
			type: Object as PropType<ClubsPropsAdminPages['clubs']>,
			required: true,
		},
	},
	data() {
		return {
			slug: this.options.find(({ key }) => key === 'slug')?.value,
			rpc: this.options.find(({ key }) => key === 'rpc')?.value,
			maxpage: this.options.find(({ key }) => key === 'maxpage')?.value,
		}
	},
	methods: {
		onChange() {
			setOptions(
				[
					{ key: 'slug', value: this.slug },
					{ key: 'rpc', value: this.rpc },
					{ key: 'maxpage', value: this.maxpage },
				],
				this.clubs.currentPluginIndex
			)
		},
	},
})
</script>
