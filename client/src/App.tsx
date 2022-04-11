import { useEffect, useState }             from 'react'
import { Routes, Route, Link }  from 'react-router-dom'
import { connect }              from 'react-redux'
import styled                   from 'styled-components'
import Nav                      from './components/Nav'
import FormSection              from './Sections/FormSection'
import Questions                from './Sections/Questions'
import FormQuestions            from './Sections/FormQuestions'
import NotFound                 from './Sections/404'
import Profile                  from './Sections/Profile'
import logo                     from './logo.svg'
import { ATypeEventT } from './interfaces'

const Div = styled.div`
  @media screen and (max-width:480px){
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

const Figure = styled.figure`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 100%;
`

const Img = styled.img`
  width: 150%;
  transform: translateX(-40px);
`
const BtnI = styled.button`
  position: absolute;
  right: 0;
  bottom: -36px;
  background-color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  transition: .5s all ease;
`
interface logUserI {
  auth?: {
    log?: {
      token?: string,
      user?: {}
    }
  },
  logOutUser: ( payload: any ) => void
}
function App( { logOutUser, auth }: logUserI ) {
  const [ openNav, setOpenNav ] = useState( true )
  const [ logOrNot, setLogOrNot ] = useState( true )

  const logOut = ( e: ATypeEventT ) => {
    e.preventDefault()
    console.log( e )
    window.localStorage.removeItem( 'auth' )
    logOutUser( null )
  }
  useEffect(() => {
    if( !auth?.log?.hasOwnProperty( 'user' ) ){
      setLogOrNot( !logOrNot )
    }else{
      setLogOrNot( !logOrNot )
    }
  }, [ auth ])
  return (
    <>
      <Nav open={openNav}>
        <Figure>
          <Img
            src="https://www.usmagazine.com/wp-content/uploads/2019/10/Kanye-West-Mental-Health.jpg"
            alt=""
          />
        </Figure>
        <Div>
          <Link to="/">¡Juega!</Link>
          <Link to="/preguntas">preguntas</Link>
          <Link to="/formulario">Formulario</Link>
          { logOrNot && <Link to="/perfil">Perfil</Link> }
          { !logOrNot && <a onClick={logOut}>Cerrar</a> }
        </Div>
      </Nav>
      <div style={{ position: "relative" }}>
        <BtnI
          className={`fa ${openNav ? "fa-angle-up" : "fa-angle-down"}`}
          onClick={() => {
            setOpenNav(!openNav)
          }}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <FormSection
              savePlayers={function (payload: any): {} {
                throw new Error("Function not implemented.")
              }}
            />
          }
        />
        <Route path="/preguntas" element={<Questions />} />
        <Route path="/formulario" element={<FormQuestions />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
const mapStateToProps = ( state: any ) => state
const mapDispatchToProps = ( dispatch: any  ) => {
  return {
    logOutUser: ( payload: null ) => dispatch({ type: 'LOG_OUT_USER', payload })
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( App )
