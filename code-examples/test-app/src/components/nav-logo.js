import React from "react";
import Logo from "./logo";
import NavBar from "./nav-menu";

const logo = '../../image/react-logo.png'; 

export default class NavLogo extends React.Component { 
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://reactjs.org/logo-og.png" alt="" width="160" height="100" className="d-inline-block align-text-between" />
                        React Project - Week 13 Log In Screen with Menu
                    </a>
                </div>
            </nav>
        );
    }

}