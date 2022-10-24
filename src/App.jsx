import React from 'react';
import Frutas from "./componentes/Frutas"
import Contador from "./componentes/Contador"
//import logo from './logo.svg';
import './App.css';

const App = () => {

  const saludo = "Saludo"

  const classObjeto = {
    primary: "text-primary",
    danger: "text-danguer",
  };

  const user = true
  const saludoWelcome =()=>{
    return <h2 className="text-primary">Holaa</h2>
  };
  const saludoDespedi=()=>(
    <h2 className='text-danger'>Adios</h2>
  );

  const frutas=["🍎","🍌","🍔","🍬"];

  const funclick=()=>{
 console.log("click desde function")
  }
  return (
    <div className="container">
      <p className={classObjeto.primary}>Primer Componente {saludo}</p>

      {user ? <saludoWelcome/> : <saludoDespedi/>}

         <Frutas frutasAp={frutas}/>
         <Contador/>
    
      <button className='btn btn-primary' 
      onClick={()=>funclick("carjox")}>on click
      </button>
    </div>

  );

}

export default App;
