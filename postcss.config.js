var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    // ...
    tailwindcss('./path/to/your/tailwind-config.js'),
    require('autoprefixer')
    // ...
  ]
}
