import React, { useEffect, useState }  from "react"
import Button               from "../../components/Button"
import H2                   from "../../components/H2"
import { playersObjectI }   from "../../interfaces"


const FormSection = () => {
  const [ playersState, setPlayersState ] = useState<playersObjectI[]>([])
  const [ playersNumber, setPlayersNumber ] = useState( 0 )

  useEffect(() => {
    setPlayersNumber(  playersState.length )
  }, [ playersState ] )

  const addPlayer = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    let addingArray = [ ...playersState, { playerName: '', playerNumber: playersState.length + 1 }]
    setPlayersState( addingArray )
  }
  const deletePlayers = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    let addingArray = [ ...playersState ]
    addingArray.pop()
    setPlayersState( addingArray )
  }
  const stepToChooseName = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    console.log( e )
  }
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12">
            <section className="d-flex flex-column flex-wrap justify-content-center align-items-center">
              <H2 className="">Da click en el botón para agregar jugadores</H2>
              <div className="d-flex mt-3">
                <Button className="btn btn-light mx-4" onClick={ addPlayer }>Agrega Jugadores +</Button>
                <H2>
                  { playersNumber } { playersNumber > 1 ? 'Jugadores' : 'Jugador' }
                </H2>
                <Button className="btn btn-danger mx-4" onClick={ deletePlayers }>Elimina Jugadores -</Button>
              </div>
            </section>
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            {
              playersNumber >= 2
              ? 
              <>
                <H2 className="mt-5">Tienes { playersNumber } Jugadores da click en aceptar para elegir Nombres</H2>
                <Button className="btn btn-success mt-4" onClick={ stepToChooseName }>Aceptar</Button>
              </>
              : ''
            }
          </div>
          <div className="col-12">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSection