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
				<p class="contacts__title">Contacts</p>
				<div class="contacts__content">
					<p>Telegram: @yurk1n</p>
					<p>Email: <a href="mailto:yurkin.ivan5456@gmail.com">yurkin.ivan5456@gmail.com</a></p>
					<p>Github: <a href="https://github.com/urkin-dev" target="_blank">urkin-dev</a></p>
				</div>

				<p class="contacts__title">Tech stack I use</p>
				<div class="contacts__tech-stack">
					<span
						class="iconify"
						data-icon="akar-icons:react-fill"
						style="color: #333"
						data-width="30"
						data-height="30"
					/>
					<span
						class="iconify"
						data-icon="akar-icons:javascript-fill"
						style="color: #333"
						data-width="30"
						data-height="30"
					/>
					<span
						class="iconify"
						data-icon="akar-icons:django-fill"
						style="color: #333"
						data-width="30"
						data-height="30"
					/>
					<span class="iconify" data-icon="cib:typescript" style="color: #333" data-width="30" data-height="30" />
					<span
						class="iconify"
						data-icon="tabler:brand-react-native"
						style="color: #333"
						data-width="30"
						data-height="30"
					/>
					<span class="iconify" data-icon="akar-icons:vue-fill" style="color: #333" data-width="30" data-height="30" />
				</div>
			</div>
			<button @click="showBack" class="letter-front__next-button"></button>
		</div>
		<div class="letter-back">
			<div class="letter-back__content">
				<div class="short">
					I'm a web developer based in Moscow with 4 years of experience in the web industry. <br />
					I'm currently studing in university and working on react-native mobile application.
				</div>
				<p class="letter-back__title">A little bit about me</p>
				<div class="long">
					It's been 4 years since I decided to become web developer. I was lucky to find out this is a job I love, a job
					that I spend time on, even outside of work hours.<br />
					This isn't how I started though, in the beginning, I struggled hard.<br />
					I started to learn web development when I was at school. It was last year of my studying and I didn't have
					much time on learning new things. Right after school I learned a lot, but it always felt like I don't know
					enough. And when I started studying in tech university and saw other people who know web development I
					understood that I'm too far from real world of programming. <br />
					At that time I learned a lot of useful and unnecessary things but all this was completely unproductive because
					I didn't work on my practice until the end of second year. <br />
					In my second year I started to learn React and Angular. It didn't really went well with Angular, but React
					became my favorite framework. I was invited to work on big university project with others web developers who
					already have experience. Thanks to this project I learned how to work with team and how important soft skills
					are for developer. I learned how to write clean and maintainable code with React and Typescript. <br />
					After the university project I was invited to work on react native mobile application. It was new to me and I
					struggled a lot before I started to work. Despite of my fears I was really happy with this opportunity and I
					learned new stuff really quick. <br />
					I'm still working on this project and trying to get as much expeience as I can. <br />
				</div>
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
		font-size: 16px;

		&__title {
			margin: 0;
			padding: 0;
			margin-top: 5px;
			font-size: 17px;
			margin-bottom: 5px;
			color: rgb(73, 73, 73);
		}

		.short {
			color: #000;
		}

		.long {
			color: rgb(73, 73, 73);
		}
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
			max-width: 320px;
			max-height: 250px;
			overflow: hidden;
			background-image: url('../assets/img/papperPiece.svg');
			background-repeat: no-repeat;
			background-size: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			padding: 40px;

			&__title {
				padding: 0;
				font-size: 18px;
				margin: 0;
				color: #222;
			}

			&__content {
				width: 100%;
				display: flex;
				flex-direction: column;
				font-size: 16px;
				color: #333;
				margin-bottom: 10px;
				margin-top: 10px;

				p {
					margin: 0;
				}
			}

			&__tech-stack {
				margin-top: 10px;
				display: flex;
				justify-content: space-between;
				width: 100%;
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
			padding: 20px 20px 50px 20px;
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

	/* TODO: Refactor: Make theme */
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

			&__content {
				font-size: 12px;
			}
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
			padding: 25px;

			&__title {
				font-size: 12px;
			}

			&__content {
				font-size: 10px;
				margin-top: 3px;
				margin-bottom: 5px;
			}

			&__tech-stack {
				margin-top: 3px;
			}
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
