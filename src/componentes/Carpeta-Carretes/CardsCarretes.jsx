import React from 'react'
import TarjetaCarrete from './TarjetaCarrete'




const CardsCarretes = ({carretes}) => {
  return (
    <div>

        {carretes.map ((carrete)=> <TarjetaCarrete key={carretes.id} carrete={carrete} /> )}
    </div>
  )
}

export default CardsCarretes