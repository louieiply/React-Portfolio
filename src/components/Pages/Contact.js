import React, {useState} from 'react';
import styled from "styled-components";
import "../css/contact.css";

function Contact() {

    const Outercontainer = styled.div`
    min-height: 30vh;
    padding: 10px;
    background-color: #cedfe3;
    ` ;

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [errormessage, seterrormessage] = useState("");
    const [check, setcheck] = useState(false);
    const checkEmail = (input) => {
        const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return re.test(input);
    }

    function fieldOnChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        console.log(inputName);
        if(inputName == "name"){
            setname(inputValue);
            console.log("run name");


        }
        else if(inputName == "email"){
            setemail(inputValue);
            console.log("run email");
            
        }
        else {
            setmessage(inputValue);
            console.log("run message");
        }
        
    }
    const checkOnSubmit = (event) => {
        event.preventDefault();
        if( name == ""){
            seterrormessage("Please fill in the name field");

            return;
        }
        else if(email == "" ){
            seterrormessage("Please fill in the email field");
            return;
        }
        else if(message == ""){
            seterrormessage("Please fill in the message field");
            return;
        }
        if (!checkEmail(email)){
            seterrormessage("Email format invalid");
            return;
        }
        else {
            seterrormessage("");
            setemail("");
            setname("");
            setmessage("");
        }
        console.log("run");
    }

    return(
        
        <Outercontainer className='container-fiuld align-items-center'>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                        <h1 className='title'>Contact</h1>
                        <p> Message will be sent to my developer Email louieiply@gmail.com </p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">

                    <form className='justify-content-center col-lg-4 col-md-6 col-sm-8 col-10' onSubmit={checkOnSubmit}>
                        <div className='row justify-content-center'>
                            <input className='col-12 mt-4 justify-content-center' name="name" value={name} placeholder='Name' onChange={fieldOnChange}></input>
                            <input className='col-12 m-4 justify-content-center' name="email" value={email} placeholder='Email' onChange={fieldOnChange} ></input>
                            <textarea className='col-12 mb-4' placeholder='Your Message' rows="10" name="message" value={message} onChange={fieldOnChange} ></textarea>
                            <button className='col-4 m-4 submit-button' >Send it !</button>
                            { errormessage ? <h2>{errormessage}</h2>: null}
                        </div>


                    </form>

                </div>
        </Outercontainer>
            
        )

    
}

export default Contact;