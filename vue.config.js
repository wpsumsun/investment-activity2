module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    }
  }