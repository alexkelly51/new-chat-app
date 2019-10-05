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
        <button>
          Send
        </button>
      </div>
    )
  }
}

export { MessageForm }