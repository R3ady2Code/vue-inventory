<template>
	<div class="bottom-bar inventory-block">
		<div class="bottom-bar__skeleton"></div>
		<img :src="require('../../assets/close.svg')" alt="Close Icon" />
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.bottom-bar {
	width: 785px;
	height: 72px;
	grid-area: bottom-bar;
	padding: 18px;
	position: relative;
	&__skeleton {
		width: 699px;
		height: 36px;
		background: linear-gradient(
			90deg,
			#3c3c3c 0%,
			#444444 51.04%,
			#333333 100%
		);
		border-radius: 12px;
	}
	img {
		position: absolute;
		width: 24px;
		height: 24px;
		left: 753px;
		top: 8px;
		cursor: pointer;
	}
}
</style>
