import { NavBar } from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer saludo= {"Bienvenidos a Nexus Barber"}/>
      <ItemListContainer servicios= {"Corte de pelo: $5.000"}/>
      <ItemListContainer servicios= {"Barba: $800"}/>
      <ItemListContainer servicios= {"Cejas: $500"}/>
    </div>
  )
}

export default App
