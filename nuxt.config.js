const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/vue-paper-dashboard-nuxt/' : '/';
module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    linkExactActiveClass: 'active',
    base: routerBase
  },
  head: {
    title: 'vue-paper-dashboard-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Muli:400,300" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Montserrat" },
      { rel: 'stylesheet', href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: 'stylesheet', href: "/css/themify-icons.css" },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/dashboard' },
    { src: '~/plugins/globalComponents' },
    { src: '~/plugins/globalDirectives' },
    { src: '~/plugins/charts', ssr: false },
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
