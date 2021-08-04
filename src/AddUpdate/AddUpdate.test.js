import React from 'react';
import ReactDOM from 'react-dom';
import AddUpdate from './AddUpdate';

describe('AddUpdate Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddUpdate/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})