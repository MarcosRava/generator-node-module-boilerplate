const expect = require('expect.js');
const Test = require('../src/index.js');

describe('TestClass', function () {
  it('Should have hello attribute', function () {
    expect(Test.hello).to.be('Hello World!');
  });
});
