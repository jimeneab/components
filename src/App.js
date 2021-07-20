import RigthSideBar from './components/rigthSideBar';
import CheckBoxForm from './components/checkboxform';
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App" id="outer-container">
      <RigthSideBar> </RigthSideBar>
      <div id="page-wrap">
        <h1>Esta es la pagina pricipal.</h1>
        <h2>Este es el subtitulo.</h2>
        <CheckBoxForm></CheckBoxForm>
      </div>
    </div>
  );
}

export default App;
