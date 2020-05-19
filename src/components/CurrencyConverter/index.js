import React, { Component } from "react";

// Css
import "./CurrencyConverter.css";

export default class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.handleInputAmount = this.handleInputAmount.bind(this);
  }

  handleInputAmount(event) {
    console.log(event.target.value);
    this.setState({
        amount: event.target.value,
    });
  }

  render() {
    const { amount } = this.state
    let currencyConverted  = 0
    let msgCurrencyConverter = ''
    if(amount !== 0){
        const usdCurrencyValue = 23.67
        currencyConverted = amount / usdCurrencyValue
        msgCurrencyConverter = `La cantidad ${amount} MXN a USD son ${currencyConverted}`
    }
    return (
      <div className="form-container">
        <h1>Conversor de divisas MXN / USD</h1>
        <form>
          <input
            value={amount}
            onChange={this.handleInputAmount}
            placeholder={"Cantidad"}
          />
        </form>
        <p>{msgCurrencyConverter}</p>
      </div>
    );
  }
}
