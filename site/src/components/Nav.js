import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nav = ({ className, style }) =>
  <nav className={classNames('bg-gray-3', className)} style={style}>
    Search
  </nav>;

Nav.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Nav;
