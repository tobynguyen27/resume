<script setup lang="ts">
import Section from './base/Section.vue';

type Category = {
	name: string;
	content: string;
};

const categories: Category[] = [
	{
		name: 'Frontend',
		content: 'React, Next, Vue, Nuxt, Qwik, QwikCity, Vite, UnoCSS',
	},
	{
		name: 'Backend',
		content: 'SpringBoot, PostgreSQL, Docker',
	},
	{
		name: 'Mobile',
		content: 'React Native',
	},
	{
		name: 'DevOps',
		content: 'AWS, Supabase, Vercel, Cloudflare',
	},
	{
		name: 'Languages',
		content: 'TypeScript, Kotlin, Java, C#',
	},
];
</script>

<template>
	<Section name="Stacks">
		<table class="border-spacing-y-2 border-separate">
			<tr v-for="it in categories">
				<td class="text-right font-semibold">{{ it.name }}</td>
				<td class="pl-3">{{ it.content }}</td>
			</tr>
		</table>
	</Section>
</template>
