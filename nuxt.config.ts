export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': {
      prerender: true,
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/hints',
    '@nuxt/a11y',
    '@nuxtjs/seo',
    '@nuxtjs/partytown',
  ],

  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        name: 'personal-resume',
        workers_dev: false,
        preview_urls: false,
      },
    },
  },

  vue: {
    vapor: true,
  },

  // Nuxt module config
  scripts: {
    registry: {
      cloudflareWebAnalytics: {
        token: '9f9851e2882c483fa10750eaaf3fbb69',
        trigger: 'onNuxtReady',
        partytown: true,
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  fonts: {
    provider: 'local',
    defaults: {
      weights: [400, 600],
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
    url: 'https://resume.tobyngn.com',
  },
  robots: {
    blockNonSeoBots: true,
  },
  ogImage: {
    enabled: false,
  },
  skewProtection: {
    enabled: false,
  },
  aiReady: {
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
})
