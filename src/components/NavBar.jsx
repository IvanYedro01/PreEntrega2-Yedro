import CartWidget from "./CartWidget"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <nav className = "navbar" style= {{backgroundColor:'black' ,display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        
        <div className = "brand">
          <Link to="/"><img src={Logo} alt="" width="150px" /></Link>
        </div>

        <ul style= {{display: 'flex', flexDirection: 'row' }}>
            <li style= {{listStyle: 'none', padding: '10px', color: 'white'}}>
              <Link style={{textDecoration: "none", color: "white"}} to ="/category/products"> Productos </Link>
            </li>
            <li style= {{listStyle: 'none', padding: '10px', color: 'white'}}>
              <Link style={{textDecoration: "none", color: "white"}} to="/category/services"> Servicios </Link>
            </li> 
            <li style= {{listStyle: 'none', padding: '10px', color: 'white'}}>
              <Link style={{textDecoration: "none", color: "white"}} to= "/category/designs"> Diseños </Link>
            </li>
        </ul>

        <CartWidget/>
    </nav>
  )
}

export {NavBar}