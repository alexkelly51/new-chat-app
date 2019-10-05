import React, { Component } from 'react'
import { Message } from './Message'
import css from './message.css'

class MessageList extends Component {

  messages = [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "createdAt":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "createdAt":"2017-09-26T23:03:21.194Z"
    }
  ]
  listOfMessages = () => {

    const listOfMessages = this.messages.map((message) => {

      return (<Message key={message.createdAt} author={message.author} content={message.content} createdAt={message.createdAt}/>)
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