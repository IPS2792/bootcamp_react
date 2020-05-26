import React, { Component } from 'react'

import './CreditCard.css'

export default class CreditCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      pan:'',
      userName:'',
      expirationDate: '',
      cvv:''
    }
    this.handleInput =  this.handleInput.bind(this)
  }

  handleInput({target: { name, value} }) {
    this.setState({
      [name]:value
    })
  }

  render(){  
    return(
        <div className='card-form-container'>
          <div>
            <h1>Credit Card</h1>
          </div>
          <div>

          </div>
          <form className='credit-card-data'>
              <label htmlFor="">Credit Card Number</label>
              <input
                value={this.state.number}
                onChange={this.handleInput}
                placeholder={'Target number'}
                name={'number'}
                maxLength="16"
              />
              <label htmlFor="">Name </label>
              <input
                value={this.state.name}
                onChange={this.handleInput}
                placeholder={'Card name'}
                name={'name'}
              />
              <label htmlFor="">Expiration Date</label>
              <input
                value={this.state.expiry}
                onChange={this.handleInput}
                placeholder={'Mes/Año'}
                name={'expiry'}
              />
              <label htmlFor="">CVV</label>
              <input
                type="password"
                value={this.state.cvv}
                onChange={this.handleInput}
                placeholder={'CVV'}
                name={'cvv'}
                maxLength="4"
                minLength="3"
              />
          </form>

          <div className="credit-card">

            <div className="credit-card-type"></div>

            <div className="group-card">
              <span className="credit-card-label">Credit Card Number</span>
              <strong className="credit-card-number">
                {`${this.state.number.substring(0, 4)} ${this.state.number.substring(4, 8)}  ${this.state.number.substring(8, 12)}  ${this.state.number.substring(12, 16)}`}</strong>
            </div>

            <div className="group-card">
              <span className="credit-card-label">Name</span>
              <strong className="credit-card-expiration">{this.state.name} </strong>
            </div>
            
            <div className="group-card two-col">
              <div className=" middle">
                <span className="credit-card-label">Expiration Date</span>
                <strong className="credit-card-name">{this.state.expiry}</strong>
              </div>

              <div className=" middle">
                <span className="credit-card-label">CVV</span>
                <strong className="credit-card-cvv">{this.state.cvv}</strong>
              </div>
            </div>
            
          </div>

        </div>
    )
  }
}