<script setup lang="ts">
import Section from "./base/Section.vue";

type Work = {
	name: string;
	role: string;
	since: string;
	place: string;
	details: string[];
};

const works: Work[] = [
	{
		name: "Open Source",
		role: "OSS Developer",
		since: "April, 2025 - Present",
		place: "GitHub",
		details: ["Received 500,000+ downloads on my Minecraft mods."],
	},
];
</script>

<template>
	<Section name="Work Experience">
		<div class="space-y-3" v-for="it in works">
			<div class="">
				<div class="flex flex-row gap-2">
					<h3 class="link hover:cursor-pointer font-semibold">{{ it.name }}</h3>
					<p class="text-muted">{{ it.role }}</p>
				</div>
				<p class="text-muted text-sm">{{ it.since }} | {{ it.place }}</p>
			</div>
			<ul class="list-disc-inside ml-3">
				<li v-for="detail in it.details">{{ detail }}</li>
			</ul>
		</div>
	</Section>
</template>
