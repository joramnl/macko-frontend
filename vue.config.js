module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables/index.scss";`
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
