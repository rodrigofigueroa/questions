import { useEffect, useRef, useState }                      from "react"
import { connect }                                          from 'react-redux'
import { toast }                                            from "react-toastify"
import { ButtonTypeEventT, playersObjectI, playersReduxI }  from "../../interfaces"
import { questions, randomNumber }                          from "./gameFunctions"
import BtnBig                                               from "../../components/BtnBig"
import Button                                               from "../../components/Button"
import H2                                                   from "../../components/H2"
import H3                                                   from "../../components/H3"



const FormSection = ( { savePlayers, auth }: playersReduxI ) => {
  const [ playersState, setPlayersState ]     = useState<playersObjectI[]>([])
  const [ playersNumber, setPlayersNumber ]   = useState( 0 )
  const [ inputElm, setInputElm ]             = useState<JSX.Element[]>([])
  const [ flags, setFlags ]                   = useState({ sec_1: true, sec_2: true, sec_3: true, sec_4: false })
  const form                                  = useRef<HTMLFormElement>( null )
  const [ choosePlayer, setChoosePlayer ]     = useState<string | null>( '' )
  const [ chooseQuestion, setChooseQuestion ] = useState<string | null>( '' )


  useEffect(() => {
    setPlayersNumber(  playersState.length )
  }, [ playersState, inputElm, choosePlayer ] )

  const addPlayer = ( e: ButtonTypeEventT ) => {
    e.preventDefault()
    let addingArray = [ ...playersState, { playerName: '', playerNumber: playersState.length + 1 }]
    setPlayersState( addingArray )
  }
  const deletePlayers = ( e: ButtonTypeEventT ) => {
    e.preventDefault()
    let addingArray = [ ...playersState ]
    addingArray.pop()
    setPlayersState( addingArray )
  }
  const stepToChooseName = ( e: ButtonTypeEventT ) => {
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
    setFlags({...flags, sec_1: false, sec_2: false, sec_3: true  })
    setInputElm( changeToReact )
  }
  const playGame = ( e: ButtonTypeEventT ) => {
    e.preventDefault()
    
    const infoPlayers: { [ key: string ]: string }[]  = []
    ;[].map.call( form.current?.querySelectorAll( '[type="text"]' ), (i) => {
      let inputDataAttr = ( i as HTMLInputElement )    
      infoPlayers.push({ namePlayer: inputDataAttr.value })
    })
    for( let players: any = 0; players < infoPlayers.length; players++ ){
      if( !infoPlayers[ players ][ 'namePlayer' ] ){
        toast.error( 'Llena todos los jugadores HDTPM!!!' )
        return 
      }
    }
    savePlayers( infoPlayers )
    setFlags({ ...flags, sec_3: false, sec_4: true })
  }  
  const killPlayer = ( e: ButtonTypeEventT ) => {
    e.preventDefault()
    let numberOfPlayers = auth?.players ? auth?.players.length - 1 : 0,
        playerSelected  = auth?.players.length
        ? auth?.players[randomNumber(numberOfPlayers)]?.namePlayer
        : "",
        chooseQuestion  = ( questions.length === 0 ) ? 0 : ( questions.length - 1 )
    setChoosePlayer( null )
    setChooseQuestion( null )
    setTimeout(() => {
      setChoosePlayer( ( playerSelected as string ) )
    }, 1000 )
    setTimeout(() => {
      setChooseQuestion( questions[ randomNumber( chooseQuestion )] )
    }, 1000 )
  }
  const returnToAddPlayers = ( e: ButtonTypeEventT ) => {
    e.preventDefault()
    console.log( e )
    setFlags({...flags, sec_1: true, sec_2: true, sec_3: false  })
  }

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex flex-column">
          <div className={`col-12 ${!flags.sec_1 ? "d-none" : ""}`}>
            <section className="d-flex flex-column flex-wrap justify-content-center align-items-center">
              <H2 className="text-center">Da click en el botón para agregar jugadores</H2>
              <div className="d-flex mt-3 flex-column flex-md-row justify-content-center align-items-center mt-5">
                <Button className="btn btn-light mx-4" onClick={addPlayer}>
                  Agrega Jugadores +
                </Button>
                <H2 className="my-4">
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
                <H2 className="mt-5 text-center">
                  Tienes {playersNumber} Jugadores da click en aceptar para
                  elegir Nombres
                </H2>
                <Button
                  className="btn btn-success mt-4 btn-lg"
                  onClick={stepToChooseName} >
                  Aceptar
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className={`col-12 col-md-4 align-self-center ${
              !flags.sec_3 ? "d-none" : ""
            }`}
          >
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
                <>
                <Button className="btn btn-primary mt-4 btn-lg" onClick={playGame}>
                  ¡Jugar!
                </Button>
                <Button
                  className="btn btn-light mt-4 btn-lg"
                  onClick={ returnToAddPlayers }
                  >
                  Regresar
                </Button>
                </>                
              )}
            </form>
          </div>
          <div
            className={`col-12 d-flex align-items-center flex-column ${
              !flags.sec_4 ? "d-none" : ""
            }`}
          >
            <BtnBig onClick={killPlayer}>
              <i className="fas fa-skull-crossbones"></i>
            </BtnBig>
            <section className="mt-5">
              <H2 className="mt-5 text-center">
                {
                  choosePlayer ? `Jugador Seleccionado es: ${ choosePlayer }` : 'Cargando...'
                }
              </H2>
              <H3 className="mt-5">{
                chooseQuestion ? chooseQuestion : 'Cargando...'
              }</H3>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
const mapDispatchToProps = ( dispatch: any ) => ({
  savePlayers: ( payload: object ) =>
    dispatch({ type: "PLAYERS_TO_PLAY", payload }),
})
const mapStateToProps = ( state: any ) =>  state 
export default connect( mapStateToProps, mapDispatchToProps  )( FormSection )