import React from 'react'
import TarjetaCarrete from './TarjetaCarrete'




const CardsCarretes = ({carretes}) => {
  return (
    <div className='cardCarretes'>

        {carretes.map ((carrete)=> <TarjetaCarrete key={carrete.id} carrete={carrete} /> )}
    </div>
  )
}

export default CardsCarretes