import { createStore } from 'vuex'

import place from './place.js'
import items from './items.js'

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: { place, items },
})
