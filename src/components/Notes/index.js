import React, { Component } from 'react';
import Note from './components/Note'
import './Notes.css'

export default class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            newNote: {}
        };
    }
    handleChange = (event) => {
        console.log(event.target.value, from)
        newNote = {
            'titulo',
        }
    }
    addNote = () => {
        this.setState({

        })
    }
    render(){
        return(
            <div>
                <div className='notes'>
                    <p><strong>Nota 1</strong></p>
                    <p><strong>Nota 2</strong></p>
                </div>
                <div>
                    <input onChange={event => this.handleChange(event, 'title')} placeholder={"Titulo"}/>
                    <input onChange={event => this.handleChange(event, 'content')} placeholder={"Content"}/>
                    <button onClick={this.addNote}>ADD!</button>
                </div>
            </div>
        )
    }
}