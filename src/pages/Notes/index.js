import React, { Component } from 'react';

// Components
import Header from '../../components/Header'

// CSS
import './Notes.css'

export default class Notes extends Component {
  render(){
    return (
      <div className='Container'>
        <div>
          <Header
            title = {'Notas'}
            description = {'Aqui aprenderemos a guardar notas'}
          />
        </div>
      </div>
    )
  }
}
