import CartWidget from "./CartWidget"
import Logo from "../assets/logo.png"

const NavBar = () => {


  return (
    <nav className = "navbar" style= {{backgroundColor:'black' ,display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        
        <div className = "brand">
          <img src={Logo} alt="" width="150px" />
        </div>

        <ul style= {{display: 'flex', flexDirection: 'row' }}>
            <li style= {{listStyle: 'none', padding: '10px', color: 'white'}}>Inicio</li>
            <li style= {{listStyle: 'none', padding: '10px', color: 'white'}}>Servicios</li>
            <li style= {{listStyle: 'none', padding: '10px', color: 'white'}}>Contacto</li>
        </ul>

        <CartWidget/>
    </nav>
  )
}

export {NavBar}