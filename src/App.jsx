import React from 'react';
import Pokemons from './componentes/Pokemons';
import './App.css';
//import Contador from './componentes/Contador';
//import ListaName from './componentes/ListaName';

const App = () => {

  // const saludo = "Saludo"

  // const classObjeto = {
  //   primary: "text-primary",
  //   danger: "text-danguer",
  // };


  // const funclick = () => {
  //   console.log("click desde function")
  // }
  return (
    <div className="container">

      {/* <button className='btn btn-primary'
        onClick={() => funclick("carjox")}>on click
      </button>*/}
      {/* <Contador/>  */}
      {/* <ListaName/> */}
      <Pokemons></Pokemons>
    </div>

  );

}

export default App;
