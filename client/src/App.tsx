import React, { useState }      from 'react'
import { Routes, Route, Link }  from 'react-router-dom'
import styled                   from 'styled-components'
import Nav                      from './components/Nav'
import FormSection              from './Sections/FormSection'
import Questions                from './Sections/Questions'
import FormQuestions            from './Sections/FormQuestions'
import NotFound                 from './Sections/404'
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
`

function App() {
  const [ openNav, setOpenNav ] = useState('')
  return (
    <>
      <Nav>
        <Figure>
          <Img src="https://www.usmagazine.com/wp-content/uploads/2019/10/Kanye-West-Mental-Health.jpg" alt="" />
        </Figure>
        <Div>
          <Link to="/">
            Home
          </Link>
          <Link to="/questions">
            preguntas
          </Link>
          <Link to="/formulario">
            Formulario
          </Link>
        </Div>
        <BtnI className="fa fa-angle-up"  onClick={ () => { console.log('dsdsd') }}/>
      </Nav>
      <Routes>
        <Route path='/' element={ <FormSection savePlayers={function (payload: any): {} {
          throw new Error('Function not implemented.')
        } } /> } />
        <Route path='/questions' element={ <Questions /> } />
        <Route path='/formulario' element={ <FormQuestions /> } />
        <Route path='*' element={ <NotFound /> }/>
      </Routes>
    </>
  )
}

export default App
