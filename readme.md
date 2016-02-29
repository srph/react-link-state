## react-link-state [![npm version](http://img.shields.io/npm/v/react-link-state.svg?style=flat-square)](https://npmjs.org/package/react-link-state?style=flat-square) [![Build Status](https://img.shields.io/travis/srph/react-link-state.svg?style=flat-square)](https://travis-ci.org/srph/react-link-state?branch=master)
A helper function to use LinkedStateMixin for ES6 React Components.

**Note**: This might be deprecated soon as there are plans to deprecate ReactLink ([#2302](https://github.com/facebook/react/issues/2302)).

## Installing
```bash
npm install react-link-state --save
```

## Usage
```es6
import React from 'react';
import linkState from 'react-link-state';

export default MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      toggle: false
    };
  }

  render() {
    console.log(this.state);
    
    return (
      <form>
        <input type="text" valueLink={linkState(this, 'username')} />
        <input type="password" valueLink={linkState(this, 'password')} />
        <input type="checkbox" checkedLink={linkState(this, 'toggle')}
      </form>
    );
  }
}
```

**Note**: Use [`checkedLink`](https://facebook.github.io/react/docs/two-way-binding-helpers.html) for checkboxes.

Deep link-state is also supported!

```es6
// Given that we have this state:
// {
//   users: [{
//     profile: {
//       first_name: ''
//     }
//   }]
// }
<input type="text" valueLink={linkState(this, 'users.0.profile.first_name')} />
```

## Testing
```
npm test
```

You need node `v4.0.0` to runs the tests. See [issue](http://facebook.github.io/react/docs/test-utils.html#renderintodocument).

> You will need to have window, window.document and window.document.createElement globally available before you import React. Otherwise React will think it can't access the DOM and methods like setState won't work.
