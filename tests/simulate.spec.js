var React = require('react');
var findDOMNode = require('react-dom').findDOMNode;
var TestUtils = require('react-addons-test-utils');
var ES5Fixture = require('./es5.fixture');
var expect = require('chai').expect;

describe('linkState', function() {
  it('should link state', function() {
    var Component = TestUtils.renderIntoDocument(ES5Fixture());
    var node = findDOMNode(Component);

    node.value = 'yolo';
    TestUtils.Simulate.change(node);
    expect(Component.state.username).to.equal('yolo');
  });
});
