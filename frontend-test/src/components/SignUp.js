import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import "../static/css/signup.css";

class registerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            password: '',
            confirmpassword: '',
            name: '',
            idPlaceholder : 'ID',
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
                disabled: (this.state.id !== '') &&
                    (this.state.password !== '') && (this.state.password.length >= 6)
                    && (this.state.name.length >= 2),
                idPlaceholder : (this.state.idPlaceholder === 'ID 중복')?'ID':this.state.idPlaceholder
            }
        )
    }

    registerClicked() {
        AuthenticationService.duplicateCheck(this.state.id)
        .then((response) => {
            console.log("중복 : ", response)
            this.setState({
                id : '',
                idPlaceholder : 'ID 중복'
            })
        }).catch((e) => {
            console.log("중복아님 : ", e)
            AuthenticationService
                .executeRegisterService(this.state.id, this.state.password, this.state.name)
            this.props.history.push('/signup2')
        })
    }

    render() {
        return (
            <div>
                {/* <!-- Masthead--> */}
                <header className="masthead" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">회원가입</h2>
                            <input
                                className="inputButtonRegister"
                                value={this.state.id}
                                onChange={this.handleChange}
                                type="text"
                                name="id"
                                placeholder={this.state.idPlaceholder}
                            />
                            <input
                                value={this.state.password}
                                className="inputButtonRegister"
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                placeholder="비밀번호(6자이상)"
                            />
                            <input
                                value={this.state.name}
                                className="inputButtonRegister"
                                onChange={this.handleChange}
                                type="name"
                                name="name"
                                placeholder="이름(2자이상)"
                            />
                            <button disabled={!this.state.disabled} className="nextButton" onClick={this.registerClicked}>다음</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default registerComponent