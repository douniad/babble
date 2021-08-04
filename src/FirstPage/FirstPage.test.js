import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './FirstPage';

describe('FirstPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< FirstPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})