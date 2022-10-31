import React, { useState } from 'react'

const ListaName = () => {
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const guardar = () => {
        setNombres([...nombres, nombre]);
        setNombre("");
    }

    return (
        <div>
            <p>Ingresa Nombre: </p>
            <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value)}}/> 
            <button onClick={guardar}>Send</button>
            <ul>
                {
                    nombres.map((elemento, index)=>{
                        return <li key={index}> {elemento}</li>
                    })

                };
            </ul>
        </div>
    )
}

export default ListaName