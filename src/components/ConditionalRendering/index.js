import React, { Component } from "react";

// Css
import "./ConditionalRendering.css";

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickHappened: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }
    handleClick() {
      this.setState({
          clickHappened: true
      });
    }
    handleOtherClick() {
      this.setState({
          clickHappened: false
      });
    }
    render() {
        const { clickHappened } = this.state
        let button;
        let squareRender;
        if (clickHappened) {
          button = <button onClick={this.handleOtherClick}>Click me!</button>
          squareRender = <div className='square-form'><p>Test</p></div>
        } else {
          button = <button onClick={this.handleClick}>Click me!</button>
          squareRender = null  
        }    
        return ( 
        <div className="form-container">
            <h1>Conditional Rendering</h1>
            {button}
            {squareRender}
        </div>
        )
    }
}
