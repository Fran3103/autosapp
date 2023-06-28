




const Detalle = ({detalle}) => {
  return (
    <div>
        <div className='contenedorCard'>

            <img src={detalle.imagen} className='img' alt={detalle.titulo} /> 
            <div className='cardTexto'>
                <h3>{detalle.titulo}</h3>
                <p>
                    {detalle.descripcion}
                </p>
                <p>$ {detalle.precio}</p>
                <p>Marca <br />{detalle.categoria}</p>
            </div>
        </div>
    </div>
  )
}

export default Detalle