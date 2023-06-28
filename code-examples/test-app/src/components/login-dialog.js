import React from "react";
import LogInForm from "./login-form";

export default class LogInDialog extends React.Component { 
    render () {
        return (
        <div className="col-sm-6 col-md-6 offset-md-3 col-lg-3 offset-lg-4">
            <div className="card">
                <div className="card-header bg-blue">
                    <h3>Log In</h3>
                </div>
                <div className="card-body">
                    <LogInForm />
                </div>  
            </div>
        </div>
    )};
}