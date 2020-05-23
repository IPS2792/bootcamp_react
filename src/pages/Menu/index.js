import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './Menu.css'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMenuActive: false
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu () {
    const { isMenuActive } = this.state
    this.setState({
      isMenuActive: !isMenuActive
    })
  }

  render () {
    const { isMenuActive } = this.state
    const menuClass = isMenuActive ? 'Menu-active' : ''
    return (
      <div>
        <div className={`Menu ${menuClass}`}>
          <h2>Menu</h2>
          <nav>
            <div>
              <ul>
                <li>
                  <Link to='/' onClick={this.handleToggleMenu}>Home</Link>
                </li>
                <li>
                  <Link to='/notes' onClick={this.handleToggleMenu}>Notas</Link>
                </li>
                <li>
                  <Link to='/currency' onClick={this.handleToggleMenu}>Divisas</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <button onClick={this.handleToggleMenu} className='Menu-button'>
              Menu
        </button>
      </div>
    )
  }
}