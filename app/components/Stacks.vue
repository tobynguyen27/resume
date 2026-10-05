<script setup lang="ts">
interface Category {
  name: string
  content: string
}

const categories: Category[] = [
  {
    name: 'Frontend',
    content: 'Next, Nuxt, Qwik, Vite, Tailwind',
  },
  {
    name: 'Backend',
    content: 'SpringBoot, ElysiaJS, PostgreSQL, Docker',
  },
  {
    name: 'Mobile',
    content: 'React Native',
  },
  {
    name: 'DevOps',
    content: 'AWS, Vercel',
  },
  {
    name: 'Languages',
    content: 'TypeScript, Kotlin',
  },
]
</script>

<template>
  <BaseSection name="Stacks">
    <table class="border-spacing-y-2 border-separate">
      <tbody>
        <tr v-for="it in categories" :key="it.name">
          <td class="text-right font-semibold">
            {{ it.name }}
          </td>
          <td class="pl-3">
            {{ it.content }}
          </td>
        </tr>
      </tbody>
    </table>
  </BaseSection>
</template>
