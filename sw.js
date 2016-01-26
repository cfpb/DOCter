---
layout: null
---

importScripts( '{{ site.baseurl }}/cache-polyfill.js' );

var filesToCache = [
  // root
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/index.html',
  // css
  '{{ site.baseurl }}/assets/css/main.css',
  '{{ site.baseurl }}/assets/css/normalize.css',
  '{{ site.baseurl }}/assets/css/syntax.css',
  // images
  '{{ site.baseurl }}/assets/img/octocat.png',
  // pages
  {% for page in site.documents %}'{{ site.baseurl }}{{ page.url }}',{% endfor %}
  // posts
  {% for post in site.posts %}'{{ site.baseurl }}{{ post.url }}',{% endfor %}
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
