import { NavBar } from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="container-app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer saludo= {"Bienvenidos a Nexus Barber"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Nexus Barber "}/>} ></Route>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} ></Route>
        
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
