module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
          [  
            'postcss-url',
            {
              url: (asset, dir) => `/icons${asset.url}`
            }
          ],
        ]
      : [
          // No transformations in development
        ],
}