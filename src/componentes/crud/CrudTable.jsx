import React from 'react'

const CrudTable = ({productos}) => {
    return <>
        <h3>Productos actuales</h3>
        <table className='table '>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Producto</td>
                    <td>Valor</td>
                    <td>Actions</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    productos.length === 0 ? <tr><td>No hay datos</td></tr>
                        : productos.map((producto, index) => {
                            return <tr key={index}>
                                <td>{producto.id}</td>
                                <td>{producto.producto}</td>
                                <td>{producto.valor}</td>
                                <td>
                                    <input className='btn btn-warning mx-1' type="submit" value="Editar" />
                                    <input className='btn btn-danger mx-1' type="submit" value="Eliminar" />
                                    {/* <button className='btn btn-outline-warning mx-1'
                                        onClick={() => setEditData(producto)}>Editar</button>
                                    <button className='btn btn-outline-danger mx-1'
                                        onClick={() => deleteEquipo(equipo.id)}>Eliminar</button> */}
                                </td>
                            </tr>
                        })
                }
            </tbody>
        </table>
    </>
}

export default CrudTable