module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/howard-code-notes/'
  //   : '/',
  publicPath: '/',
  outputDir: 'public',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          loader: "raw-loader",
        },
      ],
    },
  },
}