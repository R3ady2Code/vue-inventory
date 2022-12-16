<template>
	<div
		class="item pointer"
		:draggable="true"
		@dragstart="dragStart"
		@drag.prevent="drag"
		@click="openModal"
		ref="item"
	>
		<div
			class="item__square item__square_blur"
			:style="{ backgroundColor: item.color + 0.35 }"
		></div>
		<div
			class="item__square item__square_main"
			:style="{ backgroundColor: item.color }"
		></div>
		<div class="item__amount">
			<span>{{ item.amount }}</span>
		</div>
	</div>
	<Modal
		v-if="isModalOpen"
		:item="item"
		:closeModal="closeModal"
		:isOpen="isModalOpen"
	/>
</template>

<script>
import Modal from './Modal'
export default {
	props: ['item'],
	data: () => ({
		isModalOpen: false,
		showDrag: false,
	}),
	components: {
		Modal,
	},
	methods: {
		dragStart(e) {
			e.dataTransfer.setData('item_id', this.item.id)
			this.$refs.item.style.borderRadius = 0
			document.body.classList.add('grabbing')
		},
		drag() {
			this.$refs.item.style.borderRadius = 0
		},
		openModal() {
			this.isModalOpen = true
		},
		closeModal() {
			this.isModalOpen = false
		},
	},
}
</script>

<style lang="scss" scoped>
.item {
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.1s;
	&__square {
		position: absolute;
		width: 48px;
		height: 48px;
		&_main {
			left: 26px;
			top: 29px;
			z-index: 1;
		}
		&_blur {
			backdrop-filter: blur(6px);
			left: 32px;
			top: 23px;
			z-index: 2;
			&:active {
				backdrop-filter: none;
			}
		}
	}
	&__amount {
		position: absolute;
		bottom: -1px;
		right: 0px;
		width: 16px;
		height: 16px;
		border: 1px solid #4d4d4d;
		background: #262626;
		border-top-left-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		span {
			-ms-user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			user-select: none;
			font-weight: 500;
			font-size: 10px;
			line-height: 12px;
			opacity: 0.4;
		}
	}
	&:hover {
		background: #2f2f2f;
	}
	&:active {
		background: #262626;
		border: 1px solid #4d4d4d;
		border-radius: 24px;
		cursor: url('../../../assets/cursor-hand-grab.svg'), auto;
	}
}

.grabbing {
	cursor: url('../../../assets/cursor-hand-grab.svg'), auto !important;
}
</style>
