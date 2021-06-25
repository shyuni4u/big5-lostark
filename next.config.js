const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  }
}