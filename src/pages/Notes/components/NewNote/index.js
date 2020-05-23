import React, {Component} from "react";

// CSS
import './NewNote.css'

export default class NewNote extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleAddNote (event) {
    event.preventDefault()
    const { title, content } = this.state
    const note = {
      title,
      content
    }
    this.props.handleNewNote(note);
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    return (
      <div className='Container'>
        <form onSubmit={this.handleAddNote}>
          <div className='Notes-form-content'>
            <div className='Notes-inputs-content'>
              <input
                value={this.state.title}
                onChange={this.handleInput}
                placeholder={'Titulo de la Nota'}
                name={'title'}
              />
              <input
                value={this.state.content}
                onChange={this.handleInput}
                placeholder={'Contenido de la Nota'}
                name={'content'}
              />
            </div>
            <button type='submit'>Add</button>
          </div>
        </form>
      </div>
    )
  }
}


//function Note({ title, content }) {
//  return (
//    <li className="note">
//        <p><strong>{title}</strong></p>
//        <p>{content}</p>
//    </li>
//  )
//}
//
//export default Note
