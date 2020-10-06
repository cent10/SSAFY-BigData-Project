import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import * as Survey from "survey-react";
import "survey-react/survey.css";
let json1 = {
    questions: [
      {
        type: "checkbox",
        name: "exercise",
        title: "관심있는 운동을 모두 골라주세요",
        isRequired: true,
        hasNone: true,
        noneText: "해당없음",
        colCount: 4,
        choicesOrder: "asc",
        choices: [
          "헬스",
          "필라테스",
          "요가",
          "에어로빅",
          "줌바",
          "크로스핏",
          "TRX",
          "스피닝",
          "댄스스포츠",
          "복싱"
        ]
      }
    ]
  };
  var surveyRender = <Survey.Survey json={json1} />;
class registerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            like : '',
            goal : '',
            dislike : '',
            is_solo : true,
            is_active : true,
            hasRegisterFailed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.serveyClicked = this.serveyClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value,
                disabled : (this.state.like !== '') && (this.state.goal !== '') && (this.state.dislike !== '')
            }
        )
    }

    serveyClicked() {
        AuthenticationService
            .executeServeyService(this.state.like, this.state.goal, this.state.dislike, this.state.is_solo, this.state.is_active)
            .then((response) => {
                this.props.history.push('/measures')
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
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">설문조사</h2>
                            <div>
                                {/* {surveyRender} */}
                                <input
                                    value={this.state.like}
                                    onChange={this.handleChange}
                                    type="text"
                                    name="like"
                                    placeholder="좋아하는 운동"
                                />
                            </div>
                            <div>
                                <input
                                    value={this.state.dislike}
                                    onChange={this.handleChange}
                                    type="text"
                                    name="dislike"
                                    placeholder="싫어하는 운동"
                                />
                            </div>
                            <div>
                                <input
                                    value={this.state.goal}
                                    onChange={this.handleChange}
                                    type="text"
                                    name="goal"
                                    placeholder="운동 목표"
                                />
                            </div>
                            <div>
                                <input type="radio" name="is_solo" 
                                   value={true} 
                                   onChange={this.handleChange} />개인 운동 선호
                                <input type="radio" name="is_solo" 
                                   value={false} 
                                   onChange={this.handleChange} />단체 운동 선호
                            </div>
                            <div>
                                <input type="radio" name="is_active" 
                                   value={true} 
                                   onChange={this.handleChange} />동적인 운동 선호
                                <input type="radio" name="is_active" 
                                   value={false} 
                                   onChange={this.handleChange} />정적인 운동 선호
                            </div>
                            <button disabled={!this.state.disabled} className="btn button_wide" onClick={this.serveyClicked}>다음</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default registerComponent