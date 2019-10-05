import { connect } from 'react-redux'
import { MessageList } from './MessageList'

function mapStateToProps(state) {
    
  return {
    messages: state.messages
  }
}

const MessageListContainer = connect(mapStateToProps, null)(MessageList)

export { MessageListContainer }