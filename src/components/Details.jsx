import React, { useEffect } from 'react'
import Card from './Card'
import { Link, useParams } from 'react-router-dom'
import { useDataValue } from '../context/DataContext'
import { BsArrowLeftShort } from "react-icons/bs";


const Details = () => {
  const [{ data }] = useDataValue()
  const { identificador } = useParams()

  
  const detalle = data.find(item => item.id.toString() === identificador.toString())
  const paso = data.indexOf(detalle)


  return (
    <div className='details'>
      <Link to='/'><div className='flex-center bold'><BsArrowLeftShort />volver</div></Link>
      <Card key={detalle.id} {...detalle} />
      <div className="details__links__bot">
        {
          paso - 1 >= 0
            ? <Link to={`/details/${data[paso - 1].id}`}>Anterior</Link>
            : <Link to='/'>Volver</Link>
        }
        {
          paso + 1 <= data.length - 1
            ? <Link to={`/details/${data[paso + 1].id}`}>Siguiente</Link>
            : <Link to='/'>Terminar</Link>
        }
      </div>
    </div>
  )
}

export default Details