# How to release

Any commit to `main` branch will trigger a [GitHub Actions workflow](./.github/workflows) that builds and releases
the site to GitHub Pages. The workflow is also automatically scheduled on a daily basis.

The repositories' info [is fetched using GitHub API](./src/scripts/build-repo-data.js) at build time
producing a [static JSON file](./static/repos.json).

The Medium blog posts [are fetched from the RSS feed](./src/scripts/build-posts-data.js) at build time
producing a [static JSON file](./static/posts.json).

The built static files are pushed to branch `gh-pages`, which automatically triggers the GitHub Pages deployment, usually
in few minutes. You can check the history of GitHub Pages deployments [here](https://github.com/ExpediaGroup/expediagroup.github.io/deployments).
