import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"



const ItemListContainer = ( {saludo} ) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()


  useEffect(() => {
    getProducts()
    .then((data)=>{
      if(idCategory){
        const filterProducts = data.filter((product) => product.category===idCategory)
        setProducts(filterProducts)
      }
      else{
        setProducts(data)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      console.log("Finalizo la promesa")
    })
  }, [idCategory])


   return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  )
}



export default ItemListContainer