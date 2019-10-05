import React, { Component } from 'react'
import moment from 'moment';
import PropTypes from 'prop-types'
import './message.css'

class Message extends Component {

  static propTypes = {
    createdAt: PropTypes.string
  }

  time = () => {
    const { createdAt } = this.props
    
    return moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')
  }

  removeMessage = () => {
    let messageIndex = this.props.index
    return this.props.removeMessage(messageIndex)
  }
  
  render() {
    return (
      <div className="message" onClick={this.removeMessage}>
        <div className="author">{this.props.author}</div>
        <div className="content">{this.props.content}</div>
        <div className="created">{this.time()}</div>
      </div>
    )
  }
}

export { Message }