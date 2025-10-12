// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-12',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: { viewer: true, exposeConfig: true },

  app: {
    baseURL: '/2d20tools/',
    buildAssetsDir: '/_nuxt/',
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Code&display=swap'
        }
      ]
    }
  },
  
  // 靜態生成設定
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/', '/character', '/archetype', '/talent'],
      crawlLinks: true,
      failOnError: false
    }
  },
  
  // 確保 SPA 模式用於 GitHub Pages
  ssr: false
})