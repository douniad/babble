import React from 'react';
import ReactDOM from 'react-dom';
import GettingStarted from './GettingStarted';

describe('GettingStarted Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< GettingStarted/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})