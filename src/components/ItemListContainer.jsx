const ItemListContainer = ( { saludo, servicios } ) => {
  return (
    <div>
        <h2 style= {{margin: '20px'}}>{saludo}</h2>
        <p style= {{margin: '20px'}}>{servicios}</p>
    </div>
  )
}

export default ItemListContainer