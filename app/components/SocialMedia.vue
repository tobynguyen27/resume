<script setup lang="ts">
interface Social {
  icon: string
  link: string
}

const socialMedia: Social[] = [
  {
    icon: 'i-carbon-logo-github',
    link: 'https://github.com/tobynguyen27',
  },
  {
    icon: 'i-carbon-logo-x',
    link: 'https://x.com/iamtobynguyen',
  },
  {
    icon: 'i-carbon-logo-linkedin',
    link: 'https://linkedin.com/in/imtobynguyen',
  },
  {
    icon: 'i-carbon-user-avatar-filled',
    link: 'https://tobynguyen.net',
  },
]
</script>

<template>
  <div class="flex flex-row gap-3 justify-center items-center md:justify-start">
    <NuxtLink
      v-for="(it, i) in socialMedia"
      :key="i"
      :to="it.link"
      class="text-muted hover:text-default duration-200 text-xl"
      external
      target="_blank"
    >
      <Icon :name="it.icon" />
    </NuxtLink>
  </div>
</template>
