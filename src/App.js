import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//Components
import Clock from './components/Clock/Clock'
//import Card from './components/Card/Card';
import Counter from './components/Counter/Counter'
import Button from './components/Button/index'
import Notes from './components/Notes/index'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;

export default class App extends Component {
  render(){
    //Aqui se puede ejecutar codigo de JS
    const data = [
      {
        category: 'Elemental',
        title: 'How Sunlight, the Immune System, and Covid-19 Interact',
        description: 'For thousands of years, humans have recognized that the sun plays a role in the emergence and transmission of viruses',
        author: 'Markham Heid',
        publicationDate: 'May 13',
        readTime: '10 min read'
      },
      {
        category: 'Eudaimonia and Co',
        title: 'How Freedom Became Free-dumb in America',
        description: 'Why the World is Horrified by the American Idiot',
        author: 'umair haque',
        publicationDate: 'May 5',
        readTime: '9 min read'
      }
    ]
    const divItems = data.map((element) => 
      <div className='Card'>
        <div className='Card-content'>
          <p><strong>{element.title}</strong></p>
          <p>{element.description}</p>
          <p><strong>{element.author} in {element.category}</strong></p>
          <p>{element.publicationDate} * {element.readTime}</p>
        </div>
        <div className='Card-image'>
          <figure>
              <img alt='card-p' src={'https://picsum.photos/200/300'} />
          </figure>
        </div>
      </div>
    )
    return (
      <div className="App">
        <header>
          <Clock/>
          <Counter step={2}/>
          <Button />
          <Notes />
        </header>
        <div>
          { divItems }
        </div>
      </div>
    );
  }
}
