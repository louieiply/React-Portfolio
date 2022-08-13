import React from 'react';
import bookSearchImg from "../images/booksearchenginemern.png";
import travelPlannerImg from "../images/Travel-Planner.png";
import PWAImg from "../images/PWA-Text-Editor.png";
import WeatherDashboardImg from "../images/Weather-Dashboard.png";
import RPGJourneyGameImg from "../images/RPG-Journey-Game.png";
import CodeQuizImg from "../images/Code-Quiz.png";
import Project from '../Project';
import ProjectDescription from '../ProjectDescription';

function Portfolio() {
    return (
        <div>
            <ProjectDescription/>
            <div className='container-fluid'>
                <div className="row">
                    <Project 
                        projectTitle="Book Search Engine Mern"
                        projectDescription="A book search engine that uses GraphQL API built with Apollo server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end."
                        projectImg={bookSearchImg}
                        githubLink="https://github.com/louieiply/Book-Search-Engine-MERN-"
                        deployedLink="https://book-search-engine-mern-ap.herokuapp.com/"
                    />

                    <Project 
                        projectTitle="Travel Planner"
                        projectDescription="The project task here is to build a travel planner to plan the travellers' activities so that they don't overspend their budget. Getting reliable information of the list of activities or events at a given destination will ease some of the headaches. This will put the traveller (the user) at ease than suffer the activity or event not available at a location. This application also presents the user both a way to find and store the information to plan their activities within their budget."
                        projectImg={travelPlannerImg}
                        githubLink="https://github.com/CharDige/Travel-planner"
                        deployedLink="https://chardige.github.io/Travel-planner/"
                    />

                    <Project 
                        projectTitle="PWA Text Editor"
                        projectDescription="This a text editor that runs on any web browser with (PWA). A progressive web app (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally. The application will also function offline."
                        projectImg={PWAImg}
                        githubLink="https://github.com/louieiply/PWA-text-Editor"
                        deployedLink="https://pwa-text-editor-louie.herokuapp.com/"
                    />

                    <Project 
                        projectTitle="RPG Journey Game"
                        projectDescription="Running an RPG for your friends and you want it to be otherworldly! You have hit your niche. Our app allows people to come together and create stories together as well as view other peoples work to foster a creative environment for idea propagation"
                        projectImg={RPGJourneyGameImg}
                        githubLink="https://github.com/louieiply/RPG-journey-Game"
                        deployedLink="https://rpg-game-lpanz.herokuapp.com/"
                    />

                    <Project 
                        projectTitle="Weather Dashboard"
                        projectDescription="A online weather Dashbaord that allows you to search the near by city, country, suburb, etc. It is a accurate tool to use for your everyday check on the weather forecast reports. Also cute weather icons are used to reflect on the weather status of the day."
                        projectImg={WeatherDashboardImg}
                        githubLink="https://github.com/louieiply/Weather-Dashboard"
                        deployedLink="https://louieiply.github.io/Weather-Dashboard/home.html"
                    />

                    <Project 
                        projectTitle="Code Quiz"
                        projectDescription="A code quiz challenge that test your foundational Asp.net and Javascript skills.  Check how much you know about web development and your level of acknowledgement. You will have 60 seconds to complete all question. You can finish the game by finishing all the questions or when the timer turns to 0. "
                        projectImg={CodeQuizImg}
                        githubLink="https://github.com/louieiply/code-quiz"
                        deployedLink="https://louieiply.github.io/code-quiz/"
                    />
                </div>

            </div>
        </div>
    )
}

export default Portfolio;