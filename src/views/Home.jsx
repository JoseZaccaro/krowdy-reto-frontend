import React from 'react'
import Card from '../components/Card'
import { useDataValue } from '../context/DataContext'
import { Link } from 'react-router-dom'
const Home = () => {
  const [{ data }] = useDataValue()
  
  return (
    <div className='home'>
      <h1>Video Cuestionario</h1>
      <section>
        {data.map((item, index) => {
          return <Link to={`/details/${item.id}`} key={index}><Card {...item} /></Link>
        })}
      </section>
    </div>
  )
}

export default Home