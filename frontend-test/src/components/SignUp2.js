import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import "../static/css/signup.css";

class registerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height : '',
            weight : '',
            gender : true,
            birthYear : '',
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
                disabled : (this.state.height !== '') && ((parseInt(this.state.height)>140) && (parseInt(this.state.height)<210)) &&
                    (this.state.weight !== '') && ((parseInt(this.state.weight)>40) && (parseInt(this.state.weight)<160))
                    && (this.state.birthYear !== '')
            }
        )
    }

    registerClicked() {
        AuthenticationService
            .executeRegisterService2(this.state.height, this.state.weight, this.state.birthYear, this.state.gender)
            .then((response) => {
                this.props.history.push('/servey')
            }).catch(() => {
                this.setState({ hasRegisterFailed: true })
            })
    }

    render() {
        return (
            <div>
                {/* <!-- Masthead--> */}
                <header className="masthead" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">프로필추가</h2>
                                <input
                                    className="inputButtonRegister"
                                    value={this.state.height}
                                    onChange={this.handleChange}
                                    type="text"
                                    name="height"
                                    placeholder="키"
                                />
                                <input
                                    className="inputButtonRegister"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                    type="text"
                                    name="weight"
                                    placeholder="몸무게"
                                />
                                <input
                                    className="inputButtonRegister"
                                    value={this.state.birthYear}
                                    onChange={this.handleChange}
                                    type="name"
                                    name="birthYear"
                                    placeholder="생년"
                                    />
                                <select className="inputButtonRegister" value={this.state.gender} onChange={this.handleChange} name="gender">
                                    <option value={true}>남자</option>
                                    <option value={false}>여자</option>
                                </select>
                            <button disabled={!this.state.disabled} className="nextButton" onClick={this.registerClicked}>다음</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default registerComponent