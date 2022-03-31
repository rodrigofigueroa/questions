import { useState }         from "react"
import axios                from 'axios'
import { ButtonTypeEventT } from "../../interfaces"
import { toast } from "react-toastify"

const FormQuestions = () => {
  const [ userQuestion, setUserQuestion ] = useState<string>( '' )
  const sendQuestion = async ( e: ButtonTypeEventT ) => {
    e.preventDefault()
    // console.table({ userQuestion })
    try {
      const resp = await axios.post( `${ process.env.REACT_APP_API }/register-question`, { userQuestion } )
      console.log('Registred ==>', resp )
      toast.success( '¡Gracias Tu pregunta fue guardada!' )
    } catch( err: any  ) {
      console.error( err )
      toast.error( err.response.data )
    }
    setUserQuestion( '' )
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 py-5">
            <form action="">
              <div className="mb-3">
                <label htmlFor="userQuestion" className="form-label text-white fs-4">
                  ¡Ingresa la pregunta que quieras con signos de interrogación!
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userQuestion"
                  aria-describedby="insert questions"
                  placeholder="Ingresa cualquier pregunta"
                  onChange={e => setUserQuestion( e.target.value )}
                  value={ userQuestion }
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary btn-lg" disabled={ !userQuestion } onClick={ sendQuestion }>
                  Enviar la pregunta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormQuestions