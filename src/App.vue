<template>
	<div id="app" @mousemove="parallax">
		<!-- SVG wrapps -->
		<div class="draw parallax-element" data-speed="2">
			<Draw />
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
					<p class="subtitle">Frontend developer who loves his job</p>
					<p class="desc">I'm trying my best to be better with every day</p>
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
				<div class="slide">
					<Works :works="works_two" />
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
					src: 'https://reactwave.herokuapp.com/',
					img: require('./assets/img/react-player.png')
				},
				{
					id: 2,
					title: 'Django Blog',
					src: 'http://blog.std-954.ist.mospolytech.ru/',
					img: require('./assets/img/blog.png')
				},
				{
					id: 3,
					title: 'Kanban board',
					src: 'http://kanban.std-954.ist.mospolytech.ru/',
					img: require('./assets/img/kanban.png')
				},
				{
					id: 4,
					title: 'Grip',
					src: 'https://gripsite.herokuapp.com/',
					img: require('./assets/img/grip.png')
				},
				{
					id: 5,
					title: 'Work title 5',
					src: "There's no src yet",
					img: ''
				},
				{
					id: 6,
					title: 'Work title 6',
					src: "There's no src yet",
					img: ''
				}
			],
			works_two: [
				{
					id: 1,
					title: 'Work title 7',
					src: "There's no src yet",
					img: ''
				},
				{
					id: 2,
					title: 'Work title 8',
					src: "There's no src yet",
					img: ''
				},
				{
					id: 3,
					title: 'Work title 9',
					src: "There's no src yet",
					img: ''
				},
				{
					id: 4,
					title: 'Work title 10',
					src: "There's no src yet",
					img: ''
				},
				{
					id: 5,
					title: 'Work title 11',
					src: "There's no src yet",
					img: ''
				},
				{
					id: 6,
					title: 'Work title 12',
					src: "There's no src yet",
					img: ''
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

				draw.style.transform = `translateX(-${x}px) translateY(${y}px) scale(1.1)`
				tree.style.transform = `translateX(${x}px) translateY(${y}px)`
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
		font-size: 2.3em;
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
