export default {
	state: {
		place: [
			[
				{ id: 1, full: false },
				{ id: 2, full: false },
				{ id: 3, full: false },
				{ id: 4, full: false },
				{ id: 5, full: false },
			],
			[
				{ id: 6, full: false },
				{ id: 7, full: false },
				{ id: 8, full: false },
				{ id: 9, full: false },
				{ id: 10, full: false },
			],
			[
				{ id: 11, full: false },
				{ id: 12, full: false },
				{ id: 13, full: false },
				{ id: 14, full: false },
				{ id: 15, full: false },
			],
			[
				{ id: 16, full: false },
				{ id: 17, full: false },
				{ id: 18, full: false },
				{ id: 19, full: false },
				{ id: 20, full: false },
			],
			[
				{ id: 21, full: false },
				{ id: 22, full: false },
				{ id: 23, full: false },
				{ id: 24, full: false },
				{ id: 25, full: false },
			],
		],
	},
	getters: {
		getAllCells(state) {
			return state.place
		},
	},
	mutations: {},
	actions: {},
}
