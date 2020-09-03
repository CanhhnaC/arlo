/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

import calendar from './img/svg/calendar-4.svg';
import gift from './img/svg/gift.svg';
import location from './img/svg/location-1.svg';
import controller from './img/svg/game-controller-2.svg';
import study from './img/svg/study-5.svg';
import degree from './img/svg/degree-1.svg';
import message from './img/svg/message-3.svg';
import call from './img/svg/call-2.svg';

const Contact = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-bottom: 19px;

  & ul {
    margin: 0px;
    list-style-type: none;

    @media ${device.laptopL} {
      margin: 0px;
    }

    & li {
      margin: 0px 0px 10px 0px;
      width: 50%;
      float: left;
      position: relative;
      padding-left: 30px;

      @media ${device.laptopL} {
        padding-left: 30px;
        width: 100%;
      }

      & .svg {
        position: absolute;
        left: 0px;
        top: 6px;
        width: 17px;
        height: 17px;
        color: #ff214f;
      }

      &:nth-of-type(2n) {
        clear: right;
      }

      & a {
        text-decoration: none;
        color: #000;
        position: relative;
        border-bottom: 1px solid transparent;

        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;

        &:hover {
          border-bottom-color: #000;
        }
      }
    }
  }
`;

const ContactWrap = () => {
  const href_location = (event) => {
    var location = event.currentTarget.textContent;
    location = location.replace(/\\/g, '+');
    return window.open('https://maps.google.com?q=' + location);
  };
  return (
    <Contact>
      <ul>
        <li>
          <img class='svg' src={gift} alt='' />
          <span>
            <label>Birthday:</label> 30.03.2000
          </span>
        </li>
        <li>
          <img class='svg' src={calendar} alt='' />
          <span>
            <label>Age:</label> 20
          </span>
        </li>
        <li>
          <img class='svg' src={location} alt='' />
          <span>
            <label>Location:</label>{' '}
            <a href='#' onClick={href_location}>
              Hanoi, Vietnam
            </a>
          </span>
        </li>
        <li>
          <img class='svg' src={controller} alt='' />
          <span>
            <label>Interests:</label> Work Hard, Play Hard
          </span>
        </li>
        <li>
          <img class='svg' src={study} alt='' />
          <span>
            <label>Study:</label>
            <a href='#' onClick={href_location}>
              VNUA
            </a>
          </span>
        </li>
        <li>
          <img class='svg' src={degree} alt='' />
          <span>
            <label>Degree:</label> Master
          </span>
        </li>
        <li>
          <img class='svg' src={message} alt='' />
          <span>
            <label>Mail:</label>
            <a href='mailto:example@gmail.com'>cvtinh2000&#64;gmail.com</a>
          </span>
        </li>
        <li>
          <img class='svg' src={call} alt='' />
          <span>
            <label>Phone:</label>
            <a href='tel:+84 964 819 014'>+84 964 819 014</a>
          </span>
        </li>
      </ul>
    </Contact>
  );
};

export default ContactWrap;
