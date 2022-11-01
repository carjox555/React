import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const baseDatos = [
    { id: 1, producto: 'Jabon', valor: 3000 },
    { id: 2, producto: 'Fab', valor: 2000 },
    { id: 3, producto: 'Arroz', valor: 1800 },
    { id: 4, producto: 'Aceite', valor: 4500 },
]

const CrudApp = () => {

    const [productos, setProductos] = useState(baseDatos);
  //Insercion de datos
    const addProduct = (producto) => {
        setProductos([
            ...productos,
            producto
        ])
    }

    return <>
        <h2>Agregar Products</h2>
        {/* Formulario */}
        <CrudForm addProduct={addProduct} />
        {/* Mostrar Informacion */}
        <CrudTable productos={productos} />




    </>
}

export default CrudApp