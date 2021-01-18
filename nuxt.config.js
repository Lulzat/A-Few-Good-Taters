export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'A Few Good Taters',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Logos/GoodTaters/taters.svg' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // Generate Configuration
  //generate: {
  //  routes: function() {
  //    const fs = require('fs');
  //    const path = require('path');
  //    return fs.readdirSync('./content/blog').map(file => {
  //      return {
  //        route: `/blog/${path.parse(file).name}`, // Return the slug
  //        payload: require(`./content/blog/${file}`),
  //      };
  //    });
  //  },
  //},
  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundImage: theme => ({
           'field-church': "url('/planted-in-good-soil.jpg')",
           'fresh-taters': "url('/look-at-them-fresh-taters.jpg')",
           'falling-taters': "url('/falling-taters.jpg')",
           'tater-farming': "url('/tater-farming.jpg')",
          }),
          colors: {
            'tater-red': 'rgb(53,21,21)'
          } 
        },
        fontFamily: {
          'title': ["Redressed"]
          },
        letterSpacing: {
          superwide: '.5em'
        }
      }
    }
  }
}
