---
layout: null
---

importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/example_page/',
  // posts
  {% for post in site.posts %}'{{ post.url }}',{% endfor %}
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( '{{ site.cache_name }}' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
