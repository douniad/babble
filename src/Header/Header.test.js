import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { Link } from 'react-router-dom'

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Header>
          <Link to='/login'>login</Link>
        </Header>
  
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})