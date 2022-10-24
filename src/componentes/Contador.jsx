import React from 'react'
import { useState } from 'react';

const Contador = () => {


    const [contador, setContador] = useState(0)
    const aumentar = () => {
        setContador(contador +1);  //setContador nombre que ud quiera 
        console.log(contador);
    };
    return (
        <>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button className="btn btn-dark" onClick={aumentar}>
                Aumentar
            </button>
        </>
    );
};

export default Contador;