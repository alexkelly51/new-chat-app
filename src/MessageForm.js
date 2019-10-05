import React, { Component } from 'react'
import { messageAdd } from './actions/actionCreators'
import { addMessage } from './actions/actions'

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  addMessage = () => {
    console.log('here', this.state.userInput)
    messageAdd(this.state.userInput)
    // this.props.dispatch(addMessage(this.state.userInput)) 
  }

  render() {
    return(
      <div>
        <input
          type="text"
          name="message"
          onChange={e => {
            return this.handleChange(e)
          }}
        />
        <button onClick={this.addMessage}>
          Send
        </button>
      </div>
    )
  }
}

export { MessageForm }