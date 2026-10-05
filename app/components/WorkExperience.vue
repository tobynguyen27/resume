<script setup lang="ts">
interface Work {
  name: string
  role: string
  since: string
  place: string
  details: string[]
}

const works: Work[] = [
  {
    name: 'Open Source',
    role: 'OSS Developer',
    since: 'April, 2025 - Present',
    place: 'GitHub',
    details: ['Received 500,000+ downloads on my Minecraft mods.'],
  },
  {
    name: 'AWS First Cloud AI Journey',
    role: 'Administration',
    since: 'July, 2026 - Present',
    place: 'Ho Chi Minh City, Vietnam',
    details: [],
  },
]
</script>

<template>
  <BaseSection name="Work Experience">
    <div class="space-y-8">
      <div v-for="it in works" :key="it.name" class="space-y-3">
        <div class="">
          <div class="flex flex-row gap-2">
            <h3 class="link hover:cursor-pointer font-semibold">
              {{ it.name }}
            </h3>
            <p class="text-muted">
              {{ it.role }}
            </p>
          </div>
          <p class="text-muted text-sm">
            {{ it.since }} {{ it.place ? `| ${it.place}` : undefined }}
          </p>
        </div>
        <ul class="list-disc-inside ml-3">
          <li v-for="(detail, i) in it.details" :key="i">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </BaseSection>
</template>
