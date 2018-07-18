# vsf-theme-coat

Need pass `require('tailwindcss')(themeRoot + '/tailwind.js'),` to `./core/build/webpack.base.config.js`

```
const postcssConfig =  {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: (loader) => [
      require('tailwindcss')(themeRoot + '/tailwind.js'),
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        flexbox: 'no-2009',
      }),
    ]
  }
};
```
