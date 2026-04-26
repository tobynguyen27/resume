<script setup lang="ts">
import AboutMe from './components/AboutMe.vue';
import Link from './components/base/Link.vue';
import Languages from './components/Languages.vue';
import Projects from './components/Projects.vue';
import SocialMedia from './components/SocialMedia.vue';
import Stacks from './components/Stacks.vue';
import WorkExperience from './components/WorkExperience.vue';
</script>

<template>
	<div class="w-full max-w-6xl mx-auto">
		<div class="mt-5 flex flex-col md:flex-row p-5 justify-center gap-12">
			<div
				class="w-full text-center md:text-left space-y-3 md:w-1/4"
				border="md:r md:r-hover">
				<div class="">
					<h1 class="font-serif text-3xl">Toby Nguyen</h1>
					<p class="text-muted">Software Engineer</p>
				</div>
				<div class=""><Link to="mailto:hi@tobynguyen.net">hi@tobynguyen.net</Link></div>
				<SocialMedia />
			</div>
			<div class="w-full md:w-3/4 space-y-8">
				<AboutMe />
				<Projects />
				<WorkExperience />
				<Stacks />
				<Languages />

				<div class="text-center">
					<a href="/resume.pdf" class="link" target="_blank">PDF Version</a>
				</div>
			</div>
		</div>
	</div>
</template>
