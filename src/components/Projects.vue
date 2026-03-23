<script setup lang="ts">
import Section from "./base/Section.vue";

type Project = {
	name: string;
	description: string;
	link: string;
};

const projects: Project[] = [
	{
		name: "Solitar",
		description: "An URL shortener",
		link: "https://github.com/solitar-dev/code",
	},
];
</script>

<template>
	<Section name="Projects">
		<div class="grid grid-cols-2">
			<a
				:href="it.link"
				target="_blank"
				rel="noopener noreferrer"
				class="border-l border-l-2 border-active pl-3 py-2 hover:border-l-gray-1000 duration-200 group"
				v-for="it in projects"
				:key="it.name">
				<div
					class="flex flex-row justify-start items-center gap-1 group-hover:ml-1 duration-200">
					<h3 class="font-semibold">{{ it.name }}</h3>
					<i class="i-carbon-arrow-up-right text-xs text-default"></i>
				</div>
				<p class="text-sm text-muted">{{ it.description }}</p>
			</a>
		</div>
	</Section>
</template>
