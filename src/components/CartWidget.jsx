import iconCart from "../assets/cartWidget.png"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  const quantity = totalQuantity()

  return (
  
    <Link  style= {{display: 'flex'}} to="/cart">
        <img src={iconCart} width={50} alt="" />
        <p style= {{color: 'white', display: 'flex', alignItems: 'center', margin: '10px'}}>{quantity >= 1 ? quantity : ""}</p>
    </Link>
  )
}

export default CartWidget