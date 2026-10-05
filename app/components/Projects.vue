<script setup lang="ts">
interface Project {
  name: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    name: 'Solitar',
    description: 'An URL shortener',
    link: 'https://github.com/solitar-dev/code',
  },
]
</script>

<template>
  <BaseSection name="Projects">
    <div class="grid grid-cols-2">
      <NuxtLink
        v-for="it in projects"
        :key="it.name"
        :to="it.link"
        target="_blank"
        external
        class="border-l border-l-2 border-active pl-3 py-2 hover:border-l-gray-1000 duration-200 group"
      >
        <div
          class="flex flex-row justify-start items-center gap-1 group-hover:ml-1 duration-200"
        >
          <h3 class="font-semibold">
            {{ it.name }}
          </h3>
          <Icon name="i-carbon-arrow-up-right" class="text-xs text-default" />
        </div>
        <p class="text-sm text-muted">
          {{ it.description }}
        </p>
      </NuxtLink>
    </div>
  </BaseSection>
</template>
