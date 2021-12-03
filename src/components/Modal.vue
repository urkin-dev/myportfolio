<template>
	<div class="modal">
		<a :href="work.src" target="_blank">
			<img :src="work.img" alt="Photo" class="modal__photo" />
		</a>
		<h3 class="modal__title">{{ work.title }}</h3>
		<div class="modal__content">
			<p class="modal__description">
				{{ work.description }}
			</p>
			<a target="_blank" class="modal__link" :href="work.src">Link to work</a>
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
	width: 60%;
	background-color: #fff;
	padding: 20px;

	&__photo {
		width: 100%;
		height: 420px;
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
}
</style>
