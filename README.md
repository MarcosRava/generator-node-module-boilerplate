# generator-node-module-boilerplate

> NodeJS module boilerplate

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

First, install [Yeoman](http://yeoman.io) and generator-node-module-boilerplate using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-node-module-boilerplate
```

Then generate your new project:

```bash
yo node-module-boilerplate
```

## Features
### Including
  * ```.gitignore```
  * ```.eslintrc``` ([airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
  * ```.npmignore```
  * ```.codeclimate.yml```
  * ```.travis.yml```
  * ```.editorconfig```
  * nodemon
  * git-pre-push (run test)
  * git-pre-commit (run lint)
  * git-post-commit (run git status)

## Usage

### Scripts

* Development
  ```
    npm run dev

  ```
  run nodemon and tests (importing from ```src/```)

* Coverage
  ```
    npm run coverage

  ```
  run istanbul coverage and put result in ```coverage/```

* Code Climate
  ```
    npm run climate-coverage

  ```
  run coverage and send it to [code-climate](https://codeclimate.com/) (you need to set CODECLIMATE_REPO_TOKEN as an enviroment variable)

* Code Climate dotenv
  ```
    npm run climate-coverage-dotenv

  ```
  run coverage and send it to [code-climate](https://codeclimate.com/) (you need to set CODECLIMATE_REPO_TOKEN in .env file)

* Start
  ```
    npm start

  ```
  run ```node src/index.js```

* Dependencies Vulnerabilities
  ```
    npm run check-dependencies

  ```
  check dependencies vulnerabilities using [nsp](https://github.com/nodesecurity/nsp)

* Post install
  ```
    npm run postinstall

  ```
  call check-dependencies, this is will be called after every package installation

* Linter
  ```
    npm run lint

  ```
  run ```eslint src``` according ```.eslintrc``` file

* Tests
  ```
    npm test

  ```
  run ```mocha```


## License

MIT © [Marcos Rava](https://github.com/MarcosRava)

[npm-image]: https://badge.fury.io/js/generator-node-module-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-node-module-boilerplate
[travis-image]: https://travis-ci.org/travelhubapi/generator-node-module-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/travelhubapi/generator-node-module-boilerplate
[daviddm-image]: https://david-dm.org/travelhubapi/generator-node-module-boilerplate.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/travelhubapi/generator-node-module-boilerplate
[coveralls-image]: https://coveralls.io/repos/travelhubapi/generator-node-module-boilerplate/badge.svg
[coveralls-url]: https://coveralls.io/r/travelhubapi/generator-node-module-boilerplate
