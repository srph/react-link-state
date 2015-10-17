var React = require('react');
var TestUtils = require('react-addons-test-utils');
var ES5Fixture = require('./es5.fixture');
var expect = require('chai').expect;

describe('linkState', function() {
  it('should link state', function() {
    var Component = TestUtils.renderIntoDocument(ES5Fixture());

    Component.refs.username.value = 'yolo';
    TestUtils.Simulate.change(Component.refs.username);
    expect(Component.state.username).to.equal('yolo');
  });
});