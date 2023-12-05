<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ClubsPropsAdminPages } from '@devprotocol/clubs-core'
import { setOptions } from '@devprotocol/clubs-core'
import type { Option } from '../../types'
import { computed } from 'vue'

const props = defineProps({
	options: {
		type: Array as PropType<Option[]>,
		required: true,
	},
	clubs: {
		type: Object as PropType<ClubsPropsAdminPages['clubs']>,
		required: true,
	},
})

const onChange = () => {
	setOptions(
		[
			{ key: 'slug', value: slug.value },
			{ key: 'rpc', value: rpc.value },
			{ key: 'maxpage', value: maxpage.value },
		],
		props.clubs.currentPluginIndex,
	)
}

const slug = computed(() => {
	return props.options.find(({ key }) => key === 'slug')?.value
})

const rpc = computed(() => {
	return props.options.find(({ key }) => key === 'rpc')?.value
})

const maxpage = computed(() => {
	return props.options.find(({ key }) => key === 'maxpage')?.value
})
</script>

<template>
	<h2 class="mb-16 text-lg font-bold">sTokens Viewer</h2>
	<form class="grid gap-16" @change="onChange">
		<label class="grid gap-2">
			Slug
			<input type="text" v-model="slug" class="rounded bg-black p-2" />
		</label>
		<label class="grid gap-2">
			RPC Endpoint
			<input type="text" v-model="rpc" class="rounded bg-black p-2" />
		</label>
		<label class="grid gap-2">
			Max items
			<input type="number" v-model="maxpage" class="rounded bg-black p-2" />
		</label>
	</form>
</template>
