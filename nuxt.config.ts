// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/particles.js'
  ],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Sour Gummy': [100, 300, 400, 500, 700, 900], // Add the weights you need
      'Poppins' : [100, 300, 400, 500, 700, 900],
      'EB Garamond' : [100, 300, 400, 500, 700, 900]
    }
  },
})
