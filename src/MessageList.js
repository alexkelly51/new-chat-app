import React, { Component } from 'react'
import { Message } from './Message'
import { removeMessage } from './actions/actions'
import './message.css'

class MessageList extends Component {

  removeMessage = (messageIndex) => {
    this.props.dispatch(removeMessage(messageIndex))
  }

  listOfMessages = () => {
    const { messages } = this.props
    
    const listOfMessages = messages.map((message, index) => {

      return (<Message key={index} index={index} author={message.author} content={message.content} createdAt={message.createdAt} removeMessage={this.removeMessage}/>)
    })

    return listOfMessages
  }

  
  render() {
    return (
      <div className="messageList">
        {this.listOfMessages()}
      </div>
    )
  }
}

export { MessageList }