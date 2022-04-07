import axios from 'axios'


export const register_question = async ( userQuestion: string ) => {
  return await axios.post( `${ process.env.REACT_APP_API }/register-question`, { userQuestion } )
}

export const register_user = async ( user: Object ) => {
  return await axios.post( `${ process.env.REACT_APP_API }/register-user`, user )
}

export const log_user = async ( user_data: Object ) => {
  return await axios.post( `${ process.env.REACT_APP_API }/log`, user_data )
}