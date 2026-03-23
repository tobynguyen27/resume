<script setup lang="ts">
type Props = {
	name: string;
};

defineProps<Props>();
</script>

<template>
	<div class="space-y-3">
		<h2 class="font-semibold bg-black w-fit text-white px-1">{{ name }}</h2>
		<div class="">
			<slot />
		</div>
	</div>
</template>
