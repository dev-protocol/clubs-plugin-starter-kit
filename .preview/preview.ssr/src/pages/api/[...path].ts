import { apiFactory } from '@devprotocol/clubs-core'
import config from '../../../../config'
import plugins from '../../../../plugins'

export const { ALL } = apiFactory({
	config,
	plugins,
})
