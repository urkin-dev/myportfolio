<template>
	<div class="letter">
		<dev class="letter-front">
			<LetterBack class="letter-front__bg" />
			<h2 class="letter-front__title">About me</h2>
			<div class="letter-front__name">
				<CurveName />
			</div>
			<div class="letter-front__photo">
				<img
					src="../assets/img/avatar.png"
					alt="Avatar
				"
				/>
			</div>
			<div class="position">
				<h3 class="position__title">Web developer</h3>
			</div>
			<div class="contacts">
				<PapperPiece class="contacts__bg" />
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
			<button @click="showBack" class="letter-front__next-button">
				<ButtonBG class="letter-front__next-button-bg" />
			</button>
		</dev>
		<div class="letter-back">
			<LetterBack2 class="letter-back__bg" />
			<div class="letter-back__content">
				<p class="letter-back__title">Hello there!</p>
				<ul class="letter-back__about-list">
					<li>I'm frontend developer with expirience in mobile & backend development</li>
					<li>I'm based in Russia, Moscow</li>
					<li>Currently working on a react-native mobile application as a frontend developer</li>
					<li>I'm on third year of Moscow Politech university</li>
					<li>I'm always open to new opportunities and challenges</li>
					<li>I'm confident in my technical English skills (pls don't ask me to speak)</li>
					<li>I love Pizza</li>
				</ul>
				<p class="letter-back__title">Hard skills</p>
				<ul>
					<li><strong>Frontend: </strong>React, Typescript, Vue, MobX, Redux, redux-toolkit HTML&CSS</li>
					<li><strong>Mobile: </strong>React Native</li>
					<li><strong>Backend: </strong>Django, Node</li>
					<li><strong>Environment: </strong>GitLab, GitHub</li>
					<li><strong>Data: </strong>PostgreSQL</li>
					<li><strong>Design: </strong>Figma, Adobe Illustrator</li>
				</ul>
			</div>
			<button @click="showFront" class="letter-front__prev-button">
				<ButtonBG class="letter-front__prev-button-bg" />
			</button>
		</div>
	</div>
</template>

<script>
import CurveName from '@/assets/img/CurveName.svg?inline'
import LetterBack from '@/assets/img/letterBack.svg?inline'
import LetterBack2 from '@/assets/img/letterBack(2).svg?inline'
import PapperPiece from '@/assets/img/papperPiece.svg?inline'
import ButtonBG from '@/assets/img/button.svg?inline'

export default {
	name: 'About',
	components: {
		CurveName,
		LetterBack,
		LetterBack2,
		PapperPiece,
		ButtonBG
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
			font-size: 24px;
			margin-bottom: 5px;
			color: #000;
		}

		ul {
			padding: 0;
			padding-left: 20px;
		}

		&__about-list {
			list-style: none;

			li {
				text-indent: -1.7rem;
			}

			li:nth-child(1)::before {
				content: '👋🏼 ';
			}

			li:nth-child(2)::before {
				content: '🗺️ ';
			}

			li:nth-child(3)::before {
				content: '🔭 ';
			}
			li:nth-child(4)::before {
				content: '🎓 ';
			}
			li:nth-child(5)::before {
				content: '⚔️ ';
			}
			li:nth-child(6)::before {
				content: '🗽 ';
			}
			li:nth-child(7)::before {
				content: '🍕 ';
			}
		}
	}

	&-front {
		&__bg {
			position: absolute;
			z-index: -999;
		}

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
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			padding: 40px;
			position: relative;

			&__bg {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: -998;
			}

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

				@media screen and (max-width: 514px) {
					svg {
						width: 20px;
						height: 20px;
					}
				}
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
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				width: 185px;
				height: 182.5px;
			}
		}
	}

	&-back {
		transform: rotateY(180deg);

		&__bg {
			position: absolute;
			z-index: -997;
		}

		&__content {
			padding: 20px 50px;
			height: 100%;
			width: 100%;
			padding-bottom: 90px;
			display: flex;
			flex-direction: column;
		}
	}

	&-front__next-button,
	&-front__prev-button {
		width: 30px;
		height: 40px;
		padding: 0;
		margin: 0;
		position: absolute;
		border: none;
		outline: none;
		cursor: pointer;
		bottom: 15px;
		background-color: transparent;

		&-bg {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
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

			img {
				width: 150px;
				height: 150px;
			}
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

		.letter-back {
			font-size: 12px;

			&__title {
				font-size: 16px;
			}

			ul {
				margin: 0;
			}

			&__about-list {
				li {
					text-indent: -1.3rem;
				}
			}
		}

		.letter-back__ .letter-front__name {
			width: 80px;
		}

		.letter-front__photo {
			width: 150px;
			height: 150px;

			img {
				margin-top: 15px;
				width: 110px;
				height: 110px;
			}
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
