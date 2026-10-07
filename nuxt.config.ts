export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/hints',
    '@nuxt/a11y',
    '@vercel/speed-insights',
    '@nuxtjs/seo',
  ],

  nitro: {
    preset: 'vercel',
  },

  vue: {
    vapor: true,
  },

  // Nuxt module config
  scripts: {
    registry: {
      vercelAnalytics: {
        trigger: 'onNuxtReady',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  fonts: {
    defaults: {
      weights: ['400 600'],
      styles: ['normal'],
    },
  },

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  // SEO
  site: {
    name: 'Toby Nguyen - Résumé',
    url: 'https://resume.tobynguyen.net',
  },
  robots: {
    blockNonSeoBots: true,
  },
  ogImage: {
    enabled: false,
  },
})
