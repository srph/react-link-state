var React = require('react');
var input = React.DOM.input;
var linkState = require('../');

var MyForm = React.createClass({
  getInitialState: function() {
    return {
      users: [{
        username: '',
        password: '',

        profile: {
          first_name: '',
          last_name: ''
        }
      }]
    };
  },

  render: function() {
    return input({
      type: 'text',
      valueLink: linkState(this, 'users.0.profile.first_name')
    });
  }
});

module.exports = React.createFactory(MyForm);
