import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import "../static/css/servey.css";
class registerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            like: '',
            goal: '',
            dislike: '',
            is_solo: true,
            is_active: true,
            hasRegisterFailed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.serveyClicked = this.serveyClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    :event.target.value,
            }
        )
    }

    serveyClicked() {
        console.log("버튼 클릭")
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
                            <input
                                className="inputButtonServey"
                                type="text"
                                disabled
                                placeholder="1. 가장 관심있는 운동을 선택해주세요"
                            />
                            <select className="inputButtonServey" 
                            value={this.state.like} onChange={this.handleChange} name="like">
                                    <option value=""></option>
                                    <option value="헬스">헬스</option>
                                    <option value="필라테스">필라테스</option>
                                    <option value="요가">요가</option>
                                    <option value="에어로빅">에어로빅</option>
                                    <option value="줌바">줌바</option>
                                    <option value="크로스핏">크로스핏</option>
                                    <option value="TRX">TRX</option>
                                    <option value="스피닝">스피닝</option>
                                    <option value="댄스스포츠">댄스스포츠</option>
                                    <option value="복싱">복싱</option>
                            </select>
                            <input
                                className="inputButtonServey"
                                type="text"
                                disabled
                                placeholder="2. 가장 하기 싫어하는 운동을 선택해주세요"
                            />
                            <select className="inputButtonServey" 
                            value={this.state.dislike} onChange={this.handleChange} name="dislike">
                                    <option value=""></option>
                                    <option value="헬스">헬스</option>
                                    <option value="필라테스">필라테스</option>
                                    <option value="요가">요가</option>
                                    <option value="에어로빅">에어로빅</option>
                                    <option value="줌바">줌바</option>
                                    <option value="크로스핏">크로스핏</option>
                                    <option value="TRX">TRX</option>
                                    <option value="스피닝">스피닝</option>
                                    <option value="댄스스포츠">댄스스포츠</option>
                                    <option value="복싱">복싱</option>
                            </select>
                            <input
                                className="inputButtonServey"
                                type="text"
                                disabled
                                placeholder="3. 당신의 운동 목표를 알려주세요"
                            />
                            <select className="inputButtonServey" 
                            value={this.state.goal} onChange={this.handleChange} name="goal">
                                    <option value=""></option>
                                    <option value="다이어트">다이어트</option>
                                    <option value="벌크업">벌크업</option>
                                    <option value="건강">건강</option>
                                    <option value="체력증진">체력증진</option>
                                    <option value="재활">재활</option>
                                    <option value="체형교정">체형교정</option>
                            </select>
                            <div className="radioDiv">
                                <input type="radio" name="is_solo"
                                    value={true}
                                    onChange={this.handleChange} />개인 운동 선호
                                    <input type="radio" name="is_solo"
                                    value={false}
                                    onChange={this.handleChange} />단체 운동 선호
                            </div>
                            <div className="radioDiv">
                                <input type="radio" name="is_active"
                                    value={true}
                                    onChange={this.handleChange} />동적인 운동 선호
                                <input type="radio" name="is_active"
                                    value={false}
                                    onChange={this.handleChange} />정적인 운동 선호
                            </div>
                            <button className="nextButtonServey" onClick={this.serveyClicked}>다음</button>
                        </div>
                    </div>
                </header>
            </div >
        )
    }
}

export default registerComponent
