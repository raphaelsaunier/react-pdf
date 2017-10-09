import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';

const App = ({ children }) =>
  <main className="flex" style={{ height: '100%' }}>
    <Nav style={{ width: '240px' }} />
    <section className="p4" style={{ flex: 1 }}>
      {children}
    </section>
  </main>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
