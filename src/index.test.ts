import { describe, it, expect } from 'vitest'
import plugin from './index'

describe('getPagePaths', () => {
	it('should return empty array if options are not set', async () => {
		const res = await plugin.getPagePaths([])
		expect(res).toEqual([])
	})
})
