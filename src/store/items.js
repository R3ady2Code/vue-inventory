export default {
	state: {
		items: [
			{ id: 1, color: '#7FAA65', name: 'item test', x: 3, y: 2, amount: 3 },
			{ id: 2, color: '#0729FF', name: 'item test1', x: 4, y: 1, amount: 1 },
			{ id: 3, color: '#00FAD4', name: 'item test2', x: 1, y: 4, amount: 10 },
			{ id: 4, color: '#FF00C1', name: 'item test3', x: 3, y: 3, amount: 7 },
		],
	},
	getters: {
		getAllItems: state => state.items,

		getItemByXY:
			state =>
			({ x, y }) =>
				state.items.filter(item => item.x === x && item.y === y),
	},
	mutations: {
		addItem(state, action) {
			state.items.push(action)
		},
		setItemByXY(state, { itemId, cellX, cellY }) {
			state.items = state.items.map(item =>
				item.id == itemId ? { ...item, x: cellX, y: cellY } : { ...item }
			)
		},
		setAmountItem(state, { itemId, amount }) {
			state.items = state.items.map(item =>
				item.id == itemId
					? { ...item, amount: item.amount - amount }
					: { ...item }
			)
		},
		removeItem(state, itemId) {
			state.items = state.items.filter(item => item.id !== itemId)
		},
	},
}
