import { apiFactory } from '@devprotocol/clubs-core/factory'
import config from '../../../../config'
import plugins from '../../../../plugins'

export const { all } = apiFactory({
	config,
	plugins,
})
