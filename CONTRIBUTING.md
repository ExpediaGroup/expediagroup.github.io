# How to contribute

Here is some info if you want to contribute to this project.

## Fork this repo

Create a fork of this project in your account and work from there. You can create a fork by clicking the fork button in GitHub.

## One feature, one branch

Work for each new issue should occur in its own branch. To create a new branch from the command line:

```
git checkout -b my-feature
```

where `my-feature` describes what you're working on.

## Verify your changes locally

See info in the main [README.md](./README.md) on how to build and start locally.

## Update unit tests

This project uses [Jest](https://jestjs.io/) for unit testing. When contributing, please update or add unit tests as needed.

The naming convention for a file `foo.js` is to put the related unit tests next to it as `foo.test.js`.

Run all the unit tests with:

```
npm run test
```

or a specific unit test with:

```
npm run test <path to test file>
```

Unit tests for React components use [snapshot testing](https://jestjs.io/docs/snapshot-testing), please take a moment
to learn about this kind of tests and how to use them.

## Update the changelog

See [CHANGELOG.md](./CHANGELOG.md).

## Submit Pull Request

Submit a pull request from your fork's branch to the upstream `main` branch, it will be reviewed by the project maintainers.
A maintainer will need to sign off on your pull request before it can be merged.
