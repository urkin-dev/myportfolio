<template>
	<div class="works-wrapper">
		<div class="works">
			<a class="work" v-for="work in works" :key="work.id">
				<div class="work__polaroid">
					<img :src="work.img" alt="work image" @click="() => toggle(work.id)" />
					<div class="work__caption">{{ work.title }}</div>
				</div>
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
	gap: 20px;
	height: 100%;
	padding: 80px;

	.work {
		height: 100%;
		overflow: hidden;
		transition: 0.3s;
		filter: grayscale(100%);

		&:nth-of-type(4n + 1) {
			transform: scale(0.8, 0.8) rotate(5deg);
			transition: all 0.35s;
		}

		&:nth-of-type(4n + 2) {
			transform: scale(0.8, 0.8) rotate(-5deg);
			transition: all 0.35s;
		}

		&:nth-of-type(4n + 4) {
			transform: scale(0.8, 0.8) rotate(3deg);
			transition: all 0.35s;
		}

		&:nth-of-type(4n + 3) {
			transform: scale(0.8, 0.8) rotate(-3deg);
			transition: all 0.35s;
		}

		&:hover {
			filter: none;
			transform: scale(1, 1) rotate(0deg) !important;
			transition: all 0.35s;
		}

		&__polaroid {
			background-color: #fff;
			padding: 1rem;
			box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
			height: 100%;
		}

		&__caption {
			font-size: 1rem;
			text-align: right;
			margin-top: 3px;
			line-height: 2em;
			color: #000;
			font-family: Share;
		}

		img {
			width: 100%;
			height: 85%;
			object-fit: cover;
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

@media screen and (max-width: 710px) {
	.work {
		transform: scale(1, 1) rotate(0deg) !important;
	}
}

@media screen and (max-width: 500px) {
	.works {
		grid-template: repeat(6, 1fr) / repeat(1, 1fr);
		padding: 20px;

		.work {
			&__polaroid {
				padding: 0.5rem;
			}

			img {
				height: 100%;
			}
		}

		.work__caption {
			display: none;
		}
	}
}
</style>
