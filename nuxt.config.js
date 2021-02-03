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
            'tater-red': 'rgb(104, 66, 66)',
            'tater-red-200': '#7b3b3b;',
            'tater-tan': 'rgb(242, 231, 167)'
          },
          height: {
            'screen-1/3': '33vh',
            'screen-2/3': '66vh',
            'screen-1/5': '50vh',
            'screen-1/4': '25vh',
            'screen-3/4': '75vh',
            '80': '20rem',
            '104': '26rem'
          },
          width: {
            'screen-1/3': '33vw',
            'screen-2/3': '66vw',
            'screen-1/5': '50vw',
            'screen-1/4': '25vw',
            'screen-3/4': '75vw',
            '80': '20rem',
            '60': '15rem',
            '150': '150%'
           },
          fontSize: {
            '6xl': '3.5rem',
            '10xl': '5.5rem'
          },
          letterSpacing: {
            'super-wide': '2.5rem'
          }
           
        },
        fontFamily: {
          'title': ["Redressed"],
          'taters': ["Fondamento, cursive"],
          'archia':["archiaregular"]
          },
        letterSpacing: {
          superwide: '.5em'
        }
      }
    }
  }
}
