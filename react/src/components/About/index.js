import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { device } from '../device';

import LeftBox from './LeftBox';
import RightBox from './RightBox';

const AboutInner = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  display: flex;
  padding-top: 100px;
`;

const Title = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  & h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 35px;
  }
  & span {
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    color: #ff214f;
    font-weight: 500;
  }
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-bottom: 145px;

  @media ${device.mobileL} {
    margin-bottom: 80px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding-top: 138px;
`;

const About = () => {
  return (
    <div className="section" id="about">
      <Wrap>
        <Main>
          <Container>
            <Title>
              <span>Main Info</span>
              <h3>About Us</h3>
            </Title>
            <AboutInner>
              <LeftBox />
              <RightBox />
            </AboutInner>
          </Container>
        </Main>
      </Wrap>
    </div>
  );
};

export default About;
