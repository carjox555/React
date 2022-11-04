import React from 'react';
import CrudApp from './componentes/crud/CrudApp';
import './App.css';
import { Tarea } from './componentes/Tarea';

const App = () => {

  return (
    <div className="container">

      <CrudApp></CrudApp>
      <Tarea/>
    </div>

  );

}

export default App;
