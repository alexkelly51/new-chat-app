import { connect } from 'react-redux'
import { MessageForm } from './MessageForm'

const getMessages = state => state.messages

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state)
  }
}

const MessageFormContainer = connect(mapStateToProps, null)(MessageForm)

export { MessageFormContainer }