import iconCart from "../assets/cartWidget.png"



const CartWidget = () => {
  return (
    <div style= {{display: 'flex'}}>
        <img src={iconCart} width={50} alt="" />
        <p style= {{color: 'white', display: 'flex', alignItems: 'center', margin: '10px'}}>1</p>
    </div>
  )
}

export default CartWidget