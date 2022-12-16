<template>
	<div
		class="inventory-cell"
		:class="{ 'inventory-cell_border': border }"
		@dragover.prevent
		@drop.prevent="drop"
	>
		<Item v-if="item.length" :item="item[0]" />
	</div>
</template>

<script>
import Item from '../Item'
export default {
	props: ['border', 'y', 'x'],
	components: {
		Item,
	},
	computed: {
		item() {
			return this.$store.getters.getItemByXY({ x: this.x, y: this.y })
		},
	},
	methods: {
		drop(e) {
			if (this.item.length) return alert('Этот слот занят')

			const itemId = e.dataTransfer.getData('item_id')

			this.$store.commit('setItemByXY', {
				itemId,
				cellX: this.x,
				cellY: this.y,
			})
		},
	},
}
</script>

<style lang="scss">
.inventory-cell {
	width: 105px;
	height: 100px;
	&_border {
		border-left: 1px solid #4d4d4d;
	}
	&_active {
		cursor: url('../../../assets/cursor-hand-grab.svg'), auto;
	}
}
</style>
