// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  devServer: {
    port: 3999
  },

  image: {
    dir: 'assets/images'
  },

  modules: ["@nuxt/image"]
})