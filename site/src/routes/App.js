import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import Logo from '../components/Logo';
import Icon from '../components/Icon';
import Menu from '../components/Menu';

const Main = styled.main`
  display: flex;
  min-height: 100%;
`;

const Nav = styled.nav`
  position: relative;
  width: 240px;
  background-color: #F8F8F8;
`;

const Fixed = styled.div`
  width: inherit;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  flex: 1;
  padding: 110px;
`;

const GitHubIcon = styled(({ className }) =>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.github.com/diegomura/react-pdf"
    className={className}
  >
    <Icon type="github" size={30} />
  </a>,
)`
  color: black;
  margin-bottom: 36px;
  opacity: 0.3;
`;

const App = ({ children }) =>
  <Main>
    <Nav>
      <Fixed>
        <SearchInput />
        <Logo />
        <Menu />
        <GitHubIcon />
      </Fixed>
    </Nav>

    <Section>
      {children}
    </Section>
  </Main>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
