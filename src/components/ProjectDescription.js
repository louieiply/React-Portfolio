import React from "react";
import styled from "styled-components";
import "./css/projectdescription.css";

const Outercontainer = styled.div`
    padding: 1.5rem!important;
` ;

const ProjectDescription = () => {
    return(
        <Outercontainer>
            <div className="container-fluid p-2 description-container">
                <div className="row">
                    <div className="col-4 p-2">
                        <div className="project-title text-end">My Projects</div>
                    </div>
                    <div className="col-8 p-2">
                    </div>
                </div>
            </div>
        </Outercontainer>
    );
}

export default ProjectDescription;