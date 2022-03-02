<template>
	<div class="works-wrapper">
		<div class="works">
			<a class="work" v-for="work in works" :key="work.id">
				<img :src="work.img" alt="work image" @click="() => toggle(work.id)" />
			</a>
		</div>
		<transition name="fade">
			<div class="modal-container" v-if="isModalVisible" v-on:click.self="() => toggle(currentWork.id)">
				<Modal :work="currentWork" v-if="isModalVisible" />
			</div>
		</transition>
	</div>
</template>

<script>
import Modal from './Modal.vue'

export default {
	name: `Works`,
	data() {
		return {
			isModalVisible: false,
			currentWork: null
		}
	},
	components: {
		Modal
	},
	props: {
		works: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		toggle(id) {
			this.currentWork = this.works.find((work) => work.id === id)

			if (this.currentWork) {
				this.isModalVisible ? (this.isModalVisible = false) : (this.isModalVisible = true)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	color: #fff;
}

.fade-enter-active {
	transition: all 0.3s;
}
.fade-leave-active {
	transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.modal-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
}

.works-wrapper {
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.works {
	display: grid;
	grid-auto-flow: column;
	grid-template: repeat(2, 1fr) / repeat(3, 1fr);
	gap: 10px;
	height: 100%;
	padding: 80px;

	&:hover .work:not(:hover) {
		filter: brightness(0.5);
	}

	.work {
		text-decoration: none;
		height: 100%;
		overflow: hidden;
		transition: 0.3s;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 5px;
			cursor: pointer;
		}
	}
}

@media screen and (max-width: 1100px) {
	.works {
		grid-template: repeat(3, 1fr) / repeat(2, 1fr);
		padding: 40px;
	}
}

@media screen and (max-width: 500px) {
	.works {
		grid-template: repeat(6, 1fr) / repeat(1, 1fr);
		padding: 20px;
	}
}
</style>
