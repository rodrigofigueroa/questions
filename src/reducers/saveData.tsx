const initialValue = {}

interface actionI {
  type: string,
  payload: any
}

export const reducerFirst = ( state = initialValue, action: actionI ) => {
  switch( action.type ){
    case 'LOGGED_IN_USER':
    return { ...state, ...action.payload }
    default:
      return state
  }
}