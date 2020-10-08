import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class RegisteredRoute extends Component {    
    render() {
        if(AuthenticationService.isRegistering()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/"/>
        }

    }
}

export default RegisteredRoute