import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})