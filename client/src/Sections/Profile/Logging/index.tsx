import { useState }             from "react"
import { connect }              from 'react-redux'
import { log_user }             from "../../../auth/auth"
import { toast }                from "react-toastify"
import { FormTypeEventT, logI } from "../../../interfaces"


const Logging = ( { log_in }: logI ) => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const sendLogUser = async ( e: FormTypeEventT ) => {
    e.preventDefault()
    console.log( e )
    try {
      let resp = await log_user({ userEmail, userPassword })
      if( resp.data ){

        console.log('Logging USER ===> ', resp )
        // Save on the LocalStorage
        window.localStorage.setItem( 'auth', JSON.stringify( resp.data ) )
        // Save on the REDUX state
        console.log( resp.data )
        log_in( resp.data  )
        toast.success( 'You are now logged!' )
      }
    } catch ( err: any ) {
      console.error( err )
      if( err.response.status === 400 ) return toast.error( err.response.data )
    }
  }
  return (
    <>
      <form action="" onSubmit={sendLogUser}>
        <div className="form-group mt-4">
          <label htmlFor="userEmail" className="form-label text-white fs-4">
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="userPassword" className="form-label text-white fs-4">
            Password
          </label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
        </div>
        <div className="mt-4 d-flex justify-content-center ">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={!userEmail || !userPassword}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}
const mapDispatchToProps = ( dispatch: any ) => {
  return {
    log_in: ( payload: any ) => dispatch({ type: 'LOGGED_IN_USER', payload })
  }
}
export default connect( null, mapDispatchToProps )( Logging )