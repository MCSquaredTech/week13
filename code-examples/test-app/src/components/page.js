import React from "react";
import LogInDialog from "./login-dialog";

import NavBar from "./nav-bar";

export default class Page extends React.Component { 
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <NavBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <LogInDialog />    
                    </div> 
                </div>
            </div>
    )};

}