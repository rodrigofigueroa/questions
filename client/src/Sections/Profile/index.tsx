import { useState } from "react"
import Logging      from "./Logging"
import Registered   from "./Registered"


const Profile = () => {  
  const [ logReg, setLogReg ] = useState<boolean>( true )
  return (
    <>
      <div className="container pt-5">
        <div className="row d-md-flex justify-content-center">
          <div className="col-12 col-md-6">
            { logReg ? <Registered /> : <Logging /> }
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <button
              className="btn btn-primary btn-lg"
              onClick={ () => {
                setLogReg( !logReg )
              }}
            >
              { logReg
                ? "Da click para logguearte"
                : "No tienes cuenta da click" }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile