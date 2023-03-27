import { actionI } from "../interfaces"

let initialValue = {
  log: {}
}

if( window.localStorage.getItem( 'auth' ) ){
  initialValue = { ...JSON.parse( ( window.localStorage.getItem( 'auth' ) as string )  )}
} else {  
  initialValue.log = {}
}

export const reducerFirst = ( state = initialValue, action: actionI ) => {
  switch( action.type ){
    case 'LOGGED_IN_USER':
    return { ...state, log: { ...action.payload }}
    case 'LOG_OUT_USER':
      return { ...state, log: { ...action.payload }}
    case 'PLAYERS_TO_PLAY':
    return { ...state, players: [ ...action.payload ]}
    case 'SECTION_QUESTIONS':
    return { ...state, sectionQ: { ...action.payload }}
    default:
      return state
  }
}