/* eslint-disable no-unused-vars */
// next.config.js
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    ],
    optimizedImages,
  ],
  {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

      // config.module.rules.push({
      //   test: /\.mdx?$/,
      //   use: [
      //     // {
      //     //   loader: 'babel-loader',
      //     // },
      //     {
      //       loader: '@mdx-js/loader',
      //       options: {},
      //     },
      //   ],
      // })

      return config
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    },
  },
)
