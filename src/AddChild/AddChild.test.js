import React from 'react';
import ReactDOM from 'react-dom';
import AddChild from './AddChild';

describe('AddChild Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddChild/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})