import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.addCounter(), 1000
        )
    }
    componentDidUpdate(){
        const { counter } = this.state
        if(counter % 8 === 0){
            console.log('Msg from componentDidUpdate')
        }
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    addCounter(){
        let { counter } = this.state
        this.setState({
            // Usar "counter: this.state.counter+=1" es una mala practica, se deben gestionar las modificaciones
            // de estado en otra variable cuyo resultado sea referenciado al estado como se muestra a continuacion:
            counter: counter+=1  
        })
        if(this.state.counter === 20){
            this.componentWillUnmount()
        }
    }
    render(){
        return(
            <div className='Card-clock'>
               <h1>Contador: {this.state.counter}</h1> 
            </div>
        )
    }
}