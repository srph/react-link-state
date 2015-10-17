## react-link-state
A helper function to use LinkedStateMixin for ES6 React Components

## Installing
```bash
npm install react-link-state --save
```

## Usage
```es6
import React from 'react';
import linkState from 'react-link-state';

export default MyForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    console.log(this.state);
    
    return (
      <form>
        <input type="text" valueLink={linkState(this, 'username')} />
        <input type="password" valueLink={linkState(this, 'password')} />
      </form>
    );
  }
}
```