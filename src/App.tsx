import React  from 'react';
import Button             from './components/Button';
import Nav                from './components/Nav';
import logo               from './logo.svg'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Nav>
        <Button>
          Home
        </Button>
      </Nav>
      
    </>
  );
}

export default App;
