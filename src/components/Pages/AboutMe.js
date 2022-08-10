import React from 'react';
import styled from "styled-components";
import HamburgerImg from '../Hamburger/Hamburger';
import aboutMeImg from '../images/test.jpg';
const Outercontainer = styled.div`
    height: 100vh;
    padding: 10px;
` ;

const Container = styled.div`
    height: 100%;
    background-color: green;
`;


function AboutMe() {

    return (
        <div>
        <div class="hero-image">
        <div class="hero-text">
          <h5 >Hi I am Louie.</h5>
          <p>Welcome to my page.</p>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row row-x justify-content-center">
          <img src={aboutMeImg} class="responsive-img col-md-6 col-sm-12 col-xs-12" alt="hk-bg"/>
          <div class="col-md-6 col-sm-12 col-xs-12 aboutme-session" id="about">
            <h2 class="aboutme-header">About Me</h2>
            <p  class="aboutme-text">I like to learn new technologies and apply them in our everyday life.</p>
          </div>
        </div>
      </div>
      
      </div>
    );
}

export default AboutMe;
