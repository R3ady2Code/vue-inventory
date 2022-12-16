import { createStore } from 'vuex'

import place from './place.js'
import items from './items.js'

export default createStore({
	state: {},
	getters: {},
	mutations: {
		initialiseStore(state) {
			if (localStorage.getItem('items')) {
				state.items = JSON.parse(localStorage.items)
			}
		},
	},
	actions: {},
	modules: { place, items },
})
