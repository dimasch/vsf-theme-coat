# The Coat Theme for [Vue Storefront](https://github.com/DivanteLtd/vue-storefront). 
Extending atomic concept with Utility-First Tailwindcss and styleguide out of the box

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
