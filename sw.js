---
layout: null
---

importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('DOCter').then(function(cache) {
      return cache.addAll([
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
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
 );
});
