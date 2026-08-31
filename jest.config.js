/*
Copyright 2022 Expedia, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const config = {
    resetMocks: true,
    setupFiles: ["<rootDir>/src/jest/helpers.js"],
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    transformIgnorePatterns: ["/node_modules/(?!(@babel/runtime)/)"],

    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}", 
        "!src/**/*.test.{js,jsx,ts,tsx}",
        "!src/**/__tests__/**" 
    ],
    coverageDirectory: "./coverage"
};

module.exports = config;
