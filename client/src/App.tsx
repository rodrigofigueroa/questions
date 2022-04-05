import React, { Profiler, useState }      from 'react'
import { Routes, Route, Link }  from 'react-router-dom'
import styled                   from 'styled-components'
import Nav                      from './components/Nav'
import FormSection              from './Sections/FormSection'
import Questions                from './Sections/Questions'
import FormQuestions            from './Sections/FormQuestions'
import NotFound                 from './Sections/404'
import Profile                  from './Sections/Profile'
import logo                     from './logo.svg'

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

function App() {
  const [ openNav, setOpenNav ] = useState( true )
  return (
    <>
    
      <Nav open={ openNav }>
        <Figure>
          <Img src="https://www.usmagazine.com/wp-content/uploads/2019/10/Kanye-West-Mental-Health.jpg" alt="" />
        </Figure>
        <Div>
          <Link to="/">
            ¡Juega!
          </Link>
          <Link to="/preguntas">
            preguntas
          </Link>
          <Link to="/formulario">
            Formulario
          </Link>
          <Link to="/perfil">
            Perfil
          </Link>
        </Div>
      </Nav>
      <div style={{ position: 'relative'}}>
        <BtnI className={`fa ${ openNav ? 'fa-angle-up': 'fa-angle-down'}`}  
          onClick={ () => { setOpenNav( !openNav )} }/>
      </div>
      <Routes>
        <Route path='/' element={ <FormSection savePlayers={function (payload: any): {} {
          throw new Error('Function not implemented.')
        } } /> } />
        <Route path='/preguntas' element={ <Questions /> } />
        <Route path='/formulario' element={ <FormQuestions /> } />
        <Route path='/perfil' element={ <Profile /> } />
        <Route path='*' element={ <NotFound /> }/>
      </Routes>
    </>
  )
}

export default App
