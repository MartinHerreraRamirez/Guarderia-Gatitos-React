import React,  {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Guarderia from './components/Guarderia';


function App() {

  let guarderiaInicial = JSON.parse(localStorage.getItem('guarderia'))
  if(!guarderiaInicial){
    guarderiaInicial = []
  }

  const [guarderia, setGuarderia] = useState(guarderiaInicial)

  useEffect( () => {
    const guarderiaInicial = JSON.parse(localStorage.getItem('guarderia'))

    if(guarderiaInicial){
      localStorage.setItem('guarderia', JSON.stringify(guarderia))
    } else {
      localStorage.setItem('guarderia', JSON.stringify([]))
    }
  }, [guarderia])

  const sumarGatito = (gatito) => {    
    setGuarderia([
      ...guarderia,
      gatito
    ])
  }

  const eliminarGatito = (id) =>{
    const nuevoListado = guarderia.filter( guarderia => guarderia.id !== id)
    setGuarderia(nuevoListado)    
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Guarderia de Gatitos</h1>
        
        <div className='u-full-width'>
          <Formulario
            sumarGatito={sumarGatito} 
          />
        </div>

        <div className='u-full-width'>
          {guarderia.length === 0 ? <h1>Listado Vacio</h1> : <h1>Listado</h1>}
          {guarderia.map( nuevoGatito => (
            <Guarderia
              key={nuevoGatito.id}
              nuevoGatito={nuevoGatito}
              guarderia={guarderia}
              eliminarGatito={eliminarGatito} 
            />))}
        </div>
    
      </div>
    </Fragment>
  );
}

export default App;
