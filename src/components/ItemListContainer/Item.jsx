import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
      <div style={{padding: "50px"}}>
        <img src={product.image} className="img-item" alt="" width={300} />
        <p className="text-item">{product.name}</p>
        <p className="text-item">${product.price}</p>

        <Link style={{textDecoration:"none", color: "black", fontWeight:"bolder"}} to={"/detail/" + product.id}>Ver Detalle</Link>
        
      </div>
    )
  }
  export default Item