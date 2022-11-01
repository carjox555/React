import React from 'react'
import { useState } from 'react';

const CrudForm = ({addProducto}) => {

    //Variable de estado con objeto
    const [formData, setFormData] = useState({
        producto: '',
        valor: '',
        id: null
    })
    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que se recarga la pagina

        if (formData.producto !== '' && formData.valor !== '') {
            formData.id = Math.floor(Math.random() * 100)
            addProducto(formData)
            setFormData({
                producto: '',
                valor: '',
                id: null
            })
        }else{
            alert('Por favor agrega producto y valor')
        }
    }

    const handChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return <>
        <form className='m-3' onSubmit={handleSubmit}>
            <label htmlFor="producto">Producto</label>
            <input type="text" name='producto' onChange={handChange} value={formData.producto}/>
            <label htmlFor="valor">valor</label>
            <input type="text" name='valor' onChange={handChange} value={formData.valor} />
            <input className='btn btn-success mx-1' type="submit" value="Agregar" />
            <input className='btn btn-danger mx-1' type="reset" value="Cancelar" />
        </form>
    </>
}

export default CrudForm