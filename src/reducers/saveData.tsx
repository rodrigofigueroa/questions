import { actionI } from "../interfaces"

const initialValue = {}

export const reducerFirst = ( state = initialValue, action: actionI ) => {
  switch( action.type ){
    case 'LOGGED_IN_USER':
    return { ...state, ...action.payload }
    case 'PLAYERS_TO_PLAY':
    return { ...state, players: [ ...action.payload ]}
    default:
      return state
  }
}