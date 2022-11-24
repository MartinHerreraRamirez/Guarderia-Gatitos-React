import React from 'react';
import PropTypes from 'prop-types'

const Guarderia = ({nuevoGatito, eliminarGatito}) => {

    const { propietario, nombre, edad, color} = nuevoGatito

    return ( 
        <div className='guarderia'>
            
            <div><b>Propietario:</b> {propietario}</div>
            <div><b>Nombre:</b> {nombre}</div>
            <div><b>Edad:</b> {edad}</div>
            <div><b>Color:</b> {color}</div>        

            
            <button
            className='eliminar'
            onClick={() => eliminarGatito(nuevoGatito.id)}
            >Eliminar Gatito &times;</button>
                     
        </div>
     );
}

Guarderia.propTypes = {
    nuevoGatito: PropTypes.object.isRequired,
    eliminarGatito: PropTypes.func.isRequired
}
 
export default Guarderia;