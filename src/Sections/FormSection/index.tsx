import React, { useEffect, useRef, useState }     from "react"
import { connect }                        from 'react-redux'
import { toast }                          from "react-toastify"
import Button                             from "../../components/Button"
import H2                                 from "../../components/H2"
import { playersObjectI, playersReduxI }  from "../../interfaces"


const FormSection = ( { savePlayers }: playersReduxI ) => {
  const [ playersState, setPlayersState ]   = useState<playersObjectI[]>([])
  const [ playersNumber, setPlayersNumber ] = useState( 0 )
  const [ inputElm, setInputElm ]           = useState<JSX.Element[]>([])
  const [ flags, setFlags ]                 = useState({ sec_1: true, sec_2: true, sec_3: true, })
  const [ btnDis, setBtnDis ]               = useState( true )
  const form = useRef<HTMLFormElement>( null )
  useEffect(() => {
    setPlayersNumber(  playersState.length )
  }, [ playersState, inputElm ] )

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
    const changeToReact = playersState.map( ( itm, idx ) => {
      const { playerNumber } = itm 
      
      return (
        <div className="form-group mt-3 w-100" key={`player_${playerNumber}`}>
          <label htmlFor={`player_${playerNumber}`} className="text-secondary mb-2">Player Number { playerNumber } </label>
          <input
            type="text"
            placeholder={`Player name ${ playerNumber }`}
            className="form-control"
            id={`player_${playerNumber}`}
            name={`player_${playerNumber}`}
          />
        </div>
      )
    })
    setFlags({...flags, sec_1: false, sec_2: false  })
    setInputElm( changeToReact )
  }
  const playGame = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    
    const infoPlayers: { [ key: string ]: string }[]  = []
    ;[].map.call( form.current?.querySelectorAll( '[type="text"]' ), (i) => {
      let inputDataAttr = ( i as HTMLInputElement )    
      const nameS: any = inputDataAttr.getAttribute( 'name' )
      infoPlayers.push({ namePlayer: inputDataAttr.value })
    })
    // toast.error('Llena todos los campos HDTPM!')
    console.log( infoPlayers )
    for( let players: any = 0; players < infoPlayers.length; players++ ){
      if( !infoPlayers[ players ][ 'namePlayer' ] ){
        toast.error( 'Llena todos los jugadores HDTPM!!!' )
        return 
      }
    }
    savePlayers( infoPlayers )
    setFlags({ ...flags, sec_3: false })
  }
  return (
    <>
      <div className="container pt-4">
        <div className="row d-flex flex-column">
          <div className={`col-12 ${!flags.sec_1 ? "d-none" : ""}`}>
            <section className="d-flex flex-column flex-wrap justify-content-center align-items-center">
              <H2 className="">Da click en el botón para agregar jugadores</H2>
              <div className="d-flex mt-3">
                <Button className="btn btn-light mx-4" onClick={addPlayer}>
                  Agrega Jugadores +
                </Button>
                <H2>
                  {playersNumber} {playersNumber > 1 ? "Jugadores" : "Jugador"}
                </H2>
                <Button className="btn btn-danger mx-4" onClick={deletePlayers}>
                  Elimina Jugadores -
                </Button>
              </div>
            </section>
          </div>
          <div
            className={`col-12 d-flex flex-column justify-content-center align-items-center ${
              !flags.sec_2 ? "d-none" : ""
            }`}
          >
            {playersNumber >= 2 ? (
              <>
                <H2 className="mt-5">
                  Tienes {playersNumber} Jugadores da click en aceptar para
                  elegir Nombres
                </H2>
                <Button
                  className="btn btn-success mt-4"
                  onClick={stepToChooseName}
                >
                  Aceptar
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
          <div className={`col-12 col-md-4 align-self-center ${!flags.sec_3 ? "d-none" : ""}`}>
            <form
              action=""
              className="d-flex justify-content-center align-items-center flex-column"
              ref={form}
            >
              {inputElm.length && (
                <h2 className="text-secondary">Elige nombres para jugar</h2>
              )}
              {inputElm}
              {inputElm.length && (
                <Button className="btn btn-primary mt-4" onClick={playGame}>
                  ¡Jugar!
                </Button>
              )}
            </form>
          </div>
          <div className="col-12">
              
          </div>
        </div>
      </div>
    </>
  )
}
const mapDispatchToProps = ( dispatch: any ) => {
  return {
    savePlayers: ( payload: object ) => dispatch({ type: 'PLAYERS_TO_PLAY', payload })
  }
}
const mapStateToProps = ( state: any ) => ({ state })
export default connect( mapStateToProps, mapDispatchToProps  )( FormSection )