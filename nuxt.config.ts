// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  devServer: {
    port: 3999
  },

  css: ["@/assets/scss/main.scss"],

  image: {
    dir: 'assets'
  },

  modules: ["@nuxt/image"]
})