import React from 'react';
import ReactDOM from 'react-dom';
import ChildBoard from './ChildBoard';

describe('ChildBoard Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ChildBoard/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})