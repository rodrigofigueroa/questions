import React, { useState }  from "react"
import { toast }            from "react-toastify"
import { register_user }    from "../../auth/auth"
import { FormTypeEventT }   from "../../interfaces"

const Profile = ( ) => {
  const [ userName, setUserName ]         = useState( '' )
  const [ userEmail, setUserEmail ]       = useState( '' )
  const [ userPassword, setUserPassword ] = useState( '' )

  const sendRegisteredUser = async ( e: FormTypeEventT ) => {
    e.preventDefault()
    console.log( e )
    console.table({ userName, userEmail, userPassword, })
    try {
      let resp = await register_user( { userName, userEmail, userPassword, } ) 
      console.log( 'THE USER was created!' , resp )
      toast.success( 'The user was created successfully' )
    } catch ( err: any ) {
      console.log('There was an error ', err )
      toast.error( err.response.data )
    }
  }

  return (
    <>
      <div className="container pt-5">
        <div className="row d-md-flex justify-content-center">
          <div className="col-12 col-md-6">
            <form action="" onSubmit={sendRegisteredUser}>
              <div className="form-group mt-4">
                <label
                  htmlFor="userName"
                  className="form-label text-white fs-4"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="form-control"
                  placeholder="Nombre"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>
              <div className="form-group mt-4">
                <label
                  htmlFor="userEmail"
                  className="form-label text-white fs-4"
                >
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
                <label
                  htmlFor="userPassword"
                  className="form-label text-white fs-4"
                >
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
                  disabled={!userName || !userEmail || !userPassword}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile