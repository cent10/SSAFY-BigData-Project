import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class registerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            password: '',
            confirmpassword: '',
            name: '',
            disabled: false,
            hasRegisterFailed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.registerClicked = this.registerClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value,
                disabled : (this.state.id !== '') && 
                    (this.state.password !== '') && (this.state.password.length >= 6)
                    && (this.state.name.length >= 2)
            }
        )
        
    }

    registerClicked() {
        AuthenticationService
            .executeRegisterService(this.state.id, this.state.password, this.state.name)
        this.props.history.push('/signup2')
    }

    render() {
        return (
            <div>
                {/* <!-- Masthead--> */}
                <header className="masthead" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">회원가입</h2>
                            <div>
                                <input
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    type="text"
                                    name="id"
                                    placeholder="ID"
                                />
                            </div>
                            <div>
                                <input
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호(6자이상)"
                                />
                            </div>
                            <div>
                                <input
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    type="name"
                                    name="name"
                                    placeholder="이름(2자이상)"
                                />
                            </div>
                            <button disabled={!this.state.disabled} className="btn button_wide" onClick={this.registerClicked}>register</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default registerComponent