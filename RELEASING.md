# How to release

Any commit to `main` branch will trigger a [GitHub Actions workflow](./.github/workflows) that builds and releases
the site to GitHub Pages. The workflow is also automatically scheduled on a daily basis.

The list of repositories that are shown in the Home Page (the "featured" repositories) and in the Repositories Page is hardcoded in this [build script](./src/scripts/build-repo-data.js).
The information for each listed repository is fetched using GitHub GraphQL API at build time
producing a [static JSON file](./static/repos.json).

The Medium blog posts [are fetched from the RSS feed](./src/scripts/build-posts-data.js) at build time
producing a [static JSON file](./static/posts.json).

The built static files are pushed to branch `gh-pages`, which automatically triggers the GitHub Pages deployment, usually
in few minutes. You can check the history of GitHub Pages deployments [here](https://github.com/ExpediaGroup/expediagroup.github.io/deployments).
