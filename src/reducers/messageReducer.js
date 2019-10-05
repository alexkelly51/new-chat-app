import { actionTypes } from '../actions/actionTypes'

const initialState = {
  messages: [
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
  ],
  chickens: 'chickens'
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            content: action.value,
            completed: false
          }
        ]
      })

    case "REMOVE_MESSAGE":
      return Object.assign({}, state, {
        messages: [
          ...state.messages.slice(0, action.value),
          ...state.messages.slice(action.value + 1, state.messages.length)
        ]
      })

    default: 
      return state
  }
}

export { messageReducer }