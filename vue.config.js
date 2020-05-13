module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'manual',
      rtlSupport: false
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-audio-recorder/'
    : '/',

  transpileDependencies: [
    'quasar'
  ]
}
