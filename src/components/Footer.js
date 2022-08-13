import React from 'react';

function Footer () {
    return(
            <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4">
                <div className="me-5 d-none d-lg-block">
                <div className='p-4'>This is created by <span className="text-reset fw-bold">© Louie Ip</span></div>
                </div>

                <div className="text-center p-4">
                <a href="https://www.google.com" className="me-4 text-reset">
                    <i className="fab fa-google fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/lok-yu-ip-8317651b9/" className="me-4 text-reset">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/louieiply" className="me-4 text-reset">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://stackoverflow.com/users/12144315/uniguyhasproblems" className="me-4 text-reset">
                    <i className="fab fa-stack-overflow fa-2x"></i>
                </a>
            </div>


            </section>

            </footer>

    );
}

export default Footer;
