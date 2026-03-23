<script setup lang="ts">
type Props = {
	to: string;
	external?: boolean;
};

withDefaults(defineProps<Props>(), {
	external: false,
});
</script>

<template>
	<a :href="to" :target="external ? '_blank' : '_self'" class="link" rel="noopener noreferrer">
		<slot />
	</a>
</template>
