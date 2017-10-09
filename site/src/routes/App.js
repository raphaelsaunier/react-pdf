import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import SearchInput from '../components/SearchInput';
import Menu from '../components/Menu';
import Logo from '../static/images/logo.png';

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
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  flex: 1;
  padding: 110px;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LogoImage = styled.img`
  width: 54px;
  padding: 56px;
  animation: ${rotate360} 4s linear infinite;
`;

const App = ({ children }) =>
  <Main>
    <Nav>
      <Fixed>
        <SearchInput />
        <LogoImage src={Logo} />
        <Menu />
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
