<template>
	<div class="inventory inventory-block">
		<div class="inventory__row" v-for="(row, rindx) in place" :key="rindx">
			<Cell v-for="(cell, cindx) in row" :key="cell.id" :border="cindx !== 0" />
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
	width: 525px;
	height: 500px;
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
