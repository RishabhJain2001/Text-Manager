import React from 'react';

function About() {
    return (
        <div>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About us page</h1>
                            <p className="lead text-muted mb-0">This Site Is Created To Manage Your Text.</p>

                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Copyright Policy</h2>
                            <p className="font-italic text-muted mb-4"> TextManager respects the rights of copyright owners and supports the protection of these rights. If you have reason to believe that material on this website infringes copyright ownership, please follow our Copyright Infringement Notification Procedure.</p>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>

                </div>
            </div>

            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Our team</h2>

                        </div>
                    </div>

                    <div className="row text-center">
                        {/* <!-- Team item--> */}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Rishabh Jain </h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/jainrishabh2507/'><i className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/rishabhjain_01"} className="social-link"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a rel="noopener noreferrer" target="_blank" href={"https://www.instagram.com/rishabhjai.n/"} className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com/in/rishabh-jain-a717851a5/"} className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
