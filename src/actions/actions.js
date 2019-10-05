import { actionTypes } from './actionTypes'

export const addMessage = (message) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    value: message
  }
}

export const removeMessage = (index) => {
  return {
    type: actionTypes.REMOVE_MESSAGE,
    value: index
  }
}