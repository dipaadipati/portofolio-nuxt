// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxt/image',
    'v-gsap-nuxt',
    '@nuxtjs/device',
  ],
  css: [`assets/css/style.css`],
  app: {
    head: {
      title: 'Adipati Rezkya Portfolio',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        // .ico first, .svg second: browsers that understand SVG icons take the vector one,
        // the rest fall back to the raster.
        { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    }
  }
})