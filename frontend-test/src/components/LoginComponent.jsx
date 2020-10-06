import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            id: localStorage.getItem("authenticatedId") || '',
            password: '',
            token: localStorage.getItem("token") || '',
            hasLoginFailed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
        .executeJwtAuthenticationService(this.state.id, this.state.password)
        .then((response) => {
            this.setState({
                token: response.headers['jwt-auth-token']
            });
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.id,this.state.token)
            this.props.history.push('/main')
        }).catch( () =>{
            this.setState({hasLoginFailed:true})
        })
    }

    render() {
        return (
            <div>
                {/* <!-- Masthead--> */}
                <header className="masthead" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">
                                Persnal
                            <br />
                                Training
                            <br />
                                Service
                    </h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Login</h2>
                        <input
                            value={this.state.id}
                            onChange={this.handleChange}
                            type="text"
                            name="id"
                            placeholder="ID"
                        />
                        <input
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    </div>
                </div>
                </header>
            </div>
        )
    }
}

export default LoginComponent