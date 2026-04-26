<script setup lang="ts">
type Social = {
	icon: string;
	link: string;
};

const socialMedia: Social[] = [
	{
		icon: "i-carbon-logo-github",
		link: "https://github.com/tobynguyen27",
	},
	{
		icon: "i-carbon-logo-x",
		link: "https://x.com/iamtobynguyen",
	},
	{
		icon: "i-carbon-logo-linkedin",
		link: "https://linkedin.com/in/imtobynguyen",
	},
	{
		icon: "i-carbon-user-avatar-filled",
		link: "https://tobynguyen.net",
	},
];
</script>

<template>
	<div class="flex flex-row gap-3 justify-center items-center md:justify-start">
		<a
			:href="it.link"
			v-for="it in socialMedia"
			class="text-muted hover:text-default duration-200">
			<i :class="[it.icon, '']"></i>
		</a>
	</div>
</template>
