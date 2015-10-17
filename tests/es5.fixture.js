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
    return (
      form(null,
        input({ type: 'text', valueLink: linkState(this, 'username'), ref: 'username' }),
        input({ type: 'password', valueLink: linkState(this, 'password'), ref: 'password' })
      )
    );
  }
});

module.exports = React.createFactory(MyForm);
