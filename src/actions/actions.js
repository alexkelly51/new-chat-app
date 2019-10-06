import { actionTypes } from './actionTypes'

export const addMessage = (message) => {
  let defaultMessage = 'blank'
  let newMessage = !message ? defaultMessage : message
  return {
    type: actionTypes.ADD_MESSAGE,
    content: newMessage, 
    author: 'alex', 
    createdAt: Date.now()
  }
}

export const removeMessage = (index) => {
  return {
    type: actionTypes.REMOVE_MESSAGE,
    value: index
  }
}