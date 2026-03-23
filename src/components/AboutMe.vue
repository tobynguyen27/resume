<script setup lang="ts">
import Link from "./base/Link.vue";
import Section from "./base/Section.vue";
</script>

<template>
	<Section name="About">
		<div class="space-y-3">
			<p>
				My name is Toby Nguyen (Nguyễn Minh Thọ), a computer science student at
				<Link to="https://huflit.edu.vn" :external="true"
					>Ho Chi Minh City University of Foreign Languages and Information
					Technology</Link
				>
				and a freelance software engineer.
			</p>
			<p>
				I am also an open-source enthusiast and maintainer. I am driven by the power of
				global collaboration and I am honored to contribute back to the community and the
				industry at large.
			</p>
		</div>
	</Section>
</template>
