import React from 'react';
import logo from './logo.svg';
import './App.css';

const App=() =>{

  const saludo="Saludo"

  const classObjeto={
    primary:"text-primary",
    danger:"text-danguer",
  };
  return (
    <div className={classObjeto.primary}>Primer Componente  creado{saludo}</div>
  );
}

export default App;
