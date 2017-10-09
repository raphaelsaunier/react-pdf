import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import toLowerCase from '../utils/toLowerCase';
import docs from '../index.md';

const Menu = styled.ul`
  margin: 0px;
  width: 100%;
  list-style: none;
`;

const Link = ({ className, children }) =>
  <li className={className}>
    <a href={`#${toLowerCase(children)}`}>{children}</a>
  </li>;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const MenuItem = styled(Link)`
  padding: 6px 12px;
  > a {
    padding: 6px 10px;
    color: ${props => (props.active ? '#3E3E3E' : '#A6A6A6')};
    border-left: ${props => props.active && '2px solid #F01E00'};
  }
`;

const docItems = docs
  .match(/###(.*)/g)
  .map(match => match.replace('###', '').trim());

export default () =>
  <Menu>
    {docItems.map(item => <MenuItem key={item}>{item}</MenuItem>)}
    <MenuItem active>Playground / REPL</MenuItem>
    <MenuItem>Donate</MenuItem>
    <MenuItem>Forum</MenuItem>
  </Menu>;
