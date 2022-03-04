<template>
	<div class="modal">
		<a :href="work.src" target="_blank" class="modal__photo-container">
			<img :src="work.img" alt="Photo" class="modal__photo" />
		</a>
		<div class="modal__wrapper">
			<h3 class="modal__title">{{ work.title }}</h3>
			<div class="modal__content">
				<p class="modal__description">
					{{ work.description }}
				</p>
				<a target="_blank" class="modal__link" :href="work.src">Link to work</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		work: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="scss" scoped>
.modal {
	width: 80%;
	height: 80%;
	background-color: #fff;
	overflow: hidden;
	display: flex;
	padding: 15px;

	@media screen and (max-width: 690px) {
		width: 90%;
		height: 60%;
		flex-direction: column;
	}

	&__photo-container {
		height: 100%;
		flex: 3;

		@media screen and (max-width: 1000px) {
			flex: 2;
		}
	}

	&__photo {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	&__title,
	&__link {
		font-family: 'Concert One';
	}

	&__description {
		font-family: 'Roboto', sans-serif;
		color: rgb(63, 63, 63);
	}

	&__wrapper {
		flex: 1;
		padding: 0 20px 20px 20px;
	}
}
</style>
