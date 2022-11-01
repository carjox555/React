import React from 'react';
//import Pokemons from './componentes/Pokemons';
import CrudApp from './componentes/crud/CrudApp';
import './App.css';
//import Referencia from './componentes/Referencia';
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
      {/* <Contador/> */}
      {/* <hr />
      <ListaName/>
      <Pokemons></Pokemons>
      <hr />
      <Referencia/> */}
      <CrudApp></CrudApp>
    </div>

  );

}

export default App;
