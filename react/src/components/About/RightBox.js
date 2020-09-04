/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import ContactWrap from './ContactWrap';

const Right = styled.div`
  width: 65%;
  height: auto;
  padding-left: 70px;
`;

const Title = styled.div`
  margin-bottom: 30px;
  & h3 {
    font-size: 20px;
  }
  & span {
    color: #ff214f;
  }
`;

const Text = styled.div`
  margin-bottom: 23px;
  float: left;
  & span {
    color: #ff214f;
    font-style: italic;
  }
`;

const Button = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  & ul {
    margin: 0px;
    list-style-type: none;

    & li {
      margin: 0px 15px 20px 0px;
      display: inline-block;

      & a {
        text-decoration: none;
        color: #fff;
        background-color: #ff214f;
        display: inline-block;
        padding: 10px 45px;
        font-family: 'Montserrat';
        position: relative;
        overflow: hidden;

        &:before {
          position: absolute;
          content: '';
          top: 0px;
          height: 100%;
          left: -25%;
          width: 0%;
          background-color: #000;
          transform: skew(50deg);
          transition-duration: 0.6s;
          z-index: 1;
        }

        &:hover:before {
          width: 150%;
        }
      }

      & span {
        z-index: 2;
        position: relative;
      }
    }
  }
`;

const RightBox = () => {
  return (
    <Right>
      <Title>
        <h3>
          I'm Chu Van Tinh and{" "}
          <Typed
            strings={['Freelancer', 'Web Developer', 'Photographer']}
            loop={true}
            typeSpeed={30}
            backSpeed={40}
          />
        </h3>
      </Title>
      <Text>
        <p>
          Hi! My name is <span>Chu Van Tinh</span>. I am a Web Developer, and
          I'm very passionate and dedicated to my work. With 20 years experience
          as a professional Web developer, I have acquired the skills and
          knowledge necessary to make your project a success. I enjoy every step
          of the design process, from discussion and collaboration.
        </p>
      </Text>
      <ContactWrap />
      <Button>
        <ul>
          <li>
            <a href='#'>
              <span>Download CV</span>
            </a>
          </li>
          <li>
            <a href='http://m.me/ke.giaumat.56829' target='_blank'>
              <span>Send Message</span>
            </a>
          </li>
        </ul>
      </Button>
    </Right>
  );
};

export default RightBox;
