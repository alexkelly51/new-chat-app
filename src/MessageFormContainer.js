import { connect } from 'react-redux'
import { MessageForm } from './MessageForm'
import { messageAdd } from './actions/actionCreators'
import { addMessage } from './actions/actions'

const getMessages = state => state.messages

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state)
  }
}

const mapDispatchToProps = {
    onButtonClick: messageAdd, //Calls action creator with business logic
    addMessage // Calls standard action with no logic
}

const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm)

export { MessageFormContainer }