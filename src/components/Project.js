import React from "react";
import "./css/project.css";

const Project = ({projectTitle, projectDescription, projectImg, githubLink, deployedLink}) => {
    return(
        <div className="col-12 col-md-4 p-4">
        <div className='card'>
        <a href={deployedLink}>
            <img className="card-img" src={projectImg} alt="Card image"/>
        </a>
            <div className="card-body">
            <h4 className="card-title ">{projectTitle}</h4>
            <p className="card-text">{projectDescription}</p>
            <a className="github-link" href={githubLink}>
                <p className="card-text github-text"><b>View at Github</b></p>
            </a>

            </div>
        </div> 
    </div>
    );
}

export default Project;