import React from "react";
import NavLogo from "./nav-logo";
import NavMenu from "./nav-menu";

export default class NavBar extends React.Component { 
    render() { 
        return (
            <div>
                <NavLogo />
                <NavMenu />
            </div>
        )
    }
}