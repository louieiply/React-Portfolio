import React from 'react';
import styled from "styled-components";
import "../css/resume.css";
import resumePDF from "../resume/Resume 2022.docx.pdf";

const Outercontainer = styled.div`
    padding: 40px;
` ; 
const Innercontainer = styled.div`
    background-color: #cedfe3;
`;

function Resume() {
    return(
        <Outercontainer>
            <Innercontainer className='container-fiuld'>
                <div className="row">
                    <div className="col-4 left-panel">
                        <h2 className='text-center p-2'>Skills</h2>
                    </div>
                    <div className="col-8">
                        <h2 className="p-2">Programming Language and Related tools</h2>
                        <a className="p-2 download-link" href={resumePDF}>Click here to download my resume</a>
                        <ul className='pr-2 py-2'>
                            <li>Javascript</li>
                            <li>Node.Js</li>
                            <li>C# ASP.NET</li>
                            <li>Express.js</li>
                            <li>MSSQL 2012</li>
                            <li>MYSQL</li>
                            <li>MongoDB</li>
                            <li>Heroku</li>
                            <li>React</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>JavaFx</li>
                            <li>Java 8.0</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </Innercontainer>
        </Outercontainer>
    )
}

export default Resume;
