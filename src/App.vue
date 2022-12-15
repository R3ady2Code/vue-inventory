<template>
	<div class="app">
		<div class="container">
			<LeftBar />
			<Inventory />
			<BottomBar />
		</div>
	</div>
</template>

<script>
import BottomBar from './components/Logic/BottomBar'
import Inventory from './components/Logic/Inventory'
import LeftBar from './components/Logic/LeftBar'

export default {
	name: 'App',
	components: { LeftBar, BottomBar, Inventory },
}
</script>

<style lang="scss">
.app {
	background-color: #1d1d1d;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
}

.container {
	display: grid;
	grid-template-areas:
		'left-bar inventory'
		'bottom-bar bottom-bar';
	gap: 24px;
}
</style>
