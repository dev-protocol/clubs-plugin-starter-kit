/// <reference path="../.astro/types.d.ts" />

declare module '*.astro' {
	import type { AstroComponentFactory } from 'astro/dist/runtime/server'
	export default InstanceType<AstroComponentFactory>
}
