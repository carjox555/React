import React, { useState, useEffect } from 'react'

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);
    const [anterior, setAnterior]= useState(null);
    const [siguiente, setSiguiente]= useState(null);
    const [actual, setActual]= useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

    useEffect(() => {

        async function obtenerPokemons() {
            const response = await fetch(actual);
            const data = await response.json();

            console.log(data);
            setPokemons(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);

        }
        obtenerPokemons();
    }, [actual])

    return (
        <>
            <ul className='mt-3'>
                {pokemons.map((poks, index) => {
                    return <li key={index}>{poks.name}</li>
                })}
            </ul>

            <button className="btn btn-primary mx-1" onClick={()=>anterior !=null && setActual(anterior)}>Anteriores</button>
            <button className="btn btn-primary mx-1" onClick={()=>siguiente !=null && setActual(siguiente)}>Siguientes</button>

        </>
    )
}

export default Pokemons