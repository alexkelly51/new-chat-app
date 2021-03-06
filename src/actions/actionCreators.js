import { addMessage, removeMessage } from './actions'

//these are super basic and not useful now - but we will build these out maybe in future as proper action creators
// we know these are the action creators as they have dispatches in them

//the 'dispatch' function is the reserved word to tell the reducers to have a listen 

// For example in here we could add logic to say - getState() and only can add more messages if there are less than 10 in here
export const messageAdd = (message) => (
  (dispatch, getState) => {
    const numberOfMessages = getState().messages.length

    if(numberOfMessages < 5) {
      dispatch(addMessage(message))
    }
  }
)

export const messageRemove = (index) => (
  (dispatch) => {
    dispatch(removeMessage(index))
  }
)
