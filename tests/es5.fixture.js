var React = require('react');
var form = React.DOM.form;
var input = React.DOM.input;
var linkState = require('../');

var MyForm = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  render: function() {
    return input({
      type: 'text',
      valueLink: linkState(this, 'username')
    });
  }
});

module.exports = React.createFactory(MyForm);
