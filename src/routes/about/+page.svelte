<script>
	import { getImageLink } from '$lib/data/images';

	import { onMount } from 'svelte';

	onMount(() => {
    if (!sessionStorage.getItem('hasVisitedAbout')) {
      sessionStorage.setItem('hasVisitedAbout', 'true');
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  });


</script>

<div class="page-container page-spacing">
	<!-- Header -->
	<header class="text-center">
		<h1 class="h1">About Me</h1>
	</header>


	<!-- Banner -->
	<img
		class="bg-black w-full aspect-[21:9] rounded-container-token overflow-hidden shadow-xl"
		src="/workstation.JPG"
		alt="banner"
	/>

	<hr class="divider" />

	<!-- Description -->
	<!-- prettier-ignore -->
	<section class="space-y-8">
		<!-- Intro -->
		<p class="text-xl md:text-3xl">
			A certified Full-Stack web developer with diverse IT experience. I am always looking for personal development opportunities, and i'm passionate about everything I work on. 
		</p>
		<!-- / -->
		<p class="md:text-xl opacity-75">
			I attended <a class="anchor" href="https://devmountain.com/" target="_blank" rel="noreferrer">Devmountain's</a> 36 week program in Python Software engineering.
		</p>
		<p class="md:text-xl opacity-75">
			As a Full-Stack Developer with a foundation in IT and web management, I've built server-side solutions using Node.js, Django, and Flask, and explored front-end development with Svelte (like this website). My experience extends to SQL databases, RESTful APIs, and OAuth implementation.
		</p>
		<p class="md:text-xl opacity-75">
			I started my career at GingerSec, focusing on a range of IT projects, from network infrastructure to Windows deployment in healthcare environments. I then moved to Charter One, where I transitioned from being an IT Coordinator overseeing multiple schools, to a Web Technician managing and optimizing websites across several districts.
		</p>
		<p class="md:text-xl opacity-75">
			About a year ago, my career took a new direction when I Started DevMountain's coding bootcamp. The program ignited a passion for coding and prompted me to seek a development role. I've been honing my coding skills ever since and am eager for a career pivot into software development.
		</p>
		<p class="md:text-xl opacity-75">
			In summary, my diverse IT background and recent coding education have prepared me for a future role as a specialized developer. I'm enthusiastic about mastering the art and computer science of software development as my long-term career path.
		</p>
	</section>
</div>
