<script lang="ts">
	import Social from '$lib/components/Social/Social.svelte';
	import { getImageLink } from '$lib/data/images';
</script>

<div class="page-container page-spacing">
	<!-- Hero -->
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
		<div class="order-2 md:order-1 max-w-2xl space-y-8">
			<h1 class="h1">Hello, I'm Ryan.</h1>
			<p class="text-2xl opacity-75">
				A certified Full-Stack web developer with diverse IT experience. I am always looking for personal development opportunities, and i'm passionate about everything I work on. 
			</p>
			<Social />
		</div>
		<!-- src="https://source.unsplash.com/mPGSvqHAqTU/400x400" -->
		<img
			class="order-1 md:order-2 rounded-full w-32 md:w-[400px] aspect-square overflow-hidden shadow-xl"
			src="/my-face.png"
			alt="Portfolio"
		/>
	</header>


	<!-- Skills -->
	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fa-solid fa-screwdriver-wrench text-4xl text-primary-500" />
			<h3 class="h3">IT experience</h3>
			<p class="opacity-75">
				3 years of IT experience. I was fortunate enough to get a job in the field right out of highschool
				that gave me extremely diverse IT experience and confidence working in enterprise level systems.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fa-solid fa-palette text-4xl text-primary-500" />
			<h3 class="h3">UI & Graphic Design</h3>
			<p class="opacity-75">
				I practiced graphic design throughout highschool, as I started to dive into the world of development I naturally had a
				passion for making great UI.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fas fa-code text-4xl text-primary-500" />
			<h3 class="h3">Certified Developer</h3>
			<p class="opacity-75">
				I am Certified in Python software development, but I am always open to learning new frameworks and languages.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fa-solid fa-users text-4xl text-primary-500" />
			<h3 class="h3">SEO & Web</h3>
			<p class="opacity-75">
				I have professional experience with SEO, and working with marketing teams to find keywords, update meta info, and audit backlinks.
			</p>
		</div>
	</section>


	<!-- Call to Action -->
	<section class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4">
		<p class="text-center md:text-left">
			
		</p>
	</section>
</div>
