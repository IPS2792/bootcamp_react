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
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    addCounter(){
        this.setState({
            counter: this.state.counter+=1  
        })
        if(this.state.counter % 8 === 0){
            console.log(this.state.counter)
        }
        if(this.state.counter === 20){
            this.componentWillUnmount()
        }
    }
    render(){
        return null
    }
}