import React from 'react';
import DarkMode from './DarkMode';

function Navbar(props) {


    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid" >
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`${props.mode === 'dark' ? 'nav-link nav-lik' : 'nav-link'}`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <div>
                                <a className={`${props.mode === 'dark' ? 'nav-link nav-lik' : 'nav-link'}`} href="#">About</a>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item">
                            <DarkMode mode={props.mode} changeColors={props.changeColors} toggleMode={props.toggleMode} />
                        </div>

                    </ul>
                </div>

                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${(props.mode === 'light') ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {(props.mode === 'light') ? 'Dark' : 'Light'} Mode</label>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;

