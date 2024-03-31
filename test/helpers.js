// index.test.js

const chai = require('chai');
global.expect = chai.expect;
const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');
const babel = require("@babel/core");

// Load the helper functions dynamically
async function loadHelpers() {
  const { chai, expect } = await import('chai');
  global.expect = expect;
}

// Run the tests after loading helpers
// Import necessary functions from helper.js
const { findMatching, fuzzyMatch, matchName } = require("./helper.js");

// Use the imported helper functions in your test cases
describe('index.js', function () {
  describe('findMatching()', function () {
    it('returns all drivers that match the passed in name', function () {
      // Test code using findMatching function
      const drivers = ['Alice', 'Bob', 'Charlie'];
      const result = findMatching(drivers, 'Bob');
      expect(result).to.deep.equal(['Bob']);
    });

    // Other test cases for findMatching()
  });

  describe('fuzzyMatch()', function () {
    it('returns drivers if beginning provided letters match', function () {
      // Test code using fuzzyMatch function
      const drivers = ['Alice', 'Bob', 'Charlie'];
      const result = fuzzyMatch(drivers, 'B');
      expect(result).to.deep.equal(['Bob']);
    });

    // Other test cases for fuzzyMatch()
  });

  describe('matchName()', function () {
    it('returns driver objects whose name property matches the provided name', function () {
      // Test code using matchName function
      const drivers = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
      const result = matchName(drivers, 'Bob');
      expect(result).to.deep.equal([{ name: 'Bob' }]);
    });

    // Other test cases for matchName()
  });
});
