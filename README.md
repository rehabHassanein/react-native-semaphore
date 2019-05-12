# Semaphore demo CI/CD pipeline using React Native

Example application and CI/CD pipeline showing how to run a React Native project
on Semaphore 2.0. (Uses [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started.html))

## CI/CD on Semaphore

1. Fork this repository and use it to [create a
project](https://docs.semaphoreci.com/article/63-your-first-project).

The CI pipeline will look like this:

![CI pipeline on Semaphore](images/ci-pipeline.png)

The example pipeline contains 3 blocks:

 - Install dependencies
    -  installs and caches all npm dependencies
 - Run linter
    - Lint the code using [eslint](https://eslint.org/) with [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
 - Run tests
    - Runs unit and integration tests using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/). Runs e2e UI tests using [Detox](https://github.com/wix/Detox)
 - Build app
    - Uses [Fastlane](https://fastlane.tools) as build automation tool (with a refference to [Fastlane — Simple React Native iOS Releases](https://shift.infinite.red/simple-react-native-ios-releases-4c28bb53a97b))

## Local project setup

### Installation

```bash
$ npm install
```

### Running the app

```bash
$ npm start
```

### Lint

```bash
$ npm run lint
```

### Unit and integration tests

```bash
$ npm test
```

### e2e UI tests

```bash
$ npm run detox-build
$ npm run detox-test
```

## License

Copyright (c) 2019 Rendered Text

Distributed under the MIT License. See the file [LICENSE.md](./LICENSE.md).