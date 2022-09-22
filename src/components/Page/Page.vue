<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TokenURIWithId } from '../../types'
import Image from '../Image/Image.vue'

const props = defineProps({
	token: {
		type: Object as PropType<TokenURIWithId>,
		required: true,
	},
})

const { token } = props
</script>

<template>
	<h2>#{{ token.id }}</h2>
	<Image :src="token.image" />
</template>
