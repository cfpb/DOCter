# DOCter

DOCter is a [Jekyll](http://jekyllrb.com/) template for quickly building out project pages and documentation.

![DOCter Screenshot](https://github.com/ascott1/DOCter/blob/gh-pages/assets/img/screenshot.png?raw=true)

[See the demo](http://cfpb.github.io/DOCter/)

## To run DOCter locally

DOCter needs Jekyll and other dependencies to run locally. These can be installed with Bundler by running the following commands.

```
gem install bundler
bundle install
```

Fork and clone the repo:

```
git clone git@github.com:cfpb/DOCter.git
cd DOCter
```
Run Jekyll:

```
bundle exec jekyll serve --watch --baseurl ''
```

Open it up in your browser: <http://localhost:4000/>


## `_config.yml`

Options within the `_config.yml` file allow you to control the site's title, subtitle, logo, author information, and the left column navigation.


### Project Page URL Structure

**This is an excerpt from the [Jekyll docs](http://jekyllrb.com/docs/github-pages/) on configuring your URL for Project Pages.**

Sometimes it's nice to preview your Jekyll site before you push your `gh-pages` branch to GitHub. However, the subdirectory-like URL structure GitHub uses for Project Pages complicates the proper resolution of URLs. Here is an approach to utilizing the GitHub Project Page URL structure (`username.github.io/project-name/`) whilst maintaining the ability to preview your Jekyll site locally.

1. In `_config.yml`, set the `baseurl` option to `/project-name` -- note the leading slash and the **absence** of a trailing slash.
2. When referencing JS or CSS files, do it like this: `{{ site.baseurl }}/path/to/css.css` -- note the slash immediately following the variable (just before "path").
3. When doing permalinks or internal links, do it like this: `{{ site.baseurl }}{{ post.url }}` -- note that there is **no** slash between the two variables.
4. Finally, if you'd like to preview your site before committing/deploying using `jekyll serve`, be sure to pass an **empty string** to the `--baseurl` option, so that you can view everything at `localhost:4000` normally (without `/project-name` at the beginning): `jekyll serve --baseurl ''`

This way, you can preview your site locally from the site root on localhost, but when GitHub generates your pages from the gh-pages branch all the URLs will start with `/project-name` and resolve properly.


## Offline support

DOCter provides optional offline support via a [Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/). This means that, when enabled, after an initial load of your DOCter site, a cached version will be available offline in some modern browsers.

**To enable offline caching:**

in `_config.yml`: set `offline_cache` to `true` (defaults to `false`)

**To update the cached version of your site:**

in `_config.yml`: change the value of `cache_name` (this should be done with every significant update to the site)

**To add additional files to the cache:**

in `sw.js`: update the `filesToCache` array


## License

The project is in the public domain, and all contributions to it will be released as such. By submitting a pull request, you are agreeing to waive all rights to your contribution under the terms of the [CC0 Public Domain Dedication](http://creativecommons.org/publicdomain/zero/1.0/).

If you contribute the open source work of others, please mark it clearly in your pull request.
