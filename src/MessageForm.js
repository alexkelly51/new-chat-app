import React, { Component } from 'react'

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
    this.props.addMessage(this.state.userInput)
  }

  limitAddMessage = () => {
    this.props.onButtonClick(this.state.userInput)
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
        <button onClick={this.limitAddMessage}>
          Max 5 messages
        </button>
      </div>
    )
  }
}

export { MessageForm }