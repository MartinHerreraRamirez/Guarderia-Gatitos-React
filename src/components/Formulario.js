import React, {useState} from 'react'
import {v4} from 'uuid'
import PropTypes from 'prop-types'

const Formulario = ({sumarGatito}) => {

    const [error, setError] = useState(false)
    
    const [gatito, setGatito] = useState({
        propietario: '',
        nombre: '',
        edad: '',
        color: ''
    })

    const datosGatito = (e) => {
        setGatito({
            ...gatito,
            [e.target.name]: e.target.value
        })
    }

    const { propietario, nombre, edad, color } = gatito

    const agregarGatito = (e) => {
        e.preventDefault()

        if(propietario.trim() === '' || nombre.trim() === '' || edad.trim() === '' || color.trim() === ''){
            setError(true)
            return
        }
        setError(false)

        gatito.id = v4()

        sumarGatito(gatito)

        setGatito({
            propietario: '',
            nombre: '',
            edad: '',
            color: ''
        })

    }

    return (        

        <form
            onSubmit={agregarGatito}
        >
            {error
            ? <p className='alert-danger error alert p '>Todos los campos son obligatorios</p>
            : null
            }

            <label>Propietario:</label>
            <input 
                type='text'
                name='propietario'
                value={propietario}
                placeholder='Nombre Propietario'
                className='campo u-full-width'
                onChange={datosGatito}
            />

            <label>Nombre:</label>
            <input
                type='text'
                name='nombre'
                value={nombre}
                placeholder='Nombre Gatito'
                className='campo u-full-width'
                onChange={datosGatito}
            />

            <label>Edad:</label>
            <input 
                type='number'
                name='edad'
                value={edad}
                placeholder='Edad Gatito'
                className='campo u-full-width'
                onChange={datosGatito}
            />

            <label>Color:</label>
            <input
                type='text'
                name='color'
                value={color} 
                placeholder='Color Gatito'
                className='campo u-full-width'
                onChange={datosGatito}
            />

            <button                
                type='submit'
                className='boton button-primary u-full-width'
            >Ingresar a Guarderia</button>
        </form>
     
    );
}

Formulario.propTypes = {
    sumarGatito: PropTypes.func.isRequired
}
 
export default Formulario;