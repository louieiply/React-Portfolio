import React from 'react';
import styled from "styled-components";
import "../css/contact.css";

function Contact() {

    const Outercontainer = styled.div`
    min-height: 30vh;
    padding: 10px;
    background-color: #cedfe3;
    ` ;

    return(
        
        <Outercontainer className='container-fiuld align-items-center'>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                        <h1 className='title'>Contact</h1>
                        <p> Message will be sent to my developer Email louieiply@gmail.com </p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">

                    <form className='justify-content-center col-lg-4 col-md-6 col-sm-8 col-10'>
                        <div className='row justify-content-center'>
                            <input className='col-12 mt-4 justify-content-center' placeholder='Name' required></input> 
                            <input className='col-12 m-4 justify-content-center' placeholder='Email' required></input>
                            <textarea className='col-12 mb-4' placeholder='Your Message' rows="10" required></textarea>
                            <button className='col-4 m-4 submit-button'>Send it !</button>
                        </div>


                    </form>

                </div>
        </Outercontainer>
            
        )

    
}

export default Contact;