import React from "react";
import LoginButton from "./login-button";
import CancelButton from "./cancel-button";

export default class LogInForm extends React.Component { 
    render() { 
        return (
        <div className="row">
            <div className="col-sm">
                <div className="form">
                    <div className="mb-3 row">
                        <div className="form-group">
                            <label 
                                className="form-label"
                                for="user">
                                    User Name
                            </label>
                            <input 
                                className="form-control" 
                                type="text"
                                id="user"
                                placeholder="User Name" />
                        </div>
                        <div className="form-group">
                            <label 
                                className="form-label"
                                for="password">
                                    Password
                            </label>
                            <input 
                                className="form-control" 
                                type="password"
                                id="password"
                                placeholder="Password" />
                        </div>
                    </div>
                    <LoginButton />
                </div>
            </div>
        </div>
        );
    }
}