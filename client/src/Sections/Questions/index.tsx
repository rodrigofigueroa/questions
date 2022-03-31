import H2             from "../../components/H2"
import { questions }  from "../FormSection/gameFunctions"

const Questions = () => {
  const li = () => {
    return questions.map( ( i ) => {
      return <li className="list-group-item list-group-item-action" key={ i + 'question' }>{ i }</li>
    })
  }
  return (
    <>
      <div className="container">
        <div className="col-12">
          <H2 className="my-4">Las Preguntas que hay</H2>
          <ul className="list-group">{ li() }</ul>
        </div>
      </div>
    </>
  )
}

export default Questions