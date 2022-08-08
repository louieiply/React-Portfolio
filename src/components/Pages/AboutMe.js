import React from 'react';
import styled from "styled-components";
import { Container, Nav } from 'react-bootstrap';
import HamburgerImg from '../Hamburger/Hamburger';

const Outercontainer = styled.div`
    height: 100vh;
    padding: 10px;
` ;

// const Container = styled.div`
//     height: 100%;
//     background-color: green;
// `;


function AboutMe() {

    return (
        <Container>
                <p>
                    I am Louie. A Dynamics 365 A Full Stack Developer. A Dyanmics 365 Developer
                </p>
                <HamburgerImg/>
        </Container>
    );
}

export default AboutMe;
