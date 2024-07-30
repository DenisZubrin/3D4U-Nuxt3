// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['nuxt-swiper', '@nuxt/eslint', '@nuxt/image'],
  app: {
    // baseURL: '/3D4U-Nuxt3/',
  },
  css: ['~/assets/styles/style.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/variables.scss";',
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
});
