import React from 'react';
import classNames from 'classnames';

const Icon = ({ type, size, className, style = {}, ...otherProps }) =>
  <i
    className={classNames(`fa fa-${type}`, className)}
    style={{ fontSize: size, ...style }}
    {...otherProps}
  />;

Icon.propTypes = {
  type: React.PropTypes.string.isRequired,
  size: React.PropTypes.number,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Icon;
