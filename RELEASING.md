# How repositories are fetched

The repositories that are shown in the portal are fetched with GitHub GraphQL API by this [build script](./src/scripts/build-repo-data.js) that is run at build time, producing a [static JSON file](./static/repos.json).

In particular, repositories are fetched within the `ExpediaGroup` organization by [topic](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics):

- if the repo has topic `oss-portal-listed` it will be shown in the Repositories Page
- if the repo has topic `oss-portal-featured` it will be additionally shown in the Home Page

# How blog posts are fetched

The Medium blog posts [are fetched from the RSS feed](./src/scripts/build-posts-data.js) at build time
producing a [static JSON file](./static/posts.json).

# How to release

Any commit to `main` branch will trigger a [GitHub Actions workflow](./.github/workflows) that builds and releases
the site to GitHub Pages. The workflow is also automatically scheduled on a daily basis.

The built static files are pushed to branch `gh-pages`, which automatically triggers the GitHub Pages deployment, usually
in few minutes. You can check the history of GitHub Pages deployments [here](https://github.com/ExpediaGroup/expediagroup.github.io/deployments).
