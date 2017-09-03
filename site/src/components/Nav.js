import React from 'react';
import classNames from 'classnames';

const Nav = ({ className, style }) =>
  <nav className={classNames('bg-gray-3', className)} style={style}>
    Search
  </nav>;

Nav.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Nav;
