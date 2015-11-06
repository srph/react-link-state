var React = require('react');
var findDOMNode = require('react-dom').findDOMNode;
var TestUtils = require('react-addons-test-utils');
var ES5Fixture = require('./es5.fixture');
var ES5DeepFixture = require('./es5-deep.fixture');
var ES5DeepArrayFixture = require('./es5-deep-array.fixture');
var expect = require('chai').expect;

describe('linkState', function() {
  it('should change value of the state', function() {
    var Component = TestUtils.renderIntoDocument(ES5Fixture());
    var node = findDOMNode(Component);

    node.value = 'yolo';
    TestUtils.Simulate.change(node);
    expect(Component.state.username).to.equal('yolo');
  });

  describe('deep', function() {
    it('should work for objects', function() {
      var Component = TestUtils.renderIntoDocument(ES5DeepFixture());
      var node = findDOMNode(Component);

      node.value = 'yolo';
      TestUtils.Simulate.change(node);
      expect(Component.state.user.profile.first_name).to.equal('yolo');
    });

    it('should work for arrays', function() {
      var Component = TestUtils.renderIntoDocument(ES5DeepArrayFixture());
      var node = findDOMNode(Component);

      node.value = 'yolo';
      TestUtils.Simulate.change(node);
      expect(Component.state.users[0].profile.first_name).to.equal('yolo');
    });
  });
});
