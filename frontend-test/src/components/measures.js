import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class registerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sitUp: "",
      pushUp: "",
      squat: "",
      runningJump: "",
      standingJump: "",
      twistSitUp: "",
      hasRegisterFailed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.MesureClicked = this.MesureClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      disabled:
        this.state.sitUp !== "" &&
        this.state.pushUp !== "" &&
        this.state.squat !== "" &&
        this.state.runningJump !== "" &&
        this.state.standingJump !== "" &&
        this.state.twistSitUp !== "",
    });
  }

  MesureClicked() {
    AuthenticationService.executeMesureService(
      this.state.sitUp,
      this.state.pushUp,
      this.state.squat,
      this.state.runningJump,
      this.state.standingJump,
      this.state.twistSitUp
    )
      .then((response) => {
        AuthenticationService.SuccessRegister();
        this.props.history.push("/login");
      })
      .catch((e) => {
        console.log(e);
        this.setState({ hasRegisterFailed: true });
      });
  }

  render() {
    return (
      <div>
        {/* <!-- Masthead--> */}
        <header className="masthead" id="page-top">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                개인 체력 측정
              </h2>
              <div>
                <input
                  value={this.state.sitUp}
                  onChange={this.handleChange}
                  type="text"
                  name="sitUp"
                  placeholder="윗몸일으키기"
                />
              </div>
              <div>
                <input
                  value={this.state.pushUp}
                  onChange={this.handleChange}
                  type="text"
                  name="pushUp"
                  placeholder="팔굽혀펴기"
                />
              </div>
              <div>
                <input
                  value={this.state.squat}
                  onChange={this.handleChange}
                  type="text"
                  name="squat"
                  placeholder="스쿼트"
                />
              </div>
              <div>
                <input
                  value={this.state.runningJump}
                  onChange={this.handleChange}
                  type="text"
                  name="runningJump"
                  placeholder="제자리뛰기"
                />
              </div>
              <div>
                <input
                  value={this.state.standingJump}
                  onChange={this.handleChange}
                  type="text"
                  name="standingJump"
                  placeholder="연속뛰기"
                />
              </div>
              <div>
                <input
                  value={this.state.twistSitUp}
                  onChange={this.handleChange}
                  type="text"
                  name="twistSitUp"
                  placeholder="윗몸비틀어일으키기"
                />
              </div>
              <button
                disabled={!this.state.disabled}
                className="btn button_wide"
                onClick={this.MesureClicked}
              >
                회원가입 완료
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default registerComponent;
