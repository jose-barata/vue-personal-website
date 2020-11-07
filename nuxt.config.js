export default {
  mode: "spa",
  generate: {
    fallback: true,
  },
  router: {
    base: "/",
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Your Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "rgba(255,255,255, 0.6);",
    height: "5px",
  },
  loadingIndicator: {
    name: "folding-cube",
    color: "#1e1e1e",
    background: "white",
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/styles/main.scss", "@/assets/styles/variables.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    transpile: ["vue-echarts", "resize-detector"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
