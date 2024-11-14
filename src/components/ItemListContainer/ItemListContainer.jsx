import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore"; // Aquí están las importaciones correctas

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });

        setProducts(productsDb);
      });
  };

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products");
    const queryCategories = query(
      productsRef,
      where("category", "==", idCategory)  // Aquí filtras por categoría
    );
    getDocs(queryCategories)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });

        setProducts(productsDb);
      });
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
