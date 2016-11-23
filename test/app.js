'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-node-module-boilerplate:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({moduleName: 'test-module'})
      .withPrompts({newDirectory: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'src/index.js',
      'test/index.js'
    ]);
  });
});
