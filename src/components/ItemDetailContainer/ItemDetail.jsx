import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ product }) => {

  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = {...product, quantity: count}

    addProductInCart(productCart)
  }


  return (
    <div style = {{ display: "flex" }}>
        <img src={product.image} width={500} alt="" />
        <div>
            <h2>{product.name}</h2> 
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <ItemCount stock = {product.stock} addProduct={addProduct}/>
        </div>
    </div>
  )
}

export default ItemDetail