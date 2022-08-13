import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aboutme from './Pages/Aboutme';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Navigation from './Navigation';

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState("Aboutme");

    const renderPage = () => {
        if (currentPage === "Aboutme"){
            return <Aboutme />;
        }
        if (currentPage === "Contact"){
            return <Contact />;
        }
        if (currentPage === "Portfolio"){
            return <Portfolio />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}