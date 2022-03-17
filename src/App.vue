<template>
	<div id="app" @mousemove="parallax">
		<!-- SVG wrapps -->
		<div class="draw parallax-element" data-speed="2">
			<Draw class="Drawsvg" />
		</div>
		<div class="sun parallax-element" data-speed="5">
			<Sun />
		</div>
		<div class="tree parallax-element" data-speed="1">
			<Tree class="treesvg" />
		</div>

		<!-- <div class="scroll"></div> -->
		<full-page :options="options" id="fullpage" ref="fullpage">
			<div class="section">
				<div class="main__content">
					<h1 class="main-title">Hi, I'm Ivan</h1>
					<p class="subtitle">Frontend/Mobile Developer</p>
				</div>
			</div>
			<div class="section">
				<div class="about__content">
					<About />
				</div>
			</div>
			<div class="section">
				<div class="slide">
					<Works :works="works_one" />
				</div>
			</div>
		</full-page>
	</div>
</template>

<script>
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Tree from '@/components/TreeSvg.vue'

//SVG imports
import Draw from '@/assets/img/Draw.svg?inline'
import Sun from '@/assets/img/Sun.svg?inline'

export default {
	name: 'App',
	data() {
		return {
			options: {
				anchors: ['Page1', 'Page2', 'Page3'],
				keyboardScrolling: true,
				css3: true,
				scrollingSpeed: 900,
				easing: 'easeInOutCubic',
				easingcss3: 'ease'
			},
			works_one: [
				{
					id: 1,
					title: 'ReactWave player',
					description:
						'Lofi music player. I created it when I started to learn React. All music taken from chillhop.com',
					src: 'https://reactwave.herokuapp.com/',
					img: require('./assets/img/react-player.png')
				},
				{
					id: 2,
					title: 'Weatherd',
					description:
						'I created this project to practice new Redux-Toolkit. Weatherd take all data from API OpenWeather.',
					src: 'https://urkin-dev.github.io/weatherd/',
					img: require('./assets/img/weatherd.png')
				},
				{
					id: 3,
					title: 'Grip',
					description:
						"Just a lending website. When I was learning React, I decided to build something with cool animation. Here's the result",
					src: 'https://gripsite.herokuapp.com/',
					img: require('./assets/img/grip.png')
				},
				{
					id: 4,
					title: 'Time Museum in Decetraland Metaverse',
					description:
						'This project was created for the Maff hackaton dedicated to metauniverses. We used decentraland SDK to build it. This project was ranked top 6',
					src: 'https://time-museum-tau.vercel.app',
					img: require('./assets/img/time-museum.png')
				},
				{
					id: 5,
					title: 'University project, Fizruk',
					description:
						"I'm still working on this university project. We created this project for the department of physical education at my university. We wanted to create a project that would be easy to maintain and update",
					src: 'http://fizruk.std-670.ist.mospolytech.ru/',
					img: require('./assets/img/Fizrruk.png')
				},
				{
					id: 6,
					title: 'poVoenke',
					description: "I'm currently working at this project part-time as a junior react-native developer",
					src: 'https://play.google.com/store/apps/details?id=ru.povoenke',
					img: require('./assets/img/povoenke.png')
				}
			]
		}
	},
	components: {
		About,
		Works,
		Draw,
		Sun,
		Tree
	},
	methods: {
		parallax(e) {
			const sun = document.querySelector('.sun')
			const tree = document.querySelector('.tree')
			const draw = document.querySelector('.draw')

			document.querySelectorAll('.parallax-element').forEach((layer) => {
				const speed = layer.getAttribute('data-speed')

				const x = (window.innerWidth - e.pageX * speed) / 100
				const y = (window.innerHeight - e.pageY * speed) / 100

				draw.style.transform = `translateX(-${x}px) translateY(${y}px) scale(1.1) translate3d(0, 0, 0)`
				tree.style.transform = `translateX(${x}px) translateY(${y}px) translate3d(0, 0, 0)`
			})
		}
	}
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
	background-image: url('./assets/img/back.svg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 100%;
}

#app::after {
	content: '';
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.89);
	pointer-events: none;
	opacity: 0;
	transition: opacity 1s ease-in-out;
}

.about__content {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.main__content {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.main-title {
		font-family: 'Nunito', sans-serif;
		text-align: center;
		font-size: 6em;
		color: #4b1f36;
		font-weight: normal;
		margin: 0;
	}

	.subtitle {
		font-family: 'Handlee', cursive;
		color: #fff;
		font-weight: normal;
		font-size: 3.3em;
		text-align: center;
		margin: 0;
	}

	.desc {
		font-family: Share;
		font-weight: normal;
		font-size: 1.8em;
		color: #4b1f36;
		text-align: center;
		margin: 0;
	}

	@media screen and (max-width: $media-breakpoint-md) {
		.main-title {
			font-size: 5em;
		}

		.subtitle {
			font-size: 2.3em;
		}

		.desc {
			font-size: 1.6em;
		}
	}

	@media screen and (max-width: $media-breakpoint-sm) {
		.main-title {
			font-size: 4.8em;
		}

		.subtitle {
			font-size: 2em;
		}
	}

	@media screen and (max-width: $media-breakpoint-xs) {
		.main-title {
			font-size: 4em;
		}

		.subtitle {
			font-size: 1.5em;
		}

		.desc {
			font-size: 1.4em;
		}
	}
}
</style>
