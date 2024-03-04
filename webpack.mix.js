let mix = require('laravel-mix');


mix.js(   ['public/js/gallery_lightbox.js', 'public/js/nav.js'], 'public/js/app.js')
   .sass('public/css/main.scss', 'public/css');

