<template>
	<div class="letter">
		<div class="letter-front">
			<h2 class="letter-front__title">About me</h2>
			<div class="letter-front__name">
				<CurveName />
			</div>
			<div class="letter-front__photo"></div>
			<div class="position">
				<h3 class="position__title">Web developer</h3>
			</div>
			<div class="contacts">
				<div class="contacts__content">Here will be my contacts</div>
			</div>
			<button @click="showBack" class="letter-front__next-button"></button>
		</div>
		<div class="letter-back">
			<div class="letter-back__content">
				Here will be info about me <br />
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel saepe quibusdam vitae nemo nulla! Magni recusandae
				eligendi optio placeat sed a neque nulla cum. Iure soluta voluptate molestias vero cumque?
			</div>
			<button @click="showFront" class="letter-front__prev-button"></button>
		</div>
	</div>
</template>

<script>
import CurveName from '@/assets/img/CurveName.svg?inline'

export default {
	name: 'About',
	components: {
		CurveName
	},
	methods: {
		showBack() {
			this.front.style.transform = `rotateY(180deg)`
			this.back.style.transform = `rotateY(360deg)`
		},
		showFront() {
			this.front.style.transform = `rotateY(0deg)`
			this.back.style.transform = `rotateY(180deg)`
		}
	},
	computed: {
		front() {
			return document.querySelector('.letter-front')
		},
		back() {
			return document.querySelector('.letter-back')
		}
	}
}
</script>

<style lang="scss" scoped>
.letter {
	max-width: 570px;
	max-height: 680px;
	position: relative;
	perspective: 2000px;
	width: 570px;
	height: 680px;
	transform-style: preserve-3d;
	font-family: 'Concert One';

	&-front,
	&-back {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		transition: 1s;
		backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	&-front {
		background-image: url('../assets/img/letterBack.svg');
		background-size: 100%;
		background-repeat: no-repeat;

		.position {
			background: #fef5e4;
			transform: rotateZ(3deg);
			width: 300px;
			margin: -10px auto 0px;
			height: 48px;
			border-radius: 4px;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0px 2px 2px 0px #796d57;
		}

		.position__title {
			font-family: 'Concert One';
			padding: 0;
			margin: 0;
			text-align: center;
			font-size: 24px;
			font-style: normal;
			font-weight: normal;
			line-height: 28px;
			color: #31152b;
		}

		.contacts {
			width: 320px;
			height: 250px;
			background-image: url('../assets/img/papperPiece.svg');
			background-repeat: no-repeat;
			background-size: 100%;
			margin: 0 auto;

			&__content {
				//Temp
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		&__title {
			font-family: 'Concert One';
			font-style: normal;
			font-weight: normal;
			font-size: 50px;
			line-height: 72px;
			color: #31152b;
			padding: 0;
			margin: 0;
			text-align: center;
			padding-left: 10px;
		}

		&__name {
			width: 150px;
			margin: 10px auto 0;
		}

		&__photo {
			width: 256px;
			height: 256px;
			background-image: url('../assets/img/photoBorder(_).svg');
			background-repeat: no-repeat;
			background-size: 100%;
			margin: 0 auto;
		}
	}

	&-back {
		transform: rotateY(180deg);
		background-image: url('../assets/img/letterBack(2).svg');
		background-size: 100%;
		background-repeat: no-repeat;

		&__content {
			padding: 20px 50px;
		}
	}

	&-front__next-button,
	&-front__prev-button {
		background-color: transparent;
		background-image: url('../assets/img/button.svg');
		background-repeat: no-repeat;
		background-size: contain;
		width: 30px;
		height: 40px;
		padding: 0;
		margin: 0;
		position: absolute;
		border: none;
		outline: none;
		cursor: pointer;
		bottom: 15px;
	}

	&-front__next-button {
		right: 17px;
		bottom: 20px;
	}

	&-front__prev-button {
		left: 17px;
		bottom: 20px;
		transform: scaleX(-1);
	}

	@media screen and (max-width: 767.98px) {
		.letter-front__title {
			font-size: 40px;
		}

		.letter-front__name {
			width: 120px;
		}

		.letter-front__photo {
			width: 200px;
			height: 200px;
		}

		.position {
			height: 40px;
			width: 260px;
		}

		.position__title {
			font-size: 20px;
		}

		.contacts {
			width: 280px;
			height: 210px;
		}
	}

	@media screen and (max-width: 514px) {
		.letter-front__title {
			font-size: 20px;
			line-height: 50px;
		}

		.letter-front__name {
			width: 80px;
		}

		.letter-front__photo {
			width: 150px;
			height: 150px;
		}

		.position {
			height: 30px;
			width: 200px;
		}

		.position__title {
			font-size: 17px;
		}

		.contacts {
			width: 210px;
			height: 250px;
		}

		.letter-front__next-button,
		.letter-front__prev-button {
			width: 20px;
			height: 30px;
			bottom: 45px;
		}
	}
}

@media screen and (max-width: 767.98px) {
	.letter {
		width: 480px;
		height: 590px;
	}
}

@media screen and (max-width: 514px) {
	.letter {
		width: 350px;
		height: 460px;
	}
}
</style>
