# EG Open Source Portal

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).
You need Node.js v12.21.0 or later. 

## Local Development

First install Node.js modules with:

```console
npm install
```

Then start with:

```console
npm start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Release to Github Pages 

Any commit to `main` branch will trigger a GitHub Actions workflow that builds and releases
the site to Github Pages.
