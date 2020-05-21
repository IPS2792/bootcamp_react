import React from 'react';

// Components
import Header from '../../components/Header'

// CSS
import './Home.css'

 function Home() {
  return (
    <div className='Container'>
      <div>
        <Header
          title = {'Kodemia modulo 3'}
          description = {'Aqui aprenderemos React'}
        />
      </div>
    </div>
  )
}

export default Home