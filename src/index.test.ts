import { describe, it, expect } from 'vitest'
import plugin, { getPagePaths, getAdminPaths, meta } from './index'

describe('plugin default export', () => {
	it('should have getPagePaths, getAdminPaths and meta', async () => {
		expect(plugin).toEqual({
			getPagePaths,
			getAdminPaths,
			meta,
		})
	})
})

describe('getPagePaths', () => {
	it('should return empty array if options are not set', async () => {
		const res = await getPagePaths([])
		expect(res).toEqual([])
	})
})
