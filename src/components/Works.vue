<template>
	<div class="works-wrapper">
		<div class="works">
			<a class="work" v-for="work in works" :key="work.id" @click="() => toggle(work.id)">
				<div class="work__img">
					<img :src="work.img" alt="work image" />
				</div>
				<p class="work__title">{{ work.title }}</p>
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
	background-color: rgba(0, 0, 0, 0.3);
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
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	width: 80%;
	row-gap: 10px;

	.work {
		background-color: #fff;
		font-family: 'Handlee', sans-serif;
		font-weight: 600;
		width: 290px;
		height: 250px;
		cursor: pointer;
		border: 1px solid #3f3e43;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 8px;
		text-decoration: none;

		&__img {
			display: block;
			width: 90%;
			height: 80%;
			background-color: #3f3e43;
			img {
				width: 100%;
				object-fit: cover;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		&__title {
			color: #000;
			height: 20%;
			text-align: center;
			font-size: 18px;
			margin-top: 10px;
			flex: 1;
		}
	}

	@media screen and (max-width: 790px) {
		.work {
			width: 220px;
			height: 200px;
		}
	}

	@media screen and (max-width: 640px) {
		.work {
			height: 120px;
			width: 100%;
			padding: 10px;
			border: 2px solid #3f3e43;

			&__img {
				width: 100%;
			}

			&__title {
				display: none;
			}
		}
	}
}

@media screen and (max-width: 1100px) {
	.works {
		width: 90%;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 790px) {
	.works {
		width: 70%;
	}
}

@media screen and (max-width: 640px) {
	.works {
		width: 60%;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
