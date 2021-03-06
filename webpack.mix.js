let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   // .js('react/react-bundle.js', 'public/react')
   // .react('react/comp.jsx', 'public/react')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/uid.scss', 'public/css');
