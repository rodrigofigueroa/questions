import React                    from 'react'
import { Routes, Route, Link }  from 'react-router-dom'
import styled                   from 'styled-components'
import Nav                      from './components/Nav'
import FormSection              from './Sections/FormSection'
import Questions                from './Sections/Questions'
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

function App() {
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
      </Nav>
      <Routes>
        <Route path='/' element={ <FormSection savePlayers={function (payload: any): {} {
          throw new Error('Function not implemented.')
        } } /> } />
        <Route path='/questions' element={ <Questions /> } />
      </Routes>
    </>
  )
}

export default App
