// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Watt Can I Power?"
    }
  },
  modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-gtag',
  ],
  gtag: {
    id: 'G-QNLZ5NY7HH'
  }  
})
