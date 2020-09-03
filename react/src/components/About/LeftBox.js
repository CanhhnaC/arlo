import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components'
import backgroundBlack from './img/black.jpg';
import avatar from './img/avatar.jpg';

const WrapParallax = styled.div`
  position: relative;

  & img {
    vertical-align: middle;
    max-width: 100%;
    opacity: 0;
  }
`;

const ImageInner = styled.div`
  position: absolute;
  z-index: 2;

  & .inner {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${avatar});
  }
`;

const BorderInner = styled.div`
  & .inner {
    position: absolute;
    top: 25px !important;
    bottom: -25px !important;
    left: 25px !important;
    right: -25px !important;
    border: 10px solid #000;
  }
`;

const Left = styled.div`
  width: 35%;
  float: left;
  height: auto;
`;

const LeftBox = () => {
  useEffect(() => {
    console.log(process.env.PUBLIC_URL + '/img/avatar.jpg');
    var scene = document.getElementById('parallax');
    new Parallax(scene);
  });

  return (
    <Left>
      <WrapParallax id='parallax' data-relative-input='true'>
        <ImageInner data-depth='0.1'>
          <img src={backgroundBlack} alt='' />
          <div className='inner'></div>
        </ImageInner>
        <BorderInner data-depth='0.2'>
          <img src={backgroundBlack} alt='' />
          <div className='inner'></div>
        </BorderInner>
      </WrapParallax>
    </Left>
  );
};

export default LeftBox;
