import React from "react";
import LogInDialog from "./login-dialog";

export default class Page extends React.Component { 
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1> Menu goes here! </h1>
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