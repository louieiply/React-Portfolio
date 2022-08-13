import React from 'react';
import styled from "styled-components";
import aboutMeImg from '../images/test.jpg';
// const Outercontainer = styled.div`
//     height: 100vh;
//     padding: 10px;
// ` ;

// const Container = styled.div`
//     height: 100%;
//     background-color: green;
// `;


function AboutMe() {

    return (
        <div>
          <div className="hero-image">
          <div className="hero-text">
            <h5 >Hi I am Louie.</h5>
            <p>Welcome to my page.</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-x justify-content-center">
            <img src={aboutMeImg} className="responsive-img col-md-6 col-sm-12 col-xs-12" alt="hk-bg"/>
            <div className="col-md-6 col-sm-12 col-xs-12 aboutme-session" id="about">
              <h2 className="aboutme-header">About Me</h2>
              <p className="aboutme-text">I like to learn new technologies and apply them in our everyday life.</p>
            </div>
          </div>
        </div>
      
      </div>
    );
}

export default AboutMe;
