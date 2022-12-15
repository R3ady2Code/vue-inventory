<template>
	<button
		class="ui-button"
		:class="{ 'ui-button_primary': primary, 'ui-button_secondary': secondary }"
	>
		<span>
			<slot />
		</span>
	</button>
</template>

<script>
export default {
	props: ['primary', 'secondary'],
}
</script>

<style lang="scss">
.ui-button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 15px;
	border-radius: 8px;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	cursor: pointer;
	&_primary {
		background: #ffffff;
		span {
			color: #2d2d2d;
		}
	}
	&_secondary {
		background: #fa7272;
		span {
			color: #ffffff;
		}
	}
}
</style>
