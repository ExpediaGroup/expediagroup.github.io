# Changelog
All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

You should update the version number in the [package.json](./package.json) according to the semantic versioning,
then run `npm install`.

## 1.3.0
- Added Repositories Page.

## 1.2.3
- Added snapshot unit tests for all React components.

## 1.2.2
- Refactored and added unit tests for `build-posts-data.js`.

## 1.2.1
- Refactored and added unit tests for `build-repo-data.js`.

## 1.2.0
- Added image to Medium blog posts, parsing the `content:encoded` field of the RSS feed.

## 1.1.0
- Switched source of Medium blog posts from Pixel Point widget to RSS feed. It shows: title, link, creator, date.
