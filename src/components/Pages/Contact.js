import React from 'react';
import styled from "styled-components";

function Contact() {

    const Outercontainer = styled.div`
    min-height: 500px;
    padding: 10px;
    background-color: #cedfe3;
    ` ;

    return(

        <Outercontainer className='container-fiuld align-items-center'>
                <div className="row align-items-center">
                    <div className='col-4 p-3 '></div>
                    <div className='col-8 p-3 '></div>
                </div>
        </Outercontainer>
            
        )

    
}

export default Contact;