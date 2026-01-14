// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Avtotest - Haydovchilik Imtihoniga Tayyorgarlik',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Haydovchilik imtihoniga professional tayyorgarlik platformasi' }
      ],
      link: [
        // Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Noto+Sans:wght@300;400;500;600;700;800;900&family=Public+Sans:wght@400;500;600;700;800;900&display=swap'
        },
        // Material Symbols
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
