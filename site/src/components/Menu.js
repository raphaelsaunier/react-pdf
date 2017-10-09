import React from 'react';
import styled from 'styled-components';
import toLowerCase from '../utils/toLowerCase';
import docs from '../index.md';

const List = styled.ul`
  margin: 0px;
  width: 100%;
  list-style: none;
`;

const Item = styled(({ className, children }) =>
  <li className={className}>
    <a href={`#${toLowerCase(children)}`}>{children}</a>
  </li>,
)`
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

const Menu = () =>
  <List>
    {docItems.map(item => <Item key={item}>{item}</Item>)}
    <Item active>Playground / REPL</Item>
    <Item>Donate</Item>
    <Item>Forum</Item>
  </List>;

export default Menu;
