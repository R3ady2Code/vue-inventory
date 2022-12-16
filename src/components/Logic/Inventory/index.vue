<template>
	<div class="inventory inventory-block">
		<div class="inventory__row" v-for="(row, yindx) in place" :key="yindx">
			<Cell
				v-for="(cell, xindx) in row"
				:key="cell.id"
				:border="xindx !== 0"
				:y="yindx"
				:x="xindx"
			/>
		</div>
	</div>
</template>

<script>
import Cell from './Cell'
export default {
	components: {
		Cell,
	},
	computed: {
		place() {
			return this.$store.getters['getAllCells']
		},
	},
}
</script>

<style lang="scss">
.inventory {
	position: relative;
	width: 525px;
	grid-area: inventory;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	&__row {
		display: flex;
		border-bottom: 1px solid #4d4d4d;
	}
}
</style>
