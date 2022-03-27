import React              from 'react';
import { Routes, Route }  from 'react-router-dom';
import Button             from './components/Button';
import Nav                from './components/Nav';
import FormSection        from './Sections/FormSection';
import Questions          from './Sections/Questions';
import logo               from './logo.svg'

function App() {
  return (
    <>
      <Nav>
        <Button>
          Home
        </Button>
      </Nav>
      <Routes>
        <Route path='/' element={ <FormSection /> } />
        <Route path='/questions' element={ <Questions /> } />
      </Routes>
    </>
  );
}

export default App;
