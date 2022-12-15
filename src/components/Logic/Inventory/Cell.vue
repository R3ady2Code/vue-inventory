<template>
	<div
		class="inventory-cell"
		:class="{ 'inventory-cell_border': border }"
	></div>
</template>

<script>
export default {
	props: ['border'],
}
</script>

<style lang="scss">
.inventory-cell {
	width: 105px;
	height: 100px;
	&_border {
		border-left: 1px solid #4d4d4d;
	}
}
</style>
