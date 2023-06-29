import React from 'react'
import Card from './Card';


const Cards = ({autos, titulo }) => {
  return (
    <div>
        <h2> {titulo}</h2>

        <div className='Tarjetas'>
            {autos.map((auto) => < Card key={auto.id} autos={auto} />) }

        </div>
    </div>
  )
}

export default Cards