import React, { Component } from 'react';
// function Clock() {
//   return (
//     <div>
//       <h1>Hola, la hora es {new Date().toLocaleTimeString()}.</h1>
//     </div>
//   )
// }

// export default Clock

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }
    render(){
        return (
            <div className='Card-clock'>
              <h1>Hola, la hora es {this.state.time}.</h1>
            </div>
          )
    }
}