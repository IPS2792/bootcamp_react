import React, { Component } from "react";

// External Packages
import { Redirect } from "react-router-dom";

// Components

// Services
import { LogIn as LogInService } from "../../services";

// CSS
import "./Login.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleServiceResponse = this.handleServiceResponse.bind(this)
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleServiceResponse(response) {
    if (response.success) {
      localStorage.setItem('authTokenUser', response.data.token)
      this.setState({
        success: true
      })
    }
    console.log(response.error)
  } 

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    LogInService(data, this.handleServiceResponse)
  }

  render() {
    const { email, password, success } = this.state;
    return (
      <div className="wrapper fadeInDown">
        {success ? console.log('Exito') : null }
        <div id="formContent">
          <p>Welcome back.</p>
          <p>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
          <form onSubmit={this.handleSubmit}>
              <input
                type={"email"}
                value={email}
                onChange={this.handleInput}
                name={"email"}
                placeholder={"Email"}
              />
              <input
                type={"password"}
                value={password}
                onChange={this.handleInput}
                name={"password"}
                placeholder={"Password"}
              />
              <button type="submit">Log In</button>
            </form>
          <div id="formFooter">
            <p>To make Medium work, we log user data and share it with service providers.</p>
            <p>Click “Log In” above to accept Medium’s 
              <a className="underlineHover" href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f">Terms of Service</a> & <a className="underlineHover" href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9">Privacy Policy</a>
              .</p>
          </div>
        </div>
      </div>
    )
  }
}
