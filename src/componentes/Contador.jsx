import React from 'react'
import { useState, useEffect } from 'react';

const Contador = () => {


    const [contador, setContador] = useState(0);
    console.log("antes de use");
    useEffect(()=>{
        console.log("use efec")

    });
    console.log("depues ");

    // const aumentar = () => {
    //     setContador(contador +1);  //setContador nombre que ud quiera 
    //     // console.log(contador);
    // };
    // const disminur = () => {
    //     setContador(contador -1);  //setContador nombre que ud quiera 
    // };
    // const reset = () => {
    //     setContador(0);  //setContador nombre que ud quiera 
    // };
    return (
        <>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button className="btn btn-dark" onClick={aumentar}> Aumentar </button>
            <button className="btn btn-dark" onClick={disminur}> Disminuir </button>
            <button className="btn btn-dark" onClick={reset}> Reset </button>
        </>
    );
};

export default Contador;