import RigthSideBar from './components/rigthSideBar';
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App" id="outer-container">
      <div id="page-wrap">
        <h1>Esta es la pagina pricipal.</h1>
        <h2>Este es el subtitulo.</h2>
        <RigthSideBar></RigthSideBar>
      </div>
    </div>
  );
}

export default App;
