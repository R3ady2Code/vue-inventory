<template>
	<div class="amount-modal">
		<div class="amount-modal__container">
			<Input
				type="number"
				placeholder="Введите количество"
				v-model="removesItems"
			/>
			<Button class="btn-close" :onClick="closeAmountModal">Отмена</Button>
			<Button :secondary="true" class="btn-done" :onClick="deleteItems"
				>Подтвердить</Button
			>
		</div>
	</div>
</template>

<script>
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
export default {
	components: {
		Input,
		Button,
	},
	props: ['closeAmountModal', 'closeModal', 'itemId', 'amount'],
	data: () => ({ removesItems: '' }),
	methods: {
		deleteItems() {
			if (this.amount - this.removesItems <= 0) {
				this.$store.commit('removeItem', this.itemId)
			} else {
				this.$store.commit('setAmountItem', {
					itemId: this.itemId,
					amount: this.removesItems,
				})
			}

			this.closeModal()
		},
	},
}
</script>

<style lang="scss" scoped>
.amount-modal {
	position: absolute;
	width: 252px;
	top: 367px;
	background: rgba(38, 38, 38, 0.6);
	border: 1px solid #4d4d4d;
	backdrop-filter: blur(8px);
	height: 100%;
	&__container {
		display: grid;
		grid-template-areas:
			'input input'
			'button-1 button-2';
		padding: 20px 21px;
		justify-content: center;
		row-gap: 20px;
		column-gap: 10px;
	}

	.ui-input {
		grid-area: input;
	}
	.btn-close {
		grid-area: button-1;
	}

	.btn-done {
		grid-area: button-2;
	}
}
</style>
