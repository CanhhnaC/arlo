import React from 'react';
import About from './About';
import './App.css';
import { Sugar } from 'react-preloaders';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }
`;

const Inner = styled.div`
  width: 100%;
  min-height: 100vh;
  clear: both;
  float: left;
`;

function App() {
  return (
    <Main>
      <Inner>
      <Sugar
        color='#ffffff'
        background='linear-gradient(180deg, #f95759 0%, #a62022 100%)'
      />
      <About />
      </Inner>
    </Main>

  );
}

export default App;
