let mix = require('laravel-mix');


mix
   js('public/js/gallery.js', 'public/js')
   .sass('public/css/main.scss', 'public/css');