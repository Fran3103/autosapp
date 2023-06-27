import React from 'react'
import Card from './Card';


const Cards = ({autos}) => {
  return (
    <div>
        <h2>Autos</h2>

        <div className='Tarjetas'>
            {autos.map((auto) => < Card key={auto.id} autos={auto} />) }

        </div>
    </div>
  )
}

export default Cards