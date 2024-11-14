import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import db from "../../db/db.js"
import { doc,getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [product, setProduct]  = useState({})
  const { idProduct } = useParams()

  const getProductById = () =>{
    const docRef = doc(db, "products" , idProduct)
    getDoc(docRef)
      .then((dataDb) =>{
        const productDb = {id: dataDb.id, ...dataDb.data()}

        setProduct(productDb)
      })
  }

    useEffect( ()=> {
        getProductById()
    }, [idProduct])
  


  return (
    <ItemDetail product = {product}/>
  )
}

export default ItemDetailContainer
